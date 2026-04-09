'use client';

import TopNav from '@/components/TopNav';
import { useLanguage } from '@/context/LanguageContext';

const codematoImages = [
  '/design/codemato/1F04390A-1981-4A26-BF9C-16C7F59C3BCA.webp',
  '/design/codemato/257F9C5A-B688-4C12-887B-0700BAEA3A0D.webp',
  '/design/codemato/602EAC4E-1811-45DB-A5FA-0DD191D8171E.webp',
  '/design/codemato/717FF3A5-3479-4BCE-9653-26A7A886EF73.webp',
  '/design/codemato/791B9C7E-208F-4DF4-952B-D93303762972.webp',
  '/design/codemato/7CB466A5-DB47-4122-A66C-9FDCBCD6CD07.webp',
  '/design/codemato/8F82B3FB-3A5E-400D-B007-A993089B82CB.webp',
  '/design/codemato/94F6074D-FA37-4A77-A025-315889841327.webp',
  '/design/codemato/9B3CE3C9-F39D-422C-91CA-71BDA13B9129.webp',
  '/design/codemato/A8DF1FFF-7946-4FBC-A5A2-84ECAF4E4348.webp',
  '/design/codemato/B0390834-A438-4CCD-BD3A-B889255FEF5A.webp',
  '/design/codemato/DB27E787-D5CE-45BF-8B70-0A32260843B1.webp',
  '/design/codemato/F4C9D592-16D3-4428-86C2-B3E43EBC0CA5.webp',
  '/design/codemato/FB772452-CA7B-4B2D-B60A-8C1948F1F20B.webp',
];

const zhengzhongImages = ['/design/zhengzhong/zhengzhong.png'];

export default function DesignPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';

  return (
    <div className="ws-page ws-design-page">
      <TopNav active="home" />
      <section className="ws-list-page">
        <div className="ws-explore-head ws-design-head">
          <h2>{zh ? '设计精选' : 'Design Collection'}</h2>
        </div>

        <article className="ws-design-project">
          <h3>CodeMato</h3>
          <p>{zh ? 'UI Design' : 'UI Design'}</p>
          <div className="ws-design-intro">
            <p>
              {zh
                ? 'CodeMato 是一个面向开发者与创业团队的品牌与数字体验设计项目，围绕“技术可信度与视觉个性并存”展开，覆盖品牌策略、VIS 系统、Logo 与 IP 设计、官网界面与组件化表达。它的核心是让技术品牌在保持专业与结构化的同时，形成鲜明、可扩展的设计语言。'
                : 'CodeMato is a brand and digital experience design project for developers and startup teams. It explores how a technology brand can stay structured and credible while still feeling expressive. The work spans brand strategy, visual identity, logo and IP design, and web UI exploration to build a scalable design language.'}
            </p>
            <p className="ws-design-link">
              {zh ? '网站：' : 'Website: '}
              <a href="https://codemato.vercel.app" target="_blank" rel="noreferrer">
                codemato.vercel.app
              </a>
            </p>
          </div>

          <div className="ws-design-grid">
            {codematoImages.map((src, index) => (
              <figure key={src} className="ws-design-item">
                <img src={src} alt={`${zh ? 'CodeMato 界面设计' : 'CodeMato UI Design'} ${index + 1}`} loading="lazy" />
              </figure>
            ))}
          </div>
        </article>

        <article className="ws-design-project">
          <h3>High-Fidelity WeChat Mini Program Prototype Design</h3>
          <p>{zh ? 'UX / UI Prototype Design' : 'UX / UI Prototype Design'}</p>
          <div className="ws-design-intro">
            <p>
              {zh
                ? '基于 Axure RP 完成微信小程序高保真原型设计，为正中集团旗下五星级酒店的洗衣与鲜花服务提供数字化方案。项目聚焦服务流程可视化、操作路径简化与多角色使用体验，支持从需求沟通到交互验证的快速落地。'
                : 'Designed a high-fidelity WeChat Mini Program prototype using Axure RP, delivering a digital solution for laundry and flower services at a five-star hotel under the Genzon Group. The design focused on service-flow visualization, clearer interaction paths, and practical usability across service roles.'}
            </p>
          </div>

          <div className="ws-design-grid ws-design-grid-large">
            {zhengzhongImages.map((src, index) => (
              <figure key={src} className="ws-design-item">
                <img
                  src={src}
                  alt={`${zh ? '微信小程序高保真原型设计' : 'High-fidelity WeChat Mini Program Prototype'} ${index + 1}`}
                  loading="lazy"
                />
              </figure>
            ))}
          </div>
        </article>
      </section>
    </div>
  );
}
