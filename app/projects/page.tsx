import Link from "next/link";
import { projects } from "../data/projects";
import { tagColor } from "../lib/colours";

export default function Projects() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">Projects</h1>
      <div className="space-y-6">
        {projects.map((project) => (
          <Link key={project.slug} href={`/projects/${project.slug}`}>
            <div key={project.title} className="border rounded-lg p-4 bg-white mb-5 mt-5 hover:bg-red-200">
              <h2 className="text-xl font-medium">{project.title}</h2>
              <p className="text-gray-600 mb-2">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-2">
                {project.tech.map((t, i) => (
                  <span
                    key={t}
                    className="text-xs px-2 py-1 rounded text-white"
                    style={{ backgroundColor: tagColor(i) }}
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex gap-4 text-sm">
                
              </div>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}