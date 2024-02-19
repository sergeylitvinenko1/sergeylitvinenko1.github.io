import styles from '@/app/ui/home.module.css';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';
import { motion } from 'framer-motion'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sergey Litvinenko',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <motion.div initial="hidden" animate="visible" variants={{
          hidden: {
            scale: .8,
            opacity:0
          },
          visible: {
            scale: 1,
            opacity: 1,
            transition: {
              delay: .4
            }
          },
        }}>
          <h1 className={`${montserrat.className} text-xl md:text-3xl md:leading-normal`}>
            My name is Sergey Litvinenko
          </h1>
        </motion.div>
        <div className="flex relative top-5 justify-center gap-4 grid-cols-3 grid-rows-1"> 
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className="text-center">
              <Link
                href="/about"
                className={`${montserrat.className} flex items-center gap-5 self-start rounded-lg bg-yellow-900	px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-600 md:text-base`}>
                <span>About</span>
              </Link>
            </div>
          </div>
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className="text-center">
          <Link
              href="/projects"
              className={`${montserrat.className} flex items-center gap-5 self-start rounded-lg bg-yellow-900	px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-600 md:text-base`}>
              <span>Projects</span>
          </Link>
            </div>
          </div>
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className="text-center">
          <Link
              href="/contact"
              className={`${montserrat.className} flex items-center gap-5 self-start rounded-lg bg-yellow-900	px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-600 md:text-base`}>
              <span>Contact</span>
          </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
