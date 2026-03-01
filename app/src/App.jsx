import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import NavbarComponent from './components/NavbarComponent/NavbarComponent'
import FooterComponent from './components/FooterComponent/FooterComponent'
import {Toaster} from 'react-hot-toast'
import HeroComponent from './components/HeroComponent/HeroComponent'
import BeatsComponent from './components/BeatsComponent/BeatsComponent'
import MerchandiseComponent from './components/MerchandiseComponent/MerchandiseComponent'
import FeaturedArtistsComponents from './components/FeaturedArtistsComponents/FeaturedArtistsComponents'
import FeaturedProducersComponents from './components/FeaturedProducersComponents/FeaturedProducersComponents'
import FeaturedBlogsComponent from './components/FeaturedBlogsComponent/FeaturedBlogsComponent'
import AboveFooterComponent from './components/AboveFooterComponent/AboveFooterComponent'

const App = () => {
  return (
    <BrowserRouter>
    <NavbarComponent/>
    <HeroComponent/>
    <BeatsComponent/>
    <MerchandiseComponent/>
    <FeaturedArtistsComponents/>
    <FeaturedProducersComponents/>
    <FeaturedBlogsComponent/>
    <AboveFooterComponent/>
    <Toaster/>
    <Routes>
      <Route></Route>
    </Routes>
    <FooterComponent/>
    </BrowserRouter>
  )
}

export default App