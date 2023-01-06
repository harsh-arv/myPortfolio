import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl">
          I'm a software developer who loves coding. Although I graduated in
          <b> Electrical and Communication Engineering</b>, computers have been my
          passion from the start. The same passion has led me to choose the IT
          industry after graduation. <br/>
          Learning Java and C++ during my academic
          career has increased my interest in programming. I started exploring
          the web more, and thus, my enthusiasm to create web applications has
          increased. I started developing blogs and web sites with online, free
          tools.<br/>
           With the same passion, I have started my career at <b>WIPRO</b> as a 
          <b> Product Engineer</b>, primarily working on Java Web Application
          Development. I learned new technologies and even got a chance to try
          out new things from the regular development.<br/>
          I truly believe in the
          quotes <b>"Wherever you go, go with all your heart", "Never give up,"
          and "Be positive." I believe enthusiasm to try new things is crucial
          for any Developer to advance in their career. </b><br/>
          The same enthusiasm has
          led me to progressively grow my career.
        </p>

        <br />
      </div>
    </div>
  );
};

export default About;
