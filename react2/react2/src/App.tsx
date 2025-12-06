import {useState, useEffect} from 'react'



import './App.module.css'




export function App() {
  const [count, setCount] = useState(0)

  console.log('');

  return (
    <div>

      <button onClick={() => setCount((count) => count + 1)} >
        {count}
        </button>
    </div>



  )
}




