import React , {lazy,Suspense} from 'react';
import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './page/Home';
import RestaurantDetailsList from './page/RestaurantMenu/RestaurantDetailsList';
import Footer from './components/Footer/Footer';
import ErrorPage from './page/ErrorPage';
import RestaurantMenuShimmmer from './Shimmer/RestaurantMenuShimmer';
import OfflinePage from './page/offlinePage/OfflinePage';
import useIsOnline from './utils/useIsOnline';
import AboutPage from './page/AboutPage/AboutPage';
import OffersPage from './page/OffersPage/OffersPage';


const Search = lazy(()=>import('./page/SearchPage/SearchPage'))
// this is also known as the following name
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import


function App() {
  const isOnline = useIsOnline()
  return !isOnline ? (<OfflinePage/>) :(
    <>
    <Header/>
    <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/search-page' element={
      <Suspense fallback={<RestaurantMenuShimmmer/>}>
        <Search/>
      </Suspense>
    }/>
    <Route path='restaurantDetailsPage/:id' element={<RestaurantDetailsList/>}/>
    <Route path="/about-page" element={<AboutPage />} />
    <Route path="/available-offers" element={<OffersPage />} />
    <Route path="/error" element={<ErrorPage />} />
    <Route path='*' element={<ErrorPage/>}/>
    </Routes>
    <Footer/>
    </>
  );
}

export default App;
