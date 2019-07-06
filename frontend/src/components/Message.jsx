import React from "react";

import "./message.css";

const Message = props => {
  return <p className="Message">{props.message}</p>;
};

export default Message;
