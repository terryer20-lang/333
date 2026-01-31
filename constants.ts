import { MenuItem, ChallengeQuestion, SafetyQuestion, NotificationItem, KnowledgeCard } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {id: "star-challenge", icon: "⭐", text: "challenge", path: "/challenge"},
  {id: "safety-test", icon: "📊", text: "safety", path: "/safety-index"},
  {id: "going-abroad", icon: "✈️", text: "prepare", path: "/prepare"},
  {id: "overseas-help", icon: "🆘", text: "help", path: "/help"},
  {id: "emergency", icon: "🚨", text: "emergency", path: "/emergency"},
  {id: "consular-protection", icon: "🛡️", text: "protection", path: "/protection"},
  {id: "resident-rights", icon: "📜", text: "rights", path: "/rights"},
  {id: "past-notifications", icon: "📨", text: "past-notifications", path: "/past-notifications"},
  {id: "graphics", icon: "🖼️", text: "graphics", path: "/graphics"},
  {id: "hot-knowledge", icon: "💡", text: "hot-knowledge", path: "/hot-knowledge"},
  {id: "events", icon: "📅", text: "events", path: "/events"},
  {id: "resources", icon: "📚", text: "resources", path: "/resources"},
  {id: "contact", icon: "📞", text: "contact", path: "/contact"}
];

export const EXTERNAL_LINKS = {
  emergencyHotline: "+85312308",
  consulateFinder: "https://www.fmprc.gov.cn/web/wjb_673085/zwjg_673153/",
};

export const MOCK_NOTIFICATIONS: NotificationItem[] = [
  { id: '1', date: '2026-03-15', link: '/notification/1' },
  { id: '2', date: '2026-02-28', link: '/notification/2' },
  { id: '3', date: '2026-01-10', link: '/notification/3' },
  { id: '4', date: '2025-12-24', link: '/notification/4' },
];

export const KNOWLEDGE_CARDS: KnowledgeCard[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?auto=format&fit=crop&w=600&q=80',
    link: '/resources'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=600&q=80',
    link: '/emergency'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80',
    link: '/protection'
  }
];

export const QUIZ_DATA: ChallengeQuestion[] = [
  {
    id: 1,
    correctAnswer: 1
  },
  {
    id: 2,
    correctAnswer: 2
  }
];

export const SAFETY_QUESTIONS: SafetyQuestion[] = [
  { id: 1, category: 'health', weight: 10 },
  { id: 2, category: 'crime', weight: 10 },
  { id: 3, category: 'political', weight: 10 },
  { id: 4, category: 'crime', weight: 10 },
  { id: 5, category: 'health', weight: 10 },
];