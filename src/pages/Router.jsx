import React from 'react'
import { BrowserRouter, Routes } from 'react-router-dom'
import EnterPage from './EnterPage'

const Route = () => {
  return (
<BrowserRouter>
<Routes>
    <Route path="/" element={<EnterPage/>}/>
</Routes>
</BrowserRouter>
)
}

export default Route