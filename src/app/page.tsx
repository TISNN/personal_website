'use client';

import { useMemo, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';
import Tulipa from '../public/Tulipa.jpg';

type ExploreItem = {
  id: string;
  featured: boolean;
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
    id: 'cv',
    featured: true,
    title: { zh: '计算机视觉', en: 'Computer Vision' },
    headline: { zh: '超越像素——走向理解。', en: 'Beyond pixels toward understanding.' },
    description: {
      zh: '视觉是如何工作的？视觉可以如何帮助我们？',
      en: 'How does vision work? How can vision help us?',
    },
    linkLabel: { zh: '阅读更多', en: 'Read more' },
    link: '#',
  },
  {
    id: 'hci',
    featured: true,
    title: { zh: '人机交互', en: 'Human-Computer Interaction' },
    headline: { zh: '我们在寻求什么样的体验？', en: 'What kind of experience are we seeking?' },
    description: {
      zh: '如何与计算机交互？如何与人类交互？',
      en: 'How do we interact with computers? How do we interact with humans?',
    },
    linkLabel: { zh: '阅读更多', en: 'Read more' },
    link: '#',
  },
  {
    id: 'agent',
    featured: true,
    title: { zh: 'AI 智能体', en: 'AI Agent' },
    headline: { zh: '我还在持续探索 Agent。', en: 'I am still exploring agent systems.' },
    description: {
      zh: '目前在持续研究与实践基于 Agent 的工作流与应用场景。',
      en: 'I am continuously researching and building agent-based workflows and applications.',
    },
    linkLabel: { zh: '持续更新', en: 'Ongoing' },
    link: '#',
  },
  {
    id: 'photo',
    featured: false,
    title: { zh: '摄影', en: 'Photography' },
    headline: { zh: '只凭一张照片不足以了解一个人。', en: 'A single photo is never enough to know someone.' },
    description: {
      zh: '我用摄影记录生活，拍摄胶片与数码影像。',
      en: 'I document life through both film and digital photography.',
    },
    linkLabel: { zh: '查看更多', en: 'See more' },
    link: '#',
  },
];

const educationItems: EducationItem[] = [
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
        link: '#',
      },
      {
        text: { zh: '只凭一张照片不足以了解一个人。', en: 'A single photo is not enough to know a person.' },
        linkLabel: { zh: '查看更多', en: 'See more' },
        link: '#',
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
        link: '#',
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
      zh: 'CHM 教育与文化交流协会致力于推动中国、香港、澳门及其他地区之间的教育与文化交流。协会作为桥梁，促进教育机构、文化组织与个人之间的相互理解、协作与知识共享。',
      en: 'The CHM Education and Cultural Exchange Association is an organization dedicated to promoting educational and cultural exchanges between China, Hong Kong, Macau, and other regions. The association serves as a bridge to enhance mutual understanding, collaboration, and knowledge sharing among educational institutions, cultural organizations, and individuals.',
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
    id: 'kbqa',
    org: { zh: 'KBQA 文献综述', en: 'Literature Review of KBQA' },
    title: { zh: '知识表示与推理研究组', en: 'Knowledge Representation and Reasoning Group' },
    location: { zh: '阿姆斯特丹, 荷兰', en: 'Amsterdam, Netherlands' },
    period: { zh: '2023.01 - 2023.08', en: '2023.01 - 2023.08' },
    description: {
      zh: '围绕知识库问答（KBQA）方向系统梳理 2020-2023 年代表性研究工作，总结方法演进路径，并识别当前研究中的关键趋势与空白。',
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
    org: { zh: '研究助理', en: 'Research Assistant' },
    title: { zh: '导师：Smith W.L. J', en: 'Advised by Smith W.L. J' },
    location: { zh: '远程', en: 'Remote' },
    period: { zh: '2022.09 - 2022.11', en: '2022.09 - 2022.11' },
    description: {
      zh: '开展基于 ECG 的心血管疾病诊断与预测深度学习算法研究，并在麻省工程医学与关键数据实验室（LEMD）完成国际生物医学数据库网站原型设计。',
      en: 'Conducted advanced research on deep learning algorithms for ECG-based cardiovascular disease diagnosis and prediction, and completed a prototype design for an international biomedical database website at the Massachusetts Laboratory for Engineering Medicine and Critical Data (LEMD).',
    },
  },
];

export default function Home() {
  const { language } = useLanguage();
  const [mode, setMode] = useState<'featured' | 'all'>('featured');
  const [expandedExploreId, setExpandedExploreId] = useState<string | null>(null);
  const [expandedPublicationId, setExpandedPublicationId] = useState<string | null>(null);
  const [expandedEducationId, setExpandedEducationId] = useState<string | null>(null);
  const [expandedResearchId, setExpandedResearchId] = useState<string | null>(null);
  const [expandedWorkId, setExpandedWorkId] = useState<string | null>(null);
  const [expandedOtherId, setExpandedOtherId] = useState<string | null>(null);

  const zh = language === 'zh';
  const list = useMemo(
    () => (mode === 'featured' ? exploreItems.filter((item) => item.featured) : exploreItems),
    [mode]
  );
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
            <a href="#">CV</a>
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
          <div className="ws-switch">
            <button
              type="button"
              onClick={() => setMode('featured')}
              className={mode === 'featured' ? 'is-active' : ''}
            >
              {zh ? '精选' : 'Featured'}
            </button>
            <span>/</span>
            <button
              type="button"
              onClick={() => setMode('all')}
              className={mode === 'all' ? 'is-active' : ''}
            >
              {zh ? '全部' : 'All'}
            </button>
          </div>
        </div>

        {list.map((item) => (
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
                <a href={item.link}>{item.linkLabel[language]}</a>
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
