import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './page/Home';
import RestaurantDetailsList from './page/RestaurantMenu/RestaurantDetailsList';
import Footer from './components/Footer/Footer';
import SearchPage from './page/SearchPage/SearchPage';
import ErrorPage from './page/ErrorPage';

function App() {
  return (
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search-page' element={<SearchPage/>}/>
    <Route path='restaurantDetailsPage/:id' element={<RestaurantDetailsList/>}/>
    <Route path="/error" element={<ErrorPage />} />
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
