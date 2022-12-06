import { useState, useEffect } from "react";
import { resume_pdf } from "../data/data";

export default function Banner() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Software Engineer","Web Developer","App Developer", "Software Developer"];
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
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section>
      <>
        <div className="text-center px-4 h-screen">
          <h2 className="text-4xl py-2 text-teal-500 font-semibold md:text-6xl">
            Hi, I'm Anirudh Mitra
          </h2>
          <div className="h-10 mb-3 mt-3">
          <h3
            className="text-2xl font-medium font-mono py-2 md:text-3xl dark:text-white"
            dataPeriod="1000"
            data-rotate={toRotate}
          >
            <span className="wrap">{text}</span>
          </h3>
          </div>
          <p className="text-md py-5 font-light leading-8 md:text-xl max-w-xl mx-auto dark:text-white">
            I design and code beautifully simple things, and I love what I do.
          </p>
          <button
              onClick={() => {
                window.open(resume_pdf,'_blank','noopener,noreferrer')
              }}
              class="bg-transparent hover:bg-cyan-500 text-blue-500 font-semibold hover:text-white py-2 px-4 border-2 border-blue-500 hover:border-transparent rounded-3xl mt-5"
            >
              Download Resume
            </button>
        </div>
      </>
    </section>
  );
}
