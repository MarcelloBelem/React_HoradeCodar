// Componete Pai

import './App.css'

// Importa o componete filho
import FunctionalComponent from './componets/FunctionalComponent'
import PropExample from './componets/PropsExample'

function App() {
  return (
    <>
    <FunctionalComponent/>
    <PropExample nome="Matheus" idade={35}/>
    </>
  )
}

export default App
