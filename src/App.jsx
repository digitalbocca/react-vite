import { useState } from 'react'
import { Calendar } from 'primereact/calendar'
import { RadioButton } from 'primereact/radiobutton'
import { InputNumber } from 'primereact/inputnumber'
import { InputText } from 'primereact/inputtext'
import { Button } from 'primereact/button'
import axios from 'axios'
import './App.css'

const headers = {
  'Content-Type': 'application/json',
  'Authorization': 'Bearer keyNkAzl2oSWmnZ3V'
}

const url = 'https://api.airtable.com/v0/appvuoNV6xld6NBgz/operacoes'

function App() {
  const [date, setDate] = useState({})
  const [operacao, setOperacao] = useState('saida')
  const [valor, setValor] = useState(0)
  const [descricao, setDescricao] = useState('')
  const [botao, setBotao] = useState('Salvar')

  const enviarFormulario = () => {
    const data = {
      records: [
        {
          fields: {
            date,
            operacao,
            valor,
            descricao
          }
        }
      ]
    }

    console.log(date)
    console.log(operacao)
    console.log(valor)
    console.log(descricao)

    console.log('Enviei...')
  }

  return (
    <div className='flex flex-column min-h-screen align-items-center'>
      <div className='bg-primary-500 text-4xl font-bold text-white text-center p-4 w-full'>
        R$ 50,00
      </div>
      <div className='flex-grow-1 flex flex-column justify-content-center formulario py-4'>
        <Calendar
          className='personal-calendar'
          showIcon
          value={date}
          onChange={(e) => setDate(e.value)}
          dateFormat="dd/mm/yy"
        ></Calendar>
        
        <div className='w-full flex justify-content-center mt-4'>
          <RadioButton inputId="entrada" className='mx-2' value="entrada" name="operacao" onChange={(e) => setOperacao(e.value)} checked={operacao === 'entrada'} />
          <label htmlFor="entrada">Entrada</label>
          <RadioButton inputId="saida"className='mx-2' value="saida" name="operacao" onChange={(e) => setOperacao(e.value)} checked={operacao === 'saida'} />
          <label htmlFor="saida">Saída</label>
        </div>

        <InputNumber
          className='mt-4'
          value={valor}
          onValueChange={(e) => setValor(e.value)}
          mode="currency"
          currency="BRL"
          locale="pt-BR"
        />

        <InputText
          className='mt-4'
          value={descricao}
          onChange={(e) => setDescricao(e.target.value)}
          placeholder="Descrição"
        />

        <Button
          className='mt-4'
          label={botao}
          onClick={enviarFormulario}
        />
      </div>
      <div className='bg-primary-500 text-4xl font-bold text-white text-center py-2 w-full'>
        <i className="pi pi-home text-4xl p-2 btn-hover border-round-md"></i>
        <i className="pi pi-list text-4xl p-2 btn-hover border-round-md"></i>
        <i className="pi pi-plus text-4xl p-2 btn-hover border-round-md"></i>
      </div>
    </div>
  )
}

export default App
