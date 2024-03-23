import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import About from "./pages/About";
import Contact from "./pages/Contact";
import usePages from "./hooks/usePages";

function App() {
  const pages = usePages();

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/projects"
          element={
            <Projects
            // text={pages.filter((p) => p.Page === "Projects")[0].Text}
            // attachments={
            //   pages.filter((p) => p.Page === "Projects")[0].Attachments
            // }
            />
          }
        />
        <Route
          path="/about"
          element={
            <About
              text={pages.filter((p) => p.Page === "About")[0].Text}
              attachments={
                pages.filter((p) => p.Page === "About")[0].Attachments
              }
            />
          }
        />
        <Route
          path="/contact"
          element={
            <Contact
            // text={pages.filter((p) => p.Page === "Contact Me")[0].Text}
            // attachments={
            //   pages.filter((p) => p.Page === "Contact Me")[0].Attachments
            // }
            />
          }
        />
        <Route />
      </Routes>
    </>
  );
}

export default App;
