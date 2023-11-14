import { useEffect, useState } from "react";

export default function Home() {
  const [firstNum, setFirstNum] = useState();
  const [secondNum, setSecondNum] = useState();
  const [totalSum, setTotalSum] = useState();
  const [displayAns, setDisplayAns] = useState(false);

  function handleClick() {
    setTotalSum(+firstNum + +secondNum);
    setDisplayAns(true);
  }

  useEffect(() => {
    setDisplayAns(false);
  }, [firstNum, secondNum]);

  return (
    <div style={{ margin: "48px auto", width: "fit-content" }}>
      <h1>Adding Two Numbers</h1>
      <div style={{ marginTop: "16px" }}>
        <div>
          <input
            onChange={(e) => setFirstNum(e.target.value)}
            placeholder="First Number"
            type="number"
            style={{ padding: "8px" }}
          />
        </div>
        <div style={{ marginTop: "8px" }}>
          <input
            onChange={(e) => setSecondNum(e.target.value)}
            placeholder="Second Number"
            type="number"
            style={{ padding: "8px" }}
          />
        </div>
      </div>
      <div style={{ marginTop: "16px" }}>
        <button onClick={handleClick} style={{ padding: "8px" }}>
          Add Two Numbers
        </button>
      </div>
      <div style={{ marginTop: "24px" }}>Total: {displayAns && totalSum}</div>
    </div>
  );
}
