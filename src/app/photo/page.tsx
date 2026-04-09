'use client';

import TopNav from '@/components/TopNav';
import { useLanguage } from '@/context/LanguageContext';
import Photo01 from '../../public/photo/photo_8607.jpg';
import Photo01A from '../../public/photo/IMG_0506.jpg';
import Photo01C from '../../public/photo/IMG_0515.jpg';
import Photo02 from '../../public/photo/IMG_1711.jpg';
import Photo03 from '../../public/photo/IMG_1738.jpg';
import Photo04 from '../../public/photo/IMG_1939.jpg';
import Photo05 from '../../public/photo/photo_3344.jpg';
import Photo06 from '../../public/photo/IMG_3416.jpg';
import Photo07 from '../../public/photo/photo_3958.jpg';
import Photo08 from '../../public/photo/IMG_4068.jpg';
import Photo09 from '../../public/photo/IMG_4185.jpg';
import Photo10 from '../../public/photo/photo_4259.jpg';
import Photo11 from '../../public/photo/IMG_4296.jpg';
import Photo12 from '../../public/photo/photo_1202.jpg';
import Photo13 from '../../public/photo/photo_3790.jpg';
import Photo14 from '../../public/photo/IMG_6056.jpg';
import Photo15 from '../../public/photo/IMG_6074.jpg';

const photoItems = [
  Photo01.src,
  Photo01A.src,
  Photo01C.src,
  Photo02.src,
  Photo03.src,
  Photo04.src,
  Photo05.src,
  Photo06.src,
  Photo07.src,
  Photo08.src,
  Photo09.src,
  Photo10.src,
  Photo11.src,
  Photo12.src,
  Photo13.src,
  Photo14.src,
  Photo15.src,
];

export default function PhotoPage() {
  const { language } = useLanguage();
  const zh = language === 'zh';

  return (
    <div className="ws-page ws-photo-page">
      <TopNav active="home" />
      <section className="ws-list-page">
        <div className="ws-explore-head ws-photo-head">
          <h2>{zh ? '摄影' : 'Photography'}</h2>
        </div>
        <div className="ws-photo-grid">
          {photoItems.map((src, index) => (
            <figure key={src} className="ws-photo-item">
              <img src={src} alt={`${zh ? '摄影作品' : 'Photo'} ${index + 1}`} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </div>
  );
}
