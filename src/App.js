import ChildComponent from './components/ChildComponent';
import { useState } from 'react';

function App() {

  const [myArray, setMyArray] = useState([])

  return (
    <>
      Hello!
      <ChildComponent />
    </>
  );
}

export default App;
