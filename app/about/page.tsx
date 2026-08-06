import { skillGroups } from "../data/skills";
import { tagColor } from "../lib/colours";

export default function About() {
  return (
    <main className="max-w-3xl mx-auto px-6 py-16">
      <h1 className="text-3xl font-bold mb-8">About</h1>

      {/* Bio */}
      <section className="mb-12 flex justify">
        <p className="mb-4">
          I am a Graduate of University of Technology Sydney, studying Bachelor of Science in Games Development.
          Having practical industry experience in software automation, database development, and ERP system support, alongside a broad portfolio of independent and team-based projects spanning web applications, game development, and interactive media.
          Comfortable working independently and collaboratively, with Over five years of programming experience across Java, JavaScript, Python, SQL, PHP, C#, C++, and Swift.
          Interested in entry-level / junior roles across software development, web development, and software engineer.
        </p>
      </section>

      {/* Skills, grouped */}
      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Skills</h2>
        <div className="space-y-4">
          {skillGroups.map((group) => (
            <div key={group.category}>
              <h3 className="font-medium mb-2">{group.category}</h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill, i) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full text-sm text-white"
                    style={{ backgroundColor: tagColor(i) }}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Education */}
      <section className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Education</h2>
        <div className="border rounded-lg p-4 bg-white">
          <h3 className="text-xl font-medium">Bachelor of Science in Games Development</h3>
          <p className="text-gray-600 text-sm mb-2">
            University of Technology Sydney — Graduated May 2025
          </p>
          <p>
            Sub Majoring in Interaction Design
          </p>
        </div>
      </section>

      {/* Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-4">Experience</h2>
        <div className="border rounded-lg p-4 bg-white">
          <h3 className="text-xl font-medium">Trainee Management System Administrator</h3>
          <p className="text-gray-600 text-sm mb-2">
            KS Metal Fabrications Pty Ltd — Internship — Apr 2025 – Apr 2026
          </p>
          <ul className="list-disc p-3">
            <li> Automated payroll and timecard processing workflows using Python, SQL, HTML, and Excel, cutting manual processing time and reducing data-entry errors. </li>
            <li> Supported an end-to-end ERP migration, handling data validation and system integration to ensure a clean cutover with no data loss. </li>
            <li> Designed and wrote custom SQL queries and reporting solutions used directly by operations staff for day-to-day decision-making. </li>
            <li> Implemented a structured inventory data system with a unique naming convention, improving tracking accuracy across the warehouse. </li>
          </ul>
        </div>
      </section>
    </main>
  );
}