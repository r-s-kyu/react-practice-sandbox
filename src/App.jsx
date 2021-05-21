// /* eslint react-hooks/exhaustive-deps: off */
import React, { useEffect, useState } from "react";
import { ColorfulMessage } from "./components/ColorfulMessage";

const App = () => {
  console.log("最初");
  const [num, setNum] = useState(0); //[動的に変わるnum変数と、更新していく関数名], useState(初期条件)
  const [faceShowFlag, setFaceshowFlag] = useState(false);

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const onClickshowFlag = () => {
    setFaceshowFlag(!faceShowFlag);
  };

  useEffect(() => {
    if (num % 3 === 0 && num > 0) {
      faceShowFlag || setFaceshowFlag(true);
    } else {
      faceShowFlag && setFaceshowFlag(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [num]);

  return (
    <>
      <h1 style={{ color: "red" }}>こんにちは！</h1>
      <ColorfulMessage color="blue">お元気ですか？</ColorfulMessage>
      <ColorfulMessage color="pink">元気です！</ColorfulMessage>
      <button onClick={onClickCountUp}>カウントアップ</button>
      <br />
      <button onClick={onClickshowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>(´Д⊂ヽ</p>}
    </>
  );
};

export default App;
