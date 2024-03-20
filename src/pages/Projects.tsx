import * as React from "react";
import { useState } from "react";
import Layout from "../components/Layout";
import ProjectCard from "../components/ProjectCard";

function ProjectsFilter() {
  return (
    <div className="flex w-full flex-row justify-evenly text-2xl">
      <div className="flex flex-row">
        <input type="checkbox" id="Featured" name="Featured" checked />
        <label htmlFor="Featured">Featured</label>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" id="Audio" name="Audio" checked />
        <label htmlFor="Audio">Audio</label>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" id="Print" name="Print" checked />
        <label htmlFor="Print">Print</label>
      </div>
      <div className="flex flex-row">
        <input type="checkbox" id="TV/Film" name="TV/Film" checked />
        <label htmlFor="TV/Film">TV/Film</label>
      </div>
    </div>
  );
}

function Projects() {
  const [selectedProjectTypes, setSelectedProjectTypes] = useState();

  return (
    <Layout sidebarContent={<></>} headerContent={<div>Projects</div>}>
      <div className="align-center flex w-full flex-col items-center">
        {ProjectsFilter()}
        <section className="inline-grid auto-rows-auto grid-cols-2 gap-4">
          {[1, 2, 3, 4, 5, 6].map((pj) => (
            <ProjectCard />
          ))}
        </section>
      </div>
    </Layout>
  );
}

export default Projects;
