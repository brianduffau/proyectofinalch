import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { Routes, Route } from 'react-router-dom';


function App() {
  
  return ( 
      <div className="container">

        <NavBar />
        
        <Routes>
          <Route path="/" element={<ItemListContainer greeting="Bienvenidos!"/>}></Route>
          <Route path="/category/:categoryId" element={<ItemListContainer />}></Route>
          <Route path="/item/:id" element={<ItemDetailContainer />}></Route>
        </Routes>

      </div>

  )
}

export default App
