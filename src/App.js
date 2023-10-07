import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './page/Home';
import RestaurantDetailsList from './page/RestaurantMenu/RestaurantDetailsList';
import Footer from './components/Footer/Footer';
import SearchPage from './page/SearchPage/SearchPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search-page' element={<SearchPage/>}/>
    <Route path='restaurantDetailsPage/:id' element={<RestaurantDetailsList/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
