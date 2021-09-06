import React from "react";
const Heading = (props: any) => {
  const {title} = props;
  return (
    <h1
      {...props}
    >
     Reward Point: {title}
    </h1>
  );
};
export default Heading;
