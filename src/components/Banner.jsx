import { useState, useEffect } from "react";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(50);
  const [index, setIndex] = useState(1);
  const [fade, setFade] = useState(true);
  const toRotate = ["a Student", "Web Developer"];
  const period = 1800;

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
      setDelta(130);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner h-screen w-screen flex items-center justify-center text-center text-white px-4 relative">
      <div className=" max-w-[90%] md:max-w-[60%] lg:-mt-[40px]">
        
        <h1 className="up max-sm:mb-9 lg:mb-10 text-5xl md:text-[148px] font-semibold }">
          Hi! I'm Dev, <br />
          <span
            className={`text-green-400 transition-opacity duration-500 ease-in-out ${
              fade ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"
            }`}
          >
            {text}
          </span>
          <span className="text-gray-800 animate-ping">|</span>
        </h1>
        <h1 className="down text-blue-300 mt-5 lg:mt-24 opacity-90 text-sm md:text-xl font-semibold leading-loose">
          FRONTEND DEVELOPER | Crafting Responsive & Interactive Web
          Experiences. <br />
          Skilled in HTML, CSS, JavaScript, React JS.
        </h1>
        
        <button
          onClick={() =>
            window.scrollTo({ top: window.innerHeight, behavior: "smooth" })
          }
          className="max-sm:text-[12px] scroll absolute bottom-24 left-1/2 transform -translate-x-1/2 bg-white text-gray-900 px-5 py-3 rounded-full shadow-md hover:bg-gray-200 transition duration-300 font-bold"
        >
          Scroll Down ↓
        </button>
      </div>
    </section>
  );
};

export default Banner;
