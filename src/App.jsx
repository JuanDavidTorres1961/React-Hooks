import { Counter } from "./components/01-Counter/Counter"
import { InputText } from "./components/02-InputText/InputText"
import { ToogleState } from './components/03-ToogleState/ToogleState'
import { Button } from "./components/04-Button/Button"
import { ToDoList } from "./components/05-ToDoList/ToDoList"
import { PiedraPapelTijera } from "./components/06-PiedraPapelTijera/PiedraPapelTijera"

function App() {
  
  return (
    <div className='w-full h-screen bg-zinc-700 flex flex-col justify-center items-center '>
      {/* <Counter /> */}
      {/* <InputText /> */}
      {/* <ToogleState /> */}
      {/* {<Button/>} */}
      {/* {<ToDoList/>} */}
      {<PiedraPapelTijera/>}
    </div>
  )
}

export default App
