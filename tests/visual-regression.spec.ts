import { test, expect } from '@playwright/test';

// 定义所有需要测试的断点
const breakpoints = [
  { name: 'mobile', width: 375, height: 812 },
  { name: 'tablet', width: 768, height: 1024 },
  { name: 'desktop', width: 1440, height: 900 },
  { name: 'wide', width: 1920, height: 1080 },
];

// 视觉回归测试 - 检测UI错位
test.describe('Visual Regression Tests', () => {
  for (const breakpoint of breakpoints) {
    test(`Homepage at ${breakpoint.name} (${breakpoint.width}x${breakpoint.height})`, async ({ page }) => {
      // 设置视口大小
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height
      });

      // 访问首页
      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // 等待动画完成
      await page.waitForTimeout(2000);

      // 截图整个页面
      await expect(page).toHaveScreenshot(`homepage-${breakpoint.name}.png`, {
        fullPage: true,
        animations: 'disabled',
        maxDiffPixels: 100,
      });
    });

    test(`Navigation bar at ${breakpoint.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // 只截图导航栏区域
      const navbar = await page.locator('nav').first();
      await expect(navbar).toHaveScreenshot(`navbar-${breakpoint.name}.png`);
    });

    test(`Hero section at ${breakpoint.name}`, async ({ page }) => {
      await page.setViewportSize({
        width: breakpoint.width,
        height: breakpoint.height
      });

      await page.goto('/');
      await page.waitForLoadState('networkidle');

      // 截图Hero区域
      const hero = await page.locator('section').first();
      await expect(hero).toHaveScreenshot(`hero-${breakpoint.name}.png`);
    });
  }
});

// 元素对齐测试
test.describe('Element Alignment Tests', () => {
  test('Check navbar alignment', async ({ page }) => {
    await page.goto('/');

    const navbar = await page.locator('nav');
    const logo = await page.locator('nav').locator('a').first();
    const menuItems = await page.locator('nav').locator('a');

    // 检查导航栏高度
    const navbarBox = await navbar.boundingBox();
    expect(navbarBox?.height).toBeGreaterThanOrEqual(64);
    expect(navbarBox?.height).toBeLessThanOrEqual(80);

    // 检查logo位置
    const logoBox = await logo.boundingBox();
    expect(logoBox?.x).toBeGreaterThanOrEqual(0);
  });

  test('Check content centering', async ({ page }) => {
    await page.goto('/');

    // 检查主要内容容器是否居中
    const containers = await page.locator('.container').all();
    for (const container of containers) {
      const box = await container.boundingBox();
      if (box) {
        const pageWidth = await page.viewportSize()?.width || 1920;
        const leftMargin = box.x;
        const rightMargin = pageWidth - (box.x + box.width);

        // 容差允许10px的差异
        expect(Math.abs(leftMargin - rightMargin)).toBeLessThanOrEqual(10);
      }
    }
  });

  test('Check text alignment', async ({ page }) => {
    await page.goto('/');

    // 检查所有标题是否正确对齐
    const headings = await page.locator('h1, h2, h3').all();
    for (const heading of headings) {
      const textAlign = await heading.evaluate(el =>
        window.getComputedStyle(el).textAlign
      );

      // 根据设计规范验证文本对齐
      const text = await heading.textContent();
      if (text?.includes('AI解说大师') || text?.includes('三大AI引擎')) {
        expect(textAlign).toBe('center');
      }
    }
  });

  test('Check spacing consistency', async ({ page }) => {
    await page.goto('/');

    // 检查section之间的间距
    const sections = await page.locator('section').all();
    let previousBottom = 0;

    for (let i = 0; i < sections.length; i++) {
      const box = await sections[i].boundingBox();
      if (box && i > 0) {
        const gap = box.y - previousBottom;
        // 间距应该在合理范围内（0-120px）
        expect(gap).toBeGreaterThanOrEqual(0);
        expect(gap).toBeLessThanOrEqual(120);
      }
      if (box) {
        previousBottom = box.y + box.height;
      }
    }
  });
});

// 响应式布局测试
test.describe('Responsive Layout Tests', () => {
  test('Mobile menu toggle', async ({ page }) => {
    // 设置移动端视口
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    // 检查汉堡菜单是否可见
    const mobileMenuButton = await page.locator('button[aria-label*="menu"]').or(page.locator('button:has(svg)')).first();
    await expect(mobileMenuButton).toBeVisible();

    // 点击打开菜单
    await mobileMenuButton.click();

    // 检查菜单项是否显示
    await expect(page.locator('nav').locator('a').first()).toBeVisible();
  });

  test('Grid layout responsiveness', async ({ page }) => {
    // 桌面端 - 应该是4列
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.goto('/');

    const desktopGrid = await page.locator('.grid').first();
    const desktopColumns = await desktopGrid.evaluate(el =>
      window.getComputedStyle(el).gridTemplateColumns
    );
    expect(desktopColumns).toContain('4');

    // 移动端 - 应该是1列或2列
    await page.setViewportSize({ width: 375, height: 812 });

    const mobileGrid = await page.locator('.grid').first();
    const mobileColumns = await mobileGrid.evaluate(el =>
      window.getComputedStyle(el).gridTemplateColumns
    );
    expect(mobileColumns).not.toContain('4');
  });
});

// 图片加载测试
test.describe('Image Loading Tests', () => {
  test('All images should load correctly', async ({ page }) => {
    await page.goto('/');
    await page.waitForLoadState('networkidle');

    // 获取所有图片
    const images = await page.locator('img').all();

    for (const image of images) {
      // 检查图片是否加载
      const isLoaded = await image.evaluate((img: HTMLImageElement) => {
        return img.complete && img.naturalHeight !== 0;
      });
      expect(isLoaded).toBeTruthy();

      // 检查图片尺寸是否合理
      const box = await image.boundingBox();
      if (box) {
        expect(box.width).toBeGreaterThan(0);
        expect(box.height).toBeGreaterThan(0);
      }
    }
  });
});

// 颜色一致性测试
test.describe('Color Consistency Tests', () => {
  test('Check brand colors', async ({ page }) => {
    await page.goto('/');

    // 检查主要CTA按钮的颜色
    const ctaButtons = await page.locator('button:has-text("预约演示"), button:has-text("立即体验")').all();

    for (const button of ctaButtons) {
      const bgColor = await button.evaluate(el =>
        window.getComputedStyle(el).backgroundColor
      );

      // 应该包含绿色渐变
      expect(bgColor).toMatch(/rgb|rgba/);
    }

    // 检查标题颜色
    const mainTitle = await page.locator('h1:has-text("AI解说大师")').first();
    const titleColor = await mainTitle.evaluate(el =>
      window.getComputedStyle(el).color
    );

    // 标题应该是白色
    expect(titleColor).toMatch(/255|fff/);
  });
});