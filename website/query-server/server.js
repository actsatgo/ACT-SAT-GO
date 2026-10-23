import 'dotenv/config';
import express from 'express';
import cors from 'cors';
import fs from 'fs';
import path from 'path';
import crypto from 'crypto';
import dns from 'dns';
import { fileURLToPath } from 'url';
import { MongoClient } from 'mongodb';

// Configure DNS resolver to use reliable public servers first. This prevents 
// querySrv ECONNREFUSED issues on networks with problematic local DNS setups.
try {
  dns.setServers(['8.8.8.8', '8.8.4.4']);
} catch (e) {
  console.warn('Warning: Could not configure custom DNS servers:', e.message);
}


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.PORT || 5005;

// ─── MongoDB configuration (credentials come from .env) ───────────────────────
const MONGODB_URI = process.env.MONGODB_URI;
const MONGODB_DB = process.env.MONGODB_DB || 'actsatgo';
if (!MONGODB_URI) {
  console.error('✗ MONGODB_URI is not set. Create a .env file (see .env.example).');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);
let leads = null; // the "leads" collection, set on connect
let jobsCollection = null; // the "jobs" collection
let blogsCollection = null; // the "blogs" collection
let reviewsCollection = null; // the "googleReviews" collection
let settingsCollection = null; // small key/value docs (e.g. last Google sync)

async function connectDb() {
  await client.connect();
  const db = client.db(MONGODB_DB);
  leads = db.collection('leads');
  jobsCollection = db.collection('jobs');
  blogsCollection = db.collection('blogs');
  reviewsCollection = db.collection('googleReviews');
  settingsCollection = db.collection('settings');

  // Unique business id + fast sort by date
  await leads.createIndex({ id: 1 }, { unique: true });
  await leads.createIndex({ createdAt: -1 });
  
  await jobsCollection.createIndex({ id: 1 }, { unique: true });
  await jobsCollection.createIndex({ createdAt: -1 });

  await blogsCollection.createIndex({ id: 1 }, { unique: true });
  await blogsCollection.createIndex({ createdAt: -1 });

  await reviewsCollection.createIndex({ id: 1 }, { unique: true });
  await settingsCollection.createIndex({ id: 1 }, { unique: true });

  console.log(`✓ Connected to MongoDB → ${MONGODB_DB}.leads, jobs, blogs`);
  await seedFromJsonIfEmpty();
  await seedJobsAndBlogsIfEmpty();
  await seedReviewsIfEmpty();
}

async function seedJobsAndBlogsIfEmpty() {
  try {
    const hasOldJobs = await jobsCollection.findOne({ title: 'SAT/ACT Mentor' });
    const hasOldTypes = await jobsCollection.findOne({ type: 'Full-time / Part-time' });
    if (hasOldJobs || hasOldTypes) {
      console.log('Old jobs or types found in MongoDB. Wiping and re-seeding with updated list...');
      await jobsCollection.deleteMany({});
    }

    if ((await jobsCollection.countDocuments()) === 0) {
      const defaultJobs = [
        {
          id: 'job_1',
          dept: 'Academics',
          title: 'SAT / ACT Tutor (Math)',
          location: 'Remote (Global)',
          type: 'Freelancer',
          desc: 'Guide students to master math concepts, ace standardized tests and achieve their dream scores.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_2',
          dept: 'Academics',
          title: 'SAT/ACT Tutor (Verbal)',
          location: 'Remote (Global)',
          type: 'Freelancer',
          desc: 'Help students excel in Reading & Writing sections of SAT and ACT with proven strategies.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_3',
          dept: 'Academics',
          title: 'AP Calculus',
          location: 'Remote (Global)',
          type: 'Freelancer',
          desc: 'Teach AP Calculus AB/BC, preparing high school students for top AP scores.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_4',
          dept: 'Academics',
          title: 'AP Biology',
          location: 'Remote (Global)',
          type: 'Freelancer',
          desc: 'Deliver comprehensive coaching in AP Biology concepts and experimental design.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_5',
          dept: 'Academics',
          title: 'AP Computer Science',
          location: 'Remote (Global)',
          type: 'Freelancer',
          desc: 'Help students master coding, algorithms, and AP Computer Science exam topics.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_6',
          dept: 'Operations',
          title: 'Operations Manager',
          location: 'Remote (Global)',
          type: 'Full-time',
          desc: 'Oversee daily operations, optimize scheduling, and manage coordinator teams.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_7',
          dept: 'Student Success',
          title: 'Student Success Specialist',
          location: 'Remote (Global)',
          type: 'Full-time',
          desc: 'Support student academic journeys, coordinate between parents and mentors.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_8',
          dept: 'Student Success',
          title: 'Student Success Executive',
          location: 'Remote (Global)',
          type: 'Full-time',
          desc: 'Manage onboarding, build parent relationships, and ensure high student satisfaction.',
          createdAt: new Date().toISOString()
        },
        {
          id: 'job_9',
          dept: 'Operations',
          title: 'Assessment and Testing Coordinator',
          location: 'Remote (Global)',
          type: 'Full-time',
          desc: 'Schedule and coordinate practice tests, analyze student performance metrics.',
          createdAt: new Date().toISOString()
        }
      ];
      await jobsCollection.insertMany(defaultJobs);
      console.log('✓ Seeded default jobs in MongoDB');
    }
    
    if ((await blogsCollection.countDocuments()) === 0) {
      const defaultBlogs = [
        {
          id: 'blog_1',
          tag: 'STUDY TIPS',
          title: '10 Proven Study Habits That Actually Work',
          text: 'Simple habits that can transform the way you study and help you retain more information for tests.',
          image: '',
          date: 'June 5, 2025',
          read: '5 min read',
          tags: ['study tips', 'study strategies'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'blog_2',
          tag: 'SAT',
          title: 'Digital SAT vs Paper SAT: Key Differences',
          text: 'Understand the major changes, formatting differences, and how to prepare smartly for the Digital SAT.',
          image: '',
          date: 'June 3, 2025',
          read: '6 min read',
          tags: ['sat', 'sat prep'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'blog_3',
          tag: 'COLLEGE ADMISSIONS',
          title: 'How to Write a Standout College Essay',
          text: 'Tips and storytelling techniques to help your unique personality and experiences shine through your admissions essay.',
          image: '',
          date: 'May 30, 2025',
          read: '7 min read',
          tags: ['college admissions', 'college essay'],
          createdAt: new Date().toISOString()
        },
        {
          id: 'blog_4',
          tag: 'AP',
          title: 'Is AP Worth It? Benefits Explained',
          text: 'Everything you need to know about Advanced Placement courses, college credits, and their long-term benefits.',
          image: '',
          date: 'May 27, 2025',
          read: '4 min read',
          tags: ['ap', 'ap guides'],
          createdAt: new Date().toISOString()
        }
      ];
      await blogsCollection.insertMany(defaultBlogs);
      console.log('✓ Seeded default blogs in MongoDB');
    }
  } catch (err) {
    console.error('Jobs/Blogs seed skipped:', err.message);
  }
}

// One-time, non-destructive migration: if the collection is empty and an old
// queries.json exists, import those leads so history carries over.
async function seedFromJsonIfEmpty() {
  try {
    if ((await leads.countDocuments()) > 0) return;
    const file = path.join(__dirname, 'queries.json');
    if (!fs.existsSync(file)) return;
    const data = JSON.parse(fs.readFileSync(file, 'utf8') || '[]');
    if (Array.isArray(data) && data.length) {
      await leads.insertMany(data.map((d) => ({ ...d })));
      console.log(`✓ Seeded ${data.length} lead(s) from queries.json`);
    }
  } catch (err) {
    console.error('Seed skipped:', err.message);
  }
}

// ─── Admin users & auth secret ────────────────────────────────────────────────
// Dummy admin accounts for now. Replace with a real user store before production.
// The primary account can still be overridden via ADMIN_USERNAME/ADMIN_PASSWORD.
const ADMIN_USERS = [
  { username: process.env.ADMIN_USERNAME || 'admin', password: process.env.ADMIN_PASSWORD || 'admin123', name: 'Super Admin' },
  { username: 'priya', password: 'priya123', name: 'Priya Sharma' },
  { username: 'rahul', password: 'rahul123', name: 'Rahul Mehta' },
  { username: 'counselor', password: 'counselor123', name: 'Lead Counselor' },
  { username: 'demo', password: 'demo123', name: 'Demo Admin' },
];
const JWT_SECRET = process.env.ADMIN_JWT_SECRET || 'scorepigo-admin-secret-change-me';
const TOKEN_TTL_SECONDS = 60 * 60 * 8; // 8 hours

function findAdmin(username, password) {
  return ADMIN_USERS.find((u) => u.username === username && u.password === password) || null;
}

app.use(cors());
app.use(express.json({ limit: '10mb' }));
app.use(express.urlencoded({ limit: '10mb', extended: true }));

// Middleware to ensure MongoDB is connected before handling any request (critical for serverless like Vercel)
app.use(async (req, res, next) => {
  if (!leads) {
    try {
      await connectDb();
    } catch (err) {
      console.error('Failed to lazy-connect to MongoDB:', err.message);
      return res.status(500).json({ error: 'Database connection failed' });
    }
  }
  next();
});

// Serve static admin files
app.use('/admin', express.static(path.join(__dirname, 'public')));

// ─── Admin authentication ─────────────────────────────────────────────────────
// JWT-style HS256 token implemented with Node's built-in crypto (no extra deps).
function base64url(input) {
  return Buffer.from(input)
    .toString('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function hmac(data) {
  return crypto
    .createHmac('sha256', JWT_SECRET)
    .update(data)
    .digest('base64')
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_');
}

function signToken(payload, expiresInSeconds = TOKEN_TTL_SECONDS) {
  const now = Math.floor(Date.now() / 1000);
  const head = base64url(JSON.stringify({ alg: 'HS256', typ: 'JWT' }));
  const body = base64url(JSON.stringify({ ...payload, iat: now, exp: now + expiresInSeconds }));
  return `${head}.${body}.${hmac(`${head}.${body}`)}`;
}

function verifyToken(token) {
  if (!token || typeof token !== 'string') return null;
  const parts = token.split('.');
  if (parts.length !== 3) return null;
  const [head, body, sig] = parts;
  const expected = hmac(`${head}.${body}`);
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length || !crypto.timingSafeEqual(a, b)) return null;
  try {
    const payload = JSON.parse(Buffer.from(body.replace(/-/g, '+').replace(/_/g, '/'), 'base64').toString('utf8'));
    if (payload.exp && Math.floor(Date.now() / 1000) > payload.exp) return null;
    return payload;
  } catch {
    return null;
  }
}

// Middleware: require a valid admin token on protected routes
function requireAuth(req, res, next) {
  const header = req.headers.authorization || '';
  const token = header.startsWith('Bearer ') ? header.slice(7) : null;
  const payload = verifyToken(token);
  if (!payload) {
    return res.status(401).json({ error: 'Unauthorized. Please log in as admin.' });
  }
  req.admin = payload;
  next();
}

// POST API: Admin login → returns a session token
app.post('/api/admin/login', (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: 'Username and password are required' });
  }
  const admin = findAdmin(username, password);
  if (!admin) {
    return res.status(401).json({ error: 'Invalid username or password' });
  }
  const token = signToken({ sub: admin.username, name: admin.name, role: 'admin' });
  res.json({ token, user: { username: admin.username, name: admin.name, role: 'admin' }, expiresIn: TOKEN_TTL_SECONDS });
});

// GET API: Verify the current admin session
app.get('/api/admin/me', requireAuth, (req, res) => {
  res.json({ user: { username: req.admin.sub, name: req.admin.name, role: req.admin.role } });
});

// GET API: Retrieve all queries (admin only)
app.get('/api/queries', requireAuth, async (_req, res) => {
  try {
    const all = await leads.find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json(all);
  } catch (err) {
    console.error('GET /api/queries:', err);
    res.status(500).json({ error: 'Failed to fetch leads' });
  }
});

// POST API: Create a new query (public from website form; admin can also send a status)
app.post('/api/queries', async (req, res) => {
  const {
    name, email, phone, exam, message, type, status,
    grade, source, stage, counselor, lastActivity, nextFollowup, leadScore,
    city, subject, testPrep, grades, hourlyRate, cvFile, videoUrl, remarks,
    companiesWorkedWith, recruitmentStatus, onboardingStatus
  } = req.body || {};

  if (!email) {
    return res.status(400).json({ error: 'Email is required' });
  }

  const validStatuses = ['Pending', 'In Progress', 'Contacted', 'Resolved', 'Active', 'Archived'];
  const validStages = ['New Lead', 'Contacted', 'Qualified', 'Proposal Sent', 'Interested', 'Uncontacted', 'Enrolled', 'Lost/Drop'];
  const validRecruitmentStatuses = ['Rejected', 'Shortlisted', 'Interviewed', 'Selected'];
  const validOnboardingStatuses = ['Onboarded', 'Inactive', 'EOC'];
  const newQuery = {
    id: 'q_' + crypto.randomBytes(6).toString('hex') + '_' + Date.now(),
    name: name || 'Anonymous',
    grade: grade || '',
    email: String(email).trim(),
    phone: phone || '',
    exam: exam || 'General',
    source: source || 'Website',
    stage: validStages.includes(stage) ? stage : 'New Lead',
    counselor: counselor || '',
    lastActivity: lastActivity || { date: '-', type: 'Lead Created', icon: 'plus' },
    nextFollowup: nextFollowup || { date: '-', type: 'Call', icon: 'clock' },
    leadScore: typeof leadScore === 'number' ? leadScore : 50,
    message: message || '',
    type: type || 'Consultation',
    status: validStatuses.includes(status) ? status : (type === 'Tutor' ? 'Pending' : 'Active'),
    createdAt: new Date().toISOString(),
    // Tutor specific fields
    city: city || '',
    subject: subject || '',
    testPrep: Array.isArray(testPrep) ? testPrep : [],
    grades: grades || '',
    hourlyRate: hourlyRate || '',
    cvFile: cvFile || null,
    videoUrl: videoUrl || '',
    remarks: remarks || '',
    companiesWorkedWith: companiesWorkedWith || '',
    recruitmentStatus: validRecruitmentStatuses.includes(recruitmentStatus) ? recruitmentStatus : '',
    onboardingStatus: validOnboardingStatuses.includes(onboardingStatus) ? onboardingStatus : '',
  };

  try {
    await leads.insertOne({ ...newQuery }); // spread so newQuery stays free of _id
    res.status(201).json({ message: 'Query submitted successfully', query: newQuery });
  } catch (err) {
    console.error('POST /api/queries:', err);
    res.status(500).json({ error: 'Failed to save query' });
  }
});

// PUT API: Update any lead fields (admin only)
app.put('/api/queries/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  const allowedFields = [
    'status', 'stage', 'counselor', 'grade', 'source', 'exam',
    'leadScore', 'lastActivity', 'nextFollowup', 'name', 'email', 'phone', 'message',
    'city', 'subject', 'testPrep', 'grades', 'hourlyRate', 'cvFile', 'videoUrl', 'remarks',
    'companiesWorkedWith', 'recruitmentStatus', 'onboardingStatus'
  ];
  const updates = {};
  for (const field of allowedFields) {
    if (req.body && req.body[field] !== undefined) {
      updates[field] = req.body[field];
    }
  }
  if (Object.keys(updates).length === 0) {
    return res.status(400).json({ error: 'No valid fields to update' });
  }

  try {
    const result = await leads.updateOne({ id }, { $set: updates });
    if (result.matchedCount === 0) {
      return res.status(404).json({ error: 'Query not found' });
    }
    const updated = await leads.findOne({ id }, { projection: { _id: 0 } });
    res.json({ message: 'Lead updated successfully', query: updated });
  } catch (err) {
    console.error('PUT /api/queries/:id:', err);
    res.status(500).json({ error: 'Failed to update lead' });
  }
});

// DELETE API: Delete query (admin only)
app.delete('/api/queries/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await leads.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Query not found' });
    }
    res.json({ message: 'Query deleted successfully' });
  } catch (err) {
    console.error('DELETE /api/queries/:id:', err);
    res.status(500).json({ error: 'Failed to delete query' });
  }
});

// ─── Jobs API ─────────────────────────────────────────────────────────────────
app.get('/api/jobs', async (req, res) => {
  try {
    const list = await jobsCollection.find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch jobs' });
  }
});

app.post('/api/jobs', requireAuth, async (req, res) => {
  const { dept, title, location, type, desc } = req.body || {};
  if (!dept || !title || !desc) {
    return res.status(400).json({ error: 'Department, title, and description are required' });
  }
  const newJob = {
    id: 'job_' + crypto.randomBytes(4).toString('hex') + '_' + Date.now(),
    dept,
    title,
    location: location || 'Remote (Global)',
    type: type || 'Full-time',
    desc,
    createdAt: new Date().toISOString()
  };
  try {
    await jobsCollection.insertOne({ ...newJob });
    res.status(201).json(newJob);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save job' });
  }
});

app.delete('/api/jobs/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await jobsCollection.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Job not found' });
    }
    res.json({ message: 'Job deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete job' });
  }
});

// ─── Blogs API ────────────────────────────────────────────────────────────────
app.get('/api/blogs', async (req, res) => {
  try {
    const list = await blogsCollection.find({}, { projection: { _id: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to fetch blogs' });
  }
});

app.post('/api/blogs', requireAuth, async (req, res) => {
  const { tag, title, text, image, date, read, tags } = req.body || {};
  if (!tag || !title || !text) {
    return res.status(400).json({ error: 'Tag, title, and text content are required' });
  }
  const newBlog = {
    id: 'blog_' + crypto.randomBytes(4).toString('hex') + '_' + Date.now(),
    tag,
    title,
    text,
    image: image || '',
    date: date || new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
    read: read || '5 min read',
    tags: Array.isArray(tags) ? tags : [],
    createdAt: new Date().toISOString()
  };
  try {
    await blogsCollection.insertOne({ ...newBlog });
    res.status(201).json(newBlog);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save blog' });
  }
});

app.delete('/api/blogs/:id', requireAuth, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await blogsCollection.deleteOne({ id });
    if (result.deletedCount === 0) {
      return res.status(404).json({ error: 'Blog not found' });
    }
    res.json({ message: 'Blog deleted successfully' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete blog' });
  }
});

// ─── Google Reviews ───────────────────────────────────────────────────────────
// Reviews are pulled from the Google Places API (New) and stored in MongoDB so
// that admins can choose which ones show first, hide any, and add reviews by
// hand. Google only returns up to 5 reviews per request, so every sync adds any
// new ones to the stored list and the pool grows over time.
// Needs GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID in the environment.
const GOOGLE_PLACES_API_KEY = process.env.GOOGLE_PLACES_API_KEY || '';
const GOOGLE_PLACE_ID = process.env.GOOGLE_PLACE_ID || '';
const REVIEW_SYNC_INTERVAL_MS = 6 * 60 * 60 * 1000; // auto-sync at most every 6 hours
const REVIEW_MIN_AUTO_SHOW = 4; // new Google reviews below 4 stars arrive hidden

// The reviews already on the site, so the section is never empty before the
// first Google sync. Admins can hide or delete any of them.
const SEED_REVIEWS = [
  ['Sudiksha Aaloori', "Hi, my name is Sudiksha Aaloori, and I've been preparing for the SAT with ACT SAT Go. My experience has been really positive so far. The tutors are knowledgeable, patient, and explain concepts in a way that's easy to understand. The study plan is well-structured, and the practice sessions have helped me become more confident with the SAT format and question types. I've seen improvement in my understanding of concepts, and I feel much more prepared for my upcoming test. I would definitely recommend ACT SAT Go to any student looking for quality SAT preparation and individual support throughout their journey."],
  ['Tarun Prasad', 'My brother joined their course for SAT prep and we have seen a good improvement in scores. The tutors focus on the areas where the student is weak and give regular practice and feedback. The tests are similar to the real SAT, which helped build confidence. Overall, we are satisfied with the progress.'],
  ["It's Dhwani", 'One of the best platforms for SAT & ACT preparation. The lessons are easy to understand and the practice tests are really helpful. I noticed a good improvement in my concepts and confidence. The mentors are supportive and always ready to help. Highly recommended for anyone preparing seriously for these exams ✨'],
  ['Jagriti Ratnani', 'ACT / SAT Go Tutoring was a great experience. The tutors are knowledgeable, patient, and truly invested in their students’ success. They break down difficult concepts clearly and teach effective test-taking strategies that really boost confidence. The practice was tailored to specific weaknesses, and I saw noticeable improvement in my score. I highly recommend ACT / SAT Go Tutoring to anyone looking to improve and feel prepared on test day!'],
  ['Simran Raghuwanshi', 'This organization provides excellent SAT test preparation with a very structured and outcome-oriented approach. The tutors clearly understand the Digital SAT format, question patterns, and scoring strategy, and they focus heavily on improving accuracy, timing, and test-taking skills. What I really appreciated was the personalized study plan—the student’s strengths and weak areas were identified early, and sessions were tailored accordingly. Regular practice tests, detailed performance analysis, and clear feedback helped track progress and build confidence. Overall, this is a highly professional SAT prep organization that genuinely aims to help students achieve strong score improvements, not just complete classes. I would strongly recommend them to anyone serious about SAT preparation.'],
  ['Tanveer Ali', 'My nephew had a great experience here. The team was super supportive and professional, they really focused on making sure he understood the concepts instead of memorizing stuff. Regular practice helped boost his confidence and his scores. Communication was clear and it genuinely felt like they cared about his progress. I’d definitely recommend this place to any student looking for SAT or ACT prep.'],
  ['Sahil Gupta', 'I had a good experience with this tutoring company. The tutors are patient and explain things in a way that’s easy to understand. The sessions felt personalized, which really helped with learning. I noticed an improvement over time and felt more confident with the subjects. Overall, a solid tutoring service and worth recommending.'],
  ['Ekta Rathode', 'Very supportive and knowledgeable tutor. Teaching style is clear and easy to understand.'],
];

async function seedReviewsIfEmpty() {
  try {
    if ((await reviewsCollection.countDocuments()) > 0) return;
    const now = new Date().toISOString();
    await reviewsCollection.insertMany(
      SEED_REVIEWS.map(([author, text], i) => ({
        id: 'manual_seed_' + (i + 1),
        source: 'manual',
        author,
        authorPhoto: '',
        authorUrl: '',
        rating: 5,
        text,
        relativeTime: '',
        publishTime: '',
        featured: i < 4,
        order: i < 4 ? i : null,
        hidden: false,
        createdAt: now,
        updatedAt: now,
      }))
    );
    console.log('Seeded googleReviews with the existing written testimonials.');
  } catch (err) {
    console.error('Failed to seed reviews:', err.message);
  }
}

// Pull the latest reviews from Google and upsert them. Admin choices
// (featured, order, hidden) on existing reviews are never overwritten.
async function syncGoogleReviews() {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) {
    throw new Error('Google sync is not set up yet. Add GOOGLE_PLACES_API_KEY and GOOGLE_PLACE_ID to the server environment.');
  }
  const url = `https://places.googleapis.com/v1/places/${encodeURIComponent(GOOGLE_PLACE_ID)}`;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), 8000);
  let data;
  try {
    const res = await fetch(url, {
      headers: {
        'X-Goog-Api-Key': GOOGLE_PLACES_API_KEY,
        'X-Goog-FieldMask': 'displayName,rating,userRatingCount,googleMapsUri,reviews',
      },
      signal: controller.signal,
    });
    data = await res.json().catch(() => ({}));
    if (!res.ok) {
      throw new Error(data?.error?.message || `Google returned HTTP ${res.status}`);
    }
  } finally {
    clearTimeout(timer);
  }

  const now = new Date().toISOString();
  let added = 0;
  for (const r of data.reviews || []) {
    const id = 'google_' + crypto.createHash('sha1').update(r.name || `${r.authorAttribution?.displayName}|${r.publishTime}`).digest('hex').slice(0, 20);
    const fresh = {
      source: 'google',
      author: r.authorAttribution?.displayName || 'Google user',
      authorPhoto: r.authorAttribution?.photoUri || '',
      authorUrl: r.authorAttribution?.uri || '',
      rating: r.rating || 0,
      text: r.originalText?.text || r.text?.text || '',
      relativeTime: r.relativePublishTimeDescription || '',
      publishTime: r.publishTime || '',
      updatedAt: now,
    };
    const result = await reviewsCollection.updateOne(
      { id },
      {
        $set: fresh,
        $setOnInsert: { id, featured: false, order: null, hidden: (r.rating || 0) < REVIEW_MIN_AUTO_SHOW, createdAt: now },
      },
      { upsert: true }
    );
    if (result.upsertedCount) added += 1;
  }

  const summary = {
    id: 'googleReviews',
    lastSync: now,
    lastError: '',
    placeName: data.displayName?.text || '',
    rating: data.rating ?? null,
    total: data.userRatingCount ?? null,
    mapsUrl: data.googleMapsUri || '',
  };
  await settingsCollection.updateOne({ id: 'googleReviews' }, { $set: summary }, { upsert: true });
  return { added, fetched: (data.reviews || []).length, summary };
}

async function getReviewSettings() {
  return (await settingsCollection.findOne({ id: 'googleReviews' }, { projection: { _id: 0 } })) || { id: 'googleReviews' };
}

// Featured reviews first (in the admin's order), then the rest, newest first.
function sortReviews(list) {
  return list.sort((a, b) => {
    if (!!a.featured !== !!b.featured) return a.featured ? -1 : 1;
    if (a.featured && b.featured) return (a.order ?? 999) - (b.order ?? 999);
    return String(b.publishTime || b.createdAt).localeCompare(String(a.publishTime || a.createdAt));
  });
}

let syncInFlight = null;
async function maybeAutoSync() {
  if (!GOOGLE_PLACES_API_KEY || !GOOGLE_PLACE_ID) return;
  const settings = await getReviewSettings();
  const last = settings.lastSync ? Date.parse(settings.lastSync) : 0;
  const lastTry = settings.lastAttempt ? Date.parse(settings.lastAttempt) : 0;
  if (Date.now() - Math.max(last, lastTry) < REVIEW_SYNC_INTERVAL_MS) return;
  if (!syncInFlight) {
    syncInFlight = (async () => {
      await settingsCollection.updateOne({ id: 'googleReviews' }, { $set: { lastAttempt: new Date().toISOString() } }, { upsert: true });
      try {
        await syncGoogleReviews();
      } catch (err) {
        console.error('Google review sync failed:', err.message);
        await settingsCollection.updateOne({ id: 'googleReviews' }, { $set: { lastError: err.message } }, { upsert: true });
      }
    })().finally(() => { syncInFlight = null; });
  }
  await syncInFlight;
}

// Public: the reviews shown on the website
app.get('/api/google-reviews', async (_req, res) => {
  try {
    await maybeAutoSync();
    const [list, settings] = await Promise.all([
      reviewsCollection.find({ hidden: { $ne: true } }, { projection: { _id: 0 } }).toArray(),
      getReviewSettings(),
    ]);
    res.set('Cache-Control', 'public, max-age=300, s-maxage=600');
    res.json({
      rating: settings.rating ?? null,
      total: settings.total ?? null,
      mapsUrl: settings.mapsUrl || '',
      reviews: sortReviews(list).map(({ id, source, author, authorPhoto, authorUrl, rating, text, relativeTime, publishTime, featured }) => ({
        id, source, author, authorPhoto, authorUrl, rating, text, relativeTime, publishTime, featured: !!featured,
      })),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load reviews' });
  }
});

// Admin: every stored review, including hidden ones, plus sync status
app.get('/api/admin/google-reviews', requireAuth, async (_req, res) => {
  try {
    const [list, settings] = await Promise.all([
      reviewsCollection.find({}, { projection: { _id: 0 } }).toArray(),
      getReviewSettings(),
    ]);
    res.json({
      configured: !!(GOOGLE_PLACES_API_KEY && GOOGLE_PLACE_ID),
      settings,
      reviews: sortReviews(list),
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to load reviews' });
  }
});

// Admin: pull from Google right now
app.post('/api/admin/google-reviews/sync', requireAuth, async (_req, res) => {
  try {
    const result = await syncGoogleReviews();
    res.json(result);
  } catch (err) {
    await settingsCollection.updateOne({ id: 'googleReviews' }, { $set: { lastError: err.message, lastAttempt: new Date().toISOString() } }, { upsert: true }).catch(() => {});
    res.status(400).json({ error: err.message });
  }
});

// Admin: add a review by hand (e.g. an older Google review the API doesn't return)
app.post('/api/admin/google-reviews', requireAuth, async (req, res) => {
  const { author, text, rating, relativeTime } = req.body || {};
  if (!author || !text) return res.status(400).json({ error: 'Name and review text are required' });
  const now = new Date().toISOString();
  const review = {
    id: 'manual_' + crypto.randomBytes(4).toString('hex') + '_' + Date.now(),
    source: 'manual',
    author: String(author).trim(),
    authorPhoto: '',
    authorUrl: '',
    rating: Math.min(5, Math.max(1, Number(rating) || 5)),
    text: String(text).trim(),
    relativeTime: relativeTime ? String(relativeTime) : '',
    publishTime: now,
    featured: false,
    order: null,
    hidden: false,
    createdAt: now,
    updatedAt: now,
  };
  try {
    await reviewsCollection.insertOne({ ...review });
    res.status(201).json(review);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save review' });
  }
});

// Admin: save the featured list in one go. Body: { featured: [id, id, ...] } in display order
app.put('/api/admin/google-reviews/featured', requireAuth, async (req, res) => {
  const ids = Array.isArray(req.body?.featured) ? req.body.featured.map(String) : null;
  if (!ids) return res.status(400).json({ error: 'featured must be a list of review ids' });
  try {
    await reviewsCollection.updateMany({ id: { $nin: ids } }, { $set: { featured: false, order: null } });
    await Promise.all(ids.map((id, i) => reviewsCollection.updateOne({ id }, { $set: { featured: true, order: i, updatedAt: new Date().toISOString() } })));
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to save order' });
  }
});

// Admin: show or hide one review
app.put('/api/admin/google-reviews/:id', requireAuth, async (req, res) => {
  const { hidden } = req.body || {};
  if (typeof hidden !== 'boolean') return res.status(400).json({ error: 'hidden must be true or false' });
  try {
    const result = await reviewsCollection.updateOne({ id: req.params.id }, { $set: { hidden, updatedAt: new Date().toISOString() } });
    if (!result.matchedCount) return res.status(404).json({ error: 'Review not found' });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to update review' });
  }
});

// Admin: delete a hand-added review (Google ones would come back on the next sync, so hide those instead)
app.delete('/api/admin/google-reviews/:id', requireAuth, async (req, res) => {
  try {
    const result = await reviewsCollection.deleteOne({ id: req.params.id, source: 'manual' });
    if (!result.deletedCount) return res.status(404).json({ error: 'Only reviews added by hand can be deleted. Hide Google reviews instead.' });
    res.json({ ok: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Failed to delete review' });
  }
});

// Redirect root admin to public index
app.get('/admin', (_req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// ─── Start server only after the DB connection is ready ───────────────────────
if (!process.env.VERCEL) {
  connectDb()
    .then(() => {
      app.listen(PORT, () => {
        console.log(`Query server is running on http://localhost:${PORT}`);
        console.log(`Admin dashboard: http://localhost:${PORT}/admin`);
      });
    })
    .catch((err) => {
      console.error('✗ Failed to connect to MongoDB:', err.message);
      process.exit(1);
    });

  // Graceful shutdown
  process.on('SIGINT', async () => {
    await client.close().catch(() => {});
    process.exit(0);
  });
}

export default app;
