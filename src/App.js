import ChildComponent from './components/ChildComponent';
import { useState, useEffect } from 'react';
const initialArray = [{number: 1}, {number: 2}, {number: 3}, {number: 4}, {number: 5}];

function App() {

  const [myArray, setMyArray] = useState([])

  useEffect(() => setMyArray(initialArray), []);

  return (
    <>
      Hello!
      <ChildComponent />
    </>
  );
}

export default App;
