import Header from "./Header";

export type LayoutProps = {
  children?: React.ReactNode;
  sidebarContent?: React.ReactNode;
  headerContent: React.ReactNode;
};

function Layout({ children, headerContent, sidebarContent }: LayoutProps) {
  return (
    <div className="flex h-screen flex-row bg-slate-100">
      <section className="hidden w-96 flex-initial border-r-[1px] border-slate-800 sm:block sm:h-full">
        {sidebarContent ? sidebarContent : <div></div>}
      </section>
      <section className="flex h-full flex-1 flex-col items-center p-20">
        <Header>{headerContent}</Header>
        <div className="mt-20 flex w-full items-center justify-center">
          {children}
        </div>
      </section>
    </div>
  );
}

export default Layout;
