// All copy and sample data live here. Product facts come from docs.mellominds.co.in,
// the public LinkedIn posts and in-app screenshots. Prospects are FICTIONAL samples.

export const author = "Ram Surse"; // ponytail: single constant, edit if needed

export const nav = [
  { href: "/", label: "Overview" },
  { href: "/icp", label: "ICP" },
  { href: "/prospects", label: "Prospects" },
  { href: "/pipeline", label: "Pipeline" },
  { href: "/outreach", label: "Outreach" },
  { href: "/demo", label: "Demo & Case" },
  { href: "/content", label: "Content" },
  { href: "/recruit-crm", label: "Why Recruit CRM" },
];

export const plans = [
  { name: "Free", price: "₹0 / month", note: "Unlimited booking, intake forms, client database, session notes with templates, Google Calendar & Meet sync, email + in-app notifications, 3 months of dashboard analytics." },
  { name: "Individual", price: "₹699 / month", note: "For solo practitioners. Everything in Free plus client database transfer and more." },
  { name: "Team", price: "₹899 / user / month", note: "For group practices. Staff accounts (up to 5 shown in Settings) and team analytics." },
];

export const segments = [
  {
    id: "solo",
    name: "Solo private-practice therapist",
    who: "Counsellors and therapists running their own practice, often online.",
    plan: "Free → Individual (₹699)",
    pains: [
      "Bookings arrive over WhatsApp and calls, so slots get double-booked or forgotten.",
      "Payment proof comes as screenshots that get lost.",
      "Session notes live in a notebook or scattered files.",
      "No-shows and last-minute reschedules with no automatic reminders.",
    ],
    triggers: ["Just started practice", "Moved sessions online", "Client list outgrew memory"],
    hook: "Bookings, payments and session notes in one place, not five apps and a notebook.",
  },
  {
    id: "group",
    name: "Small group practice / clinic (2–10 practitioners)",
    who: "Practice owners or admins coordinating several therapists.",
    plan: "Team (₹899 per user)",
    pains: [
      "No shared view of who is booked when.",
      "Moving a client between therapists means copying records by hand.",
      "Intake and questionnaires differ by therapist.",
      "Owner cannot see practice-level numbers without asking each person.",
    ],
    triggers: ["Hiring a second therapist", "Opening a second room or city", "Owner spending evenings on admin"],
    hook: "One workspace for the whole practice: shared scheduling, client transfer and team analytics.",
  },
  {
    id: "clinical",
    name: "Psychiatrist / clinician using standard questionnaires",
    who: "Clinicians who screen clients with standard scales before or between sessions.",
    plan: "Individual or Team",
    pains: [
      "Questionnaires handed out on paper or retyped into forms.",
      "Results not attached to the client record.",
      "Intake before the first session takes manual chasing.",
    ],
    triggers: ["Taking more first-time clients", "Wants consistent assessment across clients"],
    hook: "Ready templates (PHQ-9, GAD-7, DASS-21, PSS, WHO-5) sent as forms and kept on the client profile.",
  },
  {
    id: "online",
    name: "Online-first counsellor",
    who: "Practitioners who work mostly over video and live inside Google tools.",
    plan: "Free → Individual",
    pains: [
      "Creating a Meet link and a calendar event for every booking.",
      "Reminders sent manually over WhatsApp or email.",
      "Clients can't self-book outside working hours.",
    ],
    triggers: ["Client base across cities", "Evening and weekend bookings"],
    hook: "Public booking link with Google Calendar & Meet sync built in.",
  },
];

export const disqualifiers = [
  "Large hospitals needing full EHR, ICD coding or insurance-claim workflows. Not evidenced in the docs, so verify before pitching.",
  "Practices outside India that need non-INR billing. The docs describe Razorpay payments and DPDPA, which are India-specific.",
  "Practitioners who only want a free calendar with no intent to manage clients or payments.",
];

export const fitRubric = [
  ["5", "Clear trigger now + current tools are manual + decision maker is the practitioner"],
  ["4", "Manual tools and a likely trigger, but timing unclear"],
  ["3", "Fits the segment, no visible trigger"],
  ["2", "Already satisfied with a working system"],
  ["1", "Outside ICP"],
];

export type Prospect = {
  id: string;
  practice: string;
  contact: string;
  city: string;
  segmentId: string;
  size: string;
  tools: string;
  trigger: string;
  pain: string;
  fit: number;
};

// FICTIONAL. Real companies can be added later using public information only.
export const prospects: Prospect[] = [
  { id: "p1", practice: "Calm Ridge Counselling", contact: "Asha", city: "Pune", segmentId: "solo", size: "1", tools: "WhatsApp, paper diary", trigger: "Started online sessions this year", pain: "double-booked slots and lost payment screenshots", fit: 5 },
  { id: "p2", practice: "Anchor Mind Clinic", contact: "Dr. Rao", city: "Bengaluru", segmentId: "group", size: "6", tools: "Excel, WhatsApp groups", trigger: "Hired two therapists last quarter", pain: "no shared schedule and manual client transfers", fit: 5 },
  { id: "p3", practice: "Lumen Psychiatry", contact: "Dr. Iyer", city: "Chennai", segmentId: "clinical", size: "2", tools: "Paper forms, Google Forms", trigger: "More first-time clients", pain: "retyping questionnaire answers into records", fit: 4 },
  { id: "p4", practice: "Sage & Sky Therapy", contact: "Meera", city: "Mumbai", segmentId: "online", size: "1", tools: "Google Calendar, manual Meet links", trigger: "Clients across time zones", pain: "creating a Meet link and reminder for every booking", fit: 4 },
  { id: "p5", practice: "Hearth Counselling Collective", contact: "Nikhil", city: "Delhi", segmentId: "group", size: "4", tools: "Shared spreadsheet", trigger: "Opening a second room", pain: "no practice-level view of sessions and revenue", fit: 4 },
  { id: "p6", practice: "Quiet Hours Therapy", contact: "Farah", city: "Hyderabad", segmentId: "solo", size: "1", tools: "Notebook, UPI screenshots", trigger: "Client list passed 40", pain: "chasing payments and finding old notes", fit: 4 },
  { id: "p7", practice: "Bloom Wellness Studio", contact: "Tara", city: "Jaipur", segmentId: "online", size: "2", tools: "Instagram DMs", trigger: "None visible", pain: "bookings handled entirely in DMs", fit: 3 },
  { id: "p8", practice: "Northstar Behavioural Health", contact: "Dr. Menon", city: "Kochi", segmentId: "group", size: "25", tools: "Hospital EHR", trigger: "None visible", pain: "likely needs EHR-grade workflows", fit: 2 },
];

export const stages = [
  "New",
  "Researched",
  "Contacted",
  "Replied",
  "Demo booked",
  "Demo done",
  "Free plan started",
  "Upgraded",
  "Lost",
] as const;
export type Stage = (typeof stages)[number];

export type Deal = { id: string; stage: Stage; nextStep: string };

export const seedDeals: Deal[] = [
  { id: "p1", stage: "Demo booked", nextStep: "Send agenda + booking link" },
  { id: "p2", stage: "Replied", nextStep: "Propose 20-min demo for the owner and one therapist" },
  { id: "p3", stage: "Contacted", nextStep: "Follow-up email, day 7" },
  { id: "p4", stage: "Researched", nextStep: "Personalise: time-zone pain" },
  { id: "p5", stage: "New", nextStep: "Research current tools" },
  { id: "p6", stage: "Contacted", nextStep: "LinkedIn message, day 10" },
  { id: "p7", stage: "Lost", nextStep: "Revisit in 90 days" },
];

export type Template = { id: string; label: string; channel: string; limit?: number; body: string };

export const templates: Template[] = [
  {
    id: "email1",
    label: "Cold email: touch 1",
    channel: "Email",
    body: `Subject: {{practice}}: fewer evenings on admin?

Hi {{contact}},

I'm {{sender}}. I work on MelloMinds, a practice-management tool for therapists in India. For a practice like {{practice}} in {{city}}, I'd guess the pain is {{pain}}.

MelloMinds keeps bookings, payments and session notes in one place, with Google Calendar & Meet sync. The Free plan has no credit card.

Worth a 15-minute look this week? If not, reply "stop" and I won't write again.

{{sender}}`,
  },
  {
    id: "li-connect",
    label: "LinkedIn connection note",
    channel: "LinkedIn",
    limit: 300,
    body: `Hi {{contact}}, I help therapists in {{city}} spend less time on bookings and notes. Saw {{practice}} and thought we should connect. {{sender}}`,
  },
  {
    id: "call",
    label: "Call opener (30 sec)",
    channel: "Call",
    body: `Hi {{contact}}, this is {{sender}} from MelloMinds. I know I'm calling out of the blue. May I take 30 seconds to say why? ... Practices like {{practice}} often tell us {{pain}}. We built one place for bookings, payments and notes. Is that something you're dealing with, or am I off base?`,
  },
  {
    id: "email2",
    label: "Follow-up email: touch 4 (day 7)",
    channel: "Email",
    body: `Subject: Re: {{practice}}: fewer evenings on admin?

Hi {{contact}},

One idea if {{pain}} is still true: set up a booking link on the Free plan and see whether clients use it. It takes a few minutes and needs no credit card.

I can show you in 15 minutes on Zoom. Does Thursday or Friday suit?

{{sender}}`,
  },
  {
    id: "breakup",
    label: "Break-up email: touch 6 (day 14)",
    channel: "Email",
    body: `Subject: Closing the loop

Hi {{contact}},

I haven't heard back, so I'll assume the timing isn't right and stop here. If {{pain}} becomes a problem later, MelloMinds' Free plan will still be there.

Wishing {{practice}} a good quarter.

{{sender}}`,
  },
];

export const cadence = [
  ["Day 1", "Email", "Cold email with one researched pain"],
  ["Day 2", "LinkedIn", "Connection note, no pitch"],
  ["Day 4", "Call", "30-second opener, leave a short voicemail"],
  ["Day 7", "Email", "Follow-up with one low-effort next step"],
  ["Day 10", "LinkedIn", "Message after connection accepted"],
  ["Day 14", "Email", "Break-up email, stop cleanly"],
];

export const personalisation = [
  "Used their real name and practice name",
  "Named one specific pain, not a feature list",
  "Referenced a trigger (new hire, online shift, growth)",
  "One clear ask (15-minute call)",
  "Offered an easy opt-out",
  "No claim I can't back up",
];

export const discovery = [
  ["Situation", "How do clients book with you today, and who confirms the slot?"],
  ["Situation", "Where do session notes and payment confirmations end up?"],
  ["Problem", "What happens when a client cancels or doesn't show?"],
  ["Problem", "How many hours a week go to admin instead of sessions?"],
  ["Implication", "What does an evening of admin cost you in rest or in sessions you don't take?"],
  ["Need-payoff", "If booking, reminders and notes ran themselves, what would you do with those hours?"],
];

export const demoFlow = [
  { img: "sessions", title: "1. Booking link", say: "Create a session type once and share one link. Clients pick a slot; Google Calendar and Meet are created for you." },
  { img: "dashboard", title: "2. Dashboard", say: "See sessions, no-shows, pending notes and pending payments in one glance." },
  { img: "bookings", title: "3. Bookings", say: "Filter by upcoming, completed, pending session notes, cancelled and no-show." },
  { img: "clients", title: "4. Clients", say: "One client database with search and CSV export." },
  { img: "forms", title: "5. Forms", say: "Send standard questionnaires (PHQ-9, GAD-7, DASS-21, PSS, WHO-5) or build your own." },
  { img: "settings", title: "6. Settings & team", say: "Reminders, email preferences, terms and staff, all in one control centre." },
  { img: "pricing", title: "7. Next step", say: "Start on Free with no credit card. Move to Individual or Team when it earns its place." },
];

export const objections = [
  ["I already use WhatsApp and Excel.", "That works until volume grows. Keep WhatsApp for chat; let MelloMinds handle the booking link, reminders and notes. Try it on the Free plan alongside your current setup."],
  ["Is my clients' data safe?", "The docs have a Data Security & DPDPA section. I'd walk you through it and, as I built the backend, I can answer technical questions directly."],
  ["I'm too busy to switch.", "Don't switch. Start with a booking link only and move one thing at a time."],
  ["It costs money.", "The Free plan is ₹0 with no credit card. Paid plans start at ₹699 and you can test value on your own numbers first."],
  ["I'm not tech-savvy.", "The product line is: if you can use a phone, you can use Mello. I'll set up your first session with you on the call."],
];

export const posts = [
  { img: "/images/linkedin/post-1.png", alt: "MelloMinds integrations post: works with your existing stack", note: "Integrations: Gmail, Google Calendar & Meet, WhatsApp, Sheets and more." },
  { img: "/images/linkedin/post-2.png", alt: "Carousel slide 1: Who are we?", note: "Carousel hook: a playful icebreaker introducing the brand." },
  { img: "/images/linkedin/post-3.png", alt: "Carousel slide 2", note: "Pattern interrupt before the value statement." },
  { img: "/images/linkedin/post-4.png", alt: "Carousel slide 3: Hi, I'm Mello", note: "The close: job, superpower, boundary, ease of use, price of saying hi." },
];

const li = (slug: string) => `https://www.linkedin.com/posts/${slug}/`;
export const postLinks = [
  ["Friday-night panic: did my 3pm client…", li("that-friday-night-panic-of-did-my-3pm-client-ugcPost-7514079057903443968-T93A")],
  ["Hello, mental health professionals: meet Mello", li("hello-mental-health-professionals-meet-mello-ugcPost-7510697635033272320-9fOW")],
  ["Say hello to Mello", li("say-hello-to-mello-ugcPost-7509514385783115776-i5hK")],
  ["Screenshot received, screenshot lost…", li("screenshot-received-screenshot-lost-screenshot-share-7509704392389054464-uLgG")],
  ["You don't need another app that wants to…", li("you-dont-need-another-app-that-wants-to-share-7509616803422306304-GcuQ")],
  ["LinkedIn post", li("share-7422205045963689985-H0JL")],
];

export const rcParallels = [
  ["Client database", "Candidate and client database"],
  ["Booking link + calendar sync", "Interview scheduling"],
  ["Intake forms and questionnaires", "Screening and submission forms"],
  ["Reminders and notifications", "Automated follow-up sequences"],
  ["Session notes", "Call notes"],
  ["Team analytics", "Recruiter activity and pipeline reporting"],
];
