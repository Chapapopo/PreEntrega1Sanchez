import ItemListContainer from './components/ItemListContainer'
import { NavBar } from './components/NavBar'
import Greeting from './components/greeting'

function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    {/* a quien me corrija, supuse que las cards que pongo a continuacion cumplen con la funcion del prop greeting, peor por si acaso dejo otro componente greeting que cumple dicha funcion */}
    <main>
      <div className='container'>
        <div className='row'>
          <Greeting Saludos = {"Bienvenidos"}/>
        </div>
      </div>
      <div className='container'>
        <div className='row'>
          <div className="col-7 col-md-6 col-lg-4 mt-4">
          <ItemListContainer Producto = {"Top"} Precio = {5000} Imagen = {"images/productos/Top.webp"}/>
          </div>
          <div className="col-7 col-md-6 col-lg-4 mt-4">
          <ItemListContainer Producto = {"Slim"} Precio = {5500} Imagen = {"images/productos/Slim.webp"}/>
          </div>
          <div className="col-7 col-md-6 col-lg-4 mt-4">
          <ItemListContainer Producto = {"Power"} Precio = {9000} Imagen = {"images/productos/Power.webp"}/>
          </div>
          <div className="col-7 col-md-6 col-lg-4 mt-4">
          <ItemListContainer Producto = {"Sweet"} Precio = {4500} Imagen = {"images/productos/Sweet.webp"}/>
          </div>
          <div className="col-7 col-md-6 col-lg-4 mt-4">
          <ItemListContainer Producto = {"Wadges"} Precio = {10000} Imagen = {"images/productos/Wadges.webp"}/>
          </div>
        </div>
      </div>
    </main>
    </>
  )
}

export default App
