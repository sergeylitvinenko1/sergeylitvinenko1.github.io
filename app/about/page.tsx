import styles from '@/app/ui/home.module.css';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Sergey Litvinenko',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${montserrat.className} sm:text-xl text-lg max-w-3xl leading-relaxed`}>
            Sergey Litvinenko is currently pursuing a master's degree in Quantitative Finance at the Vienna University of Economics and Business. Previously, he obtained his undergraduate double degree in Mathematics and Economics at the American University in Bulgaria, receiving Outstanding Achievement in Economics award. During his studies, he completed an off-cycle internship at the asset management firm Expat Capital and participated in the 2020 CFA Institute Research Challenge. Upon graduation, he joined the Deal Advisory department of KPMG Ukraine to work on valuation projects and M&A transactions, gaining valuable analytical and research skills. In 2021, Sergey passed CFA Exam Level II.
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
