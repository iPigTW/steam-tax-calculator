import { useState } from 'react'
import './App.css'
function App() {
  const [price, setPrice] = useState<any | null>(0);
  const [newPrice, setNewPrice] = useState<any | null>(0);
  return (
    <>
      <div className='container'>
        <h1>Steam Tax Calculator</h1>
        <input type='number' onChange={e => setPrice(e.target.value)} placeholder='Price here' ></input>
        <br/>
        <input type="number" value={newPrice} disabled></input>
        <br/>
        <button onClick={() => setNewPrice((price/1.15-0.01).toFixed(2)) }>Calculate!</button>
      </div>
      <div className='footer'>
        <p>Made by iPig</p>
        <p>Not affiliated with Valve Corporation</p>
      </div>
    </>
  )
}

export default App
