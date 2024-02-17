import styles from '@/app/ui/home.module.css';
import { montserrat } from '@/app/ui/fonts';
import { Metadata } from 'next';
import React from 'react';
import Link from 'next/link';
import { SiGithub, SiGoodreads, SiLinkedin } from "react-icons/si";

// import { motion } from 'framer-motion';
//import Image from 'next/image';

// import ContactForm from '@/components/contact-form';

export const metadata: Metadata = {
  title: 'Contact',
};

export default function Page() {

  return (
    <div className={styles.container}>
      <main className={styles.main}>
      {/* <h1 className={`${montserrat.className} sm:text-xl text-lg max-w-3xl leading-relaxed`}>
        Feel free to drop me a line at sergeylitvinenko@yahoo.com
      </h1> */}
      <div className="flex relative top-10 justify-center gap-4 grid-cols-3 grid-rows-2"> 
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className={styles.icon}>
              <Link
                href="https://www.linkedin.com/in/sergeylitvinenko/">
                <SiLinkedin size={50} />
              </Link> 
            </div>
          </div>
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className={styles.icon}>
              <Link
                href="https://github.com/sergeylitvinenko1">
                <SiGithub size={50}/>
              </Link>
            </div>
          </div>
          <div className="justify-center items-end flex flex-1 flex-row">
            <div className={styles.icon}>
              <Link
                href="https://www.goodreads.com/user/show/116411155">
                <SiGoodreads size={50}/>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex relative top-20 justify-center gap-4 grid-cols-3 grid-rows-1"> 
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