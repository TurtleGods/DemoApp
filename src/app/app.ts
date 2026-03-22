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
    heroBadge: 'Pigeon Outsourcing Service',
    navServices: 'Services',
    navProcess: 'Process',
    navPlans: 'Plans',
    navFaq: 'FAQ',
    navContact: 'Contact',
    heroTitle: 'Pigeon Packet, Delivered for Sure.',
    heroSubtitle: 'We help clients craft tailored websites and web pages that match their business needs.',
    ctaPrimary: 'Start a Discussion',
    ctaSecondary: 'See Service Scope',
    // 初步約談 mailto 原文：
    // subject: Initial consultation - Custom web project inquiry
    // body:
    // Hi team,
    // I want to discuss a web customization project.
    // Project type:
    // Budget:
    // Deadline:
    // Notes:
    //
    // Thank you.
    initialConsultationMailto:
      'mailto:pigeonpacket.tech@gmail.com?subject=Initial%20Consultation%20-%20Custom%20Web%20Project%20Inquiry&body=Hi%20team%2C%0A%0AI%20want%20to%20discuss%20a%20web%20customization%20project.%0AProject%20type%3A%0ABudget%3A%0ADeadline%3A%0ANotes%3A%0A%0AThank%20you.',
    // 結尾區段約談 mailto 原文（與初步約談內容一致，可自行改成不同模板）：
    // subject: Book intro call
    // body:
    // Hi team,
    // I want to discuss a web customization project.
    // Project type:
    // Budget:
    // Deadline:
    // Notes:
    //
    // Thank you.
    closingConsultationMailto:
      'mailto:pigeonpacket.tech@gmail.com?subject=Book%20Intro%20Call&body=Hi%20team%2C%0A%0AI%20want%20to%20discuss%20a%20web%20customization%20project.%0AProject%20type%3A%0ABudget%3A%0ADeadline%3A%0ANotes%3A%0A%0AThank%20you.',
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
    contactBody: 'Ready when you are.',
    contactInfo: [
      { label: 'Email', value: 'pigeonpacket.tech@gmail.com' },
      { label: 'Cloud Infrastructure', value: 'GCP, AWS, Azure' },
      { label: 'Frontend', value: 'Angular frontend development' },
      { label: 'Backend', value: 'C# / Java / PHP backend development' },
      { label: 'Container', value: 'Kubernetes deployment' }
    ]
  },
  zh: {
    languageLabel: '語言',
    themeLabel: '主題',
    heroBadge: '鴿子外包服務介紹',
    navServices: '服務項目',
    navProcess: '合作流程',
    navPlans: '方案範例',
    navFaq: '常見問題',
    navContact: '聯絡方式',
    heroTitle: '鴿子封包，絕對送達',
    heroSubtitle: '提供從需求規劃到實作交付的一站式客製化網頁服務，打造符合你需求的網站。',
    ctaPrimary: '立即洽談需求',
    ctaSecondary: '查看服務範圍',
    // 初步約談 mailto 中文原文：
    // subject: 初步約談 - 客製化網站合作諮詢
    // body:
    // 您好，我想預約初步諮詢。以下是專案重點：
    // 1) 專案類型：
    // 2) 需求簡述：
    // 3) 預算：
    // 4) 預計上線時間：
    // 5) 參考範例：
    // 6) 其他補充：
    initialConsultationMailto:
      'mailto:pigeonpacket.tech@gmail.com?subject=%E5%88%9D%E6%AD%A5%E7%B4%84%E8%AB%87%20-%20%E5%AE%A2%E8%A3%BD%E5%8C%96%E7%B6%B2%E7%AB%99%E5%90%88%E4%BD%9C%E8%A9%A2%E8%A2%BC&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E5%88%9D%E6%AD%A5%E8%AB%AE%E8%A9%A2%E3%80%82%E4%BB%A5%E4%B8%8B%E6%98%AF%E5%B0%88%E6%A1%88%E9%87%8D%E9%BB%9E%EF%BC%9A%0A1)%20%E5%B0%88%E6%A1%88%E9%A1%9E%E5%9E%8B%EF%BC%9A%0A2)%20%E9%9C%80%E6%B1%82%E7%B0%A1%E8%BF%B0%EF%BC%9A%0A3)%20%E9%A0%90%E7%AE%97%EF%BC%9A%0A4)%20%E9%A0%90%E8%A8%88%E4%B8%8A%E7%B7%9A%E6%99%82%E9%96%93%EF%BC%9A%0A5)%20%E5%8F%83%E8%80%83%E7%AF%84%E4%BE%8B%EF%BC%9A%0A6)%20%E5%85%B6%E4%BB%96%E8%A3%9C%E5%85%85%EF%BC%9A',
    // 結尾約談 mailto 中文原文：
    // subject: 預約初談
    // body:
    // 您好，想預約初步諮詢。
    // 專案重點（可直接修改）：
    // 1) 專案類型：
    // 2) 需求簡述：
    // 3) 預算：
    // 4) 預計上線時間：
    // 5) 參考範例：
    // 6) 其他補充：
    closingConsultationMailto:
      'mailto:pigeonpacket.tech@gmail.com?subject=%E9%A0%90%E7%B4%84%E5%88%9D%E8%AB%87&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E5%88%9D%E6%AD%A5%E8%AB%AE%E8%A9%A2%E3%80%82%E4%BB%A5%E4%B8%8B%E6%98%AF%E5%B0%88%E6%A1%88%E9%87%8D%E9%BB%9E%EF%BC%9A%0A1)%20%E5%B0%88%E6%A1%88%E9%A1%9E%E5%9E%8B%EF%BC%9A%0A2)%20%E9%9C%80%E6%B1%82%E7%B0%A1%E8%BF%B0%EF%BC%9A%0A3)%20%E9%A0%90%E7%AE%97%EF%BC%9A%0A4)%20%E9%A0%90%E8%A8%88%E4%B8%8A%E7%B7%9A%E6%99%82%E9%96%93%EF%BC%9A%0A5)%20%E5%8F%83%E8%80%83%E7%AF%84%E4%BE%8B%EF%BC%9A%0A6)%20%E5%85%B6%E4%BB%96%E8%A3%9C%E5%85%85%EF%BC%9A',
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
    contactBody: '隨時和我聯繫，討論你的專案需求與時程。',
    contactInfo: [
      { label: 'Email', value: 'pigeonpacket.tech@gmail.com' },
      { label: '雲端服務', value: 'GCP、AWS、Azure 雲端架設' },
      { label: '前端', value: 'Angular 前端開發' },
      { label: '後端', value: 'C# / Java / PHP 後端開發' },
      { label: '容器平台', value: 'k8s 架設' }
    ]
  }
} as const;
