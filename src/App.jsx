import { Route, Routes } from 'react-router-dom'

import NavbarTopComponent from './component/NavbarTopComponent'
import NavbarComponent from './component/NavbarComponent'
import FooterComponent from './component/FooterComponent'

import HomePage from './pages/HomePage'
import ManagePage from './pages/ManagePage'
import CorePage from './pages/CorePage'
import MitraKebanggaanPage from './pages/MitraKebanggakaan'
import PengalamanPage from './pages/PengalamanPage'

function App() {
  return (
    <div>
      <NavbarTopComponent />
      <NavbarComponent />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/manage' Component={ManagePage} />
        <Route path='/core' Component={CorePage} />
        <Route path='/mitrakebanggan' Component={MitraKebanggaanPage} />
        <Route path='/pengalaman' Component={PengalamanPage} />
      </Routes>
      <FooterComponent />
    </div>
  )
}

export default App
