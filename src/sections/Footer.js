import React from "react";

const Footer = () => {

  return (
    <section id="footer">

      <div className="pt-24 pb-8 text-xs leading-relaxed opacity-25">
        <div>Licensed under <a href="https://github.com/AmruthPillai/ResumeOnTheWeb-Gatsby/blob/master/LICENSE">MIT</a>.</div>
        <div>&copy; {new Date().getFullYear()} Christie Hui.</div>
      </div>
    </section>
  );
};

export default Footer;
