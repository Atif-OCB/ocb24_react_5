import { useState } from 'react';
import Card from "./components/Card"

function App() {
  const [test, setTest] = useState(false);

  return (
    <>
      <Card
        id={1}
        title="Hello"
        description="Test this out"
        checked={test}
        toggleDone={(event) => {
          setTest(event.target.checked);
        }} />
    </>
  )
}

export default App
