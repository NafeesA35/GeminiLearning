import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <h1>This is an interactive component</h1>
      <p>You have clicked at the button {count} times</p>
      <button> click me ! </button>
    </>
  );
}

export default App;