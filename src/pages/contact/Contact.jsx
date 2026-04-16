import "./contact.css";

function Contact() {
  return (
    <div className="contact">
      <div className="top-content flex">
        <div className="left w-1/2">
          <img src="./contact-me.png" alt="project-img" width={450} />
        </div>
        <div className="right flex flex-col items-center justify-center w-1/2">
          <h2 className="text-5xl font-bold">Contact Me</h2>
          <br />
          <p className="text-2xl">
            I am available on almost every social media. You can message me, I
            will reply within 24 hours. I can help you with Angular, React and
            Front-end Development.
          </p>
          <div className="contact-links flex items-cente">
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
              href="https://wa.me/919881597119"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./whatsapp.png"
                alt="whatsaap-logo"
                width={50}
                title="Whatsaap"
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
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=saurabhlom1998@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="./gmail.png"
                alt="gmail-icon"
                width={50}
                title="Gmail"
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
          <a href="/saurabh resume.pdf" download>
            <button className="download-resume-button text-3xl">
              See My Resume
            </button>
          </a>
        </div>
      </div>
      <div className="address flex">
        <div className="left flex flex-col items-center justify-center w-1/2">
          <h2 className="text-5xl font-bold">My Address</h2>
          <br />
          <p className="text-2xl font-bold">
            At Post Barad, TQ Mudkhed, Dist Nanded
          </p>
          <p className="text-2xl font-bold">Pin : 431745 ( Maharashtra )</p>
          <p className="text-2xl font-bold">+91 9881597119</p>
          <button className="download-resume-button text-3xl">
            See My Location
          </button>
        </div>
        <div className="right flex justify-center w-1/2">
          <img src="./map.png" alt="map-img" width={400} />
        </div>
      </div>
      <h2 className="text-center font-bold">
        Made with ❤️ by Saurabh Kishor Lomte
      </h2>
    </div>
  );
}
export default Contact;
