import "./education.css";

function Education() {
  return (
    <div className="education">
      <div className="top-content flex">
        <div className="left w-1/2">
          <img src="./education.png" alt="education" width={800} />
        </div>
        <div className="right flex flex-col items-center justify-center w-1/2">
          <h2 className="text-6xl font-bold">Education</h2>
          <p className="text-4xl">Basic Qualification and Certifcations</p>
          <div className="education-links flex items-center">
            <a
              href="https://leetcode.com/u/sauarbhlom/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="education-link"
                src="./leet-code.png"
                alt="leet-code-image"
                width={70}
              />
            </a>
            <a
              href="https://www.hackerrank.com/profile/saurabhlom1998"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="education-link"
                src="./hackerrank.png"
                alt="hackerrank-image"
                width={80}
              />
            </a>
            <a
              href="https://www.kaggle.com/saurabhlomte"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="education-link"
                src="./kaggle.png"
                alt="kaggle-image"
                width={110}
              />
            </a>
          </div>
        </div>
      </div>
      <div className="eduaction-chart">
        <div className="card">
          <div className="card-heading">
            <h2 className="text-3xl font-bold">
              Dr.Babasaheb Ambedkar Technological University
            </h2>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">
                B.Tech. in Computer Engineering
              </p>
              <span className="font-bold">2016 - 2021</span>
            </div>
          </div>
          <div className="card-content flex items-center">
            <img
              className="education-logo"
              src="./batu-logo.png"
              alt="univercity-logo"
              width={170}
            />
            <ul className="card-paragraph text-2xl">
              <li>
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA, AI etc.
              </li>
              <li>
                ⚡ Apart from this, I have done courses on Deep Learning, Data
                Science, Cloud Computing and Full Stack Development.
              </li>
              <li>
                ⚡I was selected for Merit cum Means Scholarship which is given
                to top 10% of students in college.
              </li>
            </ul>
          </div>
        </div>
        <div className="card">
          <div className="card-heading">
            <h2 className="text-3xl font-bold">Jawahar Navodaya Vidyalaya</h2>
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold">11 - 12th PCM Group</p>
              <span className="font-bold">2014 - 2016</span>
            </div>
          </div>
          <div className="card-content flex items-center">
            <img
              className="education-logo"
              src="./jnv-logo.png"
              alt="univercity-logo"
              width={170}
            />
            <ul className="card-paragraph text-2xl">
              <li>
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA, AI etc.
              </li>
              <li>
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA, AI etc.
              </li>
              <li>
                ⚡ I have studied basic software engineering subjects like DS,
                Algorithms, DBMS, OS, CA, AI etc.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <h2 className="text-center font-bold">
        Made with ❤️ by Saurabh Kishor Lomte
      </h2>
    </div>
  );
}
export default Education;
