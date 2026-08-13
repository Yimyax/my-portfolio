import { projects } from "../../data/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import { tagColor } from "../../lib/colours";

export default async function ProjectDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-2">{project.title}</h1>

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t, i) => (
          <span key={t} className="text-xs px-2 py-1 rounded text-white" style={{ backgroundColor: tagColor(i) }}>
            {t}
          </span>
        ))}
      </div>

      <p className="mb-8">{project.longDescription}</p>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-3">Core Features</h2>
        <ul className="list-disc list-inside space-y-1">
          {project.features.map((feature) => (
            <li key={feature}>{feature}</li>
          ))}
        </ul>
      </section>

      <div className="flex gap-4">
        {project.github && (
          <a href={project.github} className="text-(--ocean) underline">GitHub</a>
        )}
        {project.demo && (
          <a href={project.demo} className="text-(--ocean) underline">Live Demo</a>
        )}
      </div>
    </main>
  );
}