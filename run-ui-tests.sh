#!/bin/bash

echo "🎯 AI解说大师 - UI自动化测试和修复系统"
echo "========================================"

# 颜色定义
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# 步骤1: 安装依赖
echo -e "\n${YELLOW}📦 步骤1: 安装测试依赖...${NC}"
npm install --save-dev @playwright/test @percy/cli @percy/playwright

# 步骤2: 安装Playwright浏览器
echo -e "\n${YELLOW}🌐 步骤2: 安装测试浏览器...${NC}"
npx playwright install

# 步骤3: 启动开发服务器
echo -e "\n${YELLOW}🚀 步骤3: 启动开发服务器...${NC}"
npm run dev &
DEV_PID=$!
sleep 5

# 步骤4: 运行视觉回归测试
echo -e "\n${YELLOW}🔍 步骤4: 运行UI对齐测试...${NC}"
npx playwright test tests/visual-regression.spec.ts --reporter=html

# 检查测试结果
TEST_RESULT=$?

if [ $TEST_RESULT -ne 0 ]; then
    echo -e "\n${RED}❌ 检测到UI问题！${NC}"
    echo -e "${YELLOW}🔧 正在自动修复...${NC}\n"

    # 步骤5: 运行自动修复脚本
    npx ts-node scripts/fix-ui-alignment.ts

    echo -e "\n${GREEN}✅ UI修复完成！${NC}"
    echo -e "${YELLOW}📝 重新运行测试验证修复...${NC}\n"

    # 重新运行测试验证修复
    npx playwright test tests/visual-regression.spec.ts --reporter=list

    if [ $? -eq 0 ]; then
        echo -e "\n${GREEN}🎉 所有UI问题已修复！${NC}"
    else
        echo -e "\n${YELLOW}⚠️ 部分问题需要手动检查${NC}"
        echo "请查看测试报告: npx playwright show-report"
    fi
else
    echo -e "\n${GREEN}✅ UI测试通过，没有发现问题！${NC}"
fi

# 步骤6: 生成测试报告
echo -e "\n${YELLOW}📊 生成测试报告...${NC}"
npx playwright show-report &

# 清理
echo -e "\n${YELLOW}🧹 清理进程...${NC}"
kill $DEV_PID 2>/dev/null

echo -e "\n${GREEN}✨ UI测试完成！${NC}"
echo "================================="
echo "测试结果已保存到 playwright-report/"
echo "截图对比保存在 test-results/"
echo ""
echo "可用命令："
echo "  npm run test:ui      - 运行所有UI测试"
echo "  npm run test:visual  - 运行视觉回归测试"
echo "  npm run test:e2e     - 运行端到端测试"
echo ""