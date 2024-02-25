import styles from './hero.module.css';
import Resume from '../assets/Gurditt Resume.pdf';
import { DownloadBtn } from './DownloadBtn';
import {Github, Linkedin, Instagram, Twitter} from 'lucide-react'

export const Hero = () => {
  return (
    <div className="flex flex-col items-center gap-10">
      <div className="flex gap-3">
        <a href='https://github.com/gurdittcancode' target='_blank'>
          <Github size={32} />
        </a>
        <a href="https://linkedin.com/in/contactgurditt" target='_blank'>
          <Linkedin size={32} />
        </a>
        <a href="https://instagram.com/notgurditt" target='_blank'>
          <Instagram size={32} />
        </a>
        <a href="https://x.com/gurdittcancode" target='_blank'>
          <Twitter size={32} />
        </a>
      </div>
      <div className="text-6xl font-bold">
        Gurditt Singh <span className="hidden md:inline-block">Khurana</span>
      </div>
      <p className="text-2xl -mt-3 font-semibold text-center">
        Full-Stack JavaScript Developer
      </p>
      <a
        className={`${styles.btn} mt-6 p-3 border-[3px] font-semibold  border-black hover:bg-black hover:text-white rounded-2xl`}
        href={Resume}
        download={'Gurditt-Singh-Resume'}>
        Download Resume <DownloadBtn />
      </a>
    </div>
  );
};
