import { useState } from "react"

function App() {
  const [count, setCount] = useState(0) 

  return (
    <>
     <p>hello word</p>

     <button className="botao" onClick={() => setCount(count + 1)}>
      count {count}
     </button>
    </>
  )
}

export default App
