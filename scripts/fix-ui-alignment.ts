#!/usr/bin/env node

import fs from 'fs';
import path from 'path';

// UI自动修复脚本
interface UIFix {
  file: string;
  selector: string;
  issue: string;
  fix: string;
}

const commonUIFixes: UIFix[] = [
  // 导航栏对齐修复
  {
    file: 'components/NavbarV2.tsx',
    selector: 'nav',
    issue: 'Navigation bar height inconsistent',
    fix: 'h-16 md:h-20' // 统一高度
  },
  {
    file: 'components/NavbarV2.tsx',
    selector: '.container',
    issue: 'Container not centered',
    fix: 'container mx-auto px-4 sm:px-6 lg:px-8'
  },

  // Hero区域对齐修复
  {
    file: 'components/HeroLanhu.tsx',
    selector: 'h1',
    issue: 'Title not centered on mobile',
    fix: 'text-center'
  },
  {
    file: 'components/HeroLanhu.tsx',
    selector: '.grid',
    issue: 'Grid columns not responsive',
    fix: 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
  },

  // 间距统一修复
  {
    file: 'components/FourServices.tsx',
    selector: 'section',
    issue: 'Inconsistent section padding',
    fix: 'py-16 md:py-20 lg:py-24'
  },
  {
    file: 'components/ThreeEnginesLanhu.tsx',
    selector: '.container',
    issue: 'Container padding not consistent',
    fix: 'container mx-auto px-4 sm:px-6 lg:px-8'
  },

  // 文字对齐修复
  {
    file: 'components/TestimonialsScroll.tsx',
    selector: 'h2',
    issue: 'Heading alignment inconsistent',
    fix: 'text-center'
  },

  // 按钮样式统一
  {
    file: 'components/**/*.tsx',
    selector: 'button',
    issue: 'Button styles not consistent',
    fix: 'inline-flex items-center justify-center px-6 py-3 md:px-8 md:py-4'
  },
];

// CSS修复配置
const cssFixPatterns = {
  // 修复容器最大宽度
  '.container': {
    'max-width': '1280px',
    'margin-left': 'auto',
    'margin-right': 'auto',
    'padding-left': '1rem',
    'padding-right': '1rem',
  },

  // 修复网格布局
  '.grid': {
    'gap': '1.5rem',
  },

  // 修复响应式间距
  'section': {
    'padding-top': 'clamp(3rem, 5vw, 6rem)',
    'padding-bottom': 'clamp(3rem, 5vw, 6rem)',
  },

  // 修复文本大小
  'h1': {
    'font-size': 'clamp(2rem, 5vw, 4rem)',
    'line-height': '1.2',
  },
  'h2': {
    'font-size': 'clamp(1.5rem, 4vw, 3rem)',
    'line-height': '1.3',
  },
};

// Tailwind类名映射修复
const tailwindFixes = {
  // 间距修复
  'pt-12': 'pt-12 md:pt-16 lg:pt-20',
  'pb-12': 'pb-12 md:pb-16 lg:pb-20',
  'px-4': 'px-4 sm:px-6 lg:px-8',
  'py-8': 'py-8 md:py-12 lg:py-16',

  // 网格修复
  'grid-cols-4': 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4',
  'grid-cols-3': 'grid-cols-1 md:grid-cols-3',
  'grid-cols-2': 'grid-cols-1 md:grid-cols-2',

  // 文本大小修复
  'text-6xl': 'text-4xl md:text-5xl lg:text-6xl',
  'text-5xl': 'text-3xl md:text-4xl lg:text-5xl',
  'text-4xl': 'text-2xl md:text-3xl lg:text-4xl',
  'text-3xl': 'text-xl md:text-2xl lg:text-3xl',

  // Flex布局修复
  'flex-row': 'flex-col md:flex-row',
  'justify-between': 'justify-center md:justify-between',
  'items-center': 'items-center',

  // 边距修复
  'gap-8': 'gap-4 md:gap-6 lg:gap-8',
  'gap-6': 'gap-3 md:gap-4 lg:gap-6',
  'gap-4': 'gap-2 md:gap-3 lg:gap-4',
};

// 执行修复
function applyFixes() {
  console.log('🔧 Starting UI alignment fixes...\n');

  // 1. 读取所有组件文件
  const componentsDir = path.join(process.cwd(), 'components');
  const files = fs.readdirSync(componentsDir)
    .filter(file => file.endsWith('.tsx'));

  let fixCount = 0;

  files.forEach(file => {
    const filePath = path.join(componentsDir, file);
    let content = fs.readFileSync(filePath, 'utf-8');
    let modified = false;

    // 应用Tailwind类名修复
    Object.entries(tailwindFixes).forEach(([oldClass, newClass]) => {
      const regex = new RegExp(`\\b${oldClass}\\b`, 'g');
      if (content.match(regex)) {
        content = content.replace(regex, newClass);
        modified = true;
        fixCount++;
        console.log(`✅ Fixed ${oldClass} → ${newClass} in ${file}`);
      }
    });

    // 保存修改后的文件
    if (modified) {
      fs.writeFileSync(filePath, content, 'utf-8');
    }
  });

  // 2. 修复全局CSS
  const globalCssPath = path.join(process.cwd(), 'app', 'globals.css');
  if (fs.existsSync(globalCssPath)) {
    let cssContent = fs.readFileSync(globalCssPath, 'utf-8');

    // 添加响应式修复
    const responsiveFixes = `
/* UI Alignment Fixes */
@media (max-width: 640px) {
  .container {
    padding-left: 1rem;
    padding-right: 1rem;
  }

  section {
    padding-top: 3rem;
    padding-bottom: 3rem;
  }
}

@media (min-width: 641px) and (max-width: 1024px) {
  .container {
    padding-left: 1.5rem;
    padding-right: 1.5rem;
  }

  section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

@media (min-width: 1025px) {
  .container {
    max-width: 1280px;
  }

  section {
    padding-top: 5rem;
    padding-bottom: 5rem;
  }
}

/* Grid alignment fixes */
.grid {
  align-items: start;
}

/* Text alignment on mobile */
@media (max-width: 768px) {
  h1, h2, h3 {
    text-align: center;
  }
}

/* Image aspect ratio fixes */
img {
  max-width: 100%;
  height: auto;
  object-fit: cover;
}

/* Button alignment */
button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
}
`;

    if (!cssContent.includes('UI Alignment Fixes')) {
      cssContent += responsiveFixes;
      fs.writeFileSync(globalCssPath, cssContent, 'utf-8');
      console.log('✅ Added responsive CSS fixes to globals.css');
      fixCount++;
    }
  }

  console.log(`\n🎉 Applied ${fixCount} UI fixes!`);
  console.log('📝 Run tests again to verify: npm run test:ui');
}

// 运行修复
if (require.main === module) {
  applyFixes();
}

export { applyFixes, tailwindFixes, cssFixPatterns };