import './App.css'
import NavBar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListConteiner from './components/ItemListConteiner';
function app() {
  return (
    <div>
      <NavBar />
      <ItemListConteiner />
    </div>
  );
}

export default app;
