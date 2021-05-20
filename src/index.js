import React from "react";
import ReactDom from "react-dom";

const App = () => {
  // returnの内容が複数ある際は（）で囲む必要あり
  // JSX記法はreturnしていくhtml内容は1つのタグで囲わなけらばならない。
  // そのため下記のように<React.Fragment>で囲うと、画面に何もレンダリングされない。
  return (
    // <React.Fragment>
    //   <h1>こんにちは！</h1>
    //   <p>お元気ですか？</p>
    // </React.Fragment>
    // これでもよい。
    <>
      <h1>こんにちは！</h1>
      <p>お元気ですか？</p>
    </>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
