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
      <main>
        <div className="flex flex-col items-center justify-center h-screen bg-transparent">
          {/* First rectangle */}
          <a href={"https://github.com/sergeylitvinenko1/adventofcode"} target="_blank">
            <div className="relative w-[500px] h-40 text-white items-center justify-center cursor-pointer transition-transform transform hover:scale-110 mb-4">
              <p className={`${montserrat.className} text-xl text-center md:leading-normal`}>
                  Advent of Code
              </p>

              <p className={`${montserrat.className} text-l md:leading-normal`}>
                  Advent of Code is an annual competition designed to practice solving programming puzzles. 
                  I started in 2023 and aim to finishall challenges yet it is going pretty slowly at the moment. 
                  The idea is to change programming language for each year 
              </p>
          </div>
        </a>

          {/* Second rectangle */}
          <a href={"https://retc.luiss.it/results/2022-results/"} target="_blank">
            <div className="relative w-[500px] h-40 text-white items-center justify-center cursor-pointer transition-transform transform hover:scale-110 mb-4">
              <p className={`${montserrat.className} text-xl text-center md:leading-normal`}>
                  Rotman Trading Competition
              </p>

              <p className={`${montserrat.className} text-l md:leading-normal`}>
                  Rotman European Trading Competition (RETC) is an annual one-day event that gathers students from all over Europe
                  to compete in trading across various markets (electricity, fixed income, and algorithmic equities)  
              </p>
            </div>
          </a>

          {/* Third rectangle */}
          <div className="relative w-[500px] h-40 text-white items-center justify-center cursor-pointer transition-transform transform hover:scale-110 mb-4">
            <p className={`${montserrat.className} text-xl text-center md:leading-normal`}>
                Academic Paper Replication
            </p>

            <p className={`${montserrat.className} text-l md:leading-normal`}>
            In line with my genuine interest in algorithmic trading (both non- and directional), 
            I replicate papers on various topics from time to time. I intend to publish my code as I go. Please visit my GitHub
            to check for recent updates
            </p>
          </div>

          {/* Back button */}
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
        </div>
      </main>
  );
}
