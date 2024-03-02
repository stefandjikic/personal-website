import Image from "next/image";
import { Metadata } from "next";
import k7techImg from "@/app/assets/images/k7_logo.png";
import codeImg from "@/app/assets/images/code_logo.png";

export const metadata: Metadata = {
  title: "Work",
  description: "A summary of my work experience.",
};

const WorkPage = () => {
  return (
    <div className="mt-14 ">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        Work Experience
      </h1>
      <section className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-between items-center mb-10">
          <div className="col-span-2">
            <div className="mb-6 flex gap-4 items-center">
              <div className="flex sm:hidden justify-center items-center w-[60px] h-[60px] rounded-md backdrop-blur-sm p-2 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
                <a
                  href="https://k7tech.agency/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Image
                    src={k7techImg}
                    alt="K7 Tech"
                    className="rounded-full group-hover:scale-105 transition duration-200"
                    width={60}
                    height={60}
                  />
                </a>
              </div>
              <div>
                <h2 className="text-cyan-50/70 text-sm">Frontend Developer</h2>
                <h3 className="text-2xl font-bold text-cyan-100">K7 Tech</h3>
              </div>
            </div>

            <p className="leading-7 font-light">
              At K7Tech, I work as a full-time frontend developer, actively
              participating in all stages of web and mobile app development. I
              collaborate closely with clients during the project planning phase
              to understand their needs and expectations. Using my expertise in
              React, Next.js, and React Native, I build high-quality web and
              mobile apps.
            </p>
          </div>
          <div className="hidden sm:flex justify-center items-center w-[200px] h-[200px] ml-auto rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
            <a href="https://k7tech.agency/" target="_blank" rel="noreferrer">
              <Image
                src={k7techImg}
                alt="K7 Tech"
                className="rounded-md group-hover:scale-105 transition duration-200"
                width={200}
                height={200}
              />
            </a>
          </div>
        </div>
      </section>

      <section className="mb-20">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 justify-between items-center mb-10">
          <div className="col-span-2">
            <div className="mb-6 flex gap-4 items-center">
              <div className="flex sm:hidden justify-center items-center w-[60px] h-[60px] rounded-md backdrop-blur-sm p-2 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
                <a href="https://code.edu.rs/" target="_blank" rel="noreferrer">
                  <Image
                    src={codeImg}
                    alt="Code by Comtrade"
                    className="rounded-full group-hover:scale-105 transition duration-200"
                    width={40}
                    height={40}
                  />
                </a>
              </div>
              <div>
                <h2 className="text-cyan-50/70 text-sm">
                  Frontend Development Course Lecturer
                </h2>
                <h3 className="text-2xl font-bold text-cyan-100">
                  Code by Comtrade
                </h3>
              </div>
            </div>
            <p className="leading-7 font-light">
              At Code By Comtrade, I had the privilege of sharing my knowledge
              and expertise with aspiring developers. As a course lecturer, I
              organized and taught courses on JavaScript, React, HTML, and CSS.
              I actively participated in student grading and had the
              responsibility of evaluating their final exams and projects.
            </p>
          </div>
          <div className="hidden sm:flex  justify-center items-center w-[200px] h-[200px] ml-auto rounded-md backdrop-blur-sm p-4 bg-gradient-to-r from-indigo-600/20 to-cyan-800/20 hover:bg-gradient-to-l border border-cyan-300/10 hover:border-cyan-300/20 group transition duration-200">
            <a href="https://code.edu.rs/" target="_blank" rel="noreferrer">
              <Image
                src={codeImg}
                alt="Code by Comtrade"
                className="rounded-full group-hover:scale-105 transition duration-200"
                width={150}
                height={50}
              />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WorkPage;
