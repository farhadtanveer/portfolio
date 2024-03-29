import React, { useEffect, useRef } from "react";
import Lottie from "lottie-react";
import email from "./email.json";
import emailjs from "@emailjs/browser";
import { FaHome, FaMobileAlt, FaRegEnvelope } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";

const Contact = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_zgl0e6g",
        "template_q5j399h",
        form.current,
        "BjOjc216wgOOLIze4"
      )
      .then(
        (result) => {
          console.log(result.text);
          form.current.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div name="contact" className="w-full  bg-[#EBEFF3]">
      <div className="max-w-screen-xl mx-auto px-8 lg:flex justify-center items-center h-full py-28">
        <div
          className="flex flex-col lg:w-1/2"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
        >
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col max-w-[600px] w-full"
          >
            <div className="pb-8">
              <p className="text-4xl font-mono font-bold inline border-b-4 border-pink-600 text-[#35404E]">
                Contact
              </p>
              <p className="text-[#35404E] py-4">
                Submit the form below or shoot me an email -
                farhadtanveer05@gmail.com
              </p>
            </div>
            <input
              className=" p-2"
              type="text"
              placeholder="Name"
              name="user_name"
              required
            />
            <input
              className="my-4 p-2 "
              type="email"
              placeholder="Email"
              name="user_email"
              required
              pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
            />
            <textarea
              className="p-2"
              name="message"
              rows="6"
              placeholder="Message"
              required
            ></textarea>
            <div className=" mt-4">
              <input
                className="btn btn-error normal-case"
                type="submit"
                value="Submit Form"
              />
            </div>
          </form>
        </div>
        <div className="lg:flex justify-center items-center lg:w-1/2">
          <Lottie animationData={email}></Lottie>
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto pb-32">
        <div className=" grid lg:grid-cols-3 gap-y-5">
          <div className=" flex flex-col items-center gap-2">
            <FaMobileAlt size={50} className=" text-red-500 mt-1"></FaMobileAlt>
            <h1 className="text-red-600 font-bold font-serif">Call Us</h1>
            <p>+491571058272</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <FaHome size={50} className=" text-red-500"></FaHome>
            <h1 className="text-red-600 font-bold font-serif">Visit Office</h1>
            <p>Duisburg, Germany</p>
          </div>
          <div className=" flex flex-col items-center gap-2">
            <FaRegEnvelope size={50} className=" text-red-500"></FaRegEnvelope>
            <h1 className="text-red-600 font-bold font-serif">Email Us</h1>
            <p>farhadtanveer05@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
