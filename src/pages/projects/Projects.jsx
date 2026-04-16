import "./project.css";

function Projects() {
  const projects = [
    {
      title: "Employee Management",
      desc: "Built using HTML, CSS, and JavaScript.",
      date: "Jan 2026",
      tech: ["/html-5.png", "/css.png", "/java-script.png"],
    },
    {
      title: "My Portfolio",
      desc: "Developed using React to create a Single Page Application (SPA).",
      date: "Feb 2026",
      tech: ["/html-5.png", "/css.png", "/java-script.png", "/react.png"],
    },
    {
      title: "Food Delivery App",
      desc: "Allows users to browse restaurants, place orders, and track deliveries in real time.",
      date: "March 2026",
      tech: ["/angular.png", "/java.png", "/mysql.png"],
    },
  ];

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
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2 className="text-3xl font-bold">{project.title}</h2>
            <p className="text-2xl">{project.desc}</p>
            <p className="text-2xl text-red-500">{project.date}</p>

            <div className="project-languages flex justify-center gap-2">
              {project.tech.map((img, i) => (
                <img key={i} src={img} alt="tech" width={50} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default Projects;
