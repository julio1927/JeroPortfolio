import React from "react";

function AboutPage() {
  const skills = [
    "Javascript (ES6+)",
    "HTML & CSS",
    "React JS",
    "Node JS",
    "Shopify",
    "Firebase"
  ];

  return (
    <div id="AboutPage">
      <h2>About Me</h2>
      <div>
        <p>
          Hello! I'm Julio, a software developer based in Kitchener, ON who
          enjoys building things on the internet.
        </p>
        <p>
          I strive to create clean and efficient code, with a good user
          experience, which in turn helps me develop exceptional websites and
          web apps.
        </p>

        <p>
          I recently graduated from{" "}
          <a href="https://www.conestogac.on.ca">Conestoga College</a>, where I
          was introduced to various technologies, concepts and methods. I also
          had the opportunity to work on various semester long projects with
          other software developers.
        </p>

        <p>Here are a few technologies I've been working with recently:</p>
      </div>

      {/* Skills List */}
      <ul>{skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}</ul>
    </div>
  );
}

export default AboutPage;
