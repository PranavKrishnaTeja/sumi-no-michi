/**
 * CONTENT — the only file you need to edit to make this portfolio yours.
 *
 * Voice rules (keep them, whatever you write):
 *  - Tell stories, not bullet points. "8 years of experience" is a fact;
 *    "systems that quietly power millions of interactions" is a story.
 *  - One idea per line. If a sentence needs a comma splice, cut it in two.
 *  - Never explain the metaphor. The ink speaks for itself.
 */

export const identity = {
  name: 'Ren Kobayashi', // ← replace with your name
  kanji: '蓮', // ← one character that stands for you (used as your seal)
  role: 'Engineer of quiet systems',
  line: 'I shape software the way ink shapes paper — with intention, restraint, and room to breathe.',
  location: 'Kyoto · works everywhere',
  year: '2026',
};

export const acts = [
  { id: 'silence', kanji: '一', label: 'Silence' },
  { id: 'stroke', kanji: '二', label: 'First Stroke' },
  { id: 'discovery', kanji: '三', label: 'Discovery' },
  { id: 'creation', kanji: '四', label: 'Creation' },
  { id: 'mastery', kanji: '五', label: 'Mastery' },
  { id: 'legacy', kanji: '六', label: 'Legacy' },
] as const;

export const philosophy = [
  {
    kanji: '間',
    romaji: 'ma',
    title: 'Negative space',
    body: 'What I leave out of a system is a decision, not an absence. Interfaces breathe. APIs stay small. The empty part of the page is doing work.',
  },
  {
    kanji: '簡素',
    romaji: 'kanso',
    title: 'Simplicity',
    body: 'Complexity is easy — anyone can add. I earn my keep by removing, until what remains is obvious, fast, and hard to break.',
  },
  {
    kanji: '渋み',
    romaji: 'shibumi',
    title: 'Subtle depth',
    body: 'The best work looks effortless and rewards a second look. The details are for the people who stay.',
  },
];

export const craft = [
  'TypeScript',
  'React',
  'Next.js',
  'Node.js',
  'Rust',
  'PostgreSQL',
  'GSAP',
  'WebGL',
  'Design systems',
  'Motion',
  'Accessibility',
  'Infrastructure',
];

export const works = [
  {
    title: 'Kawa',
    seal: '川',
    story:
      'A realtime data river for a logistics network — four million events an hour, rendered calm.',
    stack: 'Rust · Kafka · React',
    href: '#',
  },
  {
    title: 'Hashi',
    seal: '橋',
    story:
      'A design system bridging six product teams. One language, forty components, zero drift.',
    stack: 'TypeScript · Storybook · Tokens',
    href: '#',
  },
  {
    title: 'Yama',
    seal: '山',
    story:
      'Infrastructure that carried a startup from ten thousand users to three million — without a single all-nighter.',
    stack: 'Kubernetes · Terraform · Go',
    href: '#',
  },
];

export const path = [
  {
    year: '2016',
    title: 'First stroke',
    body: 'Shipped my first production system. Learned that code is read far more often than it is written.',
  },
  {
    year: '2019',
    title: 'The studio years',
    body: 'Built experiences that chased awards. Learned motion — then learned when not to move.',
  },
  {
    year: '2022',
    title: 'Leading quietly',
    body: 'Grew a team of eight. The best code review I ever gave was a single question.',
  },
  {
    year: '2025',
    title: 'Fewer, deeper',
    body: 'Now I take on the problems that reward patience — and turn down the ones that don’t.',
  },
];

export const contact = {
  invite: 'The circle stays open.',
  sub: 'An ensō is never quite closed — the gap is where the next thing enters. If you are building something that deserves patience and craft, I would like to hear about it.',
  links: [
    { label: 'Email', href: 'mailto:hello@example.com' },
    { label: 'GitHub', href: 'https://github.com/yourname' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/yourname' },
  ],
};
