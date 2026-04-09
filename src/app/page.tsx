'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';
import Tulipa from '../public/Tulipa.jpg';
import LEMDCover from '../public/LEMD.png';

type ExploreItem = {
  id: string;
  title: { zh: string; en: string };
  headline: { zh: string; en: string };
  description: { zh: string; en: string };
  linkLabel: { zh: string; en: string };
  link: string;
};

type EducationItem = {
  id: string;
  school: { zh: string; en: string };
  level: { zh: string; en: string };
  period: { zh: string; en: string };
  location: { zh: string; en: string };
  degree: { zh: string; en: string };
};

type OtherItem = {
  id: string;
  title: { zh: string; en: string };
  headline: { zh: string; en: string };
  details: Array<{
    text: { zh: string; en: string };
    showLogo?: boolean;
    linkLabel?: { zh: string; en: string };
    link?: string;
  }>;
};

type WorkItem = {
  id: string;
  org: { zh: string; en: string };
  title: { zh: string; en: string };
  location: { zh: string; en: string };
  period: { zh: string; en: string };
  description: { zh: string; en: string };
};

type ResearchItem = {
  id: string;
  org: { zh: string; en: string };
  title: { zh: string; en: string };
  location: { zh: string; en: string };
  period: { zh: string; en: string };
  description: { zh: string; en: string };
};

type PublicationItem = {
  id: string;
  title: { zh: string; en: string };
  venue: { zh: string; en: string };
  type: { zh: string; en: string };
  period: { zh: string; en: string };
  doi: string;
  link: string;
};

type AchievementItem = {
  id: string;
  org: { zh: string; en: string };
  title: { zh: string; en: string };
  period: { zh: string; en: string };
  location: { zh: string; en: string };
  description: { zh: string; en: string };
};

function SocialIcon({ type }: { type: 'linkedin' | 'github' | 'orcid' }) {
  if (type === 'linkedin') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ws-social-icon">
        <rect x="3" y="3" width="18" height="18" rx="2.5" fill="currentColor" />
        <circle cx="8" cy="9" r="1.4" fill="var(--bg)" />
        <rect x="6.8" y="11" width="2.4" height="6.2" fill="var(--bg)" />
        <path d="M11.2 11h2.3v1c.4-.6 1.1-1.1 2.2-1.1 1.7 0 2.8 1.1 2.8 3.2v3.1h-2.5v-2.8c0-1-.4-1.5-1.1-1.5-.8 0-1.2.6-1.2 1.5v2.8h-2.5z" fill="var(--bg)" />
      </svg>
    );
  }

  if (type === 'github') {
    return (
      <svg viewBox="0 0 24 24" aria-hidden="true" className="ws-social-icon">
        <path
          fill="currentColor"
          d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.8c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.5-1.1-1.5-.9-.6.1-.6.1-.6 1 .1 1.6 1 1.6 1 .9 1.5 2.3 1 2.9.8.1-.7.4-1 .7-1.2-2.2-.3-4.5-1.1-4.5-5a3.9 3.9 0 0 1 1-2.7 3.7 3.7 0 0 1 .1-2.6s.9-.3 2.8 1a9.7 9.7 0 0 1 5.1 0c1.9-1.3 2.8-1 2.8-1 .4 1 .2 2 .1 2.6a3.9 3.9 0 0 1 1 2.7c0 3.9-2.3 4.7-4.5 5 .4.3.8 1 .8 2v3c0 .3.2.6.7.5A10 10 0 0 0 12 2z"
        />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="ws-social-icon">
      <circle cx="12" cy="12" r="10" fill="currentColor" />
      <text x="12" y="15.1" textAnchor="middle" fontSize="9.5" fontWeight="700" fill="var(--bg)">
        iD
      </text>
    </svg>
  );
}

const exploreItems: ExploreItem[] = [
  {
    id: 'computer-vision',
    title: { zh: '计算机视觉', en: 'Computer Vision' },
    headline: { zh: '从感知建模到场景应用的视觉智能研究。', en: 'Research on visual intelligence from perception modeling to real-world applications.' },
    description: {
      zh: '围绕医学影像识别、三维重建与视觉生成等方向，关注模型准确性、可解释性与部署可行性之间的平衡，并将研究结果落地到具体应用场景。',
      en: 'My work spans medical image analysis, 3D reconstruction, and visual generation, with an emphasis on balancing model accuracy, interpretability, and deployment feasibility in applied settings.',
    },
    linkLabel: { zh: '查看精选项目', en: 'View Featured Projects' },
    link: '/projects',
  },
  {
    id: 'human-computer-interaction',
    title: { zh: '人机交互', en: 'Human-Computer Interaction' },
    headline: { zh: '面向协作与决策场景的交互机制研究。', en: 'Interaction research for collaboration and decision-making scenarios.' },
    description: {
      zh: '聚焦数字协作空间、职业测评与教育产品界面的交互设计，研究信息组织、任务引导与反馈机制如何提升用户理解与行动效率。',
      en: 'I study interaction design in digital collaboration spaces, career assessment systems, and education products, focusing on how information architecture, task guidance, and feedback loops improve user understanding and action efficiency.',
    },
    linkLabel: { zh: '查看精选项目', en: 'View Featured Projects' },
    link: '/projects',
  },
  {
    id: 'agent-workflow-systems',
    title: { zh: 'Agent 工作流与系统工程', en: 'Agent Workflows and Systems Engineering' },
    headline: { zh: '面向垂直业务场景的可执行智能体系统。', en: 'Executable agent systems for vertical business operations.' },
    description: {
      zh: '围绕 Agent 编排、CLI 能力抽象与业务流程自动化，持续探索可观测、可回滚、可协作的人机共创执行框架，提升复杂任务的稳定交付能力。',
      en: 'I investigate agent orchestration, composable CLI capabilities, and workflow automation to build observable, rollback-safe, and collaborative human-AI execution frameworks for reliable delivery in complex tasks.',
    },
    linkLabel: { zh: '查看精选项目', en: 'View Featured Projects' },
    link: '/projects',
  },
  {
    id: 'ai-education-systems',
    title: { zh: 'AI + 教育系统', en: 'AI + Education Systems' },
    headline: { zh: '从研究方法到教育服务系统落地。', en: 'From research methodology to deployable education service systems.' },
    description: {
      zh: '结合教育科技与生成式 AI，在招生咨询、学业规划、组卷评估与知识沉淀等环节构建系统化方案，推动研究成果向真实业务转化。',
      en: 'Combining EdTech and generative AI, I build system-level solutions for consultation, planning, assessment, and knowledge operations, translating research outcomes into real educational workflows.',
    },
    linkLabel: { zh: '查看精选项目', en: 'View Featured Projects' },
    link: '/projects',
  },
];

const educationItems: EducationItem[] = [
  {
    id: 'uva-phd-ai',
    school: { zh: '阿姆斯特丹大学', en: 'University of Amsterdam' },
    level: { zh: '博士生', en: 'PhD' },
    period: { zh: '2023.12 - 至今', en: '2023.12 - Present' },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, Netherlands' },
    degree: { zh: '人工智能博士', en: 'PhD in Artificial Intelligence' },
  },
  {
    id: 'ccaim-summer-school-edu',
    school: { zh: '剑桥大学', en: 'University of Cambridge' },
    level: { zh: '暑期学校', en: 'Summer School' },
    period: { zh: '2022.09', en: 'September, 2022' },
    location: { zh: '英国，剑桥', en: 'Cambridge, UK' },
    degree: {
      zh: 'CCAIM AI and Machine Learning Summer School（医疗健康 AI 与机器学习）',
      en: 'CCAIM AI and Machine Learning Summer School (AI and Machine Learning in Healthcare)',
    },
  },
  {
    id: 'columbia',
    school: { zh: '阿姆斯特丹大学 / 阿姆斯特丹自由大学', en: 'University of Amsterdam / Vrije Universiteit Amsterdam' },
    level: { zh: '研究生', en: 'Graduate' },
    period: { zh: '2021.09 - 2023.12', en: '2021.09 - 2023.12' },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, Netherlands' },
    degree: { zh: '计算机科学硕士（大数据工程方向）', en: 'MSc in Computer Science (Big Data Engineering)' },
  },
  {
    id: 'osu',
    school: { zh: '澳门科技大学', en: 'Macau University of Science and Technology' },
    level: { zh: '本科生', en: 'Undergraduate' },
    period: { zh: '2017.09 - 2021.08', en: '2017.09 - 2021.08' },
    location: { zh: '澳门, 中国', en: 'Macao, China' },
    degree: { zh: '软件工程工学学士', en: 'BEng in Software Engineering' },
  },
];

const otherItems: OtherItem[] = [
  {
    id: 'photo',
    title: { zh: '摄影', en: 'Photography' },
    headline: { zh: '我用摄影记录我的生活。', en: 'I document my life through photography.' },
    details: [
      {
        text: { zh: '我拍摄胶片和数码照片。', en: 'I shoot both film and digital photos.' },
        linkLabel: { zh: '阅读更多', en: 'Read more' },
        link: '/photo',
      },
    ],
  },
  {
    id: 'design',
    title: { zh: '平面设计', en: 'Graphic Design' },
    headline: { zh: '安静、活力、优雅', en: 'Quiet, vibrant, elegant.' },
    details: [
      {
        text: {
          zh: '融合了我的姓氏许（Xu）和一个微笑。',
          en: 'This design combines my surname Xu with a smile.',
        },
        showLogo: true,
      },
      {
        text: { zh: '我的设计精选。', en: 'A selection of my design works.' },
        linkLabel: { zh: '阅读更多', en: 'Read more' },
        link: '/design',
      },
    ],
  },
];

const workItems: WorkItem[] = [
  {
    id: 'chm',
    org: {
      zh: '中港澳教育与文化交流协会',
      en: 'The CHM Education and Cultural Exchange Association',
    },
    title: { zh: '副主席', en: 'Vice President' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    period: { zh: '2024.08 - 至今', en: '2024.08 - Present' },
    description: {
      zh: 'CHM 教育与文化交流协会致力于推动中国、香港、澳门及其他地区之间的教育与文化交流。协会作为桥梁，促进国内和海外高校、文化组织与个人之间的相互理解、协作与知识共享。',
      en: 'The CHM Education and Cultural Exchange Association is dedicated to promoting educational and cultural exchanges between China, Hong Kong, Macau, and other regions. The association serves as a bridge to enhance mutual understanding, collaboration, and knowledge sharing among domestic and international universities, cultural organizations, and individuals.',
    },
  },
  {
    id: 'yfmu',
    org: {
      zh: '澳门高校青年联合会',
      en: 'The Youth Federation of Macau Universities',
    },
    title: { zh: '理事', en: 'Director' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    period: { zh: '2024.07 - 至今', en: '2024.07 - Present' },
    description: {
      zh: '澳门高校青年联合会成立于 2009 年，连接来自香港、澳门、台湾、中国内地及海外的大学生，促进青年友谊并加强高校与企业之间的联系。',
      en: 'The Macau Youth Federation of University Students was established in 2009. It connects university students from Hong Kong, Macau, Taiwan, Mainland China, and abroad, fostering friendships and strengthening ties between universities and enterprises.',
    },
  },
  {
    id: 'studylandsedu',
    org: { zh: '学屿教育', en: 'StudyLandsEdu' },
    title: { zh: 'CEO', en: 'CEO' },
    location: { zh: '上海, 中国', en: 'Shanghai, China' },
    period: { zh: '2023.10 - 至今', en: '2023.10 - Present' },
    description: {
      zh: 'StudyLandsEdu 是一家技术驱动的国际教育公司，聚焦留学服务创新。我们通过大数据与 AI 整合海外教育资源，提供高质量留学服务；同时为其他机构提供运营管理解决方案，帮助其降本增效。',
      en: 'StudyLandsEdu is a tech-driven education company focused on innovating international education. We integrate overseas educational resources to deliver high-quality study abroad services using big data and AI. SLE also offers comprehensive operational management solutions to other companies, helping them cut costs and boost efficiency.',
    },
  },
  {
    id: 'student-mentor-admission',
    org: { zh: '阿姆斯特丹大学', en: 'University of Amsterdam' },
    title: { zh: '学生导师与招生支持', en: 'Student Mentor and Admissions Support' },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, NL' },
    period: { zh: '2022.11 - 2024.02', en: 'Nov 2022 - Feb 2024' },
    description: {
      zh: '作为学生导师支持学生适应学术与校园生活；同时参与招生支持工作，包括申请材料评估、面试协助与候选人筛选。',
      en: 'Supported students as a mentor in academic and campus adaptation, while contributing to admissions support through application review, interview assistance, and candidate screening.',
    },
  },
  {
    id: 'vu-ta',
    org: { zh: '阿姆斯特丹自由大学', en: 'Vrije Universiteit Amsterdam' },
    title: { zh: '教学助理', en: 'Teaching Assistant' },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, Netherlands' },
    period: { zh: '2023.04 - 2023.06', en: '2023.04 - 2023.06' },
    description: {
      zh: '协助硕士课程《Data Mining Technologies》的教学工作，包括课程准备与授课、习题讲解以及作业批改。',
      en: 'Assisted with teaching the master course in Data Mining Technologies, including preparing and delivering lectures, conducting problem-solving sessions, and grading assignments.',
    },
  },
  {
    id: 'genzon',
    org: { zh: '正中投资集团', en: 'Genzon Investment Group' },
    title: { zh: '产品经理实习生', en: 'Product Manager Intern' },
    location: { zh: '深圳, 中国', en: 'Shenzhen, China' },
    period: { zh: '2020.07 - 2020.08', en: '2020.07 - 2020.08' },
    description: {
      zh: '参与智慧楼宇与智慧园区等数字化转型项目，聚焦企业服务线上化方案；通过市场与客户调研支撑战略规划，并输出产品 PRD 文档与原型设计。',
      en: 'Participated in key digital transformation projects, including smart buildings and intelligent parks, focusing on online solutions for enterprise services. Conducted comprehensive market and customer research to align with strategic planning, developing product PRD documents and prototype designs.',
    },
  },
  {
    id: 'saic',
    org: {
      zh: '上汽集团（SAIC Motor）',
      en: 'SAIC Motor Corporation Limited',
    },
    title: { zh: '数据工程实习生', en: 'Data Engineer Intern' },
    location: { zh: '上海, 中国', en: 'Shanghai, China' },
    period: { zh: '2019.06 - 2019.08', en: '2019.06 - 2019.08' },
    description: {
      zh: '基于 Hadoop 与 Spark 参与分布式数据平台改造，显著提升处理能力；主导使用 PySpark 的大规模数据处理，并通过 SQL 与 Python 构建 ETL 流程，提升数据模型的灵活性与多样性。',
      en: 'Transformed the distributed data platform with Hadoop and Spark, significantly enhancing processing capabilities. Spearheaded large-scale data processing using advanced techniques like PySpark. Developed sophisticated ETL processes with SQL and Python, optimizing data model flexibility and diversity.',
    },
  },
];

const publications: PublicationItem[] = [
  {
    id: 'tcsvt-2026',
    title: {
      zh: 'Da Yu: Towards USV-Based Image Captioning for Waterway Surveillance and Scene Understanding',
      en: 'Da Yu: Towards USV-Based Image Captioning for Waterway Surveillance and Scene Understanding',
    },
    venue: {
      zh: 'IEEE Transactions on Circuits and Systems for Video Technology',
      en: 'IEEE Transactions on Circuits and Systems for Video Technology',
    },
    type: { zh: '期刊文章', en: 'Journal Article' },
    period: { zh: '2026', en: '2026' },
    doi: '10.1109/TCSVT.2026.3651269',
    link: 'https://doi.org/10.1109/TCSVT.2026.3651269',
  },
  {
    id: 'mlbdbi-2020',
    title: {
      zh: 'Stock Price Prediction Based on Artificial Neural Network',
      en: 'Stock Price Prediction Based on Artificial Neural Network',
    },
    venue: {
      zh: '2020 2nd International Conference on Machine Learning, Big Data and Business Intelligence (MLBDBI)',
      en: '2020 2nd International Conference on Machine Learning, Big Data and Business Intelligence (MLBDBI)',
    },
    type: { zh: '会议论文', en: 'Conference Paper' },
    period: { zh: '2020.10', en: '2020.10' },
    doi: '10.1109/MLBDBI51377.2020.00040',
    link: 'https://doi.org/10.1109/MLBDBI51377.2020.00040',
  },
];

const researchItems: ResearchItem[] = [
  {
    id: 'hkust-gz-ra',
    org: {
      zh: '香港科技大学（广州）',
      en: 'The Hong Kong University of Science and Technology (Guangzhou)',
    },
    title: { zh: '研究助理', en: 'Research Assistant' },
    location: { zh: '广州, 中国', en: 'Guangzhou, China' },
    period: { zh: '2024.08.30 - 2025.12.31', en: '2024.08.30 - 2025.12.31' },
    description: {
      zh: '在香港科技大学（广州）担任研究助理（导师：Prof. Hui Xiong、Dr. Runwei Guan），研究方向聚焦多模态感知与视觉语言建模在无人系统场景中的应用。主要负责数据体系构建与标注规范设计、模型方案调研与实验迭代、视觉到语言模块优化，以及多指标评测与结果分析。工作内容覆盖从数据治理、模型训练到性能对比与论文支撑的完整研究流程，重点提升系统在边缘部署条件下的语义理解能力、长文本生成质量与推理效率。',
      en: 'Served as a Research Assistant at HKUST (Guangzhou) under Prof. Hui Xiong and Dr. Runwei Guan, with a research focus on multimodal perception and vision-language modeling for autonomous systems. My core responsibilities included dataset construction and annotation protocol design, model investigation and experiment iteration, optimization of vision-to-language modules, and multi-metric evaluation with result analysis. The work covered the full research cycle from data governance and model training to benchmarking and paper support, with emphasis on improving semantic understanding, long-form generation quality, and inference efficiency under edge-deployment constraints.',
    },
  },
  {
    id: 'kbqa',
    org: { zh: 'KBQA 文献综述', en: 'Literature Review of KBQA' },
    title: {
      zh: '知识表示与推理研究组（阿姆斯特丹自由大学）',
      en: 'Knowledge Representation and Reasoning Group (Vrije Universiteit Amsterdam)',
    },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, Netherlands' },
    period: { zh: '2023.01 - 2023.08', en: '2023.01 - 2023.08' },
    description: {
      zh: '围绕知识图谱问答系统（KGQA）方向系统梳理 2020-2023 年代表性研究工作，总结方法演进路径，并识别当前研究中的关键趋势与空白。',
      en: 'Conducted an extensive literature review on state-of-the-art approaches to Knowledge-Based Question Answering, synthesizing findings from research papers (2020-2023) and identifying key trends and gaps in the field.',
    },
  },
  {
    id: 'stock',
    org: { zh: '基于人工神经网络的股价预测', en: 'Stock Price Prediction Based on Artificial Neural Network' },
    title: { zh: '导师：Jiyue Jiang', en: 'Advised by Jiyue Jiang' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    period: { zh: '2020.03 - 2021.02', en: '2020.03 - 2021.02' },
    description: {
      zh: '构建并应用 BP 神经网络模型分析 482 个交易日的历史股价数据，在较低误差水平下实现高精度预测，并显著降低整体系统误差。',
      en: 'Developed and applied a Backpropagation neural network model to analyze 482 trading days of historical stock data and achieved high prediction accuracy with very low error rates.',
    },
  },
  {
    id: 'ra',
    org: {
      zh: '麻省工程医学与关键数据实验室（LEMD）',
      en: 'Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD)',
    },
    title: { zh: '研究助理', en: 'Research Assistant' },
    location: { zh: '远程', en: 'Remote' },
    period: { zh: '2022.09 - 2022.11', en: '2022.09 - 2022.11' },
    description: {
      zh: '导师：Smith W.L. J。开展基于 ECG 的心血管疾病诊断与预测深度学习算法研究，并完成国际生物医学研究平台原型设计。',
      en: 'Advised by Smith W.L. J. Conducted advanced research on deep learning algorithms for ECG-based cardiovascular disease diagnosis and prediction, and completed a prototype design for an international biomedical research platform.',
    },
  },
];

const achievementItems: AchievementItem[] = [
  {
    id: 'google-prompting-essentials',
    org: { zh: 'Google 提示工程核心课程', en: 'Google Prompting Essentials' },
    title: { zh: 'Agent / 生成式 AI 认证', en: 'Agent / GenAI Certification' },
    period: { zh: '2026.02', en: '2026.02' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '聚焦提示词设计、上下文组织与可复用 Prompt 模板构建，提升实际业务场景中的生成式 AI 使用效率。',
      en: 'Focused on prompt design, context structuring, and reusable prompt patterns to improve practical GenAI workflows.',
    },
  },
  {
    id: 'ibm-rag-agentic-ai',
    org: { zh: 'IBM RAG 与 Agentic AI 专业认证', en: 'IBM RAG and Agentic AI Professional Certificate' },
    title: { zh: 'Agent / 生成式 AI 认证', en: 'Agent / GenAI Certification' },
    period: { zh: '2026.01', en: '2026.01' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '围绕 RAG 与 Agentic AI 架构学习检索增强、工具调用与任务编排能力。',
      en: 'Focused on RAG and agentic architectures, including retrieval, tool use, and task orchestration.',
    },
  },
  {
    id: 'ml-in-production',
    org: { zh: '生产环境机器学习（MLOps）', en: 'Machine Learning in Production (MLOps)' },
    title: { zh: 'ML 工程化认证', en: 'ML Engineering Certification' },
    period: { zh: '2025.04', en: '2025.04' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '面向生产环境学习模型部署、监控、迭代与可靠性保障流程。',
      en: 'Learned production ML workflows for deployment, monitoring, iteration, and reliability.',
    },
  },
  {
    id: 'data-engineering-dlai',
    org: { zh: 'DeepLearning.AI 数据工程专业认证', en: 'DeepLearning.AI Data Engineering Professional Certificate' },
    title: { zh: '数据与系统认证', en: 'Data & Systems Certification' },
    period: { zh: '2025.12', en: '2025.12' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '围绕数据管道、数据建模与系统化工程能力，强化数据驱动产品的架构基础。',
      en: 'Focused on data pipelines, modeling, and engineering foundations for data-driven products.',
    },
  },
  {
    id: 'google-advanced-data-analytics',
    org: { zh: 'Google 高级数据分析专业认证', en: 'Google Advanced Data Analytics Professional Certificate' },
    title: { zh: '数据与系统认证', en: 'Data & Systems Certification' },
    period: { zh: '2025.01', en: '2025.01' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '增强统计分析、建模与可解释分析能力，支持教育与 AI 业务的决策优化。',
      en: 'Strengthened analytics, modeling, and interpretability skills for AI and education product decisions.',
    },
  },
  {
    id: 'british-council-advisor-cert',
    org: { zh: '英国教育升学顾问资格证书', en: 'British Council Certified Education Consultant' },
    title: { zh: '英国文化教育协会（British Council）', en: 'British Council' },
    period: { zh: '2024 - 至今', en: '2024 - Present' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '获得 British Council 英国教育升学顾问资格认证，系统掌握英国教育体系与升学咨询规范。',
      en: 'Earned the British Council Certified Education Consultant credential, with structured training in UK education systems and admissions advising standards.',
    },
  },
  {
    id: 'coursera-prompt',
    org: { zh: 'ChatGPT 提示工程', en: 'Prompt Engineering for ChatGPT' },
    title: { zh: 'Coursera 认证', en: 'Coursera Certification' },
    period: { zh: '2024.07', en: '2024.07' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '完成 Prompt Engineering for ChatGPT 课程学习并获得认证。',
      en: 'Completed the Prompt Engineering for ChatGPT course and earned certification.',
    },
  },
  {
    id: 'huawei-ai-cert',
    org: { zh: '华为云人工智能技能认证', en: 'Huawei Cloud Artificial Intelligence Skills Certification' },
    title: { zh: '华为云 AI 技能认证', en: 'Huawei Cloud AI Skills Certification' },
    period: { zh: '2020.08', en: '2020.08' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '完成 ModelArts 智能花卉图像识别项目实践。',
      en: 'Completed the ModelArts intelligent flower image recognition practice project.',
    },
  },
  {
    id: 'huawei-kunpeng-cert',
    org: { zh: '华为云鲲鹏技能认证', en: 'Huawei Cloud Kunpeng Skills Certification' },
    title: { zh: '华为云技能认证（鲲鹏方向）', en: 'Huawei Cloud Skills Certification (Kunpeng Track)' },
    period: { zh: '2020.08', en: '2020.08' },
    location: { zh: '远程', en: 'Remote' },
    description: {
      zh: '完成鲲鹏计算平台软件迁移相关实践。',
      en: 'Completed practical training on software migration on the Kunpeng computing platform.',
    },
  },
  {
    id: 'huading-awards',
    org: { zh: '澳门华鼎奖（第25-26届）', en: 'Macau Huading Awards (25th - 26th)' },
    title: { zh: '活动协调与嘉宾对接', en: 'Event Coordination and Guest Liaison' },
    period: { zh: '2019.12', en: '2019.12' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    description: {
      zh: '负责与艺人及其团队沟通协调，保障活动期间需求对接与流程顺畅。',
      en: 'Coordinated with celebrities and their teams to ensure smooth communication and operational execution throughout the event.',
    },
  },
  {
    id: 'internet-plus',
    org: { zh: '第六届全国“互联网+”创新创业大赛', en: 'The 6th National Internet+ Innovation and Entrepreneurship Competition' },
    title: { zh: 'AR 旅游纪念体验先锋（铜奖）', en: 'The Pioneer of AR Tourism Souvenir Experience - Bronze Award' },
    period: { zh: '2018.02.03', en: '2018.02.03' },
    location: { zh: '河北, 中国', en: 'Hebei, China' },
    description: {
      zh: '项目获铜奖，聚焦 AR 与旅游纪念场景结合的产品创新。',
      en: 'Won Bronze Award with an AR tourism souvenir experience project focused on product innovation.',
    },
  },
  {
    id: 'macau-finance-awards',
    org: { zh: '澳门财经风云榜', en: 'Macau Financial Excellence Awards' },
    title: { zh: '三年优秀志愿者代表', en: 'Three-Year Outstanding Volunteer Representative' },
    period: { zh: '2017 - 2019', en: '2017 - 2019' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    description: {
      zh: '连续多年参与并获得优秀志愿者代表认可。',
      en: 'Recognized as an outstanding volunteer representative across three consecutive years.',
    },
  },
  {
    id: 'boao-forum',
    org: { zh: '博鳌亚洲论坛（澳门）', en: 'Boao Forum for Asia, Macau' },
    title: { zh: '优秀志愿者', en: 'Outstanding Volunteer' },
    period: { zh: '2017.11', en: '2017.11' },
    location: { zh: '澳门, 中国', en: 'Macau, China' },
    description: {
      zh: '参与论坛志愿服务并获得优秀志愿者称号。',
      en: 'Contributed to forum operations and received the Outstanding Volunteer recognition.',
    },
  },
];

export default function Home() {
  const { language } = useLanguage();
  const [expandedExploreId, setExpandedExploreId] = useState<string | null>(null);
  const [expandedPublicationId, setExpandedPublicationId] = useState<string | null>(null);
  const [expandedEducationId, setExpandedEducationId] = useState<string | null>(null);
  const [expandedResearchId, setExpandedResearchId] = useState<string | null>(null);
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
  const [expandedOtherId, setExpandedOtherId] = useState<string | null>(null);

  const zh = language === 'zh';
  const getStartSortValue = (period: string): number => {
    const match = period.match(/(\d{4})(?:\.(\d{1,2}))?/);
    if (!match) return 0;
    const year = Number(match[1]);
    const month = Number(match[2] ?? '1');
    return year * 100 + month;
  };
  const sortedPublications = useMemo(
    () => [...publications].sort((a, b) => getStartSortValue(b.period.zh) - getStartSortValue(a.period.zh)),
    []
  );
  const sortedEducation = useMemo(
    () => [...educationItems].sort((a, b) => getStartSortValue(b.period.zh) - getStartSortValue(a.period.zh)),
    []
  );
  const sortedResearch = useMemo(
    () => [...researchItems].sort((a, b) => getStartSortValue(b.period.zh) - getStartSortValue(a.period.zh)),
    []
  );
  const sortedWork = useMemo(
    () => [...workItems].sort((a, b) => getStartSortValue(b.period.zh) - getStartSortValue(a.period.zh)),
    []
  );
  const sortedAchievements = useMemo(
    () => [...achievementItems].sort((a, b) => getStartSortValue(b.period.zh) - getStartSortValue(a.period.zh)),
    []
  );

  return (
    <div className="ws-page">
      <TopNav active="home" />

      <section className="ws-hero">
        <div className="ws-hero-left">
          <h1 className="ws-name">{zh ? '许天浩' : 'Tianhao Xu'}</h1>
          <div className="ws-links">
            <a href="https://www.linkedin.com/in/tianhao-xu-evan/" target="_blank" rel="noopener noreferrer" className="ws-social-link">
              <SocialIcon type="linkedin" />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/TISNN" target="_blank" rel="noopener noreferrer" className="ws-social-link">
              <SocialIcon type="github" />
              <span>GitHub</span>
            </a>
            <a href="https://orcid.org/0009-0005-4809-0943" target="_blank" rel="noopener noreferrer" className="ws-social-link">
              <SocialIcon type="orcid" />
              <span>ORCID</span>
            </a>
            <span className="ws-link-disabled" aria-disabled="true">
              CV
            </span>
            <a href="mailto:evanxusci@gmail.com">evanxusci [at] gmail [dot] com</a>
          </div>
        </div>

        <aside className="ws-hero-right">
          <img src={Tulipa.src} alt="Portrait" className="ws-cover" />
        </aside>
      </section>

      <section className="ws-explore">
        <div className="ws-explore-head">
          <h2>{zh ? '探索' : 'Explore'}</h2>
        </div>

        {exploreItems.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-item-main ws-entry-trigger ws-explore-row-head"
              aria-expanded={expandedExploreId === item.id}
              onClick={() => setExpandedExploreId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.title[language]}</h3>
              <p>{item.headline[language]}</p>
            </button>
            {expandedExploreId === item.id ? (
              <div className="ws-item-sub">
                <p>{item.description[language]}</p>
                {item.linkLabel[language] ? <a href={item.link}>{item.linkLabel[language]}</a> : null}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '研究经历' : 'Research Experience'}</h2>
        </div>
        {sortedResearch.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-entry-head ws-entry-trigger ws-work-head"
              aria-expanded={expandedResearchId === item.id}
              onClick={() => setExpandedResearchId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.org[language]}</h3>
              <p>{item.title[language]}</p>
              <time>{item.period[language]}</time>
            </button>
            {expandedResearchId === item.id ? (
              <div className="ws-item-sub ws-entry-sub ws-work-sub">
                <p className="ws-work-location">{item.location[language]}</p>
                <p>{item.description[language]}</p>
                {item.id === 'ra' ? <img src={LEMDCover.src} alt="LEMD project preview" className="ws-work-figure" loading="lazy" /> : null}
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '论文出版物' : 'Publications'}</h2>
        </div>
        {sortedPublications.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-pub-top ws-entry-trigger"
              aria-expanded={expandedPublicationId === item.id}
              onClick={() => setExpandedPublicationId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.title[language]}</h3>
              <p>{item.type[language]}</p>
              <time>{item.period[language]}</time>
            </button>
            {expandedPublicationId === item.id ? (
              <div className="ws-item-sub ws-pub-sub">
                <p>{item.venue[language]}</p>
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="ws-doi-link">
                  <span>DOI: {item.doi}</span>
                  <svg viewBox="0 0 20 20" aria-hidden="true" className="ws-link-icon">
                    <path d="M5 15L15 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    <path d="M9 5H15V11" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '教育' : 'Education'}</h2>
        </div>
        {sortedEducation.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-edu-top ws-entry-trigger"
              aria-expanded={expandedEducationId === item.id}
              onClick={() => setExpandedEducationId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.school[language]}</h3>
              <p>{item.level[language]}</p>
              <time>{item.period[language]}</time>
            </button>
            {expandedEducationId === item.id ? (
              <div className="ws-item-sub ws-edu-sub">
                <p>{item.location[language]}</p>
                <p>{item.degree[language]}</p>
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '职业经历' : 'Career'}</h2>
        </div>
        {sortedWork.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-entry-head ws-entry-trigger ws-work-head"
              aria-expanded={expandedWorkId === item.id}
              onClick={() => setExpandedWorkId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.org[language]}</h3>
              <p>{item.title[language]}</p>
              <time>{item.period[language]}</time>
            </button>
            {expandedWorkId === item.id ? (
              <div className="ws-item-sub ws-entry-sub ws-work-sub">
                <p className="ws-work-location">{item.location[language]}</p>
                <p>{item.description[language]}</p>
              </div>
            ) : null}
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '成就与贡献' : 'Achievements and Contributions'}</h2>
        </div>
        {sortedAchievements.map((item) => (
          <article key={item.id} className="ws-item">
            <div className="ws-entry-head ws-work-head">
              <h3>{item.org[language]}</h3>
              <p>{item.title[language]}</p>
              <time>{item.period[language]}</time>
            </div>
          </article>
        ))}
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '其他' : 'Other'}</h2>
        </div>
        {otherItems.map((item) => (
          <article key={item.id} className="ws-item">
            <button
              type="button"
              className="ws-item-main ws-entry-trigger ws-other-head"
              aria-expanded={expandedOtherId === item.id}
              onClick={() => setExpandedOtherId((prev) => (prev === item.id ? null : item.id))}
            >
              <h3>{item.title[language]}</h3>
              <p>{item.headline[language]}</p>
            </button>
            {expandedOtherId === item.id ? (
              <div className="ws-item-sub ws-item-stack">
                {item.details.map((detail, index) => (
                  <div key={`${item.id}-${index}`} className="ws-item-stack-row">
                    <p className={detail.showLogo ? 'ws-detail-with-logo' : undefined}>
                      {detail.showLogo ? (
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 96 96" fill="none" aria-hidden="true" className="ws-inline-logo">
                          <path d="M22 18V56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                          <path d="M66 18V56" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                          <path d="M60 28L76 40" stroke="currentColor" strokeWidth="8" strokeLinecap="round" />
                          <path d="M22 70Q44 92 66 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : null}
                      <span>{detail.text[language]}</span>
                    </p>
                    {detail.link && detail.linkLabel ? <a href={detail.link}>{detail.linkLabel[language]}</a> : null}
                  </div>
                ))}
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
