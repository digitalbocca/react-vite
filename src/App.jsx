import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className="flex flex-column p-0 m-0 min-h-screen">
      <div className="bg-primary-900 text-white text-4xl font-bold text-center p-4">
        R$ 50,00
      </div>
      <div className='p-4 flex-grow-1'>
        Formulário
      </div>
      <div className="bg-primary-900 text-white pt-4">
        <i className="pi pi-home"></i>
        <i className="pi pi-list"></i>
        <i className="pi pi-plus"></i>
      </div>
    </div>
  )
}

export default App
