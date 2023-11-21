import { useState } from 'react'
import './App.css'
function App() {
  const [price, setPrice] = useState<any | null>(null);
  const [newPrice, setNewPrice] = useState<any | null>(null);
  return (
    <>
      <div className='container'>
        <h1>Steam Tax Calculator</h1>
        <input type='number' onChange={e => setPrice(e.target.value)} placeholder='Before Tax Price' ></input>
        <br/>
        <input type="number" placeholder='After Tax Price' value={newPrice} onChange={e => setNewPrice(e.target.value)}></input>
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
