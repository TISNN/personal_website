'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';

type TagTone = 'cv' | 'hci' | 'photo' | 'other';

type ProjectLink = {
  label: { zh: string; en: string };
  href?: string;
};

type ProjectEntry = {
  id: string;
  title: string;
  summary: { zh: string; en: string };
  detail: { zh: string; en: string };
  covers: [string, string];
  tags: Array<{ label: { zh: string; en: string }; tone: TagTone }>;
  links: ProjectLink[];
};

const projects: ProjectEntry[] = [
  {
    id: 'pathtree',
    title: 'PathTree',
    summary: {
      zh: '职业测评与本科专业选择平台，将自我认知转化为可执行路径决策。',
      en: 'A career assessment and major selection platform turning self-understanding into actionable planning.',
    },
    detail: {
      zh: '融合兴趣、能力、学科适配与价值观四维信号，结合 RIASEC 与 SCCT 框架，输出可解释推荐、风险提示和替代路径，并形成结构化行动计划。',
      en: 'Combines interest, aptitude, subject fit, and values with RIASEC and SCCT to provide explainable recommendations, risk cues, alternatives, and structured action plans.',
    },
    covers: [
      'https://picsum.photos/seed/pathtree-a/1200/800',
      'https://picsum.photos/seed/pathtree-b/1200/800',
    ],
    tags: [
      { label: { zh: '计算机视觉', en: 'Computer Vision' }, tone: 'cv' },
      { label: { zh: '人机交互', en: 'HCI' }, tone: 'hci' },
      { label: { zh: '摄影', en: 'Photography' }, tone: 'photo' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' }, href: 'https://path-tree.vercel.app/' },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/personal_website' },
    ],
  },
  {
    id: 'studylands-saas',
    title: 'Infinite',
    summary: {
      zh: '面向留学机构的运营管理系统，覆盖线索、咨询、交付与复盘闭环。',
      en: 'An operations SaaS platform for study-abroad agencies across lead, consulting, delivery, and review flows.',
    },
    detail: {
      zh: '提供端到端运营管理能力，帮助机构降低管理成本并提升协作效率，支持标准化流程与可视化跟进。',
      en: 'Provides end-to-end operational workflows to reduce management overhead and improve collaboration efficiency.',
    },
    covers: [
      'https://picsum.photos/seed/studylands-a/1200/800',
      'https://picsum.photos/seed/studylands-b/1200/800',
    ],
    tags: [
      { label: { zh: '人机交互', en: 'HCI' }, tone: 'hci' },
      { label: { zh: '界面设计', en: 'UI/UX' }, tone: 'other' },
      { label: { zh: '软件工程', en: 'Software' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' } },
    ],
  },
  {
    id: 'olfactory-kgqa',
    title: 'Constructing a LLM-enhanced Olfactory Disorder KGQA System',
    summary: {
      zh: '面向嗅觉障碍问答的知识图谱增强系统，支持更稳健的检索与生成。',
      en: 'A knowledge-graph enhanced QA system for olfactory disorders with robust retrieval and generation.',
    },
    detail: {
      zh: '整合科研与社区数据构建领域知识图谱，结合 LLM 与结构化查询提升回答准确性与可解释性。',
      en: 'Integrates research/community data into a domain KG and combines LLM + structured querying for accuracy and explainability.',
    },
    covers: [
      'https://picsum.photos/seed/kgqa-a/1200/800',
      'https://picsum.photos/seed/kgqa-b/1200/800',
    ],
    tags: [
      { label: { zh: '计算机视觉', en: 'Computer Vision' }, tone: 'cv' },
      { label: { zh: '人机交互', en: 'HCI' }, tone: 'hci' },
      { label: { zh: '复现研究', en: 'Reproduction' }, tone: 'other' },
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
    summary: {
      zh: '轻量级中英双语医疗问答系统，面向低资源环境优化交互与回答质量。',
      en: 'A lightweight CN-EN bilingual medical QA system optimized for interaction quality in low-resource settings.',
    },
    detail: {
      zh: '通过 Prompt Tuning、术语增强与链式调用优化系统表现，重点提升双语问答一致性与可用性。',
      en: 'Improved performance with prompt tuning, terminology enhancement, and chain-based interaction to increase bilingual QA consistency.',
    },
    covers: [
      'https://picsum.photos/seed/medicalqa-a/1200/800',
      'https://picsum.photos/seed/medicalqa-b/1200/800',
    ],
    tags: [
      { label: { zh: '人机交互', en: 'HCI' }, tone: 'hci' },
      { label: { zh: '软件工程', en: 'Software' }, tone: 'other' },
      { label: { zh: '复现研究', en: 'Reproduction' }, tone: 'other' },
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
    summary: {
      zh: '基于 Twitter 文本情绪与传播信号进行选举分析与胜者预测。',
      en: 'Election analysis and winner prediction using Twitter sentiment and diffusion signals.',
    },
    detail: {
      zh: '结合情绪分析与候选人讨论热度建模，估计支持度变化并输出胜选趋势。',
      en: 'Modeled sentiment and candidate attention dynamics to estimate support shifts and winner trends.',
    },
    covers: [
      'https://picsum.photos/seed/election-a/1200/800',
      'https://picsum.photos/seed/election-b/1200/800',
    ],
    tags: [
      { label: { zh: '数据挖掘', en: 'Data Mining' }, tone: 'cv' },
      { label: { zh: '人机交互', en: 'HCI' }, tone: 'hci' },
      { label: { zh: '复现研究', en: 'Reproduction' }, tone: 'other' },
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
    summary: {
      zh: '面向多传感器时序数据的人体活动识别与预测。',
      en: 'Activity recognition and prediction from multivariate sensor time-series data.',
    },
    detail: {
      zh: '通过 LSTM 及参数优化提升多变量时序建模效果，用于步行、跑步等行为预测。',
      en: 'Enhanced LSTM-based multivariate modeling via tuning for activity prediction such as walking and running.',
    },
    covers: [
      'https://picsum.photos/seed/ml4qs-a/1200/800',
      'https://picsum.photos/seed/ml4qs-b/1200/800',
    ],
    tags: [
      { label: { zh: '机器学习', en: 'Machine Learning' }, tone: 'cv' },
      { label: { zh: '复现研究', en: 'Reproduction' }, tone: 'other' },
      { label: { zh: '软件工程', en: 'Software' }, tone: 'other' },
    ],
    links: [
      { label: { zh: '页面', en: 'Page' } },
      { label: { zh: '论文', en: 'Paper' } },
      { label: { zh: '代码', en: 'Code' }, href: 'https://github.com/TISNN/2022_ML4QS/tree/main' },
    ],
  },
  {
    id: 'covid-cv',
    title: 'Using Different Deep Learning Models to Detect COVID-19',
    summary: {
      zh: '利用深度学习对肺部 CT 影像进行 COVID-19 早筛识别。',
      en: 'Early COVID-19 screening from lung CT images using deep learning models.',
    },
    detail: {
      zh: '对比多种模型效果，DResUnet 在实验中达到更优准确率与 AUC 表现。',
      en: 'Compared multiple models where DResUnet reached stronger accuracy and AUC in experiments.',
    },
    covers: [
      'https://picsum.photos/seed/covid-a/1200/800',
      'https://picsum.photos/seed/covid-b/1200/800',
    ],
    tags: [
      { label: { zh: '计算机视觉', en: 'Computer Vision' }, tone: 'cv' },
      { label: { zh: '复现研究', en: 'Reproduction' }, tone: 'other' },
      { label: { zh: '软件工程', en: 'Software' }, tone: 'other' },
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

  const toggleRow = (id: string) => {
    setExpanded((prev) => (prev.includes(id) ? prev.filter((v) => v !== id) : [...prev, id]));
  };

  const toggleAll = () => {
    setExpanded(allExpanded ? [] : projects.map((p) => p.id));
  };

  return (
    <div className="ws-page ws-projects-page">
      <TopNav active="projects" />
      <section className="ws-list-page">
        <div className="ws-project-filterline" aria-hidden="true">
          <span className="tone-cv">{zh ? '计算机视觉' : 'Computer Vision'}</span>
          <span>, </span>
          <span className="tone-hci">{zh ? '人机交互' : 'HCI'}</span>
          <span>, </span>
          <span className="tone-photo">{zh ? '摄影' : 'Photography'}</span>
          <span>, </span>
          <span className="tone-other">{zh ? '其他' : 'Others'}</span>
        </div>

        <div className="ws-explore-head ws-projects-head">
          <h2>{zh ? '项目' : 'Projects'}</h2>
          <button type="button" className="ws-top-link ws-project-expand-all" onClick={toggleAll}>
            {allExpanded ? (zh ? '收起所有' : 'Collapse all') : zh ? '展开所有' : 'Expand all'}
          </button>
        </div>

        {projects.map((item) => (
          <article key={item.id} className="ws-item ws-project-row">
            <button type="button" className="ws-entry-trigger ws-project-row-head" onClick={() => toggleRow(item.id)} aria-expanded={expanded.includes(item.id)}>
              <h3>{item.title}</h3>
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
              <div className="ws-project-detail-card">
                <div className="ws-project-detail-media">
                  <img src={item.covers[0]} alt={`${item.title} cover 1`} loading="lazy" />
                  <img src={item.covers[1]} alt={`${item.title} cover 2`} loading="lazy" />
                </div>
                <div className="ws-project-detail-copy">
                  <p className="ws-project-summary">{item.summary[language]}</p>
                  <p className="ws-project-detail">{item.detail[language]}</p>
                  <div className="ws-project-links">
                    {item.links.map((link) =>
                      link.href ? (
                        <a key={`${item.id}-${link.label.en}`} href={link.href} target="_blank" rel="noopener noreferrer">
                          <span>{link.label[language]}</span>
                          <span aria-hidden="true">↗</span>
                        </a>
                      ) : (
                        <span key={`${item.id}-${link.label.en}`} className="is-disabled">
                          {link.label[language]}
                        </span>
                      )
                    )}
                  </div>
                </div>
              </div>
            ) : null}
          </article>
        ))}
      </section>
    </div>
  );
}
