import styles from '@/app/ui/home.module.css';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Projects',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${montserrat.className} sm:text-xl text-lg max-w-3xl leading-relaxed`}>
            Some projects
        </h1>
        <div className="flex relative top-5 justify-center gap-4 grid-cols-3 grid-rows-1"> 
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className="text-center">
              <Link
                href="/"
                className={`${montserrat.className} flex items-center gap-5 self-start rounded-lg bg-yellow-900	px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-600 md:text-base`}>
                <span>Back</span>
              </Link>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
