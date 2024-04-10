import { useState } from 'react'
import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Routes>
            <Route path='/' element={<Users/>}></Route>
            <Route path='/create' element={<CreateUser />}></Route>
            <Route path='/update' element={<UpdateUser />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App