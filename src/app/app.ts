import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly language = signal<'en' | 'zh'>('en');
  protected readonly content = computed(() => COPY[this.language()]);

  constructor() {
    if (typeof window === 'undefined') {
      return;
    }

    const savedLanguage = window.localStorage.getItem('demo.language');

    if (savedLanguage === 'en' || savedLanguage === 'zh') {
      this.language.set(savedLanguage);
    }
  }

  protected setLanguage(language: 'en' | 'zh'): void {
    this.language.set(language);

    if (typeof window !== 'undefined') {
      window.localStorage.setItem('demo.language', language);
    }
  }
}

const COPY = {
  en: {
    brandTag: 'Technology Delivery Partner',
    navCapabilities: 'Capabilities',
    navDelivery: 'Delivery',
    navProof: 'Proof',
    navContact: 'Contact',
    heroEyebrow: 'Engineering websites, platforms, and internal systems that ship cleanly.',
    heroTitle: 'Pigeon Packet',
    heroSubtitle:
      'From corporate sites to Azure-hosted business systems, we turn ambiguous requirements into production-ready delivery with clear scope, stable architecture, and maintainable code.',
    ctaPrimary: 'Book Discovery Call',
    ctaSecondary: 'Review Capabilities',
    initialConsultationMailto:
      'mailto:pigeon@pigeon-packet.com?subject=Discovery%20Call%20-%20Technology%20Project%20Inquiry&body=Hi%20team%2C%0A%0AI%20want%20to%20discuss%20a%20technology%20delivery%20project.%0AProject%20type%3A%0AGoals%3A%0ABudget%3A%0ATimeline%3A%0ANotes%3A%0A%0AThank%20you.',
    closingConsultationMailto:
      'mailto:pigeon@pigeon-packet.com?subject=Book%20Discovery%20Call&body=Hi%20team%2C%0A%0AI%20want%20to%20schedule%20a%20discovery%20call.%0AProject%20type%3A%0AGoals%3A%0ABudget%3A%0ATimeline%3A%0ANotes%3A%0A%0AThank%20you.',
    heroStats: [
      { value: 'Web + App', label: 'Customer-facing sites and internal business platforms' },
      { value: 'Cloud Ready', label: '3 main Cloud Deployment planning for cloud delivery and operations' },
      { value: 'Bilingual', label: 'Communication and delivery support in English and Chinese' }
    ],
    heroPanelTitle: 'Delivery model',
    heroPanelItems: [
      'Architecture decisions documented early',
      'Frontend and backend integration aligned from day one',
      'Release planning built for actual business constraints'
    ],
    heroSignalTitle: 'What clients usually need',
    heroSignals: ['Corporate website refresh', 'Admin dashboard delivery', 'API integration', 'Azure launch support'],
    proofTitle: 'Why teams bring us in',
    proofIntro:
      'The goal is not a flashy prototype. The goal is a stable handoff, predictable execution, and a system your team can continue to own after launch.',
    proofCards: [
      {
        title: 'Clarity before build',
        detail: 'We reduce ambiguity up front with scope definition, milestones, dependency mapping, and implementation notes.'
      },
      {
        title: 'Technology fit',
        detail: 'Delivery decisions are shaped around your stack, integration constraints, hosting model, and future maintenance needs.'
      },
      {
        title: 'Operational readiness',
        detail: 'Projects are prepared for deployment, handover, and iteration instead of stopping at a visual mockup.'
      }
    ],
    capabilitiesTitle: 'Core capabilities',
    capabilitiesIntro: 'A focused service stack for companies that need technical execution, not generic marketing design.',
    capabilities: [
      {
        icon: 'web',
        title: 'Web platforms',
        detail: 'Corporate websites, campaign pages, multilingual experiences, and design system-aligned frontends.'
      },
      {
        icon: 'system',
        title: 'Business systems',
        detail: 'Dashboards, internal tools, data views, and workflows that connect with existing backend services.'
      },
      {
        icon: 'cloud',
        title: 'Cloud delivery',
        detail: 'Cloud deployment preparation, CI/CD setup, environment planning, and production release support.'
      }
    ],
    stackTitle: 'Technology focus',
    stackItems: ['Angular', 'TypeScript', 'C#', 'Java', 'PHP', 'REST API', 'Azure Web App', 'CI/CD', 'Kubernetes'],
    deliveryTitle: 'Delivery process',
    deliverySteps: [
      {
        index: '01',
        title: 'Discovery and framing',
        detail: 'We align on business goal, stakeholders, constraints, timeline, and technical risk before implementation starts.'
      },
      {
        index: '02',
        title: 'Solution mapping',
        detail: 'We define information structure, architecture direction, milestones, and the concrete deliverables for each phase.'
      },
      {
        index: '03',
        title: 'Build and review',
        detail: 'Work ships in checkpoints with visible progress, review windows, and issue handling that keeps momentum intact.'
      },
      {
        index: '04',
        title: 'Launch and handoff',
        detail: 'We package deployment guidance, technical notes, and follow-up recommendations so your team can keep moving.'
      }
    ],
    engagementTitle: 'Example engagements',
    engagementCards: [
      { title: 'Company site refresh', detail: 'For businesses updating positioning, UX, and technical delivery quality.' },
      { title: 'Operations dashboard', detail: 'For teams that need internal visibility, role-based views, and API-backed workflows.' },
      { title: 'Launch support sprint', detail: 'For projects that need fast implementation help before a release or migration.' }
    ],
    closingTitle: 'Need a delivery partner?',
    closingBody:
      'Send the current requirement draft, rough brief, or existing site. We can translate it into an implementation path with realistic scope and next steps.',
    closingCta: 'Start the Conversation',
    contactTitle: 'Contact',
    contactBody: 'Available for scoped projects, delivery support, and technical consulting.',
    contactInfo: [
      { label: 'Email', value: 'pigeon@pigeon-packet.com' },
      { label: 'Cloud', value: 'Azure, AWS, GCP' },
      { label: 'Frontend', value: 'Angular and modern web UI engineering' },
      { label: 'Backend', value: 'C#, Java, PHP service integration' }
    ],
    footerCompany: 'Pigeon Packet Co., Ltd.',
    footerRights: 'All rights reserved.',
    footerLineLabel: 'LINE',
    footerLineValue: '@pigeon_packet',
    footerLineHref: 'https://line.me/R/ti/p/@pigeon_packet',
    zhButton: '中文'
  },
  zh: {
    brandTag: '技術交付夥伴',
    navCapabilities: '核心能力',
    navDelivery: '交付流程',
    navProof: '合作價值',
    navContact: '聯絡方式',
    heroEyebrow: '為現代企業打造可上線、可維護、可交接的網站與系統。',
    heroTitle: '鴿子封包',
    heroSubtitle:
      '從企業形象網站到 Azure 可部署的商務系統，我們把模糊需求整理成可執行範圍，兼顧架構穩定、開發品質與後續維運。',
    ctaPrimary: '預約需求訪談',
    ctaSecondary: '查看核心能力',
    initialConsultationMailto:
      'mailto:pigeon@pigeon-packet.com?subject=%E9%9C%80%E6%B1%82%E8%A8%AA%E8%AB%87%20-%20%E6%8A%80%E8%A1%93%E5%B0%88%E6%A1%88%E8%AB%AE%E8%A9%A2&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%0A%0A%E6%88%91%E6%83%B3%E8%A8%8E%E8%AB%96%E4%B8%80%E5%80%8B%E6%8A%80%E8%A1%93%E4%BA%A4%E4%BB%98%E5%B0%88%E6%A1%88%E3%80%82%0A%E5%B0%88%E6%A1%88%E9%A1%9E%E5%9E%8B%EF%BC%9A%0A%E7%9B%AE%E6%A8%99%EF%BC%9A%0A%E9%A0%90%E7%AE%97%EF%BC%9A%0A%E6%99%82%E7%A8%8B%EF%BC%9A%0A%E5%85%B6%E4%BB%96%E8%A3%9C%E5%85%85%EF%BC%9A%0A%0A%E8%AC%9D%E8%AC%9D%E3%80%82',
    closingConsultationMailto:
      'mailto:pigeon@pigeon-packet.com?subject=%E9%A0%90%E7%B4%84%E9%9C%80%E6%B1%82%E8%A8%AA%E8%AB%87&body=%E6%82%A8%E5%A5%BD%EF%BC%8C%0A%0A%E6%88%91%E6%83%B3%E9%A0%90%E7%B4%84%E4%B8%80%E5%A0%B4%E9%9C%80%E6%B1%82%E8%A8%AA%E8%AB%87%E3%80%82%0A%E5%B0%88%E6%A1%88%E9%A1%9E%E5%9E%8B%EF%BC%9A%0A%E7%9B%AE%E6%A8%99%EF%BC%9A%0A%E9%A0%90%E7%AE%97%EF%BC%9A%0A%E6%99%82%E7%A8%8B%EF%BC%9A%0A%E5%85%B6%E4%BB%96%E8%A3%9C%E5%85%85%EF%BC%9A%0A%0A%E8%AC%9D%E8%AC%9D%E3%80%82',
    heroStats: [
      { value: '網站 + 系統', label: '涵蓋對外官網與內部商務平台交付' },
      { value: '雲端導向', label: '三大雲端部署規劃、環境設定與上線流程同步考量' },
      { value: '雙語協作', label: '支援中英文溝通、文件與交付節奏' }
    ],
    heroPanelTitle: '交付方式',
    heroPanelItems: [
      '早期先釐清架構與範圍，避免返工',
      '前後端與整合需求從一開始就對齊',
      '交付節奏依照真實商務時程與風險安排'
    ],
    heroSignalTitle: '常見合作需求',
    heroSignals: ['企業網站改版', '後台與儀表板開發', 'API 串接', 'Azure 上線支援'],
    proofTitle: '企業選擇我們的原因',
    proofIntro:
      '重點不是只做出一個好看的畫面，而是把需求整理成可落地的交付結果，讓後續維運與擴充都站得住腳。',
    proofCards: [
      {
        title: '先釐清，再開發',
        detail: '在實作前先整理需求、風險、里程碑與依賴，降低模糊地帶造成的成本。'
      },
      {
        title: '以技術條件做決策',
        detail: '會根據既有系統、整合限制、部署方式與維護需求，選擇合理的交付方案。'
      },
      {
        title: '交付到可上線狀態',
        detail: '不只停留在展示頁，而是把部署、交接與後續迭代一起納入規劃。'
      }
    ],
    capabilitiesTitle: '核心能力',
    capabilitiesIntro: '聚焦在真正有技術門檻的企業需求，而不是只做一般行銷視覺包裝。',
    capabilities: [
      {
        icon: 'web',
        title: '網站平台建置',
        detail: '企業官網、多語頁面、活動頁與符合品牌系統的前端體驗設計。'
      },
      {
        icon: 'system',
        title: '商務系統開發',
        detail: '後台、內部工具、資料視圖與串接既有服務的工作流程設計與實作。'
      },
      {
        icon: 'cloud',
        title: '雲端交付支援',
        detail: '雲端部署規劃、CI/CD、環境設計與正式上線前後的技術支援。'
      }
    ],
    stackTitle: '技術聚焦',
    stackItems: ['Angular', 'TypeScript', 'C#', 'Java', 'PHP', 'REST API', 'Azure Web App', 'CI/CD', 'Kubernetes'],
    deliveryTitle: '交付流程',
    deliverySteps: [
      {
        index: '01',
        title: '需求訪談與定義',
        detail: '先對齊商業目標、利害關係人、限制條件、時程與技術風險，再進入實作。'
      },
      {
        index: '02',
        title: '方案與結構規劃',
        detail: '釐清資訊架構、技術方向、里程碑安排，以及每個階段的交付內容。'
      },
      {
        index: '03',
        title: '分段交付與檢視',
        detail: '依照節點交付可見成果，保留檢視與修正空間，同時維持專案推進速度。'
      },
      {
        index: '04',
        title: '上線與交接',
        detail: '整理部署說明、技術備註與後續建議，讓團隊能平順接手與持續迭代。'
      }
    ],
    engagementTitle: '常見合作形式',
    engagementCards: [
      { title: '企業官網升級', detail: '適合需要重新整理品牌定位、使用體驗與技術品質的企業。' },
      { title: '營運後台建置', detail: '適合需要角色權限、資料視圖與 API 串接流程的團隊。' },
      { title: '上線前衝刺支援', detail: '適合在發佈、改版或遷移前需要快速技術補強的專案。' }
    ],
    closingTitle: '需要技術交付夥伴嗎？',
    closingBody: '把現有需求文件、草稿或網站丟給我們，我們可以協助整理出合理範圍與下一步實作方向。',
    closingCta: '開始洽談',
    contactTitle: '聯絡方式',
    contactBody: '可承接明確範圍專案、交付支援與技術顧問合作。',
    contactInfo: [
      { label: 'Email', value: 'pigeon@pigeon-packet.com' },
      { label: '雲端', value: 'Azure、AWS、GCP' },
      { label: '前端', value: 'Angular 與現代網頁介面工程' },
      { label: '後端', value: 'C#、Java、PHP 服務整合' }
    ],
    footerCompany: '鴿子封包有限公司',
    footerRights: 'All rights reserved.',
    footerLineLabel: 'LINE',
    footerLineValue: '@pigeon_packet',
    footerLineHref: 'https://line.me/R/ti/p/@pigeon_packet',
    zhButton: '中文'
  }
} as const;
