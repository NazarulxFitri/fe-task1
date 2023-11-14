const Question3 = () => {
  function twoSum(numbers, target) {
    const capturedIdx = [];

    for (let i = 0; i < numbers.length; i++) {
      for (let j = numbers.length - 1; j >= 0; j--) {
        // console.log("xxx", numbers[i], numbers[j]);
        if (numbers[i] + numbers[j] === target && capturedIdx.length < 2) {
          capturedIdx.push(i);
          capturedIdx.push(j);
        }
      }
    }

    return (
      <div>
        <div>
          Input: numbers = [{numbers.join(", ")}], target = {target}
        </div>
        <div>Output: [{capturedIdx.join(", ")}]</div>
        <div>
          Explanation: The sum of {numbers[capturedIdx[0]]} and{" "}
          {numbers[capturedIdx[1]]} is {target}. Therefore, index1 ={" "}
          {capturedIdx[0]}, index2 = {capturedIdx[1]},
        </div>
        <div>We return [{capturedIdx.join(", ")}]</div>
      </div>
    );
  }
  console.log(twoSum([4, 11, 17, 25], 21));
  console.log(twoSum([0, 1, 2, 2, 3, 5], 4));
  console.log(twoSum([-1, 0], -1));

  return (
    <>
      <div style={{ marginTop: "16px" }}>{twoSum([4, 11, 17, 25], 21)}</div>
      <div style={{ marginTop: "16px" }}>{twoSum([0, 1, 2, 2, 3, 5], 4)}</div>
      <div style={{ marginTop: "16px" }}>{twoSum([-1, 0], -1)}</div>
    </>
  );
};

export default Question3;
