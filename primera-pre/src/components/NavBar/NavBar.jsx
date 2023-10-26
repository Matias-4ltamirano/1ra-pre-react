import { CardWidtget } from "../CardWidtget/CardWidtget"

export const NavBar = () => {
  return (
    <nav className="d-flex justify-content-around p-4">
        <div>
            <button className="btn btn-success mx-2">Home</button>
            <button className="btn btn-success mx-2">Productos</button>
            <button className="btn btn-success mx-2">Nosotros</button>
        </div>
        <div className="d-flex">
            <CardWidtget/>
            <p className="mx-1"> 0 </p>
        </div>
    </nav>
  )
}
