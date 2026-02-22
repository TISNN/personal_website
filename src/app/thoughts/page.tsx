'use client';

import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';

type ThoughtItem = {
  id: string;
  date: string;
  title: { zh: string; en: string };
  content: { zh: string; en: string };
};

const thoughts: ThoughtItem[] = [
  {
    id: 'agent-workflow',
    date: '2026.02.22',
    title: { zh: '关于 Agent 工作流', en: 'On Agent Workflows' },
    content: {
      zh: '最近在思考：好的 Agent 系统不是“更复杂”，而是“更可验证”。把任务拆成更小的步骤，并让每一步可观测、可回滚，往往比追求一次性全自动更实用。',
      en: 'I have been thinking that the best agent systems are not more complex, but more verifiable. Breaking work into smaller steps with observability and rollback often beats one-shot automation.',
    },
  },
  {
    id: 'learning-speed',
    date: '2026.02.16',
    title: { zh: '关于学习速度', en: 'On Learning Speed' },
    content: {
      zh: '学习的核心不是输入多少信息，而是能否快速形成自己的判断框架。先做最小实践，再读理论，反馈通常更快。',
      en: 'Learning is not about consuming more information, but about forming your own decision framework quickly. Start with a minimal practice first, then study theory with feedback.',
    },
  },
  {
    id: 'product-detail',
    date: '2026.02.10',
    title: { zh: '关于产品细节', en: 'On Product Details' },
    content: {
      zh: '用户感知到的“专业”，很多时候来自细节的一致性：命名一致、交互一致、错误提示一致。细节不只是美观，也是信任。',
      en: 'What users perceive as professionalism often comes from consistency in details: naming, interactions, and error messages. Detail is not only aesthetics, but trust.',
    },
  },
];

export default function ThoughtsPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';

  return (
    <div className="ws-page ws-thoughts-page">
      <TopNav active="thoughts" />

      <section className="ws-list-page">
        <div className="ws-explore-head ws-thoughts-head">
          <h2>{zh ? '最近思考' : 'Recent Thoughts'}</h2>
        </div>

        {thoughts.map((item) => (
          <article key={item.id} className="ws-thought-row">
            <time>{item.date}</time>
            <h3>{item.title[language]}</h3>
            <p>{item.content[language]}</p>
          </article>
        ))}
      </section>
    </div>
  );
}
