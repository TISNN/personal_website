'use client';

import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';

const PATHTREE_URL = 'https://path-tree.vercel.app/';

type ProjectEntry = {
  title: string;
  dates: string;
  description: string;
  technologies: string[];
  link?: string;
};

const content = {
  zh: `PathTree 是一款职业测评与本科专业选择平台，旨在将自我认知转化为可执行的专业探索与路径决策。产品以兴趣、能力、学科适配、价值观四维信号为输入，结合 Holland RIASEC 人与环境匹配 与 SCCT 等框架输出可解释的专业方向推荐。推荐引擎采用确定性多因素评分模型，并为每条推荐提供清晰的解释链，包括因素贡献度拆解、风险提示与替代路径。当信号矛盾或信息不足时，系统会给出置信度提示与验证任务建议。为提升测评质量，能力模块按题库校准思路设计迭代方向，例如 IRT 或 Rasch，在保证区分度的同时支持更高效的评估。最终，PathTree 输出结构化的行动计划，将推荐结果落到具体的探索与学习任务上。`,
  en: `PathTree is a career assessment and major selection platform designed to turn self understanding into actionable academic and career exploration. It combines four signals, interest, aptitude, subject fit, and values, and produces explainable major recommendations grounded in established frameworks such as Holland RIASEC person environment fit and SCCT. The recommendation engine is deterministic and multi factor, providing a clear rationale for every path, including factor contribution breakdowns, risk flags, and alternative options. When signals are conflicting or insufficient, PathTree surfaces confidence cues and proposes validation tasks to reduce uncertainty. To strengthen measurement quality over time, the aptitude module is designed to evolve toward calibrated item banks such as IRT or Rasch, enabling efficient assessment while preserving discrimination. PathTree ultimately generates structured action plans that translate recommendations into concrete exploration and learning tasks.`,
};

const projects: ProjectEntry[] = [
  {
    title: 'Study Abroad Enterprises Intelligent Management SaaS System',
    dates: 'Jul 2024 - Aug 2024',
    description:
      'Delivered end-to-end operational management solutions for study abroad enterprises to reduce costs and improve efficiency.',
    technologies: ['Corporate Services', 'Study Abroad Platform', 'Product Prototype Design', 'Sketch'],
  },
  {
    title: 'Constructing a LLM-enhanced Olfactory Disorder KGQA System',
    dates: 'Jan 2023 - Aug 2023',
    description:
      'Built an AI system for olfactory disorder QA using knowledge graph construction and LLM-based retrieval/generation pipelines.',
    technologies: ['Python', 'LLM', 'Knowledge Graph', 'SPARQL', 'GraphDB', 'Vicuna-7b'],
  },
  {
    title: 'An Enhanced Lightweight CN-EN Bilingual Medical QA System',
    dates: 'Dec 2022 - Aug 2023',
    description:
      'Improved bilingual medical QA performance via prompt tuning, Chinese herbal terminology enhancement, and LangChain-based interaction.',
    technologies: ['LLM', 'LangChain', 'ChatGLM', 'Prompt Tuning', 'Python'],
  },
  {
    title: 'Election Analysis and Winner Prediction Via Twitter',
    dates: 'Nov 2022 - Dec 2022',
    description:
      'Used Twitter data and sentiment analysis with TextBlob to estimate candidate support and predict election outcomes.',
    technologies: ['Python', 'NLP', 'Twitter', 'TextBlob'],
    link: 'https://github.com/TISNN/election',
  },
  {
    title: 'Machine Learning for Quantified Self',
    dates: 'Jun 2022 - Jul 2022',
    description:
      'Built multivariate time-series models to predict physical activities from sensor signals and optimized LSTM through hyperparameter tuning.',
    technologies: ['Python', 'LSTM', 'Time Series Analysis', 'Sensor Data'],
    link: 'https://github.com/TISNN/2022_ML4QS/tree/main',
  },
  {
    title: 'Using Different Deep Learning Models to Detect COVID-19',
    dates: 'Dec 2020 - May 2021',
    description:
      'Developed deep-learning CT screening models and achieved strong performance, with DResUnet reaching top comparative results.',
    technologies: ['Python', 'Computer Vision', 'Deep Learning', 'DResUnet'],
    link: 'https://github.com/TISNN/COVID',
  },
];

export default function ProjectsPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';

  return (
    <div className="ws-page">
      <TopNav active="projects" />
      <section className="ws-list-page">
        <div className="ws-explore-head">
          <h2>PathTree</h2>
          <a href={PATHTREE_URL} target="_blank" rel="noopener noreferrer" className="ws-project-link">
            <span>{zh ? '官网入口' : 'Visit Site'}</span>
            <span aria-hidden="true">↗</span>
          </a>
        </div>

        <article className="ws-item ws-project-intro">
          <p>{content[language]}</p>
        </article>

        <article className="ws-item ws-project-intro-note">
          <p>{zh ? '项目定位：职业测评与本科专业选择平台。' : 'Positioning: Career assessment and major selection platform.'}</p>
        </article>
      </section>

      <section className="ws-section-block">
        <div className="ws-explore-head">
          <h2>{zh ? '项目经历' : 'Selected Projects'}</h2>
        </div>
        {projects.map((item) => (
          <article key={item.title} className="ws-item">
            <div className="ws-entry-head">
              <h3>{item.title}</h3>
              <p>{zh ? '项目' : 'Project'}</p>
              <time>{item.dates}</time>
            </div>
            <div className="ws-item-sub ws-entry-sub">
              <p>{item.description}</p>
              <p className="ws-tech-line">{item.technologies.join(' · ')}</p>
              {item.link ? (
                <a href={item.link} target="_blank" rel="noopener noreferrer" className="ws-doi-link">
                  <span>{zh ? '源码链接' : 'Source'}</span>
                  <span aria-hidden="true">↗</span>
                </a>
              ) : null}
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
