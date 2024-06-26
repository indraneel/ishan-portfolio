import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";
import useProjects from "../hooks/useProjects";
import { arraysOverlap } from "../utils/arrayOverlap";

export type ProjectsPageProps = {
  text: string;
  attachments: any;
};

function ProjectsFilter(
  selectedProjectTypes: string[],
  setSelectedProjectTypes: React.Dispatch<React.SetStateAction<string[]>>,
) {
  return (
    <div className="flex w-full flex-row justify-evenly text-2xl">
      {["Featured", "Audio", "Print", "TV/Film"].map((type) => {
        const isChecked = selectedProjectTypes.includes(type);
        return (
          <div key={"filter-" + type} className="flex flex-row">
            <input
              type="checkbox"
              id={`${type}`}
              value={`${type}`}
              name={`${type}`}
              onChange={() => {
                let newSelectedTypes = [];
                if (isChecked) {
                  newSelectedTypes = selectedProjectTypes.filter(
                    (t) => t !== type,
                  );
                } else {
                  newSelectedTypes = [...selectedProjectTypes, type];
                }
                setSelectedProjectTypes(newSelectedTypes);
              }}
              checked={isChecked}
            />
            <label className="ml-2" htmlFor={`${type}`}>
              {type}
            </label>
          </div>
        );
      })}
    </div>
  );
}

function Projects() {
  const projects = useProjects();
  const [selectedProjectTypes, setSelectedProjectTypes] = useState<string[]>(
    [],
  );

  return (
    <Layout sidebarContent={<></>} headerContent={<div>Projects</div>}>
      <div className="align-center flex w-full flex-col items-center">
        {ProjectsFilter(selectedProjectTypes, setSelectedProjectTypes)}
        <section className="mt-10 inline-grid w-3/4 auto-rows-auto grid-cols-2 gap-8">
          {projects
            .filter(
              (pj) =>
                selectedProjectTypes.length === 0 ||
                arraysOverlap(pj.Type as string[], selectedProjectTypes),
            )
            .sort((a, b) => {
              const aIsFeatured = a.Type === "Featured";
              const bIsFeatured = b.Type === "Featured";
              if (aIsFeatured && !bIsFeatured) return -1;
              if (!aIsFeatured && bIsFeatured) return 1;
              return 0;
            })
            .map((pj: any) => (
              <ProjectCard
                key={`project-card-${pj.Title}`}
                project={pj}
                title={pj.Title}
                description={pj.Description}
              />
            ))}
        </section>
      </div>
    </Layout>
  );
}

export default Projects;
