// Policy pages (privacy, terms, refunds, child safety).
// IMPORTANT: these are plain-English starting points written from how the
// business works today. Have them reviewed before relying on them, and update
// the rescheduling / refund numbers if your contracts say something different.

import { SITE } from '../site';

export interface PolicySection {
  heading: string;
  body: string[];
}

export interface Policy {
  title: string;
  updated: string;
  intro: string;
  sections: PolicySection[];
}

const CONTACT = `Questions? Email ${SITE.email} or call ${SITE.phoneDisplay}.`;

export const POLICIES: Record<string, Policy> = {
  'privacy-policy': {
    title: 'Privacy Policy',
    updated: 'October 2026',
    intro: `This policy explains what personal information ${SITE.name} collects, why we collect it and the choices you have. It applies to our website, our practice-test platform and our tutoring services.`,
    sections: [
      {
        heading: 'Information we collect',
        body: [
          'Information you give us: parent and student names, email address, phone number, grade, school, the exam or subject you are interested in and anything you write in a form or message.',
          'Learning information: practice-test answers and scores, homework, session notes and progress reports created while your child studies with us.',
          'Usage information: pages visited, device and browser type and the campaign that brought you to the site, collected through cookies and similar tools such as Google Analytics and the Meta Pixel.',
        ],
      },
      {
        heading: 'How we use it',
        body: [
          'To respond to enquiries, schedule diagnostic lessons and sessions, and match your child with a tutor.',
          'To deliver tutoring, practice tests and progress reports, and to improve our teaching.',
          'To send service messages and, if you agree, occasional updates about programs. You can unsubscribe at any time.',
          'To measure which pages and campaigns are useful. We do not sell personal information.',
        ],
      },
      {
        heading: 'Who we share it with',
        body: [
          'Your child’s assigned tutor and our academic team.',
          'Service providers who host our website and platform, send email or measure site usage, only for those purposes.',
          'Authorities, if required by law.',
        ],
      },
      {
        heading: 'Children’s privacy',
        body: [
          'Our services are bought by parents and guardians. For students under 13 we collect personal information only with a parent’s or guardian’s consent, and only what we need to provide tutoring, consistent with the US Children’s Online Privacy Protection Act (COPPA).',
          'Parents can review, correct or delete their child’s information, or withdraw consent, by contacting us.',
        ],
      },
      {
        heading: 'Keeping and protecting information',
        body: [
          'We keep information only as long as needed to provide our services and meet legal obligations, then delete or anonymise it.',
          'Access is limited to staff and tutors who need it, and data is transmitted over encrypted connections.',
        ],
      },
      {
        heading: 'Your choices',
        body: [
          'You can ask for a copy of your information, ask us to correct or delete it, and opt out of marketing messages. Most browsers also let you block cookies.',
          CONTACT,
        ],
      },
    ],
  },

  terms: {
    title: 'Terms of Service',
    updated: 'October 2026',
    intro: `These terms apply when you use the ${SITE.name} website, practice-test platform and tutoring services. By booking a lesson or creating an account you agree to them.`,
    sections: [
      {
        heading: 'Our services',
        body: [
          'We provide live online tutoring and test preparation for the SAT, ACT, AP exams and K-12 subjects, along with practice tests and study materials.',
          'The program, number of hours, schedule and fees for your child are confirmed in writing before you pay.',
        ],
      },
      {
        heading: 'Accounts',
        body: [
          'Keep login details private and tell us if you think an account has been misused. A parent or guardian is responsible for accounts created for students under 18.',
        ],
      },
      {
        heading: 'Payments',
        body: [
          'Fees are payable as set out in your confirmed plan. Rescheduling, cancellations and refunds are covered by our Refund & Cancellation Policy.',
        ],
      },
      {
        heading: 'Results',
        body: [
          'We work hard to help every student improve, but scores depend on many things outside our control. Unless a written guarantee is part of your plan, we do not promise a particular score.',
        ],
      },
      {
        heading: 'Acceptable use and content',
        body: [
          'Please be respectful in sessions and do not record, share or resell our materials, practice tests or platform content without permission. SAT is a trademark of the College Board and ACT is a trademark of ACT, Inc.; neither is affiliated with us.',
        ],
      },
      {
        heading: 'Liability and changes',
        body: [
          'To the extent permitted by law, our liability for any claim is limited to the fees you paid for the services concerned. We may update these terms; the date above shows the latest version.',
          CONTACT,
        ],
      },
    ],
  },

  'refund-policy': {
    title: 'Refund & Cancellation Policy',
    updated: 'October 2026',
    intro:
      'We want families to feel safe trying us. This page explains how the free diagnostic, rescheduling, cancellations and refunds work. If your written plan says something different, your plan applies.',
    sections: [
      {
        heading: 'Free diagnostic lesson',
        body: ['The diagnostic lesson is free. No card is needed to book it and there is no obligation to buy afterwards.'],
      },
      {
        heading: 'Rescheduling a session',
        body: [
          'Let your advisor or tutor know at least 24 hours before a session and we will move it at no cost.',
          'Sessions missed without 24 hours’ notice may be counted as used. We will always work with you on genuine emergencies.',
        ],
      },
      {
        heading: 'Cancelling a program',
        body: [
          'You can stop a program at any time by emailing us. Sessions already delivered are not refundable; unused prepaid sessions are refunded or credited as set out in your plan.',
          'Refunds are made to the original payment method, normally within 10 business days of approval.',
        ],
      },
      {
        heading: 'Questions',
        body: [CONTACT],
      },
    ],
  },

  'child-safety': {
    title: 'Child Safety & Online Sessions',
    updated: 'October 2026',
    intro:
      'Parents trust us with their children’s time online. These are the standards every tutor and staff member follows.',
    sections: [
      {
        heading: 'Who teaches your child',
        body: [
          'Tutors are interviewed and give a teaching demonstration before they are matched with students, and their sessions are reviewed by our academic team.',
        ],
      },
      {
        heading: 'How sessions run',
        body: [
          'All sessions take place on our approved online platforms, never in person and never on personal social-media accounts.',
          'Parents are welcome to sit in on any session, and you will receive regular updates on what was covered and how your child is doing.',
          'Tutors communicate with students only about their studies, and only through official channels that parents can see on request.',
        ],
      },
      {
        heading: 'Raising a concern',
        body: [
          'If anything in a session makes you or your child uncomfortable, tell us straight away. Concerns are handled by senior staff, and a tutor can be removed from a student immediately while we look into it.',
          CONTACT,
        ],
      },
    ],
  },
};
