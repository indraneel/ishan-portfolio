import * as React from "react";
import Layout from "../components/Layout";

export type ContactPageProps = {
  text: string;
  attachments: any;
};

function Contact({ text, attachments }: ContactPageProps) {
  return (
    <Layout headerContent={<div>Contact</div>}>
      <div className="align-center flex w-full flex-col items-center"></div>
    </Layout>
  );
}

export default Contact;
