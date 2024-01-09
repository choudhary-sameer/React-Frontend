import { useState } from "react";

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [characterAllowed, setCharacterAllowed] = useState(false);
  const [password, setPassword] = useState()

  return (
    <>
      <h1 className="text-4xl text-white text-center">Password generator</h1>
    </>
  );
}

export default App;
