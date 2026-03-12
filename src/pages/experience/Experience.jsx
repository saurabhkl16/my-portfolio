import "./experience.css";

function Experience() {
  return (
    <div className="experience">
      <div className="top-content flex">
        <div className="left w-1/2">
          <img src="./Experience.png" alt="experience" width={800} />
        </div>
        <div className="right flex flex-col items-center justify-center w-1/2">
          <h2 className="text-6xl font-bold">Experience</h2>
          <p className="text-4xl">Work, Internship and Volunteership</p>
          <br />
          <p className="text-2xl">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod
            aliquid accusantium voluptatem fuga nulla unde!
          </p>
        </div>
      </div>
      <div className="experience-section">
        <div className="card flex">
          <div className="card-logo w-1/8">
            <img
              className="company-logo"
              src="./husys-logo.png"
              alt="company-logo"
              width={150}
            />
          </div>
          <div className="job-info w-7/8">
            <div className="card-top-section flex justify-between">
              <div className="left">
                <h3 className="text-3xl font-bold">Frontend Developer</h3>
                <p className="text-2xl">Husys Consulting LTD 2.O</p>
              </div>
              <div className="right">
                <p className="font-bold">May 2023 - Dec 2024</p>
                <p>Hyderabad / WFH</p>
              </div>
            </div>
            <div className="card-bottom-section">
              <p className="text-2xl">
                I worked as a front-end developer for one year with the loan
                management system team. I am looking for a front-end or
                full-stack developer role. I have experience with the angular
                framework, Javascript, Typescript, Java, and Bootstrap.
              </p>
            </div>
          </div>
        </div>
        <div className="card flex">
          <div className="card-logo w-1/8">
            <img
              className="company-logo"
              src="./trustt.png"
              alt="company-logo"
              width={100}
            />
          </div>
          <div className="job-info w-7/8">
            <div className="card-top-section flex justify-between">
              <div className="left">
                <h3 className="text-3xl font-bold">SDE-1</h3>
                <p className="text-2xl">Novopay / Trustt</p>
              </div>
              <div className="right">
                <p className="font-bold">Jan 2022 - Mar 2023</p>
                <p>Bangalore</p>
              </div>
            </div>
            <div className="card-bottom-section">
              <p className="text-2xl">
                Worked as a software developer with the Loan Management system
                team. Collaborated with HDFC Bank to develop and optimize loan
                products, ensuring seamless functionality and alignment with
                client requirements. Designed web applications using Angular 8 &
                13, Typescript, Javascript, and Bootstrap with API integration.
                Before starting development, multiple collaborations with the
                graphic designer and Cooperation with the back-end developer
                were needed to build RESTful APIs. Updated the Novopay web app
                and website with the latest technologies.
              </p>
            </div>
          </div>
        </div>
        <div className="card flex">
          <div className="card-logo w-1/8">
            <img
              className="company-logo"
              src="./neton-school-logo.png"
              alt="company-logo"
              width={100}
            />
          </div>
          <div className="job-info w-7/8">
            <div className="card-top-section flex justify-between">
              <div className="left">
                <h3 className="text-3xl font-bold">
                  Full Stack Development Bootcamp
                </h3>
                <p className="text-2xl">Newton School</p>
              </div>
              <div className="right">
                <p className="font-bold">July 2021 - Jan 2022</p>
                <p>Bangalore</p>
              </div>
            </div>
            <div className="card-bottom-section">
              <p className="text-2xl">
                Completed an intensive Full Stack Web Development program from
                Newton School, where I gained strong foundations in modern web
                technologies including HTML, CSS, JavaScript, React, Node.js,
                and databases. Built multiple real-world projects focusing on
                frontend development, REST APIs, and scalable application
                architecture. Developed problem-solving skills through data
                structures and algorithms, and collaborated on projects using
                Git and modern development workflows.
              </p>
            </div>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold">
        Made with ❤️ by Saurabh Kishor Lomte
      </h2>
    </div>
  );
}
export default Experience;
