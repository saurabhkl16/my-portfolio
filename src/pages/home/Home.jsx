import "./home.css";

function Home() {
  return (
    <div className="home">
      <div className="my-info flex">
        <div className="left flex flex-col justify-start items-center w-1/2">
          <h2 className="text-5xl font-bold">Saurabh Lomte</h2>
          <span className="profession text-3xl font-bold">
            ( Java Full-Stack Developer )
          </span>
          <p className="about-me text-2xl">
            Software Developer with 3+ years of experience in developing
            scalable and high-performance full-stack web applications using
            Java, Spring Boot, SQL, Angular, TypeScript, and JavaScript.
            Experienced in building RESTful APIs, implementing backend business
            logic, database integration, and developing responsive user
            interfaces. Skilled in Spring Boot, Hibernate/JPA, MySQL, Angular
            and reusable component architecture.
          </p>
          <div className="socail-links flex items-cente">
            <a
              href="https://www.linkedin.com/in/saurabh-lomte-188a68216/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./linked-in.png"
                alt="linked-in"
                width={50}
                title="Linked-In"
              />
            </a>
            <a
              href="https://github.com/saurabhkl16"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="./github.png" alt="github" width={50} title="Github" />
            </a>
            <a
              href="https://instagram.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./instagram.png"
                alt="instagram"
                width={50}
                title="Instagram"
              />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img
                src="./facebook.png"
                alt="facebook"
                width={50}
                title="Facebook"
              />
            </a>
          </div>
        </div>
        <div className="right w-1/2">
          <img
            src="./my-photo.png"
            alt="my-photo"
            className="my-photo"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
      <h2 className="what-i-do-heading text-6xl font-bold text-center">
        What I Do ?
      </h2>
      <div className="what-i-do flex">
        <div className="flex justify-center w-1/2">
          <img src="./my-work.jpg" alt="" />
        </div>
        <div className="right w-1/2">
          <h2 className="text-5xl text-center font-bold">
            Frontend Development
          </h2>
          <div className="coding flex justify-center">
            <img className="tech-stack" src="./html-5.png" alt="html" />
            <img className="tech-stack" src="./css.png" alt="html" />
            <img className="tech-stack" src="./java-script.png" alt="html" />
            <img className="tech-stack" src="./react.png" alt="html" />
            <img className="tech-stack" src="./angular.png" alt="html" />
          </div>
          <ul className="about-tech-stack text-2xl">
            <li>
              ⚡ Build responsive and modern user interfaces using HTML, CSS,
              and JavaScript.
            </li>
            <li>
              ⚡ Using modern frameworks / Librarry to build dynamic and
              scalable web applications (Angular & React).
            </li>
            <li>
              ⚡ Optimize performance and improve user experience across
              devices.
            </li>
          </ul>
        </div>
      </div>
      <div className="what-i-do flex">
        <div className="right w-1/2">
          <h2 className="text-5xl text-center font-bold">
            Backend Development
          </h2>
          <div className="coding flex justify-center">
            <img className="tech-stack" src="./java.png" alt="html" />
            <img className="tech-stack" src="./mysql.png" alt="html" />
            <img className="tech-stack" src="./springboot.png" alt="html" />
          </div>
          <ul className="about-tech-stack text-2xl">
            <li>
              ⚡ Design and implement secure, RESTful APIs using Java, Spring
              Boot, and Spring Web.
            </li>
            <li>
              ⚡ Build scalable endpoints with secure authentication, request
              validation, and optimized JSON data handling.
            </li>
            <li>
              ⚡ Integrate seamless CRUD operations with MySQL databases using
              Hibernate / Spring Data JPA.
            </li>
          </ul>
        </div>
        <div className="flex justify-center w-1/2">
          <img src="./backend_tech.png" alt="backend tech" />
        </div>
      </div>
      <h2 className="text-center font-bold">
        Made with ❤️ by Saurabh Kishor Lomte
      </h2>
    </div>
  );
}
export default Home;
