import styles from '@/app/ui/home.module.css';
import { montserrat } from '@/app/ui/fonts';
import Image from 'next/image';
import { Metadata } from 'next';

import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About',
};

export default function Page() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h1 className={`${montserrat.className} sm:text-xl text-lg max-w-3xl leading-relaxed`}>
            Sergey Litvinenko is currently pursuing his master&apos;s degree in Quantitative Finance at the Vienna University of Economics and Business. 
            Previously, he obtained his undergraduate double degree in Mathematics and Economics at the American University in Bulgaria, 
            receiving Outstanding Achievement in Economics award. During his studies, he completed an off-cycle internship at the asset management firm Expat Capital 
            and participated in the 2020 CFA Institute Research Challenge. Upon graduation, he joined the Deal Advisory department of KPMG Ukraine to work on valuation projects and M&A transactions, 
            gaining valuable analytical and research skills. While obtaining his gradute degree, Sergey worked part-time at the Institutional Clients East Department of RBI AG in Vienna, 
            supporting bank and non-bank FIs across wide range of services. In 2021, Sergey passed CFA Exam Level II and is planning to enroll for Level III in 2025.
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

// export default function Page() {
//   return (
//       <main>
//         <div className="flex flex-col items-center justify-center h-screen bg-transparent">
//           {/* First rectangle */}
//           <div className="relative w-[500px] h-41 text-white items-center justify-center cursor-pointer transition-transform transform hover:scale-110 mb-4">
//             <p className={`${montserrat.className} text-xl text-center md:leading-normal`}>
//                 About
//             </p>

//             <p className={`${montserrat.className} text-l md:leading-normal`}>
//               Sergey Litvinenko is currently pursuing his M.Sc. degree in Quantitative Finance at the Vienna University of Economics and Business. 
//               Previously, he obtained his undergraduate double degree in Mathematics and Economics at the American University in Bulgaria, 
//               receiving Outstanding Achievement in Economics award. During his studies, he completed an off-cycle internship at the asset management firm Expat Capital 
//               and participated in the 2020 CFA Institute Research Challenge. Upon graduation, he joined the Deal Advisory department of KPMG Ukraine to work on valuation projects and M&A transactions, 
//               gaining valuable analytical and research skills. While obtaining his gradute degree, Sergey worked part-time at the Institutional Clients East Department of RBI AG in Vienna, 
//               supporting bank and non-bank FIs across wide range of services. In 2021, Sergey passed CFA Exam Level II and is planning to enroll for Level III in 2025.
//             </p>
//         </div>

//           {/* Back button */}
//           <div className="flex relative top-5 justify-center gap-4 grid-cols-3 grid-rows-1"> 
//               <div className="justify-center items-end flex flex-1 flex-row">
//                 <div className="text-center">
//                   <Link
//                     href="/"
//                     className={`${montserrat.className} flex items-center gap-5 self-start rounded-lg bg-yellow-900	px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-yellow-600 md:text-base`}>
//                     <span>Back</span>
//                   </Link>
//                 </div>
//               </div>
//             </div>
//         </div>
//       </main>
//   );
// }