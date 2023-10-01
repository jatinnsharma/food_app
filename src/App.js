

import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './components/page/Home';
import RestaurantDetailsPage from './components/page/RestaurantDetailsPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='restaurantDetailsPage/:id' element={<RestaurantDetailsPage/>}/>
    </Routes>
    </>
  );
}

export default App;
