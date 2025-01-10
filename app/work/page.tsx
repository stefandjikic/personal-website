import { Metadata } from "next";
import k7techImg from "@/app/assets/images/k7_logo.png";
import codeImg from "@/app/assets/images/code_logo.png";
import rawfishImg from "@/app/assets/images/rawfish_logo.png";
import WorkSection from "../_components/work/WorkSection";

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
      <WorkSection
        company="Rawfish"
        role="React Native Developer"
        type="Contract"
        image={rawfishImg}
        imageAlt="Rawfish"
        link="https://rawfish.com/en/"
        imgSize={40}
        mobileImgWidth={150}
        mobileImgHeight={50}
      >
        <p className="leading-7 font-light">
          Participating in development of the Amazon Fire TV app for{" "}
          <a
            href="https://mediasetinfinity.mediaset.it/"
            target="_blank"
            rel="noreferrer"
            className="font-semibold"
          >
            Mediaset.
          </a>
        </p>
      </WorkSection>
      <WorkSection
        company="K7 Tech"
        role="Frontend Developer"
        type="Full Time"
        image={k7techImg}
        imageAlt="K7 Tech"
        link="https://k7tech.agency/"
        imgSize={60}
        mobileImgWidth={200}
        mobileImgHeight={200}
      >
        <p className="leading-7 font-light">
          At K7Tech, I work as a full-time frontend developer, actively
          participating in all stages of web and mobile app development. I
          collaborate closely with clients during the project planning phase to
          understand their needs and expectations. Using my expertise in React,
          Next.js, and React Native, I build high-quality web and mobile apps.
        </p>
      </WorkSection>
      <WorkSection
        company="Code by Comtrade"
        role="Frontend Development Course Lecturer"
        type="Contract"
        image={codeImg}
        imageAlt="Code by Comtrade"
        link="https://code.edu.rs/"
        imgSize={40}
        imgRounded
        mobileImgWidth={150}
        mobileImgHeight={50}
      >
        <p className="leading-7 font-light">
          At Code By Comtrade, I had the privilege of sharing my knowledge and
          expertise with aspiring developers. As a course lecturer, I organized
          and taught courses on JavaScript, React, HTML, and CSS. I actively
          participated in student grading and had the responsibility of
          evaluating their final exams and projects.
        </p>
      </WorkSection>
    </div>
  );
};

export default WorkPage;
