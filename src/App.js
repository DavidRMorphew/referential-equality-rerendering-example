import ChildComponent from './components/ChildComponent';
import { useState, useEffect } from 'react';
const initialArray = [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}];

const App = () => {

  const [myArray, setMyArray] = useState([])

  useEffect(() => setMyArray(initialArray), []);

  const reverseArray = () => {
    const reversedArray = myArray.reverse()
    console.log("reverseArray: ", reversedArray)
    console.log("myArray : ", myArray)
    console.log("Is myArray mutated and does it match reversedArray? ", reversedArray === myArray)
    setMyArray(reversedArray)
  }

  return (
    <>
      <button onClick={reverseArray}>
        Reverse Order
      </button>
      <ChildComponent arrayData={myArray} />
    </>
  );
}

export default App;
