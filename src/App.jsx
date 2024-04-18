import React, { useState } from 'react'
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import { Header, Home, NotFound, Cart } from './components/index'

import './scss/app.scss'
import Footer from './Components/Footer'

export const SearchContext = React.createContext('')

function App() {
  const [searchValue, setSearchValue] = useState('')

  return (
      <div className="wrapper">
        <SearchContext.Provider value={{ searchValue, setSearchValue }}>
          <Header />
          <div className="content">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

            </div>
          </div>
          <Footer/>
        </SearchContext.Provider>
      </div>
  )
}

export default App
