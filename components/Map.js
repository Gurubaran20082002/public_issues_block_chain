import React from "react";

const Map = ({
  src ="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d31440.81941064076!2d78.14512640000001!3d9.9254272!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1714488723202!5m2!1sen!2sin",
  title,
  ...props
}) => {
  return (
    <iframe
      src={src}
      width="100%"
      height="450"
      title={title && `${title} office map`}
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      {...props}
    ></iframe>
  );
};

export default Map;
