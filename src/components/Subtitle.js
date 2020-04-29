import React from "react";
import PropTypes from "prop-types";
import Typist from "react-typist";

const Subtitle = ({ onDone }) => (
  <Typist
    startDelay={500}
    avgTypingDelay={20}
    cursor={{ show: false }}
    className="my-2 flex lg:h-32"
    onTypingDone={onDone}
  >
    <code className="w-full text-lg leading-loose">
      <div>
        <span className="text-blue-600">const</span>{" "}
        <span className="text-orange-400">Christie</span>{" "}
        <span className="text-green-600">=</span> [
      </div>
      <div className="lg:pl-8">
        <span className="text-pink-500">Developer</span>,{" "}
        <span className="text-pink-500">Musician</span>,{" "}
        <span className="text-pink-500">Tea Enthusiast</span>,{" "}
      </div>
      <div className="lg:pl-8">
        <span className="text-pink-500">anime</span>,{" "}
        <span className="text-pink-500">caffeine</span>, ...
        <span className="text-pink-500">favoriteSongs</span>,
      </div>
      <div>];</div>
    </code>
  </Typist>
);

Subtitle.propTypes = {
  onDone: PropTypes.func.isRequired,
};

export default Subtitle;
