import type { FAQ } from "./conditions";

export const generalFaqs: { group: string; items: FAQ[] }[] = [
  {
    group: "Appointments",
    items: [
      {
        q: "Do I need a referral to book an appointment?",
        a: "If you are paying for yourself, you can book directly — although a letter from your GP or physiotherapist is always helpful. If you are using private medical insurance, most insurers require a GP or physiotherapist referral before authorising your consultation.",
      },
      {
        q: "How quickly can I be seen?",
        a: "New patients are usually offered an appointment within one to two weeks at a clinic in Leicester, Nuneaton or Warwickshire. Urgent problems such as a suspected distal biceps rupture or a shoulder dislocation are prioritised.",
      },
      {
        q: "What happens at my first consultation?",
        a: "Your consultation lasts around 30 minutes. We take a detailed history, examine both shoulders or elbows and review any scans. X-rays or an ultrasound may be arranged on the day. You'll leave with a likely diagnosis, a clear explanation of your options and a written plan — and a copy of the letter to your GP.",
      },
      {
        q: "What should I bring?",
        a: "Your referral letter (if you have one), insurer membership and authorisation numbers, a list of medications, and any previous scan reports or discs. Wear loose clothing or a vest top so the shoulder can be examined easily.",
      },
    ],
  },
  {
    group: "Fees & insurance",
    items: [
      {
        q: "Is my treatment covered by insurance?",
        a: "Most major UK insurers cover consultations, investigations and surgery for shoulder and elbow conditions. Always call your insurer before your appointment to confirm your cover, any excess and to obtain an authorisation number.",
      },
      {
        q: "Can I pay for myself?",
        a: "Yes. We offer transparent consultation fees and fixed-price packages for common procedures, which include the surgeon, anaesthetist and hospital costs. Ask the secretary for a personalised quote.",
      },
      {
        q: "Am I responsible for any shortfall?",
        a: "Patients are ultimately responsible for fees not covered by their insurer, including any policy excess. We'll always tell you the relevant procedure codes in advance so you can check with your insurer.",
      },
    ],
  },
  {
    group: "Surgery & recovery",
    items: [
      {
        q: "Will I definitely need surgery?",
        a: "No. Most shoulder and elbow problems improve without an operation. Surgery is only recommended when the evidence suggests it will help you more than non-surgical treatment, and the decision is always yours.",
      },
      {
        q: "Who will do my physiotherapy?",
        a: "We work with experienced shoulder and elbow physiotherapists across Leicestershire and Warwickshire, and are happy to coordinate with your own physiotherapist if you prefer.",
      },
      {
        q: "When can I drive after shoulder surgery?",
        a: "Usually once you are out of the sling and can safely control the car — typically two weeks after decompression and six to eight weeks after a repair or replacement. Always inform your insurer.",
      },
    ],
  },
];
