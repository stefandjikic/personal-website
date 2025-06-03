import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About",
};

const AboutPage = () => {
  return (
    <div className="mt-14 mx-auto max-w-3xl">
      <h1 className="text-3xl text-center font-semibold mb-16 text-cyan-100">
        About
      </h1>
      <section className="mb-10">
        <h2 className="text-2xl my-8 text-cyan-100">How it started...</h2>
        <p className="mb-2 text-gray-300/90">
          <span className="text-cyan-200/90 text-xs mr-1">[2010]</span>
          My first experience with web development occurred during my high
          school years. In my Information Technologies classes, I not only
          learned the fundamentals of computer science but also got introduced
          to HTML, CSS, and the Weebly platform. The idea of creating something
          from scratch fascinated me.
        </p>
        <p className="mb-6 text-gray-300/90">
          During that time, I was also the lead guitarist in a rock band.
          Naturally, for my final project, I chose to utilize the Weebly
          platform to create a website for the band. 🎸
        </p>
        <p className="mb-6 text-gray-300/90">
          <span className="text-cyan-200/90 text-xs mr-1">[2019]</span> Fast
          forward to after graduating from a non-technical college, I found
          myself in a job that provided no satisfaction or sense of making a
          difference. It was then that I made the decision to dive into the
          world of web development and embark on a self-teaching journey.
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl my-8 text-cyan-100">
          Path to landing first web dev job…
        </h2>
        <p className="mb-6 text-gray-300/90">
          <span className="text-cyan-200/90 text-xs mr-1">[late 2019]</span>
          In just a couple of months, I managed to land my first gig creating a
          website for a friend&apos;s architectural studio.
        </p>
        <p className="mb-6 text-gray-300/90">
          <span className="text-cyan-200/90 text-xs mr-1">[start of 2020]</span>
          Despite already having a solid knowledge of HTML/CSS and JS, I decided
          to enroll in a bootcamp to meet like-minded people and expand my
          knowledge.
        </p>
        <p className="mb-6 text-gray-300/90">
          <span className="text-cyan-200/90 text-xs mr-1">[mid 2020]</span>
          In the middle of my coding bootcamp, I landed an internship and just
          two months later, my first full-time job as a frontend developer!
        </p>
      </section>
      <section className="mb-10">
        <h2 className="text-2xl my-8 text-cyan-100">What I do now...</h2>
        <p className="mb-6 text-gray-300/90">
          <span className="text-cyan-200/90">Currently</span>, I work at{" "}
          <a
            className="underline"
            href="https://k7tech.agency/"
            target="_blank"
            rel="noreferrer"
          >
            K7 Tech{" "}
          </a>
          (acquired by{" "}
          <a
            className="underline"
            href="https://appify.digital/"
            target="_blank"
            rel="noreferrer"
          >
            Appify Digital
          </a>
          ) as a full-time frontend developer. My responsibilities include
          building web and mobile apps, as well as handling non-technical tasks
          such as client communication during the project planning phase.
        </p>
        <p className="mb-6 text-gray-300/90">
          In <span className="text-cyan-200/90">2023</span>, in addition to my
          full-time job, I was invited to be a lecturer for the Frontend
          Development course at{" "}
          <a
            className="underline"
            href="https://code.edu.rs/"
            target="_blank"
            rel="noreferrer"
          >
            Code by Comtrade
          </a>
          . This bootcamp is where I had attended as a student three years
          earlier, so it was a great honor for me to return as a teacher and
          share my knowledge with aspiring developers.
        </p>
        <p className="mb-6 text-gray-300/90">
          In <span className="text-cyan-200/90">2024</span>, alongside my
          full-time job, I started my own{" "}
          <a
            className="underline"
            href="https://youtube.com/@codewalkempire"
            target="_blank"
            rel="noreferrer"
          >
            YouTube channel
          </a>{" "}
          where I create educational content and projects for aspiring
          developers. I mainly focus on teaching React and Next.js.
        </p>
      </section>
      <section className="mb-20">
        <h2 className="text-2xl my-8 text-cyan-100">Contact</h2>
        <p className="mb-6 text-gray-300/90">
          If you have any questions or just want to say hi, feel free to reach
          out to me via email: {""}
          <a
            className=" underline"
            target="_blank"
            rel="noreferrer"
            href="mailto:stefandjikic@pm.me"
          >
            stefandjikic@pm.me
          </a>
          {""} or on social media.
        </p>
        <div className="mt-10">
          <Link
            href="/work"
            className="text-center text-cyan-100 hover:underline"
          >
            See more about my work experience
          </Link>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
