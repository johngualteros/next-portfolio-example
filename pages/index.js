import Layout from "../components/Layout";
import Image from "next/image";
import { skills, experiences, projects } from "../profile";
import Link from "next/link";
export default function Home() {
  return (
    <Layout title="Home">
      <div className="grid grid-cols-3 w-full h-68 bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-lg shadow-pink-400 shadow-lg">
        <div className="w-full bg-zinc-900 p-6">
          <Image
            src="/logo_dev.jpg"
            alt="Image Developer"
            layout="responsive"
            width={80}
            height={60}
          />
        </div>
        <div className=" w-full bg-zinc-900 col-span-2 p-6">
          <h1 className="text-3xl font-bold text-center">John Gualteros</h1>
          <p className="text-justify my-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde
            repellendus animi officia nulla quia dolorum quis quae nobis,
            mollitia natus qui! Ratione itaque veritatis maiores dolor at.
            Voluptate, exercitationem. Similique voluptatum tempore doloremque
            eius maxime.
          </p>
          <a href="mailto:gualterosjohn40@gmail.com">
            <button className="bg-zinc-700 text-purple-700 font-bold py-2 px-4 rounded-md shadow-md my-6">
              Contact Me
            </button>
          </a>
        </div>
      </div>
      {/* Second Section */}
      <section className="grid grid-cols-3 w-full h-auto bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-lg shadow-pink-700 shadow-lg gap-2 mt-12">
        <div className="bg-zinc-900 p-6">
          <h1 className="text-3xl font-bold text-center">Skills</h1>
          {skills.map((skill) => (
            <>
              <h1 className="mt-4">{skill.name}</h1>
              <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-4">
                <div
                  className="bg-gradient-to-r from-violet-500 to-fuchsia-500 h-2.5 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
            </>
          ))}
        </div>
        <div className="col-span-2 bg-zinc-900 p-6">
          <h1 className="text-3xl font-bold text-center">Experience</h1>
          <ul className="list-disc">
            {experiences.map((experience, index) => (
              <li key={index} className="my-2">
                <h1 className="text-2xl font-bold">{experience.name}</h1>
                <h2>
                  {experience.from} -{" "}
                  {!experience.to ? "Actual" : experience.to}
                </h2>
                <p className="text-justify">{experience.description}</p>
              </li>
            ))}
          </ul>
          <a
            href="#"
            className="bg-purple-300 py-2 px-4 shadow-lg rounded-lg mt-10"
          >
            View More
          </a>
        </div>
      </section>
      {/* Portofolio */}
      <section className="grid grid-cols-1 w-full h-auto bg-gradient-to-r p-[5px] from-[#7928ca] to-[#ff0080] rounded-lg shadow-purple-700 shadow-lg mt-12">
        <div className="grid grid-cols-3 gap-4 bg-zinc-900 p-6">
          <h1 className="text-center text-2xl font-bold col-span-3">
            Porfolio
          </h1>
          {projects.map((project, index) => (
            <div className="rounded-md shadow-xl bg-zinc-800 p-2" key={index}>
              <Image
                src="/portfolio.png"
                layout="responsive"
                width={100}
                height={50}
                alt="project"
                className="overflow-hidden duration-500 hover:scale-150 hover:duration-500"
              />
              <h1 className="text-center text-2xl font-bold">Project 1</h1>
              <p className="mb-4">desc</p>
              <a
                href="#!"
                className="px-4 bg-blue-600 font-bold rounded-md hover:bg-blue-800"
              >
                Know More
              </a>
            </div>
          ))}
        </div>
      </section>
      <div className="w-full flex justify-center p-2">
        <Link href="/portfolio">
          <a className="bg-purple-700 py-2 px-4 shadow-lg rounded-lg mt-10 m-auto">
            See more Projects
          </a>
        </Link>
      </div>
    </Layout>
  );
}
