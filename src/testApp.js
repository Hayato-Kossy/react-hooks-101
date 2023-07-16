import React, {useState} from "react";
const App = () => {
  const [count,setCount] = useState(0)

  const increment = () => setCount(count + 1)
  const decrement = () => setCount(count - 1)
  const reset = () => setCount(previousCount => previousCount = 0)
  const double = () => setCount(previousCount => previousCount * 2)
  // const divideThree = () => {
  //   if (count % 3 == 0) setCount(previousCount => previousCount / 3)
  //   else return count
  // }

  const divideThree = () => setCount(previousCount => {
    return previousCount % 3 == 0 ? previousCount / 3 : previousCount
  })
  // const reset = () => setCount(0)
  return (
    <div>
      <div> count: {count} </div>
      <div>
        <button onClick={increment}>+1</button>
        <button onClick={decrement}>-1</button>
      </div>
      <div>
        <button onClick={reset}>reset</button>
      </div>
      <div>
        <button onClick={double}>*2</button>
      </div>
      <div>
        <button onClick={divideThree}>３の倍数の時だけ3で割ります</button>
      </div>
    </div>
  );
}

export default App;
