export type Region = "shoulder" | "elbow";
export type FAQ = { q: string; a: string };

export type Condition = {
  slug: string;
  name: string;
  aka?: string;
  region: Region;
  /** illustration hotspot key, see components/JointIllustration */
  spot: string;
  short: string;
  keyword: string;
  metaTitle: string;
  metaDescription: string;
  overview: string[];
  symptoms: string[];
  causes: string[];
  diagnosis: string[];
  nonSurgical: string[];
  surgical: string[];
  treatments: string[];
  recovery: string;
  seekHelp: string[];
  faqs: FAQ[];
};

export const conditions: Condition[] = [
  // ───────────────────────────── SHOULDER ─────────────────────────────
  {
    slug: "rotator-cuff-tear",
    name: "Rotator Cuff Tear",
    aka: "Torn shoulder tendon",
    region: "shoulder",
    spot: "cuff",
    short: "Torn shoulder tendons causing pain, night ache and weakness lifting the arm.",
    keyword: "rotator cuff tear treatment Leicester",
    metaTitle: "Rotator Cuff Tear Treatment & Repair | Leicester & Warwickshire",
    metaDescription:
      "Specialist assessment and treatment of rotator cuff tears — ultrasound/MRI diagnosis, injections, physiotherapy and keyhole repair. Clinics in Leicester, Nuneaton & Warwickshire.",
    overview: [
      "The rotator cuff is a group of four muscles and tendons that wrap around the ball of the shoulder, keeping it centred in the socket while you lift and rotate your arm. A tear can happen suddenly — after a fall or a heavy lift — or develop gradually as the tendon wears with age and repetitive overhead activity.",
      "Not every tear needs surgery. Many degenerative tears in people over 60 respond well to targeted physiotherapy, while acute tears in active people often do best when repaired early, before the tendon retracts and the muscle weakens. A specialist assessment helps you understand which group you fall into.",
    ],
    symptoms: [
      "Pain over the outside of the upper arm, often radiating towards the elbow",
      "Night pain and difficulty lying on the affected side",
      "Weakness or catching when lifting the arm above shoulder height",
      "Difficulty with everyday tasks such as dressing, reaching a shelf or brushing hair",
      "A sudden loss of strength after a fall or lift (acute tear)",
    ],
    causes: [
      "Age-related wear of the tendon (most common over 50)",
      "A fall onto an outstretched arm or a shoulder dislocation",
      "Repetitive overhead work or sport — plastering, painting, racquet sports, swimming",
      "Smoking and diabetes, which reduce tendon blood supply",
    ],
    diagnosis: [
      "Detailed history and clinical examination testing each cuff tendon",
      "X-ray to assess bone shape and exclude arthritis",
      "Ultrasound scan — often performed in clinic — to confirm the size of the tear",
      "MRI scan to assess tear size, retraction and muscle quality before surgery",
    ],
    nonSurgical: [
      "Activity modification and simple pain relief",
      "A structured, shoulder-specific physiotherapy programme to strengthen the remaining cuff and shoulder blade muscles",
      "Image-guided steroid injection to settle pain and allow rehabilitation",
    ],
    surgical: [
      "Arthroscopic (keyhole) rotator cuff repair, re-attaching the tendon to bone with small anchors",
      "Subacromial decompression may be combined where there is bone spur irritation",
      "Reverse shoulder replacement for massive, irreparable tears with arthritis (cuff tear arthropathy)",
    ],
    treatments: ["rotator-cuff-repair", "shoulder-arthroscopy", "image-guided-injections", "reverse-shoulder-replacement"],
    recovery:
      "After repair, the arm is protected in a sling for around four to six weeks while the tendon heals to bone. Physiotherapy then restores movement and, from about three months, strength. Most people return to desk work within two to three weeks, driving at around six to eight weeks, and heavier work or sport at four to six months. Full recovery can take up to a year.",
    seekHelp: [
      "You cannot lift your arm after an injury",
      "Night pain is disturbing your sleep for more than a few weeks",
      "Pain or weakness has not improved after six to eight weeks of physiotherapy",
    ],
    faqs: [
      {
        q: "Will a rotator cuff tear heal on its own?",
        a: "Torn tendon does not usually reattach to bone by itself, but many people regain good, pain-free function with physiotherapy because the surrounding muscles compensate. Whether surgery is worthwhile depends on the tear size, your age, activity level and symptoms.",
      },
      {
        q: "How soon should an acute rotator cuff tear be repaired?",
        a: "For a sudden traumatic tear in an active person, earlier repair — ideally within a few weeks — tends to give better results because the tendon has not yet retracted and the muscle has not wasted. Early specialist review is recommended.",
      },
      {
        q: "Is rotator cuff repair done as keyhole surgery?",
        a: "Yes. Most repairs are performed arthroscopically through several small incisions, usually as a day case or with one overnight stay, under general anaesthetic combined with a nerve block for pain relief.",
      },
    ],
  },
  {
    slug: "frozen-shoulder",
    name: "Frozen Shoulder",
    aka: "Adhesive capsulitis",
    region: "shoulder",
    spot: "capsule",
    short: "Painful, progressive stiffness as the joint lining thickens and tightens.",
    keyword: "frozen shoulder treatment Leicester",
    metaTitle: "Frozen Shoulder Treatment | Hydrodilatation & Release | Leicester",
    metaDescription:
      "Fast relief for frozen shoulder (adhesive capsulitis): steroid injection, hydrodilatation, manipulation and keyhole capsular release. Leicester, Nuneaton & Warwickshire clinics.",
    overview: [
      "Frozen shoulder occurs when the capsule — the lining that surrounds the shoulder joint — becomes inflamed, thickened and contracted. The result is severe pain followed by marked stiffness, particularly when turning the arm outwards or reaching behind the back.",
      "It most commonly affects people aged 40 to 60, women slightly more than men, and is far more common in people with diabetes or thyroid disease. Left alone it often improves over 18 months to three years, but modern treatments can shorten that dramatically.",
    ],
    symptoms: [
      "Deep, aching shoulder pain that is often worse at night",
      "Progressive loss of movement in all directions — especially rotating the arm outwards",
      "Difficulty doing up a bra, putting on a coat or reaching a back pocket",
      "Sharp pain with sudden or unexpected movements",
    ],
    causes: [
      "Often no clear cause (primary frozen shoulder)",
      "Diabetes, thyroid disorders and high cholesterol",
      "After an injury, fracture or period of immobilisation",
      "After surgery to the shoulder, breast or chest",
    ],
    diagnosis: [
      "Clinical examination — loss of external rotation with a normal X-ray is characteristic",
      "X-ray to exclude arthritis or calcific deposits, which can look similar",
      "Ultrasound or MRI occasionally used where the diagnosis is uncertain",
    ],
    nonSurgical: [
      "Pain relief and gentle stretching within comfort",
      "Image-guided steroid injection, which is most effective in the early painful phase",
      "Hydrodilatation — a large-volume injection that stretches the tight capsule from inside",
      "Physiotherapy to maintain and progressively regain movement",
    ],
    surgical: [
      "Manipulation under anaesthetic (MUA) to gently stretch the capsule",
      "Arthroscopic capsular release — the tight capsule is precisely divided through keyhole surgery, followed by immediate physiotherapy",
    ],
    treatments: ["capsular-release", "image-guided-injections", "shoulder-arthroscopy"],
    recovery:
      "After hydrodilatation or capsular release, the key to success is early, frequent exercise. Physiotherapy usually starts within 24–48 hours. Most people notice a rapid improvement in night pain within days and continue to regain movement over six to twelve weeks.",
    seekHelp: [
      "Pain is preventing sleep or work",
      "You are steadily losing the ability to move your arm",
      "You have diabetes and new shoulder stiffness",
    ],
    faqs: [
      {
        q: "How long does frozen shoulder last without treatment?",
        a: "Typically between 18 months and three years, passing through a painful 'freezing' phase, a stiff 'frozen' phase and a gradual 'thawing' phase. Some people never regain full movement, which is why earlier treatment is often worthwhile.",
      },
      {
        q: "What is hydrodilatation?",
        a: "Hydrodilatation is an image-guided injection of saline, local anaesthetic and steroid into the shoulder joint. The volume stretches the contracted capsule, often easing pain quickly and allowing physiotherapy to restore movement. It is performed under local anaesthetic as an outpatient.",
      },
      {
        q: "Should I keep moving a frozen shoulder?",
        a: "Yes, within comfort. Forcing painful stretches during the inflamed early phase can aggravate it, so a tailored programme from a shoulder physiotherapist is best.",
      },
    ],
  },
  {
    slug: "shoulder-impingement",
    name: "Shoulder Impingement & Bursitis",
    aka: "Subacromial pain syndrome",
    region: "shoulder",
    spot: "subacromial",
    short: "Painful arc when lifting the arm, caused by irritated tendons and bursa.",
    keyword: "shoulder impingement specialist",
    metaTitle: "Shoulder Impingement & Bursitis Treatment | Leicester & Nuneaton",
    metaDescription:
      "Shoulder pain lifting your arm? Specialist diagnosis and treatment of impingement and subacromial bursitis — physiotherapy, guided injection and keyhole decompression.",
    overview: [
      "Subacromial pain — often called impingement — is one of the most common causes of shoulder pain. The rotator cuff tendons and the fluid-filled bursa that cushions them become irritated in the space beneath the acromion (the bony roof of the shoulder).",
      "It typically causes pain when the arm is raised between waist and head height. Most people improve without surgery, but persistent cases may benefit from keyhole decompression.",
    ],
    symptoms: [
      "Pain over the top and outside of the shoulder",
      "A 'painful arc' when lifting the arm out to the side",
      "Pain reaching overhead or behind the back",
      "Night pain when lying on the shoulder",
    ],
    causes: [
      "Overuse — repetitive overhead work or sport",
      "Rotator cuff tendinopathy or partial tears",
      "Bone spurs on the underside of the acromion or AC joint",
      "Poor shoulder blade (scapular) control and posture",
    ],
    diagnosis: [
      "Clinical examination with specific impingement tests",
      "X-ray to look for spurs and the shape of the acromion",
      "Ultrasound to assess the bursa and exclude a full-thickness tear",
      "Diagnostic local-anaesthetic injection to confirm the source of pain",
    ],
    nonSurgical: [
      "Specialist physiotherapy focusing on rotator cuff and scapular strength",
      "Image-guided subacromial steroid injection",
      "Activity and workplace modification",
    ],
    surgical: [
      "Arthroscopic subacromial decompression (ASD) — removal of inflamed bursa and any bone spur",
      "Treatment of associated AC joint arthritis or cuff tears at the same time",
    ],
    treatments: ["subacromial-decompression", "image-guided-injections", "shoulder-arthroscopy"],
    recovery:
      "After keyhole decompression, the sling is usually only needed for comfort for a few days. Most people return to desk work in one to two weeks, drive at two to three weeks and continue improving for three to six months.",
    seekHelp: [
      "Pain persists despite three months of good-quality physiotherapy",
      "Night pain is affecting sleep",
      "You have weakness as well as pain (possible tear)",
    ],
    faqs: [
      {
        q: "Is surgery necessary for shoulder impingement?",
        a: "Usually not. Most patients improve with physiotherapy and, if needed, a guided injection. Decompression surgery is considered for persistent symptoms where there is a clear structural cause.",
      },
      {
        q: "How many steroid injections can I have?",
        a: "Most specialists limit injections to two or three in the same area over a year, because repeated steroid can weaken tendon tissue. Injections work best as a window for effective rehabilitation.",
      },
      {
        q: "Is impingement the same as a rotator cuff tear?",
        a: "No, but they are related. Impingement describes irritation of the tendons and bursa; over time the tendon can become damaged and tear. An ultrasound scan distinguishes the two.",
      },
    ],
  },
  {
    slug: "calcific-tendonitis",
    name: "Calcific Tendonitis",
    region: "shoulder",
    spot: "cuff",
    short: "Calcium deposits in the rotator cuff causing sudden, severe shoulder pain.",
    keyword: "calcific tendonitis shoulder treatment",
    metaTitle: "Calcific Tendonitis of the Shoulder | Barbotage & Surgery",
    metaDescription:
      "Severe shoulder pain from calcium deposits? Specialist treatment of calcific tendonitis including ultrasound-guided barbotage, injection and keyhole removal.",
    overview: [
      "Calcific tendonitis occurs when calcium deposits form within the rotator cuff tendons, most often the supraspinatus. Deposits can be painless for years, but when the body starts to reabsorb them the result can be some of the most intense shoulder pain a person experiences.",
      "It is most common between the ages of 30 and 60. Many deposits resolve naturally, and a range of minimally invasive treatments can speed this up.",
    ],
    symptoms: [
      "Sudden, severe pain — sometimes with no injury",
      "Pain so intense that moving the arm is very difficult",
      "Night pain and difficulty sleeping",
      "Chronic grumbling pain with a painful arc in the 'formative' phase",
    ],
    causes: [
      "The exact cause is not fully understood",
      "More common in people with diabetes or thyroid conditions",
      "Not caused by dietary calcium",
    ],
    diagnosis: [
      "X-ray clearly shows the size and position of the deposit",
      "Ultrasound assesses the consistency of the calcium and guides treatment",
    ],
    nonSurgical: [
      "Pain relief and physiotherapy",
      "Ultrasound-guided steroid injection",
      "Ultrasound-guided barbotage — the deposit is broken up and washed out with a needle",
      "Shockwave therapy in selected cases",
    ],
    surgical: ["Arthroscopic removal of the calcium deposit, often with subacromial decompression"],
    treatments: ["image-guided-injections", "subacromial-decompression", "shoulder-arthroscopy"],
    recovery:
      "After barbotage, pain may flare for a few days before settling. After keyhole removal, most people use a sling for comfort for a week and return to normal activities over six to twelve weeks.",
    seekHelp: [
      "You have sudden, severe shoulder pain",
      "Pain has not settled after several weeks of simple treatment",
    ],
    faqs: [
      {
        q: "Will calcific tendonitis go away on its own?",
        a: "Often, yes — many deposits are reabsorbed naturally over months. Treatment aims to control pain and speed up recovery when symptoms are severe or prolonged.",
      },
      {
        q: "What is barbotage?",
        a: "Barbotage is an ultrasound-guided procedure under local anaesthetic in which a needle is used to break up the calcium deposit and rinse it out, usually followed by a steroid injection.",
      },
    ],
  },
  {
    slug: "shoulder-arthritis",
    name: "Shoulder Arthritis",
    aka: "Glenohumeral osteoarthritis",
    region: "shoulder",
    spot: "joint",
    short: "Wear of the joint cartilage causing deep pain, stiffness and grinding.",
    keyword: "shoulder arthritis specialist Leicester",
    metaTitle: "Shoulder Arthritis Treatment & Replacement | Leicester Specialist",
    metaDescription:
      "Expert care for shoulder osteoarthritis and rheumatoid arthritis — injections, physiotherapy and anatomic or reverse shoulder replacement. Leicester, Nuneaton & Warwickshire.",
    overview: [
      "Arthritis of the shoulder joint occurs when the smooth cartilage covering the ball (humeral head) and socket (glenoid) wears away. Bone then rubs on bone, causing pain, stiffness and a grinding sensation.",
      "Osteoarthritis is the most common type, but rheumatoid arthritis, previous fractures, dislocations and long-standing rotator cuff tears can also damage the joint. Treatment ranges from injections to joint replacement, which is highly effective at relieving pain.",
    ],
    symptoms: [
      "Deep, aching pain in the joint, often worse at night",
      "Gradually increasing stiffness",
      "Grinding, clicking or crunching with movement",
      "Difficulty with washing, dressing and reaching",
    ],
    causes: [
      "Age-related osteoarthritis",
      "Inflammatory arthritis such as rheumatoid arthritis",
      "Previous fracture, dislocation or instability surgery",
      "Long-standing massive rotator cuff tear (cuff tear arthropathy)",
    ],
    diagnosis: [
      "X-rays to assess joint space and bone shape",
      "CT scan to plan joint replacement and measure the socket",
      "MRI or ultrasound to assess the rotator cuff",
    ],
    nonSurgical: [
      "Pain relief and anti-inflammatory medication",
      "Activity modification and physiotherapy",
      "Image-guided steroid injection",
    ],
    surgical: [
      "Anatomic total shoulder replacement when the rotator cuff is intact",
      "Reverse shoulder replacement when the cuff is torn or the patient is older",
      "Arthroscopic debridement in selected younger patients",
    ],
    treatments: ["shoulder-replacement", "reverse-shoulder-replacement", "image-guided-injections"],
    recovery:
      "After shoulder replacement, a sling is worn for around four to six weeks. Most people stay one or two nights in hospital, drive at six to eight weeks, and notice significant pain relief early on, with function continuing to improve for up to a year.",
    seekHelp: [
      "Pain is waking you at night",
      "Simple painkillers and injections no longer help",
      "Stiffness is limiting daily independence",
    ],
    faqs: [
      {
        q: "How long does a shoulder replacement last?",
        a: "Modern shoulder replacements are expected to last well over ten years in most patients, and national registry data show good long-term survival. Your surgeon will discuss the evidence for your specific implant.",
      },
      {
        q: "Am I too young for a shoulder replacement?",
        a: "There is no strict age limit. Decisions are based on symptoms, X-ray findings and activity level. In younger patients, all non-surgical options are usually explored first.",
      },
    ],
  },
  {
    slug: "shoulder-dislocation-instability",
    name: "Shoulder Dislocation & Instability",
    region: "shoulder",
    spot: "labrum",
    short: "A shoulder that has dislocated, slips or feels unstable during activity.",
    keyword: "shoulder dislocation specialist Leicester",
    metaTitle: "Shoulder Dislocation & Instability Surgery | Leicester & Warwickshire",
    metaDescription:
      "Recurrent dislocation or an unstable shoulder? Specialist MRI assessment, rehab and arthroscopic stabilisation or Latarjet surgery for athletes and active patients.",
    overview: [
      "The shoulder is the most mobile joint in the body, which also makes it the most likely to dislocate. A dislocation usually tears the labrum — the rim of cartilage that deepens the socket — and stretches the ligaments, leaving the joint prone to further episodes.",
      "Young people who play contact or overhead sports have a high risk of re-dislocation after a first episode. Early specialist assessment allows a clear plan, whether that is targeted rehabilitation or stabilisation surgery.",
    ],
    symptoms: [
      "One or more dislocations needing to be put back in",
      "Feeling that the shoulder slips out and back in (subluxation)",
      "Apprehension or lack of confidence with the arm overhead",
      "Clicking, pain or a 'dead arm' sensation during sport",
    ],
    causes: [
      "A traumatic injury — tackles, falls and collisions",
      "Naturally loose joints (multidirectional instability)",
      "Repetitive overhead sports such as swimming and throwing",
    ],
    diagnosis: [
      "Clinical examination and instability tests",
      "X-rays to check the joint is located and look for bone injury",
      "MRI arthrogram to assess the labrum and ligaments",
      "CT scan to measure bone loss from the socket or ball",
    ],
    nonSurgical: [
      "Sling for comfort initially",
      "Specialist physiotherapy to strengthen the dynamic stabilisers",
      "Graded return-to-sport programme",
    ],
    surgical: [
      "Arthroscopic (keyhole) labral repair and stabilisation",
      "Latarjet procedure (bone block) where there is significant bone loss or failed previous surgery",
    ],
    treatments: ["shoulder-stabilisation", "shoulder-arthroscopy"],
    recovery:
      "After stabilisation, a sling is worn for around three to four weeks. Non-contact sport typically resumes at about three to four months and contact or overhead sport at five to six months, once strength and confidence have returned.",
    seekHelp: [
      "You have dislocated your shoulder, particularly if you are under 30",
      "Your shoulder repeatedly slips or feels unstable",
      "You have numbness or weakness after a dislocation",
    ],
    faqs: [
      {
        q: "Do I need surgery after my first shoulder dislocation?",
        a: "Not always. The decision depends on age, sport, the type of injury on MRI and your goals. Young contact athletes have a high re-dislocation rate and may be offered early stabilisation; others do well with rehabilitation.",
      },
      {
        q: "What is the Latarjet procedure?",
        a: "Latarjet transfers a small piece of bone (the coracoid) with its attached tendons to the front of the socket, restoring bone stock and acting as a sling. It is used for bone loss or recurrent instability after previous surgery.",
      },
    ],
  },
  {
    slug: "ac-joint-injury",
    name: "AC Joint Injury",
    aka: "Shoulder separation",
    region: "shoulder",
    spot: "acj",
    short: "Sprain or disruption of the joint at the top of the shoulder, often from a fall.",
    keyword: "AC joint injury treatment",
    metaTitle: "AC Joint Injury & Separation Treatment | Shoulder Specialist",
    metaDescription:
      "Fallen onto your shoulder with a painful bump? Specialist grading and treatment of AC joint sprains and separations — rehab or surgical reconstruction.",
    overview: [
      "The acromioclavicular (AC) joint is where the collarbone meets the top of the shoulder blade. A fall directly onto the point of the shoulder — common in cycling, rugby and horse riding — can sprain or tear the ligaments that hold it together.",
      "Injuries are graded from mild sprains to complete separations with an obvious bump. Most heal well with rehabilitation; higher-grade or persistently painful injuries may need reconstruction.",
    ],
    symptoms: [
      "Pain on the top of the shoulder after a fall",
      "A visible bump or step at the end of the collarbone",
      "Pain reaching across the body or lying on the shoulder",
    ],
    causes: ["Direct fall onto the shoulder", "Contact sports and cycling accidents"],
    diagnosis: ["Clinical examination", "X-rays, sometimes comparing both shoulders, to grade the injury"],
    nonSurgical: ["Sling for comfort for one to two weeks", "Ice and pain relief", "Progressive physiotherapy"],
    surgical: [
      "AC joint reconstruction using a synthetic ligament or tendon graft for high-grade or chronic painful injuries",
    ],
    treatments: ["ac-joint-reconstruction", "shoulder-arthroscopy"],
    recovery:
      "Low-grade injuries usually recover in two to eight weeks. After reconstruction, a sling is worn for about four to six weeks, with return to contact sport at around four to six months.",
    seekHelp: ["You have a significant bump after a fall", "Pain persists beyond six to eight weeks"],
    faqs: [
      {
        q: "Will the bump on my shoulder go away?",
        a: "The bump usually remains after a higher-grade injury, but many people regain full, pain-free function despite it. Surgery is aimed at pain and function rather than appearance alone.",
      },
    ],
  },
  {
    slug: "ac-joint-arthritis",
    name: "AC Joint Arthritis",
    region: "shoulder",
    spot: "acj",
    short: "Wear of the small joint on top of the shoulder causing localised pain.",
    keyword: "AC joint arthritis treatment",
    metaTitle: "AC Joint Arthritis Treatment | Injection & Keyhole Excision",
    metaDescription:
      "Pain on top of the shoulder when reaching across your body? Specialist treatment of AC joint arthritis with guided injection or keyhole excision.",
    overview: [
      "Arthritis of the acromioclavicular joint is very common, particularly in people who have done manual work, weight training or had a previous AC joint injury. It produces pain on the very top of the shoulder that you can often point to with one finger.",
    ],
    symptoms: [
      "Localised pain on top of the shoulder",
      "Pain reaching across the body, e.g. washing the opposite armpit",
      "Pain lying on the affected side",
      "Swelling or a bony lump over the joint",
    ],
    causes: ["Wear and tear", "Previous AC joint injury", "Weightlifting (especially bench press)"],
    diagnosis: [
      "Clinical examination",
      "X-ray showing narrowing and spurs",
      "Diagnostic image-guided injection",
    ],
    nonSurgical: ["Activity modification", "Image-guided steroid injection", "Physiotherapy"],
    surgical: ["Arthroscopic excision of the end of the collarbone (distal clavicle excision)"],
    treatments: ["subacromial-decompression", "image-guided-injections", "shoulder-arthroscopy"],
    recovery:
      "After keyhole excision, most people use a sling for comfort for a few days, return to desk work within one to two weeks and to the gym at around three months.",
    seekHelp: ["Pain persists despite injection and activity changes"],
    faqs: [
      {
        q: "Does removing the end of the collarbone weaken the shoulder?",
        a: "Only a few millimetres of bone are removed and the supporting ligaments are preserved, so strength and stability are not usually affected.",
      },
    ],
  },
  {
    slug: "slap-tear-labral-tear",
    name: "SLAP & Labral Tears",
    region: "shoulder",
    spot: "labrum",
    short: "Tears of the cartilage rim of the socket, common in throwing and overhead athletes.",
    keyword: "SLAP tear surgery",
    metaTitle: "SLAP & Labral Tear Treatment | Shoulder Sports Injury Specialist",
    metaDescription:
      "Deep shoulder pain or clicking when throwing or lifting overhead? Specialist diagnosis of SLAP and labral tears with MRI arthrogram and keyhole repair.",
    overview: [
      "A SLAP tear (Superior Labrum Anterior to Posterior) is a tear at the top of the labrum where the biceps tendon attaches. It is most common in throwing athletes, weightlifters and after falls onto an outstretched arm.",
    ],
    symptoms: [
      "Deep pain in the shoulder with overhead or throwing activities",
      "Clicking, catching or locking",
      "Loss of power or velocity in throwing",
    ],
    causes: ["Repetitive throwing", "Falls onto an outstretched hand", "Heavy lifting"],
    diagnosis: ["Clinical examination", "MRI arthrogram — the most accurate imaging test"],
    nonSurgical: ["Physiotherapy focusing on posterior capsule and scapular control", "Modified training"],
    surgical: [
      "Arthroscopic labral repair with small anchors",
      "Biceps tenodesis in selected patients, particularly over 35",
    ],
    treatments: ["shoulder-arthroscopy", "shoulder-stabilisation"],
    recovery:
      "After repair, a sling is used for about four weeks. Throwing usually starts at around four months, with return to competitive overhead sport at six months or more.",
    seekHelp: ["Pain is stopping you training or competing", "Symptoms persist despite rehabilitation"],
    faqs: [
      {
        q: "Can a SLAP tear heal without surgery?",
        a: "Many people, particularly non-athletes, become symptom-free with physiotherapy. Surgery is considered when pain and mechanical symptoms persist.",
      },
    ],
  },
  {
    slug: "shoulder-fractures",
    name: "Shoulder & Collarbone Fractures",
    region: "shoulder",
    spot: "clavicle",
    short: "Broken collarbone or upper arm bone after a fall or sporting injury.",
    keyword: "broken collarbone specialist",
    metaTitle: "Shoulder & Collarbone Fracture Treatment | Leicester Specialist",
    metaDescription:
      "Specialist management of broken collarbones and proximal humerus fractures — sling, plating or replacement — plus treatment of fractures that have not healed.",
    overview: [
      "The collarbone (clavicle) and the top of the upper arm bone (proximal humerus) are the most commonly broken bones around the shoulder. Many heal well in a sling, but displaced, shortened or complex fractures can benefit from surgery.",
      "A specialist opinion is particularly useful for active patients, fractures that are significantly displaced, and those that have failed to heal (non-union).",
    ],
    symptoms: ["Pain and swelling after a fall", "Deformity or bruising", "Inability to lift the arm"],
    causes: ["Falls — especially in older adults with osteoporosis", "Cycling and sporting accidents", "Road traffic collisions"],
    diagnosis: ["X-rays", "CT scan for complex fractures to plan surgery"],
    nonSurgical: ["Sling and pain relief", "Early guided movement and physiotherapy", "Serial X-rays to monitor healing"],
    surgical: [
      "Plate and screw fixation for displaced fractures",
      "Shoulder replacement (often reverse) for complex fractures in older patients",
      "Fixation and bone graft for non-union",
    ],
    treatments: ["fracture-fixation", "reverse-shoulder-replacement"],
    recovery:
      "Most shoulder fractures take six to twelve weeks to heal, with function continuing to improve for up to a year. Physiotherapy is central to regaining movement.",
    seekHelp: ["The bone is visibly displaced", "Pain persists beyond three months (possible non-union)"],
    faqs: [
      {
        q: "Does a broken collarbone need surgery?",
        a: "Most heal well in a sling. Surgery may be recommended when the bone ends are widely separated or shortened, the skin is at risk, or for some athletes and manual workers wanting a quicker, more predictable return.",
      },
    ],
  },

  // ───────────────────────────── ELBOW ─────────────────────────────
  {
    slug: "tennis-elbow",
    name: "Tennis Elbow",
    aka: "Lateral epicondylitis",
    region: "elbow",
    spot: "lateral",
    short: "Pain on the outside of the elbow from overloaded forearm tendons.",
    keyword: "tennis elbow treatment Leicester",
    metaTitle: "Tennis Elbow Treatment | Injection, PRP & Surgery | Leicester",
    metaDescription:
      "Specialist tennis elbow treatment in Leicester, Nuneaton & Warwickshire — physiotherapy, bracing, guided injection, PRP and surgical release for stubborn cases.",
    overview: [
      "Tennis elbow is a painful overload of the tendon that attaches the forearm extensor muscles to the outside of the elbow. Despite the name, most people who develop it don't play tennis — it is far more commonly linked to gripping, lifting, keyboard and mouse use, and manual trades.",
      "It is one of the most common elbow complaints and usually settles with the right advice and exercises, although it can take many months. A minority with persistent symptoms benefit from injection treatments or surgery.",
    ],
    symptoms: [
      "Pain and tenderness on the bony outer part of the elbow",
      "Pain gripping, shaking hands, lifting a kettle or turning a key",
      "Weak grip",
      "Pain radiating down the forearm",
    ],
    causes: [
      "Repetitive gripping and wrist extension",
      "Manual work — plumbing, painting, carpentry",
      "Racquet sports with poor technique or equipment",
      "Sudden increase in activity",
    ],
    diagnosis: [
      "Clinical examination is usually sufficient",
      "Ultrasound or MRI if the diagnosis is unclear or before surgery",
    ],
    nonSurgical: [
      "Activity modification and a forearm strap or wrist splint",
      "A progressive loading (strengthening) exercise programme",
      "Image-guided steroid injection for short-term relief",
      "Platelet-rich plasma (PRP) injection in selected chronic cases",
    ],
    surgical: ["Tennis elbow release and debridement of degenerate tendon (open or arthroscopic)"],
    treatments: ["tennis-elbow-surgery", "image-guided-injections", "elbow-arthroscopy"],
    recovery:
      "Most cases improve within six to twelve months with conservative treatment. After surgery, light use is encouraged early, with strengthening from around four to six weeks and full recovery over three to six months.",
    seekHelp: [
      "Pain has lasted more than three months despite rest and exercises",
      "You have numbness or tingling in the hand",
      "Pain is affecting your ability to work",
    ],
    faqs: [
      {
        q: "How long does tennis elbow last?",
        a: "Without treatment, tennis elbow often settles within a year, but symptoms can persist for longer. A structured strengthening programme is the most effective first-line treatment.",
      },
      {
        q: "Are steroid injections good for tennis elbow?",
        a: "Steroid injections can give rapid short-term relief, but research suggests symptoms can return and long-term outcomes may be no better than exercise alone. They are used selectively, alongside rehabilitation.",
      },
      {
        q: "What is PRP for tennis elbow?",
        a: "Platelet-rich plasma is prepared from a sample of your own blood and injected into the damaged tendon to promote healing. It may help some chronic cases that have not responded to exercise.",
      },
    ],
  },
  {
    slug: "golfers-elbow",
    name: "Golfer's Elbow",
    aka: "Medial epicondylitis",
    region: "elbow",
    spot: "medial",
    short: "Pain on the inner side of the elbow from overloaded flexor tendons.",
    keyword: "golfers elbow treatment",
    metaTitle: "Golfer's Elbow Treatment | Inner Elbow Pain Specialist",
    metaDescription:
      "Inner elbow pain when gripping or lifting? Specialist treatment of golfer's elbow — exercises, bracing, guided injection and surgery for persistent cases.",
    overview: [
      "Golfer's elbow affects the tendons that attach the forearm flexor muscles to the inner side of the elbow. It is less common than tennis elbow and can sometimes be associated with irritation of the nearby ulnar nerve.",
    ],
    symptoms: [
      "Pain and tenderness on the inner bony part of the elbow",
      "Pain gripping, lifting or with wrist flexion",
      "Occasionally tingling into the ring and little fingers",
    ],
    causes: ["Repetitive gripping and throwing", "Golf, racquet sports and weight training", "Manual trades"],
    diagnosis: ["Clinical examination", "Ultrasound or MRI if needed", "Nerve studies if ulnar nerve symptoms"],
    nonSurgical: ["Activity modification and bracing", "Progressive loading exercises", "Guided injection or PRP in selected cases"],
    surgical: ["Release and debridement of the flexor origin, with ulnar nerve release if required"],
    treatments: ["tennis-elbow-surgery", "image-guided-injections", "cubital-tunnel-release"],
    recovery: "Most people improve with conservative care. After surgery, recovery typically takes three to six months.",
    seekHelp: ["Symptoms persist beyond three months", "You develop tingling in the little finger"],
    faqs: [
      {
        q: "Is golfer's elbow the same as tennis elbow?",
        a: "They are similar overload conditions but affect opposite sides of the elbow — golfer's elbow the inner side, tennis elbow the outer side.",
      },
    ],
  },
  {
    slug: "distal-biceps-rupture",
    name: "Distal Biceps Tendon Rupture",
    region: "elbow",
    spot: "biceps",
    short: "A tear of the biceps tendon at the elbow, usually during a heavy lift.",
    keyword: "distal biceps rupture surgery",
    metaTitle: "Distal Biceps Tendon Rupture Repair | Urgent Elbow Specialist",
    metaDescription:
      "Felt a pop at the elbow lifting something heavy? Distal biceps ruptures are best repaired within 2–3 weeks. Rapid specialist assessment in Leicester & Warwickshire.",
    overview: [
      "The distal biceps tendon attaches the biceps muscle to the radius bone just below the elbow. It can rupture during a sudden heavy lift or when the arm is forcibly straightened against resistance — typically in men aged 30 to 60.",
      "This injury is time-sensitive. Surgical repair is most straightforward within the first two to three weeks, before the tendon retracts and scars. If you suspect a rupture, seek specialist assessment quickly.",
    ],
    symptoms: [
      "A sudden 'pop' at the front of the elbow",
      "Bruising and swelling at the front of the elbow and forearm",
      "A change in the shape of the biceps ('Popeye' sign)",
      "Weakness turning the palm upwards, e.g. using a screwdriver",
    ],
    causes: ["Heavy lifting with a bent elbow", "Weight training", "Anabolic steroid use and smoking increase risk"],
    diagnosis: ["Clinical examination including the hook test", "Ultrasound or MRI to confirm a complete or partial tear"],
    nonSurgical: ["Non-operative care is possible for lower-demand patients but leaves permanent weakness of rotation and some bending strength"],
    surgical: ["Distal biceps repair — the tendon is re-attached to bone with a small cortical button or anchor through a single incision"],
    treatments: ["distal-biceps-repair"],
    recovery:
      "After repair, a brace or sling is worn for around two to six weeks. Light activities return at six weeks, with heavy lifting and gym work from about three to four months.",
    seekHelp: ["You felt a pop at the elbow with bruising — seek assessment within days, not weeks"],
    faqs: [
      {
        q: "How urgent is a distal biceps repair?",
        a: "It is best repaired within two to three weeks. After this, the tendon can retract and may require a graft to reconstruct, which is a larger operation.",
      },
      {
        q: "Can I manage without surgery?",
        a: "Yes, and some lower-demand patients choose to, but expect around 30–40% loss of forearm rotation strength and some loss of elbow bending endurance.",
      },
    ],
  },
  {
    slug: "elbow-arthritis",
    name: "Elbow Arthritis & Stiffness",
    region: "elbow",
    spot: "elbowjoint",
    short: "Pain, locking and loss of movement from joint wear or previous injury.",
    keyword: "elbow arthritis treatment",
    metaTitle: "Elbow Arthritis & Stiff Elbow Treatment | Arthroscopy & Replacement",
    metaDescription:
      "Specialist treatment for elbow arthritis and stiffness — injections, keyhole arthroscopic clean-out, open release and elbow replacement. Leicester & Warwickshire.",
    overview: [
      "Elbow arthritis can result from wear and tear (often in manual workers and weightlifters), inflammatory arthritis such as rheumatoid, or a previous fracture or dislocation. It typically causes pain at the ends of movement, stiffness and sometimes locking from loose bodies.",
    ],
    symptoms: [
      "Pain at full straightening or bending",
      "Loss of movement — difficulty reaching the mouth or straightening the arm",
      "Locking or catching from loose fragments",
      "Tingling in the little finger if the ulnar nerve is irritated",
    ],
    causes: ["Heavy manual work", "Previous fracture or dislocation", "Rheumatoid or inflammatory arthritis"],
    diagnosis: ["X-rays", "CT scan to map bone spurs and loose bodies", "Nerve conduction studies if nerve symptoms"],
    nonSurgical: ["Pain relief", "Activity modification", "Image-guided steroid injection", "Physiotherapy"],
    surgical: [
      "Arthroscopic debridement — keyhole removal of bone spurs and loose bodies",
      "Open release for severe stiffness",
      "Total elbow replacement for advanced arthritis in lower-demand patients",
    ],
    treatments: ["elbow-arthroscopy", "elbow-replacement", "image-guided-injections"],
    recovery:
      "After arthroscopy, movement is started immediately and most people return to light work within two weeks. Elbow replacement requires a longer recovery and lifelong lifting restrictions.",
    seekHelp: ["Your elbow is locking", "Loss of movement is affecting daily tasks"],
    faqs: [
      {
        q: "Can a stiff elbow be improved years after an injury?",
        a: "Often yes. Release surgery can restore useful movement even years after the original injury, provided the joint surfaces are reasonably preserved.",
      },
    ],
  },
  {
    slug: "cubital-tunnel-syndrome",
    name: "Cubital Tunnel Syndrome",
    aka: "Ulnar nerve compression",
    region: "elbow",
    spot: "ulnar",
    short: "Compression of the ulnar nerve causing tingling in the ring and little fingers.",
    keyword: "cubital tunnel syndrome surgery",
    metaTitle: "Cubital Tunnel Syndrome Treatment | Ulnar Nerve Specialist",
    metaDescription:
      "Tingling or numbness in your little and ring fingers? Specialist diagnosis and day-case release surgery for cubital tunnel syndrome (ulnar nerve compression).",
    overview: [
      "The ulnar nerve — the 'funny bone' nerve — runs through a tunnel on the inner side of the elbow. If it becomes compressed or stretched, it can cause tingling, numbness and eventually weakness of the hand.",
      "It is the second most common nerve compression in the arm after carpal tunnel syndrome. Mild cases often settle with simple measures; persistent or severe cases benefit from a short day-case operation.",
    ],
    symptoms: [
      "Pins and needles or numbness in the ring and little fingers",
      "Symptoms worse with the elbow bent — phone use, driving, sleeping",
      "Clumsiness or weak grip",
      "Wasting of the small hand muscles in advanced cases",
    ],
    causes: ["Prolonged elbow bending", "Leaning on the elbow", "Previous elbow fracture or arthritis", "An unstable nerve that flicks over the bone"],
    diagnosis: ["Clinical examination", "Nerve conduction studies to assess severity"],
    nonSurgical: ["Avoiding prolonged elbow bending", "Night splint holding the elbow straighter", "Elbow padding"],
    surgical: ["Cubital tunnel release (decompression) as a day case", "Anterior transposition if the nerve is unstable"],
    treatments: ["cubital-tunnel-release"],
    recovery:
      "After release, light use starts straight away. Wounds heal within two weeks; tingling often improves quickly, while numbness and strength can take months to recover depending on severity.",
    seekHelp: ["You have constant numbness", "You notice weakness or muscle wasting in your hand"],
    faqs: [
      {
        q: "Is cubital tunnel surgery done under local anaesthetic?",
        a: "It is usually performed as a day case under general or regional anaesthetic, and takes less than an hour.",
      },
    ],
  },
  {
    slug: "olecranon-bursitis",
    name: "Olecranon Bursitis",
    aka: "Student's elbow",
    region: "elbow",
    spot: "olecranon",
    short: "A swollen fluid-filled sac on the point of the elbow.",
    keyword: "elbow bursitis treatment",
    metaTitle: "Olecranon (Elbow) Bursitis Treatment | Elbow Swelling Specialist",
    metaDescription:
      "Swelling on the point of the elbow? Specialist care for olecranon bursitis — aspiration, protection, treatment of infection and bursectomy for recurrent cases.",
    overview: [
      "The olecranon bursa is a thin fluid sac over the point of the elbow. Pressure, a knock or inflammation can cause it to fill with fluid and swell, sometimes dramatically. It may become infected, which needs prompt treatment.",
    ],
    symptoms: ["Soft swelling over the point of the elbow", "Tenderness if knocked", "Redness, heat and fever if infected"],
    causes: ["Leaning on the elbow", "A direct blow", "Gout or inflammatory arthritis", "Infection through a graze"],
    diagnosis: ["Clinical examination", "Aspiration of fluid for testing if infection suspected", "X-ray for bone spurs"],
    nonSurgical: ["Protective padding and compression", "Aspiration", "Antibiotics for infection"],
    surgical: ["Excision of the bursa (bursectomy) for persistent or recurrent cases"],
    treatments: ["image-guided-injections"],
    recovery: "Non-infected bursitis often settles in a few weeks. After bursectomy, the elbow is protected for around two weeks while the wound heals.",
    seekHelp: ["The elbow is red, hot and painful, or you feel unwell — seek same-day medical advice"],
    faqs: [
      {
        q: "Should elbow bursitis be drained?",
        a: "Aspiration can relieve swelling and identify infection, but the fluid often returns. Many cases settle with padding and avoiding pressure.",
      },
    ],
  },
  {
    slug: "elbow-fractures-dislocation",
    name: "Elbow Fractures & Dislocation",
    region: "elbow",
    spot: "elbowjoint",
    short: "Broken bones or dislocation around the elbow after a fall or impact.",
    keyword: "elbow fracture specialist",
    metaTitle: "Elbow Fracture & Dislocation Treatment | Elbow Trauma Specialist",
    metaDescription:
      "Specialist management of elbow fractures and dislocations — early movement, fixation, radial head replacement and treatment of post-injury stiffness.",
    overview: [
      "Elbow injuries range from simple radial head fractures, which often heal with early movement, to complex fracture-dislocations that require surgical reconstruction. The elbow is prone to stiffness after injury, so getting the balance between stability and early motion right is key.",
    ],
    symptoms: ["Pain, swelling and bruising after a fall", "Deformity", "Inability to bend or straighten the elbow"],
    causes: ["Falls onto an outstretched hand", "Sporting and road traffic accidents"],
    diagnosis: ["X-rays", "CT scan for complex fractures"],
    nonSurgical: ["Short period in a sling with early movement for stable injuries"],
    surgical: [
      "Fixation with plates and screws",
      "Radial head replacement",
      "Ligament repair or reconstruction for instability",
      "Release surgery for post-traumatic stiffness",
    ],
    treatments: ["fracture-fixation", "elbow-arthroscopy", "elbow-replacement"],
    recovery: "Most elbow fractures heal in six to eight weeks; early, supervised movement helps minimise stiffness.",
    seekHelp: ["Any suspected elbow fracture should be assessed urgently at A&E", "Stiffness persists after an old injury"],
    faqs: [
      {
        q: "Why does my elbow feel stiff after a fracture?",
        a: "The elbow is particularly prone to stiffness after injury. Physiotherapy helps, and if stiffness persists beyond six months, arthroscopic or open release can often restore movement.",
      },
    ],
  },
];

export const conditionBySlug = (slug: string) => conditions.find((c) => c.slug === slug);
export const conditionsByRegion = (r: Region) => conditions.filter((c) => c.region === r);
