import * as React from "react";
import Layout from "../components/Layout";

function MenuItem({
  children,
  href,
}: {
  href: string;
  children: React.ReactChild[];
}) {
  return (
    <div
      onClick={() => (window.location.href = `${href}`)}
      className="align-center mt-20 flex h-24 w-2/3 cursor-pointer flex-row items-center border-2 border-slate-800 text-center hover:shadow-lg"
    >
      <div className="w-1/3 border-slate-200 text-xl font-bold">
        {children[0]}
      </div>
      <div className="w-2/3">{children[1]}</div>
    </div>
  );
}

function Home() {
  return (
    <Layout
      headerContent={
        <div>Investigative Journalist and Multimedia Producer</div>
      }
    >
      <div className="align-center flex w-full flex-col items-center">
        <MenuItem href="/about">
          <span>About me</span>
          <span>Learn more about me</span>
        </MenuItem>
        <MenuItem href="/projects">
          <span>Projects</span>
          <span>Look at my projects</span>
        </MenuItem>
        <MenuItem href="/contact">
          <span>Contact</span>
          <span>Get in touch with me</span>
        </MenuItem>
      </div>
    </Layout>
  );
}

export default Home;
