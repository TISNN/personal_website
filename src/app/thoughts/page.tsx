'use client';

import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import TopNav from '@/components/TopNav';

type ThoughtItem = {
  id: string;
  date: string;
  title: { zh: string; en: string };
  content: { zh: string; en: string };
};

const STORAGE_KEY = 'ws-thoughts-v1';

const defaultThoughts: ThoughtItem[] = [
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
  const [thoughts, setThoughts] = useState<ThoughtItem[]>(defaultThoughts);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return;
    try {
      const parsed = JSON.parse(raw) as ThoughtItem[];
      if (Array.isArray(parsed)) {
        setThoughts(parsed);
      }
    } catch {
      // Ignore invalid local data and keep defaults.
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(thoughts));
  }, [thoughts]);

  const updateThought = (
    id: string,
    field: 'date' | 'titleZh' | 'titleEn' | 'contentZh' | 'contentEn',
    value: string
  ) => {
    setThoughts((prev) =>
      prev.map((item) => {
        if (item.id !== id) return item;
        if (field === 'date') return { ...item, date: value };
        if (field === 'titleZh') return { ...item, title: { ...item.title, zh: value } };
        if (field === 'titleEn') return { ...item, title: { ...item.title, en: value } };
        if (field === 'contentZh') return { ...item, content: { ...item.content, zh: value } };
        return { ...item, content: { ...item.content, en: value } };
      })
    );
  };

  const addThought = () => {
    const now = new Date();
    const date = `${now.getFullYear()}.${String(now.getMonth() + 1).padStart(2, '0')}.${String(now.getDate()).padStart(2, '0')}`;
    setThoughts((prev) => [
      {
        id: `thought-${Date.now()}`,
        date,
        title: { zh: '新的思考', en: 'New Thought' },
        content: { zh: '写下你的想法。', en: 'Write your thoughts here.' },
      },
      ...prev,
    ]);
  };

  const deleteThought = (id: string) => {
    setThoughts((prev) => prev.filter((item) => item.id !== id));
  };

  const resetThoughts = () => {
    setThoughts(defaultThoughts);
  };

  return (
    <div className="ws-page ws-thoughts-page">
      <TopNav active="thoughts" />

      <section className="ws-list-page">
        <div className="ws-explore-head ws-thoughts-head">
          <h2>{zh ? '最近思考' : 'Recent Thoughts'}</h2>
          <div className="ws-thought-head-actions">
            <button type="button" className="ws-top-link" onClick={() => setIsEditing((v) => !v)}>
              {isEditing ? (zh ? '完成编辑' : 'Done') : zh ? '编辑' : 'Edit'}
            </button>
            {isEditing ? (
              <>
                <span>/</span>
                <button type="button" className="ws-top-link" onClick={addThought}>
                  {zh ? '新增' : 'Add'}
                </button>
                <span>/</span>
                <button type="button" className="ws-top-link" onClick={resetThoughts}>
                  {zh ? '恢复默认' : 'Reset'}
                </button>
              </>
            ) : null}
          </div>
        </div>

        {thoughts.map((item) => (
          <article key={item.id} className="ws-thought-row">
            {isEditing ? (
              <div className="ws-thought-editor">
                <label>
                  {zh ? '日期' : 'Date'}
                  <input
                    type="text"
                    value={item.date}
                    onChange={(e) => updateThought(item.id, 'date', e.target.value)}
                    placeholder="2026.02.22"
                  />
                </label>
                <label>
                  中文标题
                  <input
                    type="text"
                    value={item.title.zh}
                    onChange={(e) => updateThought(item.id, 'titleZh', e.target.value)}
                  />
                </label>
                <label>
                  English Title
                  <input
                    type="text"
                    value={item.title.en}
                    onChange={(e) => updateThought(item.id, 'titleEn', e.target.value)}
                  />
                </label>
                <label>
                  中文内容
                  <textarea
                    value={item.content.zh}
                    onChange={(e) => updateThought(item.id, 'contentZh', e.target.value)}
                    rows={4}
                  />
                </label>
                <label>
                  English Content
                  <textarea
                    value={item.content.en}
                    onChange={(e) => updateThought(item.id, 'contentEn', e.target.value)}
                    rows={4}
                  />
                </label>
                <div className="ws-thought-editor-actions">
                  <button type="button" className="ws-top-link" onClick={() => deleteThought(item.id)}>
                    {zh ? '删除' : 'Delete'}
                  </button>
                </div>
              </div>
            ) : (
              <>
                <time>{item.date}</time>
                <h3>{item.title[language]}</h3>
                <p>{item.content[language]}</p>
              </>
            )}
          </article>
        ))}

        <p className="ws-thought-note">
          {zh
            ? '提示：编辑内容会自动保存在当前浏览器（仅本地可见）。'
            : 'Note: edits are auto-saved in this browser only.'}
        </p>
      </section>
    </div>
  );
}
