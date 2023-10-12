import React, { lazy, Suspense } from 'react';
import { Outlet, Route, Routes } from 'react-router-dom';
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
import Cart from './page/cart/Cart';
import AboutPageShimmer from './Shimmer/AboutPageShimmer'

const Search = lazy(() => import('./page/SearchPage/SearchPage'))
// this is also known as the following name
// Chunking
// Code Splitting
// Dynamic Bundling
// Lazy Loading
// On Demand Loading
// Dynamic Import

const PageLayout = () => (
  <>
    <Header />
    <Outlet />
    <Footer />
  </>
)

function App() {
  const isOnline = useIsOnline()
  return !isOnline ? (<OfflinePage />) : (
    <>
      <Routes>
        <Route element={<PageLayout />}>
          <Route path='/' element={<Home />} />
          <Route path='/search-page' element={
            <Suspense fallback={<RestaurantMenuShimmmer />}>
              <Search />
            </Suspense>
          } />
          <Route path='restaurantDetailsPage/:id' element={<RestaurantDetailsList />} />
          <Route path="/about-page" element={<AboutPage />} />
          <Route path="/available-offers" element={<OffersPage />} />
          <Route path="/available-offers/restaurantDetailsPage/:id" element={<RestaurantDetailsList />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="/error" element={<ErrorPage />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
      

    </>
  );
}

export default App;
