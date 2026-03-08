import { Component, computed, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  imports: [],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly language = signal<'en' | 'zh'>('en');
  protected readonly theme = signal<'ocean' | 'forest' | 'sunset'>('ocean');
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

    if (savedTheme === 'ocean' || savedTheme === 'forest' || savedTheme === 'sunset') {
      this.theme.set(savedTheme);
    }
  }

  protected setLanguage(language: 'en' | 'zh'): void {
    this.language.set(language);
    if (typeof window !== 'undefined') {
      window.localStorage.setItem('demo.language', language);
    }
  }

  protected setTheme(theme: 'ocean' | 'forest' | 'sunset'): void {
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
    heroBadge: 'Demo Portfolio Page',
    heroTitle: 'Build with clarity, ship with confidence.',
    heroSubtitle:
      'This Angular demo supports bilingual content and theme switching. You can replace placeholder text with your real profile later.',
    ctaPrimary: 'Update My Profile Later',
    ctaSecondary: 'Backend Coming Later',
    aboutTitle: 'About This Page',
    aboutBody:
      'This is a starter page for your personal capability showcase. It is designed so you can update sections quickly when your content is ready.',
    skillsTitle: 'Ability Highlights (Placeholder)',
    skills: [
      'Frontend architecture and component design',
      'Cloud-first application planning (Azure)',
      'API design and backend integration',
      'Testing, CI/CD, and deployment readiness'
    ],
    zhButton: '中文',
    contactTitle: 'Contact Section (Placeholder)',
    contactBody: 'Add your email, LinkedIn, GitHub, and project references here.'
  },
  zh: {
    languageLabel: '語言',
    themeLabel: '主題',
    heroBadge: '作品集示範頁',
    heroTitle: '清楚規劃，穩定交付。',
    heroSubtitle: '這個 Angular 示範頁已支援中英文切換與主題切換，之後可直接替換成你的真實履歷與能力內容。',
    ctaPrimary: '之後再更新我的資料',
    ctaSecondary: '後端稍後建置',
    aboutTitle: '關於此頁面',
    aboutBody: '這是一個個人能力展示頁起始版型，等你準備好內容後，可以快速替換每個區塊。',
    skillsTitle: '能力重點（暫時內容）',
    skills: ['前端架構與元件設計', '雲端優先應用規劃（Azure）', 'API 設計與後端整合', '測試、CI/CD 與部署準備'],
    zhButton: '中文',
    contactTitle: '聯絡方式區塊（暫時內容）',
    contactBody: '之後可在這裡填入 Email、LinkedIn、GitHub 與專案連結。'
  }
} as const;
