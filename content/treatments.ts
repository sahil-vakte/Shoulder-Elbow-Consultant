import type { FAQ, Region } from "./conditions";

export type Treatment = {
  slug: string;
  name: string;
  region: Region | "both";
  category: "Keyhole surgery" | "Joint replacement" | "Reconstruction" | "Non-surgical" | "Nerve & tendon";
  short: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  suitableFor: string[];
  steps: string[];
  facts: { anaesthetic: string; duration: string; stay: string; sling: string };
  timeline: { when: string; what: string }[];
  risks: string[];
  faqs: FAQ[];
  conditions: string[];
};

const stdShoulderRisks = [
  "Infection (uncommon, around 1%)",
  "Stiffness — usually managed with physiotherapy",
  "Bleeding or wound problems",
  "Nerve or blood vessel injury (rare)",
  "Blood clots (rare after upper limb surgery)",
  "Anaesthetic-related risks, discussed with your anaesthetist",
];

export const treatments: Treatment[] = [
  {
    slug: "shoulder-arthroscopy",
    name: "Shoulder Arthroscopy",
    region: "shoulder",
    category: "Keyhole surgery",
    short: "Keyhole surgery to diagnose and treat problems inside and around the shoulder.",
    keyword: "shoulder arthroscopy Leicester",
    metaTitle: "Shoulder Arthroscopy (Keyhole Surgery) | Leicester & Warwickshire",
    metaDescription:
      "What to expect from shoulder arthroscopy: who it helps, the day-case procedure, recovery timeline and risks. Consultant-led keyhole surgery near Leicester & Nuneaton.",
    overview: [
      "Shoulder arthroscopy uses a small camera inserted through incisions of around 5mm to see inside the joint on a high-definition screen. Fine instruments passed through other small incisions allow the surgeon to repair, release or remove damaged tissue.",
      "Compared with open surgery, keyhole surgery generally means less pain, smaller scars and a quicker return to normal activities.",
    ],
    suitableFor: [
      "Subacromial impingement and bursitis",
      "Rotator cuff repair",
      "Shoulder instability and labral tears",
      "Frozen shoulder (capsular release)",
      "AC joint arthritis and calcific deposits",
    ],
    steps: [
      "General anaesthetic, usually with a nerve block for long-lasting pain relief",
      "Two to four small incisions around the shoulder",
      "Camera inspection of the joint and subacromial space",
      "Targeted treatment of the problem",
      "Incisions closed with small stitches or strips and dressings applied",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "30–90 minutes", stay: "Day case", sling: "Days to 6 weeks (procedure-dependent)" },
    timeline: [
      { when: "Day 0", what: "Home the same day once comfortable; arm numb from the nerve block for 12–24 hours" },
      { when: "Week 1–2", what: "Wound check, stitches removed; gentle exercises from your physiotherapist" },
      { when: "Week 2–6", what: "Return to desk work and driving (depending on procedure)" },
      { when: "Month 3–6", what: "Progressive return to heavier work and sport" },
    ],
    risks: stdShoulderRisks,
    faqs: [
      {
        q: "Is shoulder arthroscopy painful?",
        a: "The nerve block keeps the shoulder numb for many hours after surgery. Afterwards, regular painkillers and ice usually control discomfort well; most people say the first week is the most uncomfortable.",
      },
      {
        q: "How big are the scars?",
        a: "Usually two to four scars of around 5–10mm each, which fade well over time.",
      },
    ],
    conditions: ["shoulder-impingement", "rotator-cuff-tear", "frozen-shoulder", "shoulder-dislocation-instability", "slap-tear-labral-tear"],
  },
  {
    slug: "rotator-cuff-repair",
    name: "Rotator Cuff Repair",
    region: "shoulder",
    category: "Keyhole surgery",
    short: "Keyhole re-attachment of torn shoulder tendons to bone.",
    keyword: "rotator cuff repair surgery",
    metaTitle: "Arthroscopic Rotator Cuff Repair | Recovery Timeline & Results",
    metaDescription:
      "Keyhole rotator cuff repair explained — who benefits, how the tendon is reattached, sling time, physiotherapy and the realistic 6–12 month recovery timeline.",
    overview: [
      "In an arthroscopic rotator cuff repair, the torn tendon is re-attached to its footprint on the bone using small suture anchors. The aim is to relieve pain, restore strength and prevent the tear getting larger.",
      "Healing of tendon to bone is a biological process that takes time, so a protected rehabilitation programme is essential to a successful result.",
    ],
    suitableFor: [
      "Traumatic tears in active patients",
      "Degenerative tears with persistent pain and weakness despite physiotherapy",
      "Tears that are getting larger on serial scans",
    ],
    steps: [
      "General anaesthetic with nerve block",
      "Arthroscopic assessment of the tear size and tissue quality",
      "Preparation of the bone footprint to encourage healing",
      "Insertion of anchors and passage of sutures through the tendon",
      "Tendon secured to bone; decompression performed if needed",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "60–120 minutes", stay: "Day case or 1 night", sling: "4–6 weeks" },
    timeline: [
      { when: "Week 0–6", what: "Sling at all times except exercises; passive movement guided by physiotherapy" },
      { when: "Week 6–12", what: "Sling off, active movement; return to driving around 6–8 weeks" },
      { when: "Month 3–6", what: "Strengthening; return to most activities and manual work" },
      { when: "Month 6–12", what: "Continued improvement in strength and endurance" },
    ],
    risks: [...stdShoulderRisks, "Re-tear or failure of healing — more likely with large tears, older age and smoking"],
    faqs: [
      {
        q: "What is the success rate of rotator cuff repair?",
        a: "Most patients report significant improvement in pain and function. The chance of the tendon healing depends mainly on tear size, tissue quality, age and smoking status, which your surgeon will discuss with you.",
      },
      {
        q: "When can I return to work after rotator cuff repair?",
        a: "Desk-based work is often possible at two to four weeks (one-handed). Manual and overhead work typically requires four to six months.",
      },
    ],
    conditions: ["rotator-cuff-tear", "shoulder-impingement"],
  },
  {
    slug: "subacromial-decompression",
    name: "Subacromial Decompression",
    region: "shoulder",
    category: "Keyhole surgery",
    short: "Keyhole removal of inflamed bursa and bone spurs to relieve impingement.",
    keyword: "subacromial decompression surgery",
    metaTitle: "Subacromial Decompression (ASD) Surgery | Shoulder Impingement",
    metaDescription:
      "Arthroscopic subacromial decompression for impingement, calcific tendonitis and AC joint arthritis — what's involved, recovery and when it is recommended.",
    overview: [
      "Arthroscopic subacromial decompression removes inflamed bursa and, where present, bone spurs from beneath the acromion. It is often combined with excision of an arthritic AC joint or removal of calcium deposits.",
      "Current evidence shows that physiotherapy should usually be tried first; decompression is reserved for patients with persistent symptoms and a clear structural cause.",
    ],
    suitableFor: [
      "Persistent subacromial pain despite physiotherapy and injection",
      "Calcific tendonitis",
      "AC joint arthritis (combined excision)",
    ],
    steps: [
      "General anaesthetic with nerve block",
      "Inspection of the joint and cuff",
      "Removal of bursa and smoothing of the acromion",
      "Additional procedures as needed (AC excision, calcium removal)",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "30–45 minutes", stay: "Day case", sling: "A few days for comfort" },
    timeline: [
      { when: "Week 0–1", what: "Sling for comfort; early movement encouraged" },
      { when: "Week 1–3", what: "Return to desk work and driving" },
      { when: "Month 3", what: "Most daily activities comfortable" },
      { when: "Month 6", what: "Continued improvement, especially night pain" },
    ],
    risks: stdShoulderRisks,
    faqs: [
      {
        q: "Does decompression work?",
        a: "In carefully selected patients who have not improved with physiotherapy, many experience meaningful pain relief. A thorough assessment is essential to identify those most likely to benefit.",
      },
    ],
    conditions: ["shoulder-impingement", "calcific-tendonitis", "ac-joint-arthritis"],
  },
  {
    slug: "shoulder-stabilisation",
    name: "Shoulder Stabilisation (incl. Latarjet)",
    region: "shoulder",
    category: "Reconstruction",
    short: "Repair of the labrum and ligaments to stop recurrent dislocation.",
    keyword: "shoulder stabilisation surgery",
    metaTitle: "Shoulder Stabilisation & Latarjet Surgery | Dislocation Specialist",
    metaDescription:
      "Arthroscopic labral repair and Latarjet surgery for recurrent shoulder dislocation — procedure, return-to-sport timeline and outcomes for active patients.",
    overview: [
      "Shoulder stabilisation repairs the torn labrum and tightens stretched ligaments, restoring the 'bumper' that keeps the ball centred in the socket. Most procedures are performed arthroscopically.",
      "When a dislocation has worn away part of the socket, or keyhole stabilisation has previously failed, a Latarjet procedure transfers a small block of bone to rebuild the front of the socket.",
    ],
    suitableFor: [
      "Recurrent dislocation or subluxation",
      "A first dislocation in young contact athletes (in selected cases)",
      "Instability with significant bone loss (Latarjet)",
    ],
    steps: [
      "General anaesthetic with nerve block",
      "Arthroscopic assessment of labrum, ligaments and bone",
      "Labrum re-attached to the socket rim with small anchors, or Latarjet bone block secured with screws",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "60–120 minutes", stay: "Day case or 1 night", sling: "3–4 weeks" },
    timeline: [
      { when: "Week 0–4", what: "Sling; protected exercises" },
      { when: "Week 4–12", what: "Restore movement; driving at about 6 weeks" },
      { when: "Month 3–4", what: "Non-contact sport and gym" },
      { when: "Month 5–6", what: "Contact and overhead sport once cleared" },
    ],
    risks: [...stdShoulderRisks, "Recurrent instability", "Loss of some outward rotation"],
    faqs: [
      {
        q: "What is the risk of dislocating again after surgery?",
        a: "Recurrence risk is low for most patients but varies with age, sport, bone loss and the technique used. Your surgeon will discuss your individual risk.",
      },
    ],
    conditions: ["shoulder-dislocation-instability", "slap-tear-labral-tear"],
  },
  {
    slug: "shoulder-replacement",
    name: "Total Shoulder Replacement",
    region: "shoulder",
    category: "Joint replacement",
    short: "Replacing the worn ball and socket to relieve arthritis pain.",
    keyword: "shoulder replacement Leicester",
    metaTitle: "Total Shoulder Replacement Surgery | Leicester & Warwickshire",
    metaDescription:
      "Anatomic total shoulder replacement for arthritis — 3D planning, hospital stay, sling time, recovery milestones and long-term results. Private consultations near you.",
    overview: [
      "An anatomic total shoulder replacement replaces the worn ball with a polished metal head and resurfaces the socket with a durable plastic component, recreating the shoulder's natural anatomy.",
      "It is one of the most reliable operations for relieving arthritis pain, provided the rotator cuff is healthy. CT-based 3D planning helps position the components precisely.",
    ],
    suitableFor: ["Osteoarthritis with an intact rotator cuff", "Inflammatory arthritis", "Post-traumatic arthritis"],
    steps: [
      "General anaesthetic with nerve block",
      "Incision of around 10–12cm at the front of the shoulder",
      "Removal of the arthritic surfaces and implantation of the new components",
      "Careful repair of the subscapularis tendon",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "1.5–2 hours", stay: "1–2 nights", sling: "4–6 weeks" },
    timeline: [
      { when: "Week 0–6", what: "Sling; gentle guided exercises" },
      { when: "Week 6–8", what: "Driving and light daily activities" },
      { when: "Month 3", what: "Most people have good pain relief and useful movement" },
      { when: "Month 6–12", what: "Golf, swimming and gardening typically resume" },
    ],
    risks: [...stdShoulderRisks, "Dislocation or instability", "Component loosening or wear over time", "Fracture around the implant"],
    faqs: [
      {
        q: "Can I play golf after a shoulder replacement?",
        a: "Many patients return to golf, swimming and similar low-impact sports at around six months. Heavy impact and contact sports are generally discouraged.",
      },
    ],
    conditions: ["shoulder-arthritis"],
  },
  {
    slug: "reverse-shoulder-replacement",
    name: "Reverse Shoulder Replacement",
    region: "shoulder",
    category: "Joint replacement",
    short: "A ball-and-socket swap that uses the deltoid when the rotator cuff has failed.",
    keyword: "reverse shoulder replacement",
    metaTitle: "Reverse Shoulder Replacement | Cuff Tear Arthropathy Specialist",
    metaDescription:
      "Reverse shoulder replacement for arthritis with a failed rotator cuff, massive tears and complex fractures — how it works, recovery and expected results.",
    overview: [
      "In a reverse shoulder replacement the ball and socket are swapped: a metal ball is fixed to the shoulder blade and a cup to the arm bone. This changes the mechanics so that the large deltoid muscle can lift the arm even when the rotator cuff no longer works.",
      "It has transformed the treatment of cuff tear arthropathy, massive irreparable tears and complex fractures in older patients.",
    ],
    suitableFor: [
      "Arthritis with a torn rotator cuff (cuff tear arthropathy)",
      "Massive irreparable rotator cuff tears with pseudoparalysis",
      "Complex proximal humerus fractures in older patients",
      "Revision of a failed previous replacement",
    ],
    steps: [
      "General anaesthetic with nerve block",
      "Incision at the front or top of the shoulder",
      "Implantation of the glenoid baseplate and ball, and the humeral stem and cup",
    ],
    facts: { anaesthetic: "General + nerve block", duration: "1.5–2 hours", stay: "1–3 nights", sling: "3–6 weeks" },
    timeline: [
      { when: "Week 0–4", what: "Sling; guided movement" },
      { when: "Week 6–8", what: "Driving and most daily tasks" },
      { when: "Month 3–6", what: "Overhead reach and function improve" },
      { when: "Month 12", what: "Final result; rotation behind the back may remain limited" },
    ],
    risks: [...stdShoulderRisks, "Dislocation", "Scapular notching", "Acromial stress fracture"],
    faqs: [
      {
        q: "Will I be able to lift my arm above my head?",
        a: "Most patients regain the ability to lift the arm well above shoulder height. Rotation, especially reaching behind the back, is less predictable.",
      },
    ],
    conditions: ["shoulder-arthritis", "rotator-cuff-tear", "shoulder-fractures"],
  },
  {
    slug: "capsular-release",
    name: "Frozen Shoulder Release",
    region: "shoulder",
    category: "Keyhole surgery",
    short: "Hydrodilatation, manipulation or keyhole release to restore movement.",
    keyword: "frozen shoulder surgery",
    metaTitle: "Frozen Shoulder Release & Hydrodilatation | Fast Relief",
    metaDescription:
      "Options for frozen shoulder: hydrodilatation, manipulation under anaesthetic and arthroscopic capsular release — how each works and how quickly you recover.",
    overview: [
      "When frozen shoulder fails to improve with simple measures, several procedures can speed recovery. Hydrodilatation stretches the capsule with fluid under local anaesthetic; arthroscopic capsular release precisely divides the tight capsule through keyhole surgery.",
      "Both are followed by intensive early physiotherapy, which is key to maintaining the movement gained.",
    ],
    suitableFor: ["Frozen shoulder with persistent pain and stiffness", "Post-operative or post-traumatic stiffness"],
    steps: [
      "Hydrodilatation: ultrasound or X-ray guided injection as an outpatient",
      "Capsular release: general anaesthetic and nerve block, keyhole division of the capsule, gentle manipulation",
      "Physiotherapy starting within 24–48 hours",
    ],
    facts: { anaesthetic: "Local (hydrodilatation) or General", duration: "15–45 minutes", stay: "Outpatient / day case", sling: "Comfort only" },
    timeline: [
      { when: "Day 1–2", what: "Physiotherapy begins; move the arm frequently" },
      { when: "Week 1–2", what: "Marked improvement in night pain for most" },
      { when: "Week 6–12", what: "Progressive gains in movement" },
    ],
    risks: ["Temporary pain flare", "Recurrence of stiffness", "Infection (rare)", "Fracture during manipulation (very rare)"],
    faqs: [
      {
        q: "Which is better — hydrodilatation or keyhole release?",
        a: "Hydrodilatation avoids an anaesthetic and is often tried first. Arthroscopic release offers a more controlled, complete release and is used when injection treatment has not worked or the shoulder is very stiff.",
      },
    ],
    conditions: ["frozen-shoulder"],
  },
  {
    slug: "ac-joint-reconstruction",
    name: "AC Joint Reconstruction",
    region: "shoulder",
    category: "Reconstruction",
    short: "Reconstruction of torn ligaments to restore the collarbone's position.",
    keyword: "AC joint reconstruction",
    metaTitle: "AC Joint Reconstruction Surgery | Shoulder Separation",
    metaDescription:
      "AC joint reconstruction for high-grade or chronic painful shoulder separations — synthetic ligament and graft techniques, recovery and return to sport.",
    overview: [
      "AC joint reconstruction restores the position of the collarbone after a high-grade separation, using a strong synthetic ligament or tendon graft to replace the torn coracoclavicular ligaments.",
    ],
    suitableFor: ["High-grade AC joint separations", "Chronic painful AC instability despite rehabilitation"],
    steps: ["General anaesthetic", "Small incision over the collarbone", "Reduction of the joint and fixation with a synthetic ligament or graft"],
    facts: { anaesthetic: "General + nerve block", duration: "60–90 minutes", stay: "Day case or 1 night", sling: "4–6 weeks" },
    timeline: [
      { when: "Week 0–6", what: "Sling; no lifting" },
      { when: "Month 3", what: "Gym and non-contact sport" },
      { when: "Month 4–6", what: "Contact sport once cleared" },
    ],
    risks: [...stdShoulderRisks, "Loss of reduction", "Irritation from implants"],
    faqs: [
      {
        q: "Is AC reconstruction worth it for an old injury?",
        a: "For chronic injuries with ongoing pain or weakness despite rehabilitation, reconstruction can be very effective. Each case is assessed individually.",
      },
    ],
    conditions: ["ac-joint-injury"],
  },
  {
    slug: "fracture-fixation",
    name: "Shoulder & Elbow Fracture Surgery",
    region: "both",
    category: "Reconstruction",
    short: "Plates, screws or replacement to restore broken bones around the joints.",
    keyword: "shoulder fracture surgery",
    metaTitle: "Shoulder & Elbow Fracture Surgery | Fixation & Non-union",
    metaDescription:
      "Surgical fixation of collarbone, upper arm and elbow fractures, radial head replacement and treatment of fractures that have not healed (non-union).",
    overview: [
      "Displaced fractures around the shoulder and elbow can be realigned and held with plates and screws, allowing earlier movement and a more predictable recovery. Complex fractures in older patients may be best treated with joint replacement.",
    ],
    suitableFor: ["Displaced collarbone fractures", "Proximal humerus fractures", "Elbow fractures and fracture-dislocations", "Fractures that have failed to heal"],
    steps: ["General anaesthetic", "Realignment of the fracture", "Fixation with plates, screws or wires — or replacement for unreconstructable fractures"],
    facts: { anaesthetic: "General + nerve block", duration: "1–2.5 hours", stay: "Day case to 2 nights", sling: "2–6 weeks" },
    timeline: [
      { when: "Week 0–2", what: "Wound check; early protected movement" },
      { when: "Week 6–12", what: "Bone union on X-ray; strengthening begins" },
      { when: "Month 3–12", what: "Return to work and sport depending on injury" },
    ],
    risks: ["Infection", "Stiffness", "Failure of fixation or non-union", "Nerve injury", "Prominent metalwork that may need removal"],
    faqs: [
      {
        q: "Will the plate need to come out?",
        a: "Most plates stay in permanently. Removal is only considered if the metalwork is prominent or uncomfortable after the bone has healed.",
      },
    ],
    conditions: ["shoulder-fractures", "elbow-fractures-dislocation"],
  },
  {
    slug: "image-guided-injections",
    name: "Image-Guided Injections & PRP",
    region: "both",
    category: "Non-surgical",
    short: "Ultrasound-guided steroid, PRP, hydrodilatation and barbotage — precisely placed.",
    keyword: "shoulder injection Leicester",
    metaTitle: "Ultrasound-Guided Shoulder & Elbow Injections | PRP | Leicester",
    metaDescription:
      "Precisely placed ultrasound-guided steroid, PRP and hydrodilatation injections for shoulder and elbow pain. Outpatient treatment near Leicester, Nuneaton & Warwickshire.",
    overview: [
      "Image guidance — usually ultrasound — allows an injection to be placed exactly where it is needed, rather than relying on landmarks alone. This improves accuracy and can reduce discomfort.",
      "Injections are typically used to settle pain so that rehabilitation can work, to confirm a diagnosis, or as a treatment in their own right (for example hydrodilatation and barbotage).",
    ],
    suitableFor: [
      "Subacromial pain and bursitis",
      "Frozen shoulder (steroid or hydrodilatation)",
      "Calcific tendonitis (barbotage)",
      "AC joint and glenohumeral arthritis",
      "Tennis and golfer's elbow (steroid or PRP)",
      "Elbow arthritis",
    ],
    steps: [
      "Skin cleaned and local anaesthetic given",
      "Ultrasound used to guide the needle to the target",
      "Medication injected; a dressing applied",
      "Advice on activity and physiotherapy afterwards",
    ],
    facts: { anaesthetic: "Local", duration: "10–30 minutes", stay: "Outpatient", sling: "Not required" },
    timeline: [
      { when: "0–24 hours", what: "Local anaesthetic may give immediate relief, which wears off" },
      { when: "Day 2–7", what: "Steroid typically starts to work; occasional short flare" },
      { when: "Week 2–8", what: "Window to progress physiotherapy effectively" },
    ],
    risks: [
      "Temporary pain flare",
      "Skin thinning or lightening at the injection site",
      "Temporary rise in blood sugar in people with diabetes",
      "Infection (very rare)",
    ],
    faqs: [
      {
        q: "Do shoulder injections hurt?",
        a: "Local anaesthetic and a fine needle keep discomfort to a minimum. Most people describe a pressure sensation rather than pain.",
      },
      {
        q: "How long does a steroid injection last?",
        a: "Relief varies from a few weeks to several months. It is most effective when combined with a targeted exercise programme.",
      },
    ],
    conditions: ["shoulder-impingement", "frozen-shoulder", "calcific-tendonitis", "tennis-elbow", "golfers-elbow", "shoulder-arthritis"],
  },
  {
    slug: "elbow-arthroscopy",
    name: "Elbow Arthroscopy",
    region: "elbow",
    category: "Keyhole surgery",
    short: "Keyhole surgery to remove loose bodies, bone spurs and release stiffness.",
    keyword: "elbow arthroscopy",
    metaTitle: "Elbow Arthroscopy (Keyhole Surgery) | Stiff & Locking Elbow",
    metaDescription:
      "Keyhole elbow surgery for arthritis, loose bodies, stiffness and tennis elbow — a day-case procedure with early movement and a fast recovery.",
    overview: [
      "Elbow arthroscopy allows the surgeon to remove loose fragments, trim bone spurs that block movement and release a tight capsule through several small incisions. It is a technically demanding procedure best performed by a specialist elbow surgeon because of the nearby nerves.",
    ],
    suitableFor: ["Elbow arthritis with pain at the end of movement", "Locking from loose bodies", "Post-traumatic stiffness", "Selected tennis elbow cases"],
    steps: ["General anaesthetic", "Several small incisions around the elbow", "Removal of spurs and loose bodies; capsular release if required"],
    facts: { anaesthetic: "General (± nerve block)", duration: "45–90 minutes", stay: "Day case", sling: "Comfort only" },
    timeline: [
      { when: "Day 1", what: "Start moving the elbow" },
      { when: "Week 2", what: "Stitches out; return to light work" },
      { when: "Week 6–12", what: "Strength and endurance return" },
    ],
    risks: ["Nerve injury (rare)", "Infection", "Recurrent stiffness", "Persistent wound drainage"],
    faqs: [
      { q: "Will I get full movement back?", a: "Most patients gain meaningful movement and pain relief; the final range depends on the underlying joint damage." },
    ],
    conditions: ["elbow-arthritis", "elbow-fractures-dislocation", "tennis-elbow"],
  },
  {
    slug: "tennis-elbow-surgery",
    name: "Tennis & Golfer's Elbow Surgery",
    region: "elbow",
    category: "Nerve & tendon",
    short: "Release and debridement of degenerate tendon for persistent elbow pain.",
    keyword: "tennis elbow surgery",
    metaTitle: "Tennis Elbow Surgery | Release for Persistent Elbow Pain",
    metaDescription:
      "When tennis or golfer's elbow persists despite exercise and injections, surgical release can help. Procedure, recovery and success rates explained.",
    overview: [
      "For the small proportion of patients whose tennis or golfer's elbow persists for many months despite a well-structured exercise programme, surgery removes the degenerate tendon tissue and releases the tension on the tendon origin.",
    ],
    suitableFor: ["Symptoms beyond 9–12 months despite rehabilitation", "Failure of injection treatment"],
    steps: ["General or regional anaesthetic", "Small incision (or arthroscopic approach)", "Removal of degenerate tissue and release of the tendon origin"],
    facts: { anaesthetic: "General or regional", duration: "30–45 minutes", stay: "Day case", sling: "Comfort only" },
    timeline: [
      { when: "Week 0–2", what: "Gentle use; wound healing" },
      { when: "Week 4–6", what: "Progressive strengthening" },
      { when: "Month 3–6", what: "Return to heavy gripping and sport" },
    ],
    risks: ["Infection", "Persistent pain", "Weakness of grip", "Nerve irritation"],
    faqs: [{ q: "How successful is tennis elbow surgery?", a: "Most patients report a good improvement, although full benefit can take several months." }],
    conditions: ["tennis-elbow", "golfers-elbow"],
  },
  {
    slug: "distal-biceps-repair",
    name: "Distal Biceps Repair",
    region: "elbow",
    category: "Nerve & tendon",
    short: "Re-attachment of a ruptured biceps tendon to restore strength.",
    keyword: "distal biceps repair",
    metaTitle: "Distal Biceps Tendon Repair Surgery | Fast-Track Assessment",
    metaDescription:
      "Distal biceps tendon repair restores elbow and forearm strength after rupture. Best within 2–3 weeks — rapid specialist assessment and surgery near Leicester.",
    overview: [
      "Distal biceps repair re-attaches the ruptured tendon to the radius using a small cortical button or anchor. Restoring the attachment recovers the strength needed to turn the forearm (supination) and bend the elbow.",
    ],
    suitableFor: ["Complete ruptures in active patients", "Symptomatic partial tears", "Chronic ruptures (may require a graft)"],
    steps: ["General anaesthetic with nerve block", "Single small incision at the front of the forearm", "Tendon re-attached to bone with a button or anchor"],
    facts: { anaesthetic: "General + nerve block", duration: "45–75 minutes", stay: "Day case", sling: "2 weeks (± brace)" },
    timeline: [
      { when: "Week 0–2", what: "Sling or brace; gentle movement" },
      { when: "Week 2–6", what: "Light daily use; no lifting" },
      { when: "Month 3–4", what: "Return to heavy lifting and gym" },
    ],
    risks: ["Numbness of the forearm skin (usually temporary)", "Infection", "Re-rupture (uncommon)", "Heterotopic ossification"],
    faqs: [{ q: "When can I return to the gym?", a: "Light gym work usually resumes at three months and heavy lifting around four months, guided by your surgeon and physiotherapist." }],
    conditions: ["distal-biceps-rupture"],
  },
  {
    slug: "cubital-tunnel-release",
    name: "Cubital Tunnel Release",
    region: "elbow",
    category: "Nerve & tendon",
    short: "Day-case decompression of the ulnar nerve at the elbow.",
    keyword: "cubital tunnel release",
    metaTitle: "Cubital Tunnel Release Surgery | Ulnar Nerve Decompression",
    metaDescription:
      "Day-case cubital tunnel release to relieve ulnar nerve compression — tingling and numbness in the ring and little fingers. Procedure and recovery explained.",
    overview: [
      "Cubital tunnel release frees the ulnar nerve from the tight structures compressing it at the inner elbow. If the nerve is unstable and flicks over the bone, it can be moved to the front of the elbow (transposition).",
    ],
    suitableFor: ["Persistent tingling or numbness", "Weakness or muscle wasting", "Moderate–severe compression on nerve studies"],
    steps: ["General or regional anaesthetic", "Incision on the inner elbow", "Release of the roof of the tunnel; transposition if needed"],
    facts: { anaesthetic: "General or regional", duration: "30–60 minutes", stay: "Day case", sling: "Comfort only" },
    timeline: [
      { when: "Day 1", what: "Gentle movement encouraged" },
      { when: "Week 2", what: "Wound check; return to light work" },
      { when: "Month 3–12", what: "Sensation and strength recover gradually" },
    ],
    risks: ["Infection", "Scar tenderness", "Incomplete recovery of sensation", "Numbness around the scar"],
    faqs: [{ q: "Will the numbness fully recover?", a: "Tingling often improves quickly. Long-standing numbness and weakness may recover only partially, which is why earlier treatment is advised." }],
    conditions: ["cubital-tunnel-syndrome", "golfers-elbow"],
  },
  {
    slug: "elbow-replacement",
    name: "Elbow Replacement",
    region: "elbow",
    category: "Joint replacement",
    short: "Replacement of the elbow joint or radial head for advanced arthritis or fracture.",
    keyword: "elbow replacement surgery",
    metaTitle: "Elbow Replacement Surgery | Total & Radial Head Replacement",
    metaDescription:
      "Total elbow and radial head replacement for advanced arthritis and complex fractures — who is suitable, recovery and lifelong lifting precautions.",
    overview: [
      "Total elbow replacement replaces both sides of the elbow hinge and can reliably relieve pain in advanced rheumatoid arthritis, severe osteoarthritis and some complex fractures in older patients. Radial head replacement treats unreconstructable radial head fractures.",
    ],
    suitableFor: ["Advanced inflammatory arthritis", "Severe osteoarthritis in lower-demand patients", "Complex distal humerus fractures in older patients"],
    steps: ["General anaesthetic", "Incision at the back of the elbow", "Implantation of linked humeral and ulnar components"],
    facts: { anaesthetic: "General + nerve block", duration: "1.5–2 hours", stay: "1–2 nights", sling: "1–2 weeks" },
    timeline: [
      { when: "Week 0–2", what: "Wound protection; early gentle movement" },
      { when: "Week 6", what: "Most daily activities" },
      { when: "Lifelong", what: "Avoid lifting more than around 2–5kg repeatedly with the operated arm" },
    ],
    risks: ["Infection", "Loosening", "Ulnar nerve irritation", "Wound problems", "Periprosthetic fracture"],
    faqs: [{ q: "Why are there lifting restrictions?", a: "Elbow replacements are less robust than hip or knee replacements; limiting heavy loads helps them last longer." }],
    conditions: ["elbow-arthritis", "elbow-fractures-dislocation"],
  },
];

export const treatmentBySlug = (slug: string) => treatments.find((t) => t.slug === slug);
