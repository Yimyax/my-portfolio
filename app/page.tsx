import Link from "next/link";
import { projects } from "./data/projects";
import { highlightSkills } from "./data/skills";
import { tagColor } from "./lib/colours";

export default function Home() {
  const featuredProjects = projects.filter((p) => p.highlight);

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      {/* Intro */}
      <section className="bg-linear-to-b from-(--sky) to-white pt-16 pb-20 -mx-6 px-6 relative mb-6">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-(family-name:--font-display) text-4xl font-bold text-(--ocean) mb-2">
            Joshua Isaraela
          </h1>
          <p className="text-lg text-(--ink)/80 mb-4">
            Computer Science graduate | Front-end / Back-end / Software Developer / Games Developer
          </p>
          <p className="mb-4">
            Graduate of UTS, having experiences & skills in web development, software development and games development.
          </p>
          <div className="flex gap-4">
            <a href="https://www.linkedin.com/in/joshua-isaraela-23457a319/" className="text-(--ocean) underline">LinkedIn</a>
            <a href="https://github.com/Yimyax" className="text-(--ocean) underline">GitHub</a>
            <a href="https://yimyax.itch.io/" className="text-(--ocean) underline">Itch</a>
          </div>
        </div>
        {/* Wave divider */}
        <svg className="absolute bottom-0 left-0 w-full" viewBox="0 0 1440 60" preserveAspectRatio="none">
          <path fill="white" d="M0,32 C360,60 1080,0 1440,32 L1440,60 L0,60 Z" />
        </svg>
      </section>

      {/* Skills - highlights only */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="flex flex-wrap gap-2">
          {highlightSkills.map((skill, i) => (
            <span
              key={skill}
              className="px-3 py-1 rounded-full text-sm text-white"
              style={{ backgroundColor: tagColor(i) }}
            >
              {skill}
            </span>
          ))}
        </div>
        <a href="/about" className="text-sm underline mt-3 inline-block">
          See full skill list →
        </a>
      </section>

      {/* Projects - highlights only */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Projects</h2>
        <div className="space-y-6">
          {featuredProjects.map((project) => (
            <Link key ={project.slug} href={`/projects/${project.slug}`}>
              <div key={project.title} className="bg-white border border-(--ocean)/20 rounded-lg p-4 shadow-sm mb-5 mt-5 hover:bg-red-200">
                <h3 className="text-xl font-medium">{project.title}</h3>
                <p className="text-gray-600 mb-2">{project.description}</p>
                <div className="flex gap-4 text-sm">
                </div>
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="text-sm underline mt-3 inline-block">
          See all projects →
        </Link>
      </section>
    </main>
  );
}