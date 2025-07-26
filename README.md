# 🚀 pnpm-turbo-biome-vitest: High-Performance TypeScript Monorepo Template

这是一个为追求极致性能和最佳开发体验而生的现代化 TypeScript Monorepo 模板。它整合了当前业界最前沿的工具链，旨在提供一个开箱即用、高度优化的开发环境，让你能专注于业务逻辑，而不是繁琐的工程配置。

[![Built with pnpm](https://img.shields.io/badge/built%20with-pnpm-ff69b4.svg)](https://pnpm.io/)
[![Powered by Turborepo](https://img.shields.io/badge/powered%20by-Turborepo-1995ff.svg)](https://turbo.build/)
[![Formatted with Biome](https://img.shields.io/badge/formatted%20with-Biome-60A5FA.svg)](https://biomejs.dev/)
[![Tested with Vitest](https://img.shields.io/badge/tested%20with-Vitest-6E9F18.svg)](https://vitest.dev/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

---

## ✨ 特性

本模板经过精心设计，集成了以下核心特性：

-   **⚡️ 极致性能**:
    -   **pnpm**: 采用符号链接和内容寻址存储，实现闪电般的依赖安装和高效的磁盘空间利用。
    -   **Turborepo**: 高性能的构建系统，通过智能缓存和任务编排，大幅缩短构建和测试时间。
    -   **Biome**: 基于 Rust 构建，集代码检查（Linting）、格式化（Formatting）于一体的超高速工具链，全面取代 ESLint + Prettier。
    -   **Vitest**: 由 Vite 驱动的现代化测试框架，享受极速的测试体验。

-   **🔧 现代化的工作流**:
    -   **Monorepo 结构**: 清晰的 `apps` 和 `packages` 目录，便于代码复用和项目管理。
    -   **Git Hooks**: 使用 `husky` 和 `lint-staged` 在提交前自动检查和格式化代码，保证代码质量。
    -   **规范化提交**: 集成 `commitlint`，强制使用 [Conventional Commits](https://www.conventionalcommits.org/) 规范，便于生成日志和版本管理。
    -   **版本管理与发布**: 集成 `changesets`，提供流畅的版本管理、CHANGELOG 生成和包发布流程。

-   **💻 卓越的开发体验 (DX)**:
    -   **TypeScript 分层配置**: 根目录的 `tsconfig.base.json` 和各子包的继承配置，确保类型检查的一致性和可维护性。
    -   **VSCode 集成**: 预置了推荐的插件和设置，实现开箱即用的代码格式化、智能提示和自动修复。
    -   **示例驱动**: 包含 `packages/utils`, `packages/logger` 和 `apps/cli` 的示例，清晰地展示了库与库、应用与库之间的依赖和调用关系。

## 🚀 快速开始

1.  **使用此模板**
    点击页面右上角的 `Use this template` 按钮，或直接 `git clone` 本仓库。

2.  **安装依赖**
    本项目使用 `pnpm` 作为包管理器。
    ```bash
    pnpm install
    ```

3.  **启动开发模式**
    此命令会以 `watch` 模式启动所有 `packages` 的构建，并运行所有 `apps`。
    ```bash
    pnpm dev
    ```

## 🛠️ 可用脚本

所有核心命令都应在项目根目录执行。`Turborepo` 会智能地将任务分发到各个子包。

| 命令                  | 描述                                                               |
| --------------------- | ------------------------------------------------------------------ |
| `pnpm dev`            | 启动所有应用和包的开发模式。                                       |
| `pnpm build`          | 构建所有 `apps` 和 `packages`。                                    |
| `pnpm test`           | 运行所有包的单元测试。                                             |
| `pnpm lint`           | 使用 `Biome` 对整个项目进行代码质量检查。                           |
| `pnpm check`          | 使用 `Biome` 对整个项目进行检查并自动应用修复。                     |
| `pnpm clean`          | 清理所有 `dist`, `node_modules` 和 `.turbo` 目录，用于完全重新构建。 |
| `pnpm changeset`      | 创建一个新的变更集，用于记录版本更新。                             |
| `pnpm version-packages` | 根据变更集提升包的版本号。                                         |
| `pnpm release`        | 发布所有已更新的包到 npm（需要先构建和版本化）。                   |

## 📁 工作区结构

```
.
├── apps/
│   └── cli/        # 一个示例命令行应用，消费 packages 中的库
├── packages/
│   ├── utils/      # 一个基础的、无依赖的工具库
│   ├── logger/     # 一个依赖 utils 库的日志库
│   └── tsconfig/   # 存放共享的 TypeScript 配置文件
└── package.json
```

## 📄 许可证

本项目采用 [MIT License](https://opensource.org/licenses/MIT).
