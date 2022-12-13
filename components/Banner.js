import { useState, useEffect } from "react";
import {
  resume_pdf,
  github_link,
  linkedIn_link,
  mail_link,
} from "../data/data";
import { AiFillLinkedin, AiFillGithub, AiFillMail } from "react-icons/ai";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(200 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    "Software Engineer",
    "Web Developer",
    "App Developer",
    "Software Developer",
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="h-screen flex justify-center items-center -mt-8">
      <>
        <div className="text-center">
          <h2 className="text-4xl text-cyan-500 font-medium md:text-7xl lg:text-7xl font-mono">
            Anirudh Mitra
          </h2>
          <div className="h-10 mb-3 mt-3">
            <h3
              className="text-xl font-medium font-mono py-2 md:text-3xl dark:text-white"
              dataPeriod="1000"
              data-rotate={toRotate}
            >
              <span className="wrap text-cyan-500">{text}</span>
            </h3>
          </div>
          <p className="text-sm py-5 font-light leading-8 md:text-xl lg:text-xl max-w-xl mx-auto text-cyan-500">
            Passionate about changing the world with technology.
          </p>
          <div className="flex text-4xl gap-x-4 justify-center my-4 mb-8">
            <AiFillGithub
              onClick={() => {
                window.open(github_link, "_blank", "noopener,noreferrer");
              }}
              className="text-cyan-500 hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            />
            <AiFillLinkedin
              onClick={() => {
                window.open(linkedIn_link, "_blank", "noopener,noreferrer");
              }}
              className="text-cyan-500 hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            />
            <AiFillMail
              onClick={() => {
                window.open(mail_link, "_blank", "noopener,noreferrer");
              }}
              className="text-cyan-500 hover:transition duration-300 ease-in-out hover:scale-125 cursor-pointer"
            />
          </div>
          <button
            onClick={() => {
              window.open(resume_pdf, "_blank", "noopener,noreferrer");
            }}
            class="bg-transparent hover:transition duration-300 ease-in-out hover:scale-125 bg-transparent hover:bg-gradient-to-r from-blue-500 to-blue-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:transition duration-800 border-blue-500 rounded-xl mx-3"
          >
            Download Resume
          </button>
        </div>
      </>
    </section>
  );
}
