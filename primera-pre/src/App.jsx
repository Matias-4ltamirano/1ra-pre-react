import { ItemlistContainer } from "./components/ItemlistContainer/ItemlistContainer"
import { NavBar } from "./components/NavBar/NavBar"


export const App = () => {
  return (
    <>
    <NavBar/>
    <ItemlistContainer greeting={"Bienvenidos a Pepe Componentes"}/>
    </>
  )
}

