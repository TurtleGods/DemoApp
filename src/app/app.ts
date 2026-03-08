import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly language = signal<'en' | 'zh'>('en');
  protected readonly theme = signal<'ocean' | 'forest' | 'sunset' | 'night'>('ocean');
  protected readonly themeClass = computed(() => `theme-${this.theme()}`);
  protected readonly content = computed(() => COPY[this.language()]);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const savedLanguage = window.localStorage.getItem('demo.language');
    const savedTheme = window.localStorage.getItem('demo.theme');

    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      this.language.set(savedLanguage);
    }

    if (savedTheme === 'ocean' || savedTheme === 'forest' || savedTheme === 'sunset' || savedTheme === 'night') {
      this.theme.set(savedTheme);
    }
  }

  protected setLanguage(language: 'en' | 'zh'): void {
    this.language.set(language);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('demo.language', language);
    }
  }

  protected setTheme(theme: 'ocean' | 'forest' | 'sunset' | 'night'): void {
    this.theme.set(theme);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('demo.theme', theme);
    }
  }
}

const COPY = {
  en: {
    languageLabel: 'Language',
    themeLabel: 'Theme',
    heroBadge: 'Outsourcing Service',
    navServices: 'Services',
    navProcess: 'Process',
    navPlans: 'Plans',
    navFaq: 'FAQ',
    navContact: 'Contact',
    heroTitle: 'One-page outsourcing proposal for your next project.',
    heroSubtitle:
      'Use this SPA to explain what you can deliver, how collaboration works, and what clients should prepare before project kickoff.',
    ctaPrimary: 'Start a Discussion',
    ctaSecondary: 'See Service Scope',
    trustLine: 'Trusted workflow for fast-moving teams',
    servicesTitle: 'Service Scope',
    services: [
      'Landing page and company site implementation',
      'Dashboard and internal tool front-end development',
      'API integration and data visualization',
      'Azure deployment-ready architecture and CI/CD setup'
    ],
    processTitle: 'Collaboration Process',
    process: [
      'Requirement discovery: goals, timeline, budget',
      'Proposal and milestone plan',
      'Weekly delivery and review',
      'Handover docs and maintenance guidance'
    ],
    plansTitle: 'Example Plans',
    plans: [
      { name: 'Starter', detail: 'Single-page site, responsive layout, basic forms' },
      { name: 'Growth', detail: 'Multi-page site, CMS integration, analytics setup' },
      { name: 'Custom', detail: 'Bespoke workflow, API-first design, Azure deployment' }
    ],
    faqTitle: 'FAQ',
    faqs: [
      { q: 'Do you support urgent projects?', a: 'Yes, after confirming scope and delivery window.' },
      { q: 'Can this connect to my existing backend?', a: 'Yes, backend integration is included in later phases.' },
      { q: 'Can we start without full requirements?', a: 'Yes, we can start from a scoped discovery sprint.' }
    ],
    zhButton: '中文',
    showcaseTitle: 'Featured Capabilities',
    showcases: [
      { title: 'Modern Frontend Delivery', detail: 'Angular SPA with responsive layout and production build pipeline.' },
      { title: 'Azure-Ready Architecture', detail: 'Deployment-aware setup for Azure Web App, CI/CD, and environment planning.' },
      { title: 'Scalable Collaboration', detail: 'Clear milestones, weekly updates, and maintainable handover documentation.' }
    ],
    closingTitle: 'Need a dependable partner for your next build?',
    closingBody: 'Share your requirement document or idea draft, and we can turn it into an actionable delivery plan.',
    closingCta: 'Book Intro Call',
    contactTitle: 'Contact',
    contactBody: 'Add your email / LINE / WhatsApp / Calendly here for inquiry routing.'
  },
  zh: {
    languageLabel: '語言',
    themeLabel: '主題',
    heroBadge: '外包服務介紹',
    navServices: '服務項目',
    navProcess: '合作流程',
    navPlans: '方案範例',
    navFaq: '常見問題',
    navContact: '聯絡方式',
    heroTitle: '一頁式外包需求介紹頁，快速讓客戶了解你的交付能力。',
    heroSubtitle: '這個 Angular 示範頁已支援中英文切換與主題切換，之後可直接替換成你的真實履歷與能力內容。',
    ctaPrimary: '立即洽談需求',
    ctaSecondary: '查看服務範圍',
    trustLine: '快速團隊也能安心採用的合作流程',
    servicesTitle: '服務範圍',
    services: ['形象網站與活動頁製作', '後台系統與內部工具前端開發', 'API 串接與資料視覺化', 'Azure 可部署架構與 CI/CD 建置'],
    processTitle: '合作流程',
    process: ['需求訪談：目標、時程、預算', '提案與里程碑規劃', '每週交付與檢視', '交接文件與後續維運建議'],
    plansTitle: '方案範例',
    plans: [
      { name: '入門方案', detail: '單頁網站、RWD 響應式版型、基礎表單' },
      { name: '成長方案', detail: '多頁網站、CMS 串接、分析工具設定' },
      { name: '客製方案', detail: '客製流程、API 優先設計、Azure 部署' }
    ],
    faqTitle: '常見問題',
    faqs: [
      { q: '可接急件嗎？', a: '可以，需先確認範圍與交付時程。' },
      { q: '可串接我既有後端嗎？', a: '可以，後端整合可在下一階段導入。' },
      { q: '需求還不完整可以開始嗎？', a: '可以，先用需求釐清衝刺建立範圍。' }
    ],
    zhButton: '中文',
    showcaseTitle: '重點能力展示',
    showcases: [
      { title: '現代前端交付', detail: '提供 Angular SPA、響應式版型與可上線的建置流程。' },
      { title: 'Azure 部署導向', detail: '從架構到 CI/CD 皆以 Azure Web App 部署需求規劃。' },
      { title: '可擴充合作模式', detail: '明確里程碑、每週進度同步、可維護交接文件。' }
    ],
    closingTitle: '正在找可靠的外包夥伴嗎？',
    closingBody: '提供你的需求文件或想法草稿，我可以協助整理成可執行的交付計畫。',
    closingCta: '預約初談',
    contactTitle: '聯絡方式',
    contactBody: '可放 Email / LINE / WhatsApp / 預約連結，讓客戶快速聯繫。'
  }
} as const;
