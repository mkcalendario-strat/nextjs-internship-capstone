import { RecentProject } from "@/types/projects";
import Link from "next/link";
import ProjectCard from "./project-card";

interface RecentProjectsProps {
  projects: RecentProject[];
}

export function RecentProjects({ projects }: RecentProjectsProps) {
  return (
    <div className="border-primary/20 rounded-sm border-2 bg-white p-6 dark:bg-neutral-800">
      <div className="mb-6 flex items-center justify-between">
        <h3 className="text-lg font-semibold text-neutral-800 dark:text-neutral-200">
          Recent Projects
        </h3>
        <Link
          href="/projects"
          className="text-sm font-medium text-neutral-800 dark:text-neutral-200">
          View all
        </Link>
      </div>

      <div className="space-y-3">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            id={project.id}
            name={project.name}
            description={project.description}
            dueDate={project.dueDate}
            members={project.members}
            progress={project.progress}
          />
        ))}
      </div>
    </div>
  );
}
