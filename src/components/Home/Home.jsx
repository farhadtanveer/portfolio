import React, { useEffect } from "react";
import { HiArrowRight } from "react-icons/hi";
import { FaRegPaperPlane } from "react-icons/fa";
import Lottie from "lottie-react";
import web_dev from "./web-development.json";
import hi from "./hi-hand.json";
import resume from "../../data/Mohammad_Farhad_Tanveer.pdf";
import Typical from "react-typical";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <div name="home" className="w-full lg:h-screen bg-[#EBEFF3]">
      {/* container */}
      <div className=" max-w-screen-xl mx-auto px-8 lg:flex justify-center items-center h-full py-28">
        <div data-aos="fade-right">
          <div className=" flex  items-center">
            <h1 className="text-3xl sm:text-4xl font-mono font-bold text-[#35404E]">
              Mohammad Farhad Tanveer
            </h1>
            <div className=" w-20">
              <Lottie animationData={hi}></Lottie>
            </div>
          </div>
          <h2 className="text-xl text-[#DC4970] font-mono font-bold">
            <Typical
              steps={[
                "FrontEnd Developer ",
                1000,
                "React Developer ",
                1000,
                "Full Stack Developer ",
                2000,
              ]}
              loop={Infinity}
            />
          </h2>
          <p className="text-gray-500 py-4 max-w-[500px] font-mono">
            I am a passionate junior front-end developer with a keen eye for
            design and a drive to create seamless, interactive web experiences.
          </p>

          <div className=" flex gap-4">
            <button className="btn btn-error normal-case text-white">
              <a href={resume} download="resume.pdf">
                Resume
              </a>{" "}
              <FaRegPaperPlane />
            </button>

            <button className="btn btn-error normal-case text-white">
              My Works <HiArrowRight />
            </button>
          </div>
        </div>
        <div className="flex justify-center items-center lg:w-1/2">
          <Lottie animationData={web_dev} loop={true} />
        </div>
      </div>
    </div>
  );
};

export default Home;
