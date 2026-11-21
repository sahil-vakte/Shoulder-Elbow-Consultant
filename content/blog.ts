export type Post = {
  slug: string;
  title: string;
  metaTitle: string;
  metaDescription: string;
  excerpt: string;
  date: string;
  readMins: number;
  tag: "Shoulder" | "Elbow" | "Recovery";
  keyword: string;
  sections: { h: string; p: string[]; list?: string[] }[];
  related: string[];
};

export const posts: Post[] = [
  {
    slug: "shoulder-pain-at-night-causes",
    title: "Shoulder pain at night: 6 common causes and when to see a specialist",
    metaTitle: "Shoulder Pain at Night: Causes & When to See a Specialist",
    metaDescription:
      "Why does my shoulder hurt at night? A consultant explains the six most common causes — from rotator cuff tears to frozen shoulder — and what actually helps.",
    excerpt: "Night pain is one of the most common reasons people seek help for their shoulder. Here's what it usually means — and what you can do about it.",
    date: "2026-11-10",
    readMins: 6,
    tag: "Shoulder",
    keyword: "shoulder pain at night",
    sections: [
      {
        h: "Why shoulder pain often gets worse at night",
        p: [
          "Lying down changes the pressure around the rotator cuff tendons and reduces the distraction of daytime activity. When you lie on the painful side, you compress the inflamed tissues; when you lie on the other side, the arm can fall across your body and stretch them. Inflammation also tends to feel more intense when you're still.",
        ],
      },
      {
        h: "The six most common causes",
        p: ["In our clinics, these account for the vast majority of night-time shoulder pain:"],
        list: [
          "Rotator cuff tendinopathy or tear — ache on the outside of the arm, weakness lifting",
          "Subacromial bursitis (impingement) — pain lifting the arm through a 'painful arc'",
          "Frozen shoulder — severe pain plus increasing stiffness, especially turning the arm out",
          "Calcific tendonitis — sudden, intense pain, sometimes with no injury",
          "Shoulder arthritis — deep, grinding ache and stiffness",
          "Referred pain from the neck — pain with pins and needles into the forearm or hand",
        ],
      },
      {
        h: "Simple things that can help tonight",
        p: [],
        list: [
          "Sleep on the unaffected side hugging a pillow, so the painful arm is supported",
          "If on your back, place a small pillow under the elbow of the painful arm",
          "Use regular simple pain relief as advised by your pharmacist or GP",
          "Avoid heavy overhead activity late in the day",
        ],
      },
      {
        h: "When to see a shoulder specialist",
        p: [
          "See a specialist if night pain has lasted more than four to six weeks, if you are losing movement or strength, or if pain started after a fall. An accurate diagnosis — usually with an X-ray and ultrasound scan — means treatment can be targeted rather than trial and error.",
        ],
      },
    ],
    related: ["rotator-cuff-tear", "frozen-shoulder", "shoulder-impingement", "calcific-tendonitis"],
  },
  {
    slug: "frozen-shoulder-stages-treatment",
    title: "Frozen shoulder: the three stages and how to speed up recovery",
    metaTitle: "Frozen Shoulder Stages & Fastest Treatment Options",
    metaDescription:
      "Freezing, frozen, thawing — understand the stages of frozen shoulder and the treatments (injection, hydrodilatation, release) that can shorten recovery.",
    excerpt: "Frozen shoulder can last years if left alone. Understanding the stages helps you choose the right treatment at the right time.",
    date: "2026-10-28",
    readMins: 5,
    tag: "Shoulder",
    keyword: "frozen shoulder stages",
    sections: [
      {
        h: "Stage 1: Freezing (painful phase)",
        p: [
          "Pain builds gradually, often severe at night, and movement starts to reduce. This phase can last from two to nine months. A guided steroid injection is most effective here, because it targets the active inflammation in the capsule.",
        ],
      },
      {
        h: "Stage 2: Frozen (stiff phase)",
        p: [
          "Pain may ease but the shoulder becomes very stiff — especially turning the arm outwards and reaching behind the back. This can last four to twelve months. Hydrodilatation or keyhole capsular release can restore movement much faster than waiting.",
        ],
      },
      {
        h: "Stage 3: Thawing (recovery phase)",
        p: [
          "Movement gradually returns over months to years. Not everyone recovers fully — some people are left with a permanent loss of movement, which is why treatment earlier on is often worthwhile.",
        ],
      },
      {
        h: "Who is most at risk?",
        p: ["Frozen shoulder is most common between 40 and 60 and is significantly more likely in people with diabetes or thyroid disease. It can also follow injury, surgery or a period with the arm immobilised."],
      },
    ],
    related: ["frozen-shoulder"],
  },
  {
    slug: "tennis-elbow-when-to-see-a-specialist",
    title: "Tennis elbow: what actually works (and when to see a specialist)",
    metaTitle: "Tennis Elbow Treatment: What Works & When to See a Specialist",
    metaDescription:
      "Most tennis elbow settles without surgery. A specialist explains the evidence for exercises, straps, steroid and PRP injections — and when surgery is considered.",
    excerpt: "You don't need to play tennis to get tennis elbow. Here's an evidence-based guide to getting it to settle.",
    date: "2026-10-12",
    readMins: 6,
    tag: "Elbow",
    keyword: "tennis elbow treatment",
    sections: [
      {
        h: "What is tennis elbow?",
        p: [
          "Tennis elbow (lateral epicondylitis) is an overload of the tendon on the outside of the elbow where the wrist extensor muscles attach. It is most common between 35 and 55 and is usually triggered by gripping, lifting, manual work or computer use rather than sport.",
        ],
      },
      {
        h: "First-line treatment that works",
        p: ["The best evidence supports a progressive tendon-loading programme, with short-term activity modification. A counterforce strap can reduce pain during activity."],
        list: [
          "Reduce aggravating gripping where you can — but don't rest completely",
          "Isometric then slow, heavy strengthening exercises for the wrist extensors",
          "Consider a forearm strap during heavy tasks",
          "Give it time — tendons adapt over months, not days",
        ],
      },
      {
        h: "Injections: steroid vs PRP",
        p: [
          "Steroid injections often give quick relief but symptoms can return, and longer-term results may be no better than exercise. Platelet-rich plasma (PRP) may benefit some long-standing cases. Both are best used alongside rehabilitation, not instead of it.",
        ],
      },
      {
        h: "When to see a specialist",
        p: [
          "If pain has lasted more than three months, is affecting work, or you have numbness or tingling in the hand, a specialist assessment can confirm the diagnosis and exclude other causes such as nerve compression or joint problems. Surgery is reserved for the small number who don't improve after 9–12 months.",
        ],
      },
    ],
    related: ["tennis-elbow", "golfers-elbow"],
  },
  {
    slug: "rotator-cuff-repair-recovery-timeline",
    title: "Rotator cuff repair recovery: a week-by-week timeline",
    metaTitle: "Rotator Cuff Repair Recovery Timeline: Week by Week",
    metaDescription:
      "What to expect after rotator cuff surgery — sling time, sleeping, driving, returning to work and sport — explained week by week by a shoulder specialist.",
    excerpt: "Recovery from rotator cuff repair is a marathon, not a sprint. Here's what each stage looks like so you can plan ahead.",
    date: "2026-09-30",
    readMins: 7,
    tag: "Recovery",
    keyword: "rotator cuff repair recovery",
    sections: [
      {
        h: "Weeks 0–6: protect the repair",
        p: [
          "The tendon is healing back to bone, so the sling is worn day and night except for exercises and washing. Many people sleep more comfortably semi-upright for the first few weeks. Your physiotherapist will start gentle passive movements.",
        ],
      },
      {
        h: "Weeks 6–12: regain movement",
        p: [
          "The sling comes off and you begin using the arm for light everyday tasks. Most people are safe to drive at around six to eight weeks, once they can control the car comfortably.",
        ],
      },
      {
        h: "Months 3–6: rebuild strength",
        p: ["Strengthening exercises begin. Desk workers will usually have returned already; manual and overhead workers typically return between four and six months."],
      },
      {
        h: "Months 6–12: back to full activity",
        p: ["Strength and endurance continue to improve for up to a year. Golf, swimming and racquet sports can usually resume around six months, depending on the size of the repair."],
      },
      {
        h: "Tips for a smooth recovery",
        p: [],
        list: [
          "Prepare your home before surgery — front-fastening clothes, easy-reach items",
          "Take regular pain relief for the first week, especially at night",
          "Don't stop smoking only for surgery — stop for good; it doubles re-tear risk",
          "Do your exercises little and often",
        ],
      },
    ],
    related: ["rotator-cuff-tear"],
  },
];

export const postBySlug = (s: string) => posts.find((p) => p.slug === s);
