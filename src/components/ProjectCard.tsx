export type ProjectCardProps = {
  children?: React.ReactNode;
  title?: string;
  photoUrl?: string;
  description?: string;
};

function ProjectCard({ title, photoUrl, description }: ProjectCardProps) {
  return (
    <div className="flex h-48 w-56 flex-col justify-between border-2 border-solid">
      <div className="border-b-2 text-right">Title</div>
      <div className="">Photo</div>
      <div className="border-t-2 text-right">Description</div>
    </div>
  );
}

export default ProjectCard;
