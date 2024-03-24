import MIME_TO_EXTENSION from "../utils/mimeTypeExtension";

export type ProjectCardProps = {
  children?: React.ReactNode;
  project?: any;
  title?: string;
  photoUrl?: string;
  description?: string;
};

function ProjectCard({ project, title, description }: ProjectCardProps) {
  console.log(project);
  const imageUrl = `${project.Attachments[0].id}.${MIME_TO_EXTENSION[project.Attachments[0].type]}`;
  return (
    <div className="flex cursor-pointer flex-col justify-between border-2 border-solid hover:shadow-md">
      <a href={`${project.Link}`} target="_blank" rel="noreferrer">
        <div className="border-b-2 text-lg">{title}</div>

        <img src={`/${imageUrl}`} />
        <div className="text-md border-t-2">{description}</div>
      </a>
    </div>
  );
}

export default ProjectCard;
