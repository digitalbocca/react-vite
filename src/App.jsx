import { useState } from 'react'
import './App.css'

function App() {
  return (
    <div className='flex flex-column min-h-screen'>
      <div className='bg-green-700 text-4xl font-bold text-white text-center p-4'>
        R$ 50,00
      </div>
      <div className='flex-grow-1'>
        Formulário
      </div>
      <div className='bg-green-700 text-4xl font-bold text-white text-center py-2'>
        <i className="pi pi-home text-4xl p-2 btn-hover border-round-md"></i>
        <i className="pi pi-list text-4xl p-2 btn-hover border-round-md"></i>
        <i className="pi pi-plus text-4xl p-2 btn-hover border-round-md"></i>
      </div>
    </div>
  )
}

export default App
