import "./project.css";

function Projects() {
  return (
    <div className="projects">
      <div className="top-content flex">
        <div className="left w-1/2">
          <img src="./projects.png" alt="project-img" width={700} />
        </div>
        <div className="right flex flex-col items-center justify-center w-1/2">
          <h2 className="text-5xl font-bold">Projects</h2>
          <br />
          <p className="text-2xl">
            My projects makes use of vast variety of latest technology tools. My
            best experience is to create emmloyee management system and connect
            with APIs.
          </p>
        </div>
      </div>
      <div className="project-grid">
        <div className="project-card">
          <h2 className="text-3xl font-bold">My Portfolio</h2>
          <p className="text-2xl">
            Developed this project using React to create SPA Application.
          </p>
          <p className="text-2xl text-red-500">Created on feb 2026</p>
          <div className="project-languages flex justify-center">
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
            <img src="./react.png" alt="react-png" width={50} />
          </div>
        </div>
        <div className="project-card">
          <h2 className="text-3xl font-bold">Employee Managment</h2>
          <p className="text-2xl">
            Developed this project using only HTML, CSS and JavaScript only.
          </p>
          <p className="text-2xl text-red-500">Created on Jan 2026</p>
          <div className="project-languages flex justify-center">
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
          </div>
        </div>
        <div className="project-card">
          <h2 className="text-3xl font-bold">------</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet. khhfss sfhushf sdfhsdf sfh.
          </p>
          <p className="text-2xl text-red-500">------</p>
          <div className="project-languages flex justify-center"> 
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
          </div>
        </div>
        <div className="project-card">
          <h2 className="text-3xl font-bold">------</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet. khhfss sfhushf sdfhsdf sfh.
          </p>
          <p className="text-2xl">------</p>
          <div className="project-languages flex justify-center">
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
          </div>
        </div>
        <div className="project-card">
          <h2 className="text-3xl font-bold">------</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet. khhfss sfhushf sdfhsdf sfh.
          </p>
          <p className="text-2xl">------</p>
          <div className="project-languages flex justify-center">
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
          </div>
        </div>
        <div className="project-card">
          <h2 className="text-3xl font-bold">------</h2>
          <p className="text-2xl">
            Lorem ipsum dolor sit amet. khhfss sfhushf sdfhsdf sfh.
          </p>
          <p className="text-2xl">------</p>
          <div className="project-languages flex justify-center">
            <img src="./html-5.png" alt="html" width={50} />
            <img src="./css.png" alt="css" width={50} />
            <img src="./java-script.png" alt="javascript" width={50} />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Projects;
