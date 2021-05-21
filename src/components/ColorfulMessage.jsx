import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const contentStyle = {
    color,
    // color: color,  //javascriptではプロパティ名とその変数名が一緒の時省略できる。
    fontSize: "18px"
  };

  return <p style={contentStyle}>{children}</p>;
};

// export default ColorfulMessage;
