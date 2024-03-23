import Layout from "../components/Layout";
import MIME_TO_EXTENSION from "../utils/mimeTypeExtension";

export type AboutPageProps = {
  text: string;
  attachments: any;
};

function About({ text, attachments }: AboutPageProps) {
  const sidebarUrl = `${attachments[0].id}.${MIME_TO_EXTENSION[attachments[0].type]}`;
  return (
    <Layout
      headerContent={<div>About</div>}
      sidebarContent={
        <div
          className="h-full bg-cover bg-center"
          style={{
            backgroundImage: `url(/${sidebarUrl})`,
          }}
        ></div>
      }
    >
      <div className="align-center flex w-full flex-col items-center">
        {text}
      </div>
    </Layout>
  );
}

export default About;
