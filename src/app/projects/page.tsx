'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';
import EduPrismCover from '../../public/eduprism.png';
import LsdeCover from '../../public/lsde.png';
import Covid19Cover from '../../public/covid19.png';
import FakeNewsCover from '../../public/fake news.png';
import DataMiningCover from '../../public/datamining.png';
import BraneCover from '../../public/brane.png';
import EaaiCover from '../../public/eaai.jpeg';
import Ml4qsCover1 from '../../public/ml4qs1.png';
import Ml4qsCover2 from '../../public/ml4qs2.png';
import ElectionCover from '../../public/election.png';
import BilingualCover from '../../public/Bilingual.png';
import BrainCover from '../../public/brain.webp';
import PathtreeCover from '../../public/pathtree.png';
import PathtreeProcessCover from '../../public/pathtreeprocess.webp';
import SpaceHubCover1 from '../../public/SpaceHub1.png';
import SpaceHubCover2 from '../../public/SpaceHub2.png';
import UniPioltCover from '../../public/UniPiolt.png';
import ExamBuilderCover1 from '../../public/exambuilder1.png';
import ExamBuilderCover2 from '../../public/exambuilder2.png';
import InfiniteCover1 from '../../public/Infinite1.png';
import InfiniteCover2 from '../../public/Infinite2.png';
import GoddoorCover1 from '../../public/goddoor1.jpeg';
import GoddoorCover2 from '../../public/goddoor2.jpeg';
import GoddoorCover3 from '../../public/goddoor3.webp';
import MusicProjectCover from '../../public/music.webp';
import RecloudCover1 from '../../public/3d1.png';
import RecloudCover2 from '../../public/3d2.png';

type TagTone = 'cv' | 'hci' | 'photo' | 'other';

type ProjectLink = {
  label: { zh: string; en: string };
  href?: string;
};

type ProjectEntry = {
  id: string;
  title: string;
  titleZh?: string;
  summary: { zh: string; en: string };
  detail: { zh: string; en: string };
  covers: string[];
  coverFit?: 'cover' | 'contain';
  layout?: 'default' | 'stacked';
  tags: Array<{ label: { zh: string; en: string }; tone: TagTone }>;
  links: ProjectLink[];
};

const projects: ProjectEntry[] = [
  {
    id: 'eduprism-lab',
    title: 'EduPrism Lab',
    summary: {
      zh: 'EduPrism Lab 是我创建的开源 AI + Edu 项目组织，聚焦教育场景下的智能工具与系统化产品实践。',
      en: 'EduPrism Lab is an open-source AI + education organization I founded to build intelligent tools and product systems for real learning scenarios.',
    },
    detail: {
      zh: 'EduPrism Lab 的核心方向是开源 AI 与教育技术结合：围绕真实教学与学习流程，持续孵化可复用的智能工具、教育工作流组件与数据化协作模块。组织强调公开协作、文档沉淀与长期可维护性，希望把教育创新从“单点 demo”推进为可被社区复用、共同迭代的开源产品体系。',
      en: 'EduPrism Lab focuses on the intersection of open-source AI and education technology. It incubates reusable intelligent tools, education workflow components, and data-driven collaboration modules grounded in real teaching and learning operations. The organization emphasizes transparent collaboration, strong documentation, and long-term maintainability, aiming to turn isolated demos into open products the community can reuse and evolve together.',
    },
    covers: [EduPrismCover.src],
    coverFit: 'contain',
    tags: [
      { label: { zh: '开源组织', en: 'Open Source' }, tone: 'other' },
      { label: { zh: 'AI + 教育', en: 'AI + Edu' }, tone: 'hci' },
      { label: { zh: '教育科技', en: 'EdTech' }, tone: 'cv' },
    ],
    links: [{ label: { zh: 'GitHub 组织', en: 'GitHub Org' }, href: 'https://github.com/EduPrism' }],
  },
  {
    id: 'admitclaw',
    title: 'AdmitClaw',
    summary: {
      zh: 'AdmitClaw 是基于 OpenClaw 的桌面端 AI Agent 工作台，把复杂的命令行编排转化为可视化、可运维、可协作的日常工作界面。',
      en: 'AdmitClaw is a desktop AI agent workspace built on OpenClaw, turning complex CLI orchestration into a visual, operable, and collaborative daily interface.',
    },
    detail: {
      zh: '项目采用 Electron + React 构建，面向真实生产场景提供完整的 Agent 管理链路：多会话聊天、`@agent` 路由、多频道接入、定时任务自动执行、技能市场安装与模型 Provider 管理。产品强调“无命令行门槛”，通过 Setup Wizard 和可视化配置将首次部署与日常维护成本降到更低。\n\n在系统架构上，AdmitClaw 采用双进程设计与主进程托管传输策略，由 Main 统一治理 Gateway 生命周期、协议切换与稳定性恢复，Renderer 专注交互与状态。结合密钥安全存储、运行诊断与审计能力，平台可以在保持可控性的前提下持续扩展 Agent 能力。\n\n结合教育业务方向，项目进一步规划了与 Infinite 业务中台的编排层方案，用于打通咨询、选校、文书、跟进与审批等流程闭环，使 AI Agent 能够在垂直业务流程中稳定落地。',
      en: 'Built with Electron and React, AdmitClaw provides a full operational layer for agent workflows in real environments: multi-session chat, direct `@agent` routing, multi-channel integration, cron-based automation, skill marketplace installation, and model/provider management. The product is designed to remove CLI barriers through a setup wizard and visual configuration flow.\n\nArchitecturally, AdmitClaw uses a dual-process model with main-process transport ownership. Electron Main governs gateway lifecycle, protocol fallback, and recovery policies, while the renderer focuses on interaction and state. With secure credential handling, runtime diagnostics, and audit-oriented observability, the platform scales agent capabilities while keeping execution controllable.\n\nFor education-focused operations, the project also defines an orchestration-layer integration with Infinite to connect consulting, school planning, application writing, follow-up actions, and approval loops, enabling reliable agent execution in vertical business workflows.',
    },
    covers: ['/admitclaw.mp4'],
    layout: 'stacked',
    tags: [
      { label: { zh: 'Agent 工作台', en: 'Agent Workspace' }, tone: 'hci' },
      { label: { zh: '桌面应用', en: 'Desktop App' }, tone: 'other' },
      { label: { zh: '工作流自动化', en: 'Workflow Automation' }, tone: 'cv' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'pathtree',
    title: 'PathTree',
    summary: {
      zh: 'PathTree 是一款职业测评与专业选择平台，旨在将自我认知转化为可执行的专业探索与路径决策。',
      en: 'PathTree is a career assessment and major selection platform designed to turn self-understanding into actionable academic and career exploration.',
    },
    detail: {
      zh: '产品以兴趣、能力、学科适配、价值观四维信号为输入，结合 Holland RIASEC 人与环境匹配 与 SCCT 等框架输出可解释的专业方向推荐。推荐引擎采用确定性多因素评分模型，并为每条推荐提供清晰的解释链，包括因素贡献度拆解、风险提示与替代路径。当信号矛盾或信息不足时，系统会给出置信度提示与验证任务建议。为提升测评质量，能力模块按题库校准思路设计迭代方向，例如 IRT 或 Rasch，在保证区分度的同时支持更高效的评估。最终，PathTree 输出结构化的行动计划，将推荐结果落到具体的探索与学习任务上。',
      en: 'It combines four signals, interest, aptitude, subject fit, and values, and produces explainable major recommendations grounded in established frameworks such as Holland RIASEC person environment fit and SCCT. The recommendation engine is deterministic and multi factor, providing a clear rationale for every path, including factor contribution breakdowns, risk flags, and alternative options. When signals are conflicting or insufficient, PathTree surfaces confidence cues and proposes validation tasks to reduce uncertainty. To strengthen measurement quality over time, the aptitude module is designed to evolve toward calibrated item banks such as IRT or Rasch, enabling efficient assessment while preserving discrimination. PathTree ultimately generates structured action plans that translate recommendations into concrete exploration and learning tasks.',
    },
    covers: [PathtreeCover.src, PathtreeProcessCover.src],
    tags: [
      { label: { zh: '教育科技', en: 'EdTech' }, tone: 'hci' },
      { label: { zh: '职业测评', en: 'Career Assessment' }, tone: 'hci' },
      { label: { zh: '路径规划', en: 'Path Planning' }, tone: 'photo' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://path-tree.vercel.app/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'infinite',
    title: 'Infinite',
    summary: {
      zh: 'Infinite 是一套面向留学机构与教育服务团队的 AI 原生业务工作平台。',
      en: 'Infinite is an AI-native operating platform for study-abroad agencies and education service teams.',
    },
    detail: {
      zh: '它不是在传统系统上外挂聊天机器人，也不是把大模型简单接入旧流程；而是围绕真实业务链路重构，让 AI 与 Agent 直接参与线索跟进、咨询评估、选校研究、申请协作、进度管理与文档生成等关键环节。\n\n在传统留学服务中，资料、沟通记录、申请状态和交付文档常分散在表格、邮件、聊天与多个后台系统里，协作依赖人工衔接，信息难沉淀、流程难标准化。Infinite 将这些工作统一到同一业务上下文中，帮助顾问、文案和运营团队稳定协作，并提升处理与交付效率。\n\nInfinite 的核心是把 AI 作为系统级能力，而不只是内容生成工具。Agent 在明确任务边界与风险控制下执行会前 brief、会议总结、缺口分析、选校建议与任务推进，强调可控执行与持续演进，更接近面向留学服务场景的 AI Native Operating Layer。',
      en: 'It is not a chatbot layered on top of a legacy system, nor a simple LLM add-on to old workflows. It is built around real service operations from the ground up, allowing AI and agents to participate directly in lead follow-up, consultation, student assessment, school research, application collaboration, progress tracking, and document generation.\n\nIn traditional study-abroad services, student data, communication records, application status, and deliverables are often scattered across spreadsheets, chats, emails, and multiple systems. Collaboration depends heavily on manual handoffs, while knowledge is hard to retain and processes are difficult to standardize. Infinite brings these tasks into one shared business context so consultants, writing teams, and operations can collaborate more consistently and deliver faster.\n\nAt its core, Infinite treats AI as a system-level capability, not just a content generator. Agents execute tasks such as pre-meeting briefs, meeting summaries, gap analysis, school recommendations, and task advancement under clear boundaries and risk controls. The product emphasizes controllable execution and continuous evolution, positioning Infinite as an AI Native Operating Layer for international education services.',
    },
    covers: [InfiniteCover1.src, InfiniteCover2.src],
    coverFit: 'contain',
    tags: [
      { label: { zh: '教育科技', en: 'EdTech' }, tone: 'hci' },
      { label: { zh: 'AI 原生系统', en: 'AI-Native System' }, tone: 'cv' },
      { label: { zh: 'Agent 协同交付', en: 'Agent Collaboration' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://admitx.cn' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'unicopilot',
    title: 'UniPilot',
    summary: {
      zh: '面向留学网申场景的智能助手与自动化系统，持续通过 CLI 能力优化 Agent 的可执行性与稳定性。',
      en: 'An intelligent assistant and automation system for study-abroad applications, continuously improved with CLI capabilities for stronger agent execution and reliability.',
    },
    detail: {
      zh: '项目由 Chrome 插件与自动化引擎两部分组成。插件侧通过 Side Panel 管理学生资料，支持字段级复制与一键复制，并通过规则匹配 + AI 识别实现表单自动填充、语言检测与中英信息适配。引擎侧基于 Playwright + Stagehand + MCP，采用 JSON 工作流编排与人工审核检查点机制，支持可控执行与回滚。近期我们进一步将高频网申动作抽象为可组合的 CLI 能力，统一结构化 JSON 输出，并通过增量 refine 机制持续补齐字段覆盖与异常处理，从而提升自动化稳定性、可观测性与跨平台复用效率。',
      en: 'The project combines a Chrome extension with an automation engine. On the extension side, a Side Panel manages student profiles with field-level copy and one-click full copy, then uses rule matching plus AI recognition for auto-fill, language detection, and bilingual adaptation. On the engine side, it is built on Playwright, Stagehand, and MCP, with JSON workflow orchestration and human checkpoint reviews for controlled execution and rollback. We further optimized the system by abstracting frequent application actions into composable CLI capabilities, standardizing structured JSON outputs, and applying incremental refine loops to close coverage gaps and edge cases. This improves reliability, observability, and cross-platform reuse.',
    },
    covers: [
      UniPioltCover.src,
    ],
    tags: [
      { label: { zh: '教育科技', en: 'EdTech' }, tone: 'hci' },
      { label: { zh: 'Agent 自动化', en: 'Agent Automation' }, tone: 'cv' },
      { label: { zh: 'CLI 工作流', en: 'CLI Workflows' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://unipilot-alpha.vercel.app/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'spacehub',
    title: 'SpaceHub',
    summary: {
      zh: 'SpaceHub 是一个 AI 原生的虚拟协作空间平台，面向远程办公、在线教学与组织协同场景。',
      en: 'SpaceHub is an AI-native virtual collaboration space for remote work, online education, and team coordination.',
    },
    detail: {
      zh: '我们希望把团队从“工具之间来回切换”的状态中解放出来，让沟通、协作和任务推进都发生在同一个在线空间里。成员通过数字分身进入场景后，可以像在真实办公室中一样移动、会合、讨论和协作，让线上协同更自然、更连贯。\n\n在视觉表达上，SpaceHub 采用“像素场景 + 现代协作界面”的融合风格：场景强调空间结构与轻量沉浸感，角色与状态信息强调识别度与沟通效率。像素风格是构建协作氛围的手段，而不是目的；核心始终是让团队更高效地共同工作。\n\n与传统视频会议或即时通讯不同，SpaceHub 强调“空间关系驱动协作”。成员可在开放区、讨论区和功能区之间自然切换，让互动拥有更直观的上下文，沉淀可持续运转的数字协作记忆。\n\n同时，SpaceHub 持续引入 AI 能力，让 AI 以“空间参与者”的方式融入日常流程。AI 不只是独立聊天入口，而是在协作现场提供支持、响应与产出，帮助组织把讨论转化为行动、把过程沉淀为资产。',
      en: 'We aim to free teams from constant context switching across disconnected tools by bringing communication, collaboration, and task progress into one shared online space. With digital avatars, members can move, gather, discuss, and co-work much like in a physical office, making online collaboration more natural and continuous.\n\nVisually, SpaceHub adopts a hybrid style of pixel scenes and modern collaboration UI. The scene design focuses on spatial structure and lightweight immersion, while identity and status layers prioritize clarity and communication efficiency. The pixel style is a means to create collaborative atmosphere, not the product goal itself.\n\nUnlike traditional video conferencing or instant messaging, SpaceHub emphasizes collaboration driven by spatial relationships. Members can move fluidly between open areas, discussion areas, and functional areas, so interactions carry clearer shared context and accumulate into a persistent digital workspace memory.\n\nSpaceHub also continuously integrates AI as a participant inside the space. Instead of being a standalone chat box, AI supports real collaboration moments with response and output, helping teams turn discussion into action and process into reusable organizational assets.',
    },
    covers: [SpaceHubCover1.src, SpaceHubCover2.src],
    tags: [
      { label: { zh: '虚拟协作空间', en: 'Virtual Collaboration Space' }, tone: 'hci' },
      { label: { zh: 'AI 原生协作', en: 'AI-Native Collaboration' }, tone: 'cv' },
      { label: { zh: '组织协同', en: 'Team Coordination' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://skyoffice.admitx.cn/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'exam-builder',
    title: 'Exam Builder',
    titleZh: '智能组卷与自动阅卷平台（Exam Builder）',
    summary: {
      zh: 'Exam Builder 是一套面向老师的 AI 原生试卷管理、组卷与自动阅卷平台（A-Level / IGCSE / AP）。',
      en: 'Exam Builder is an AI-native teacher-facing platform for paper management, paper building, and automated grading across A-Level, IGCSE, and AP workflows.',
    },
    detail: {
      zh: '产品围绕教师真实出卷与批改流程设计：支持批量导入 PDF 试卷，通过多层解析流程自动识别题号、分值、答案与补充图，并结合 AI 完成章节/主题标注；同时提供质量评分与人工校正，保证结果可复核、可控。\n\n在题库治理层，系统支持按科目、年份、考季、分值、章节、审核状态等多维检索，并提供完整性检测、批量 AI 标注与细粒度矫正能力（QP/MS/Insert）。所有题目资产统一写入本地 SQLite，并可按需同步至 SaaS 云端实现多角色协作。\n\n在组卷与阅卷层，Exam Builder 提供手动选题与 AI 自动组卷双模式，支持实时预览、拖拽重排、一键导出 Student Copy/Teacher Copy；同时支持自动阅卷流程，结合标准答案与评分规则生成批改结果与反馈，帮助老师缩短批改周期并提升评估一致性。',
      en: 'The product is designed around real teacher workflows for paper preparation and marking. Batch PDF papers are parsed through a multi-stage pipeline to extract question numbers, marks, answers, and insert sheets, then enriched with AI chapter/topic tagging. Confidence scoring and manual correction are provided to keep outputs reviewable and controllable.\n\nAt the question-bank layer, the system supports multi-dimensional filtering by subject, year, season, marks, chapter, and review status, with completeness checks, batch AI annotation, and fine-grained correction tools across QP/MS/Insert assets. Question data is stored in local SQLite and can be synced to SaaS for multi-role collaboration.\n\nFor paper building and grading, Exam Builder supports both manual selection and AI-assisted composition, with live preview, drag-to-reorder editing, and one-click export for Student Copy and Teacher Copy. It also provides automated grading based on mark schemes and scoring rules, producing grading outcomes and feedback to shorten marking cycles and improve consistency for teachers.',
    },
    covers: [ExamBuilderCover1.src, ExamBuilderCover2.src],
    tags: [
      { label: { zh: '教育科技', en: 'EdTech' }, tone: 'hci' },
      { label: { zh: '智能组卷', en: 'AI Paper Building' }, tone: 'cv' },
      { label: { zh: '自动阅卷', en: 'Automated Grading' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'goddoor',
    title: 'Digital Research on Door God Culture with Generative AI',
    titleZh: '基于生成式人工智能的门神文化数字化研究',
    summary: {
      zh: '围绕中国传统门神文化的数字化保护、创新表达与公众传播，构建从生成设计到数字策展的完整实践路径。',
      en: 'A practice-driven project on digitally preserving, reinterpreting, and communicating Chinese Door God culture through generative AI, 3D modeling, and online curation.',
    },
    detail: {
      zh: '本研究项目围绕中国传统门神文化的数字化保护、创新表达与公众传播展开，结合生成式人工智能、三维建模与线上数字策展，探索传统艺术在当代数字媒介中的展示、转化与传播路径。我以中国传统门神画为核心研究对象，从文化整理、视觉生成到线上展示三个层面展开实践：一方面借助 Stable Diffusion 与 2D-to-3D 工作流提升非遗文创设计的生成效率与转化能力，另一方面搭建并上线“中国传统门神画数字展览馆”，尝试通过数字展陈的方式重构门神文化在当代语境中的展示逻辑与传播方式，使其以更具互动性、可视化和参与感的形式被重新理解与感知。\n\n在研究与设计部分，我首先围绕门神人物的角色类型、视觉风格、功能属性与文化寓意进行了系统梳理，整理并构建了面向门神题材的小规模专用数据集，并在此基础上对 Stable Diffusion 进行定向微调。项目关注的不仅是图像生成质量本身，也重视生成结果对传统文化特征的保留与表达能力，希望模型能够在人物比例、服饰细节、色彩语言、道具符号及功能属性等方面，更准确地呈现门神题材的视觉特征与文化语义。相较于传统文创设计流程中依赖手绘草图和反复修改的方式，这一方法能够更快速地产出多个概念方案，并支持通过文本提示完成高效率的设计迭代，从而提升前期创意探索、视觉表达与方案沟通的效率。\n\n在二维设计生成完成后，项目进一步引入图像到三维模型的转换流程，将生成的门神人物图像接入 Stable Zero123 等 2D-to-3D 方法，形成可继续编辑和优化的三维人物模型，并结合 Blender 进行后期修整与细节完善。通过这一流程，门神题材得以从平面视觉进一步转化为可用于展示、渲染、文创开发及 3D 打印的数字资产，也为非遗文化内容向产品化、展示化与空间化延展提供了更具可操作性的路径。与此同时，这一工作流也在一定程度上减少了传统三维建模中大量重复性的人工投入，为后续设计修改与方案落地提供了更高的灵活性。\n\n在线上展示部分，我将展馆作为一个具有叙事结构的数字文化空间来构建，以门神画的历史语境、艺术价值与当代转译为线索，通过数字化叙事、视觉设计与交互体验相结合的方式，呈现门神文化在不同时代背景下的演变、审美特征与传播意义。在这一过程中，我不仅关注信息展示本身，也重视观众的浏览路径、观看节奏与参与方式，希望线上展览不仅承担资料整合与内容传播的功能，也能够构建更具沉浸感的数字观展体验。同时，项目将数字修复、虚拟展示与观众参与机制纳入展览设计之中，并梳理不同地域门神画体系的风格特征与历史脉络，使技术实现服务于文化阐释，推动传统门神文化在数字媒介环境中的再组织、再表达与再传播。',
      en: 'This project focuses on the digital preservation, creative reinterpretation, and public communication of traditional Chinese Door God culture. It combines generative AI, 3D modeling, and online digital curation to explore how traditional art can be displayed, transformed, and communicated in contemporary media. Taking Door God paintings as the core subject, the practice spans three connected layers: cultural organization, visual generation, and online exhibition. On one side, Stable Diffusion and a 2D-to-3D workflow are used to improve generation efficiency and conversion capability for intangible-heritage creative design; on the other side, an online Digital Museum of Chinese Door God Paintings was built and launched to reconstruct how Door God culture is presented and perceived in contemporary contexts.\n\nIn the research and design phase, the project first conducted a systematic analysis of Door God character types, visual styles, functional attributes, and cultural meanings. A small domain-specific dataset was then curated and used for targeted fine-tuning of Stable Diffusion. The focus is not only image quality, but also whether generated results preserve and express key cultural features, including character proportion, costume details, color language, symbolic props, and functional semantics. Compared with traditional heritage-product design workflows that depend on repeated hand-drawing and revisions, this approach enables faster concept generation and higher-efficiency iteration through text prompts.\n\nAfter 2D generation, the workflow extends into 3D conversion by feeding generated character images into methods such as Stable Zero123, then refining results in Blender for detail enhancement and post-editing. Through this process, Door God motifs move from flat visual outputs to editable digital assets for exhibition, rendering, cultural product development, and 3D printing. The pipeline also reduces repetitive manual effort in conventional 3D production and provides more flexibility for downstream revision and implementation.\n\nFor online presentation, the exhibition is designed as a narrative digital cultural space structured around historical context, artistic value, and contemporary translation. Through digital storytelling, visual design, and interactive experience, it presents the evolution, aesthetic traits, and communication significance of Door God culture across periods. The exhibition design also incorporates digital restoration, virtual display, and audience participation mechanisms, while mapping stylistic characteristics and historical lineages across regional Door God traditions, so technical implementation directly supports cultural interpretation and broader public engagement.',
    },
    covers: [GoddoorCover1.src, GoddoorCover2.src, GoddoorCover3.src],
    tags: [
      { label: { zh: '生成式 AI', en: 'Generative AI' }, tone: 'cv' },
      { label: { zh: '数字人文', en: 'Digital Humanities' }, tone: 'hci' },
      { label: { zh: '非遗数字化', en: 'Digital Heritage' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://goddoor.vercel.app/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/goddoor' },
    ],
  },
  {
    id: 'digital-heritage-music',
    title: 'Digital Heritage: AI Research Service Regarding the Effect of Classical Music on Mental Illness',
    titleZh: '数字遗产：古典音乐对心理疾病影响的 AI 研究服务',
    summary: {
      zh: '以“古典音乐（文化遗产）对心理健康干预”为主题，构建面向患者与研究者的 AI 驱动心理健康服务系统。',
      en: 'A project on classical music as cultural heritage for mental-health intervention, building an AI-driven service system for patients and researchers.',
    },
    detail: {
      zh: '项目以“古典音乐对心理疾病干预的潜在作用”为核心问题，设计了面向患者与医学研究者的 AI 服务系统。我们从业务域分析入手，定义患者、研究者、心理健康服务方、音频资源方、文献资源方与 IoT 设备方等关键参与者，并完成服务场景与交互关系建模。\n\n方案包含四个核心模块：Identification with Scientific Help（基于文献检索与文本处理生成研究摘要与音乐清单）、Diagnosis and Recommendations（结合语音/运动传感器/移动端数据进行识别与个性化推荐）、Treatment（基于可穿戴 IoT 生理反馈动态调整播放策略）、AI Study Assistance（支持研究者基于匿名共享数据进行模型训练与微调）。\n\n在系统设计层，项目采用 service-oriented design，围绕隐私、性能、可扩展性与可靠性进行服务拆解、候选服务识别与服务契约设计。同时结合 QOC 分析，针对“行为与 IoT 数据可用性保障”与“降低生态足迹”提出数据授权保护、离线传输、无药物干预、个性化推荐与数字化报告等策略，并映射至具体业务流程。',
      en: 'This project investigated the therapeutic potential of classical music for mental-health intervention by designing an AI service system for patients and medical researchers. We started from domain analysis, identifying key actors, including patients, researchers, mental-health providers, audio resource providers, literature providers, and IoT device providers, then modeled end-to-end service scenarios and interactions.\n\nThe solution includes four core modules: Identification with Scientific Help (literature retrieval and text processing for research briefs and music lists), Diagnosis and Recommendations (personalized recommendations using voice, motion-sensor, and mobile signals), Treatment (adaptive playback based on wearable IoT physiological feedback), and AI Study Assistance (model training and fine-tuning with anonymized shared data for researchers).\n\nAt the architecture level, we applied service-oriented design with explicit quality goals in privacy, performance, scalability, and reliability, including service decomposition, candidate service identification, and service contract design. We also used QOC analysis to address two concerns, data usability for behavior/IoT streams and reduced ecological footprint, producing actionable strategies such as data authorization and protection, offline transfer, non-pharmacological intervention, personalized recommendation, and digital reporting mapped to concrete workflows.',
    },
    covers: [MusicProjectCover.src],
    tags: [
      { label: { zh: '数字人文', en: 'Digital Humanities' }, tone: 'hci' },
      { label: { zh: '心理健康 AI', en: 'Mental Health AI' }, tone: 'cv' },
      { label: { zh: '软件架构设计', en: 'Software Architecture Design' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: '3d-recloud',
    title: '3D Recloud: 3D Face Reconstruction Mapping into Game Model',
    titleZh: '3D Recloud：游戏角色映射的三维人脸重建',
    summary: {
      zh: '一款面向游戏场景的 PC 端 3D 人脸重建与角色映射软件，将真实人脸迁移到游戏角色以提升个性化与沉浸体验。',
      en: 'A PC-based 3D face reconstruction and character-mapping software for gaming, transferring real facial features onto game avatars for personalized and immersive experiences.',
    },
    detail: {
      zh: '本项目聚焦“现实人脸到游戏角色”的完整技术链路：从视频输入开始，经过逐帧提取与 AI 三维重建，生成可编辑的人脸模型，再映射到游戏角色模型中，实现角色面部替换与表情动画联动。目标是让用户能够将本人、朋友或指定对象的面部特征迁移到角色外观与情绪表现中，获得更强的身份代入感。\n\n产品设想源于用户对个性化数字内容的持续增长需求。相比传统游戏中高度预设且表情受限的角色形象，3D Recloud 强调更灵活的角色生成与映射机制，使玩家不只是“控制角色”，而是“以自己的形象进入角色”。在实现上，项目使用 Python、3ds Max Script 与 C++，并结合合作游戏公司的角色资源与引擎环境完成方案验证。\n\n在可行性与应用价值评估方面，团队通过市场与用户调研发现，主流产品大多停留在拍照美颜与二维换脸场景，面向游戏的三维重建与角色映射方案相对稀缺。问卷结果显示较高兴趣度，验证了项目方向的市场吸引力。\n\n同时，项目对关键风险进行了前置分析，包括长视频输入带来的计算开销、神经网络与三维建模对硬件性能的要求、测试环境与真实用户环境差异导致的缺陷风险，以及工程质量对维护成本的影响。对应策略包括前置单元测试、真实用户数据辅助测试与流程优化，以提升系统稳定性和可落地性。',
      en: '3D Recloud is designed as an end-to-end pipeline from real face data to in-game character identity. Starting from video input, the system performs frame extraction and AI-based 3D reconstruction to generate an editable face model, then maps it onto game character assets for facial replacement and expression animation linkage. The goal is to let users transfer their own faces, friends’ faces, or designated identities onto avatars with stronger realism and emotional expression.\n\nThe product concept responds to rising demand for personalized digital content. Compared with traditional game characters that are highly preset and expression-limited, 3D Recloud introduces a more flexible generation-and-mapping workflow so players can enter the game with stronger identity embodiment. The implementation stack includes Python, 3ds Max Script, and C++, and the solution was validated with external game character assets and engine resources through industry collaboration.\n\nFrom feasibility and product-value evaluation, team research showed that most existing apps focus on beauty filters and 2D face swap, while game-oriented 3D reconstruction and avatar mapping remains under-served. User survey feedback indicated strong interest, supporting the market potential of this direction.\n\nThe project also addressed key risks early, including long-video computational cost, hardware demands from neural reconstruction and 3D processing, environment mismatch between testing and real users, and code-quality impact on maintenance. Mitigation strategies included earlier unit testing, real-user-data-assisted validation, and workflow optimization to improve reliability and deployability.',
    },
    covers: [RecloudCover1.src, RecloudCover2.src],
    tags: [
      { label: { zh: '3D 重建', en: '3D Reconstruction' }, tone: 'cv' },
      { label: { zh: '游戏角色映射', en: 'Game Avatar Mapping' }, tone: 'hci' },
      { label: { zh: '计算机视觉', en: 'Computer Vision' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://fc5k62.axshare.com/?id=1vzyxd&p=product_analysis' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/3D_RECloud' },
    ],
  },
  {
    id: 'olfactory-kgqa',
    title: 'Constructing a LLM-enhanced Olfactory Disorder KGQA System',
    titleZh: 'LLM 增强的嗅觉障碍知识图谱问答系统',
    summary: {
      zh: '面向嗅觉障碍问答的知识图谱增强系统，支持更稳健的检索与生成。',
      en: 'A knowledge-graph enhanced QA system for olfactory disorders with robust retrieval and generation.',
    },
    detail: {
      zh: '项目围绕嗅觉障碍问答场景开发 AI 系统，整合学术文献与社区知识数据，构建面向疾病认知、症状解释与干预建议的领域知识图谱。\n\n在推理链路上，系统将自然语言问题转换为 SPARQL 查询，结合结构化图谱检索与生成式回答流程，实现更精准、可追溯的答案返回。\n\n模型与交互层采用 Vicuna-7b 与 FastChat 进行问答生成与服务编排，兼顾检索精度与对话可用性。该方案在专业医学问答中提升了回答准确性、可解释性与知识覆盖能力。',
      en: 'This project developed an AI system for olfactory-disorder Q&A by integrating academic resources and community knowledge into a domain-specific knowledge graph.\n\nFor precise reasoning, natural language queries are transformed into SPARQL, enabling structured retrieval from the graph and more accurate response grounding.\n\nOn the generation and serving side, the system uses Vicuna-7b with FastChat to support answer generation and interaction orchestration. This architecture improves answer precision, explainability, and coverage for specialized medical QA scenarios.',
    },
    covers: [BrainCover.src],
    tags: [
      { label: { zh: '知识图谱问答', en: 'KGQA' }, tone: 'cv' },
      { label: { zh: '医疗知识图谱', en: 'Medical Knowledge Graph' }, tone: 'hci' },
      { label: { zh: 'LLM 增强检索', en: 'LLM-Enhanced Retrieval' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'bilingual-medical-qa',
    title: 'An Enhanced Lightweight CN-EN Bilingual Medical QA System',
    titleZh: '增强型轻量级中英双语医疗问答系统',
    summary: {
      zh: '轻量级中英双语医疗问答系统，面向低资源环境优化交互与回答质量。',
      en: 'A lightweight CN-EN bilingual medical QA system optimized for interaction quality in low-resource settings.',
    },
    detail: {
      zh: '项目围绕中英双语医疗问答场景构建轻量化系统，重点解决双语环境下术语不一致、语义映射偏差与回答稳定性问题。\n\n在模型优化上，我应用 Prompt Tuning 策略持续迭代提示模板与上下文组织方式，提升系统在中英文切换场景中的理解与生成一致性。\n\n同时通过专业中文中草药术语扩充本地知识库，增强领域覆盖能力；并基于 LangChain 重构交互链路与调用流程，提升检索-生成协同效率与系统可用性，使问答响应在准确性、相关性与交互体验上更加稳定。',
      en: 'This project built a lightweight CN-EN bilingual medical QA system focused on improving consistency and usability in mixed-language healthcare scenarios.\n\nI applied prompt tuning techniques to optimize model behavior across English-Chinese interactions, refining prompt structure and context composition for more stable bilingual understanding and response generation.\n\nThe local knowledge base was further enhanced with specialized Chinese herbal terminology to improve domain coverage. In parallel, system interaction and orchestration were upgraded with the LangChain framework, resulting in stronger retrieval-generation coordination and better overall response quality in terms of accuracy, relevance, and interaction flow.',
    },
    covers: [BilingualCover.src],
    tags: [
      { label: { zh: '双语医疗问答', en: 'Bilingual Medical QA' }, tone: 'hci' },
      { label: { zh: '提示词调优', en: 'Prompt Tuning' }, tone: 'cv' },
      { label: { zh: 'LangChain 工作流', en: 'LangChain Workflows' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'twitter-election',
    title: 'Election Analysis and Winner Prediction Via Twitter',
    titleZh: '基于 Twitter 的选举分析与胜者预测',
    summary: {
      zh: '基于 Twitter 文本情绪与传播信号进行选举分析与胜者预测。',
      en: 'Election analysis and winner prediction using Twitter sentiment and diffusion signals.',
    },
    detail: {
      zh: '项目核心目标是分析候选人的真实意图、公众对候选人的期待，并进一步预测胜选者及其优势区间。\n\n在方法上，我们使用 TextBlob 对 Twitter 文本进行情感分析，结合候选人相关推文语料识别舆论态度与情绪倾向，再将情绪信号与讨论热度纳入选举趋势建模。\n\n通过该流程，系统能够从大规模社交媒体文本中提炼公众偏好变化，为候选人支持度判断与胜负趋势预测提供数据驱动的参考依据。',
      en: 'The main objective of this project was to understand candidates’ true intentions, capture the public’s expectations toward each candidate, and predict both the winner and the expected margin of victory.\n\nMethodologically, TextBlob was used for sentiment analysis to process tweet text and quantify public attitudes toward political candidates. These sentiment signals were then combined with candidate-level discussion dynamics to model election trends.\n\nThis workflow enabled data-driven interpretation of public preference shifts from social media and supported more explainable winner prediction in the election analysis setting.',
    },
    covers: [ElectionCover.src],
    tags: [
      { label: { zh: '社交媒体分析', en: 'Social Media Analytics' }, tone: 'cv' },
      { label: { zh: '情感分析', en: 'Sentiment Analysis' }, tone: 'hci' },
      { label: { zh: '选举预测', en: 'Election Forecasting' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/election' },
    ],
  },
  {
    id: 'ml4qs',
    title: 'Machine Learning for Quantified Self',
    titleZh: '量化自我机器学习（ML4QS）',
    summary: {
      zh: '面向多传感器时序数据的人体活动识别与预测。',
      en: 'Activity recognition and prediction from multivariate sensor time-series data.',
    },
    detail: {
      zh: '项目利用多维传感器时序数据构建人体活动识别模型，目标是对受试者的具体活动状态（如步行、跑步）进行更准确的预测。\n\n在建模阶段，我围绕多变量时间序列任务对 LSTM 结构进行增强，通过系统化超参数调优提升模型在时序特征学习与分类稳定性上的表现。\n\n同时在网络结构中引入 Dense 层与 Dropout 机制，一方面强化特征映射能力，另一方面降低过拟合风险，使模型在训练集与验证集之间保持更稳健的泛化效果。',
      en: 'This project developed a time-series analysis model to predict specific physical activities (such as walking and running) from multi-dimensional sensor data.\n\nFor multivariate sequence modeling, I enhanced an LSTM-based architecture and improved performance through systematic hyperparameter tuning.\n\nI also integrated dense layers and dropout regularization to strengthen feature mapping while reducing overfitting, resulting in more stable generalization across training and validation scenarios.',
    },
    covers: [Ml4qsCover1.src, Ml4qsCover2.src],
    tags: [
      { label: { zh: '多变量时序', en: 'Multivariate Time Series' }, tone: 'cv' },
      { label: { zh: '行为识别', en: 'Behavior Recognition' }, tone: 'hci' },
      { label: { zh: 'LSTM 建模', en: 'LSTM Modeling' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/2022_ML4QS/tree/main' },
    ],
  },
  {
    id: 'large-scale-data-mining-scientific-communities',
    title: 'Large Scale Data Mining, Analysis, and Visualization for Scientific Communities',
    titleZh: '面向科学共同体的大规模数据挖掘、分析与可视化',
    summary: {
      zh: '基于 CrossRef 的超大规模学术元数据，构建引文网络并识别科学共同体结构。',
      en: 'Built large-scale citation networks from CrossRef metadata to identify and analyze scientific community structures.',
    },
    detail: {
      zh: '项目处理并分析了来自 CrossRef 的 96GB 元数据，覆盖约 1.2 亿篇学术论文，并据此构建有向互引关系图。\n\n在网络构建阶段，我们以 8,768 本核心期刊为研究对象抽取高质量引文关系，形成可用于结构分析与可视化的期刊级 citation graph。\n\n随后通过社区检测算法将网络划分为 128 个科学共同体，并进一步基于社区内部引用频率识别高闭合度共同体，同时挖掘出互引频繁的跨社区配对关系，为科学知识流动与学科边界研究提供数据支持。',
      en: 'This project processed and analyzed 96GB of CrossRef metadata covering around 120 million academic papers, and constructed a directed graph of mutual citation relationships.\n\nWe then focused on 8,768 core journals to build a journal-level citation relationship graph suitable for structural analysis and visualization.\n\nUsing community detection algorithms, the graph was partitioned into 128 scientific communities. We further identified highly closed communities based on internal citation frequency and discovered pairs of communities with frequent mutual citations, providing evidence for studying knowledge flow and disciplinary boundaries.',
    },
    covers: [LsdeCover.src],
    tags: [
      { label: { zh: '大规模数据挖掘', en: 'Large-Scale Data Mining' }, tone: 'other' },
      { label: { zh: '引文网络分析', en: 'Citation Network Analysis' }, tone: 'cv' },
      { label: { zh: '科学可视化', en: 'Scientific Visualization' }, tone: 'hci' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'fake-news-detection',
    title: 'Use Multi-layer LSTM Model and Ensemble Learning to Detect Fake News',
    titleZh: '基于多层 LSTM 与集成学习的假新闻检测',
    summary: {
      zh: '基于多层 LSTM、Bi-LSTM 与集成学习构建假新闻检测系统。',
      en: 'A fake news detection system built with multi-layer LSTM, Bi-LSTM, and ensemble learning.',
    },
    detail: {
      zh: '项目面向新闻文本场景设计并实现了假新闻识别流程，核心模型结合 LSTM、Bi-LSTM 与集成学习策略，以提升复杂语义下的分类稳定性与泛化能力。\n\n在数据处理阶段，系统实现了六步预处理工作流，并使用 TF-IDF 进行特征提取，构建可用于序列建模与分类融合的输入表示。\n\n模型层面，项目实现了四层 LSTM 架构，包含 embedding 层与全连接层用于特征压缩与维度映射；同时对新闻标题与正文特征进行分离建模后再融合，从而提升整体检测效果与鲁棒性。',
      en: 'This project designed and implemented a fake news detection pipeline using LSTM, Bi-LSTM, and ensemble learning to improve classification robustness under complex textual semantics.\n\nA six-step data preprocessing workflow was built, and TF-IDF was used for feature extraction to produce reliable representations for sequence modeling and downstream fusion.\n\nAt the model level, a four-layer LSTM architecture was implemented with embedding and fully connected layers for representation learning and dimensionality reduction. Features from article titles and full texts were analyzed separately and then combined, improving overall detection performance and robustness.',
    },
    covers: [FakeNewsCover.src],
    tags: [
      { label: { zh: '自然语言处理', en: 'NLP' }, tone: 'hci' },
      { label: { zh: '假新闻检测', en: 'Fake News Detection' }, tone: 'cv' },
      { label: { zh: '集成学习', en: 'Ensemble Learning' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/fake_news' },
    ],
  },
  {
    id: 'expedia-hotel-recommender',
    title: 'Recommender System: Personalize Expedia Hotel Searches',
    titleZh: '推荐系统：Expedia 酒店搜索个性化',
    summary: {
      zh: '基于大规模用户行为数据构建 Expedia 酒店个性化排序推荐模型。',
      en: 'Built a personalized hotel ranking model for Expedia using large-scale user interaction data.',
    },
    detail: {
      zh: '项目基于约 500 万真实用户交互数据开展数据探索与行为分析，系统梳理了搜索、点击与预订相关特征，提炼用户偏好模式与酒店选择信号。\n\n在建模阶段，利用数据挖掘结果构建特征工程流程，并使用 LightGBM 训练排序预测模型，面向历史搜索场景预测用户酒店选择概率，提升候选酒店排序质量。\n\n通过该项目，我完成了从大规模数据分析、特征构建到推荐排序建模的完整闭环，为旅游场景下的个性化检索与推荐优化提供了可落地的实践方案。',
      en: 'This project performed extensive data exploration and behavior analysis on interaction records from around 5 million real users, extracting high-value signals from search, click, and booking patterns.\n\nBased on those insights, I built a feature pipeline and trained a LightGBM model to predict user choices and rank hotels more effectively from historical Expedia search data.\n\nThe work covered an end-to-end recommendation workflow, from large-scale data mining and feature engineering to ranking model training, providing a practical approach to personalized retrieval and recommendation in travel scenarios.',
    },
    covers: [DataMiningCover.src],
    tags: [
      { label: { zh: '推荐系统', en: 'Recommender Systems' }, tone: 'cv' },
      { label: { zh: '数据挖掘', en: 'Data Mining' }, tone: 'other' },
      { label: { zh: '排序学习', en: 'Learning to Rank' }, tone: 'hci' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://www.kaggle.com/c/2nd-assignment-dmt2022/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/Datamining2022' },
    ],
  },
  {
    id: 'brane-modular-pipeline',
    title: 'Create a Modular Data Processing Pipeline Using Brane Framework',
    titleZh: '基于 Brane 框架的模块化数据处理流水线',
    summary: {
      zh: '基于 Brane 框架构建模块化数据处理流水线，用于 Titanic 机器学习挑战任务。',
      en: 'Built a modular data processing pipeline with the Brane framework for the Titanic machine learning challenge.',
    },
    detail: {
      zh: '项目利用 Brane 的容器化编排能力，将 Titanic - Machine Learning from Disaster 的数据处理与建模流程拆分为可复用、可组合的模块化流水线。\n\n整个流程被结构化为四个独立包：Initialization、Get Features、Train and Prediction、Visualization，分别负责初始化配置、特征获取、模型训练与预测、结果可视化分析。\n\n这种模块化设计提升了实验组织性与可维护性，使数据分析、模型训练和结果解释可以在统一流程中高效协同，也便于后续扩展到其他 Kaggle 类竞赛任务。',
      en: 'This project used Brane’s container-based orchestration capabilities to build a modular data pipeline for the Titanic - Machine Learning from Disaster challenge.\n\nThe workflow was structured into four independent packages: Initialization, Get Features, Train and Prediction, and Visualization, covering setup, feature extraction, model training/prediction, and result analysis.\n\nBy packaging each stage as a reusable module, the pipeline improved maintainability and execution clarity, and made it easier to iterate on data analysis, model training, and visualization within one coherent workflow.',
    },
    covers: [BraneCover.src],
    tags: [
      { label: { zh: '数据流水线', en: 'Data Pipeline' }, tone: 'other' },
      { label: { zh: '容器化编排', en: 'Container Orchestration' }, tone: 'hci' },
      { label: { zh: '机器学习工程', en: 'ML Engineering' }, tone: 'cv' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/WSCBS_Assignment4b' },
    ],
  },
  {
    id: 'rpa-entrepreneurship-analytics-ai',
    title: 'RPA: Entrepreneurship in Analytics and AI',
    titleZh: 'RPA：分析与 AI 创业实践',
    summary: {
      zh: '创立 ROBOGO，构建 RPA 驱动的智能文档处理与数据分析系统，推动银行业务流程自动化升级。',
      en: 'Founded ROBOGO and built an RPA-driven intelligent document processing and analytics system to modernize banking workflows.',
    },
    detail: {
      zh: '项目以银行场景中的重复性业务为切入点，围绕文档处理、数据流转与客户交互环节设计自动化方案，目标是在保证稳定性的前提下提升处理效率与服务质量。\n\n通过结合 RPA 与 AI 能力（包括聊天机器人交互），系统将高频、规则明确且人工成本较高的任务进行自动化拆解与执行，显著减少人工重复劳动并降低运营成本。\n\n在实际业务价值上，该方案帮助团队缩短任务处理周期、提升流程一致性，并在效率提升的同时改善客户体验与满意度，形成了可持续扩展的智能运营基础。',
      en: 'This project started from high-frequency repetitive operations in banking and designed an automation solution across document handling, data flow, and customer interaction to improve both execution efficiency and service quality.\n\nBy combining RPA with AI capabilities (including chatbot-assisted interactions), the system automated rule-based, labor-intensive tasks and streamlined end-to-end workflow execution, reducing manual overhead and operational cost.\n\nFrom a business outcome perspective, the solution shortened processing cycles, improved process consistency, and increased customer satisfaction while creating a scalable foundation for intelligent operations.',
    },
    covers: [EaaiCover.src],
    tags: [
      { label: { zh: 'RPA 自动化', en: 'RPA Automation' }, tone: 'other' },
      { label: { zh: '智能文档处理', en: 'Intelligent Document Processing' }, tone: 'cv' },
      { label: { zh: '企业 AI', en: 'Enterprise AI' }, tone: 'hci' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'covid-cv',
    title: 'Using Different Deep Learning Models to Detect COVID-19',
    titleZh: '利用不同深度学习模型检测 COVID-19',
    summary: {
      zh: '利用深度学习对肺部 CT 影像进行 COVID-19 早筛识别。',
      en: 'Early COVID-19 screening from lung CT images using deep learning models.',
    },
    detail: {
      zh: '项目基于肺部 CT 影像构建 COVID-19 早筛识别模型，目标是在健康样本与感染样本之间实现更稳定的自动区分，为临床前期分流提供辅助依据。\n\n在实验阶段，我们对多种深度学习模型进行对比评估，统一使用准确率与 AUC 等指标衡量模型性能与泛化能力。结果显示，DResUnet 在多模型对比中表现最佳，取得 85.54% 的准确率与 87.02% 的 AUC。\n\n该研究验证了深度学习在呼吸系统影像早筛场景中的可行性，也为后续在数据规模、模型鲁棒性与实际部署可用性方面的优化提供了明确方向。',
      en: 'This project built an early screening model based on lung CT images to distinguish COVID-19 cases from healthy cases, aiming to support pre-diagnostic triage with reliable automated classification.\n\nIn the experimental phase, several deep learning models were benchmarked under the same evaluation setting, using metrics such as accuracy and AUC to measure predictive performance and generalization. Among all compared models, DResUnet delivered the best results, achieving 85.54% accuracy and 87.02% AUC.\n\nThe study demonstrates the practical potential of deep learning for respiratory-image early screening and provides a clear direction for follow-up improvements in data scale, robustness, and deployment readiness.',
    },
    covers: [Covid19Cover.src],
    tags: [
      { label: { zh: '医学影像', en: 'Medical Imaging' }, tone: 'cv' },
      { label: { zh: '深度学习', en: 'Deep Learning' }, tone: 'hci' },
      { label: { zh: '早筛模型', en: 'Early Screening' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/COVID' },
    ],
  },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';
  const [expanded, setExpanded] = useState<string[]>([]);

  const allExpanded = useMemo(() => expanded.length === projects.length, [expanded]);
  const topTagStats = useMemo(() => {
    const stats = new Map<string, { zh: string; en: string; tone: TagTone; count: number }>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => {
        const key = `${tag.label.zh}|${tag.label.en}`;
        const prev = stats.get(key);
        if (prev) {
          prev.count += 1;
          return;
        }
        stats.set(key, { zh: tag.label.zh, en: tag.label.en, tone: tag.tone, count: 1 });
      });
    });
    return Array.from(stats.values()).sort((a, b) => b.count - a.count || a.en.localeCompare(b.en));
  }, []);
  const topTagPreview = useMemo(() => topTagStats.slice(0, 6), [topTagStats]);
  const hiddenTopTagCount = topTagStats.length - topTagPreview.length;

  const toggleRow = (id: string) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const toggleAll = () => {
    setExpanded(allExpanded ? [] : projects.map((p) => p.id));
  };

  return (
    <div className={`ws-page ws-projects-page ${zh ? 'is-zh' : 'is-en'}`}>
      <TopNav active="projects" />
      <section className="ws-list-page">
        <div className="ws-project-filterline" aria-hidden="true">
          {topTagPreview.map((tag, idx) => (
            <span key={`${tag.en}-${idx}`}>
              <span className={`tone-${tag.tone}`}>{tag[language]}</span>
              {idx < topTagPreview.length - 1 ? ', ' : ''}
            </span>
          ))}
          {hiddenTopTagCount > 0 ? (
            <span>
              {topTagPreview.length > 0 ? ', ' : ''}
              <span className="tone-other">{zh ? `等 ${hiddenTopTagCount} 个标签` : `+${hiddenTopTagCount} more`}</span>
            </span>
          ) : null}
        </div>

        <div className="ws-explore-head ws-projects-head">
          <h2>{zh ? '精选项目' : 'Featured Projects'}</h2>
          <button type="button" className="ws-top-link ws-project-expand-all" onClick={toggleAll}>
            {allExpanded ? (zh ? '收起所有' : 'Collapse all') : zh ? '展开所有' : 'Expand all'}
          </button>
        </div>

        {projects.map((item) => (
          <article key={item.id} className="ws-item ws-project-row">
            <button type="button" className="ws-entry-trigger ws-project-row-head" onClick={() => toggleRow(item.id)} aria-expanded={expanded.includes(item.id)}>
              <h3>{zh ? item.titleZh ?? item.title : item.title}</h3>
              <p>
                {item.tags.map((tag, idx) => (
                  <span key={`${item.id}-${tag.tone}-${idx}`}>
                    <span className={`tone-${tag.tone}`}>{tag.label[language]}</span>
                    {idx < item.tags.length - 1 ? ', ' : ''}
                  </span>
                ))}
              </p>
            </button>

            {expanded.includes(item.id) ? (
              <div className={`ws-project-detail-card ${item.layout === 'stacked' ? 'is-stacked' : ''}`}>
                <div className="ws-project-detail-media">
                  {item.covers.map((cover, idx) => (
                    /\.(mp4|webm|ogg)$/i.test(cover) ? (
                      <video
                        key={`${item.id}-cover-${idx}`}
                        src={cover}
                        className={item.coverFit === 'contain' ? 'fit-contain' : undefined}
                        autoPlay
                        loop
                        muted
                        controls
                        playsInline
                        preload="metadata"
                      />
                    ) : (
                      <img
                        key={`${item.id}-cover-${idx}`}
                        src={cover}
                        alt={`${item.title} cover ${idx + 1}`}
                        loading="lazy"
                        className={item.coverFit === 'contain' ? 'fit-contain' : undefined}
                      />
                    )
                  ))}
                </div>
                <div className="ws-project-detail-copy">
                  <p className="ws-project-summary">{item.summary[language]}</p>
                  <div className="ws-project-detail">
                    {item.detail[language].split('\n\n').map((paragraph, idx) => (
                      <p key={`${item.id}-detail-${idx}`}>{paragraph}</p>
                    ))}
                  </div>
                  {item.links.some((link) => Boolean(link.href)) ? (
                    <div className="ws-project-links">
                      {item.links
                        .filter((link) => Boolean(link.href))
                        .map((link) => (
                          <a key={`${item.id}-${link.label.en}`} href={link.href} target="_blank" rel="noopener noreferrer">
                            <span>{link.label[language]}</span>
                          </a>
                        ))}
                    </div>
                  ) : null}
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
