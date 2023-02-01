import React, { Component, lazy, Suspense } from 'react'
import './App.css';
import './reset.css'
import PgHeader from './PgHeader';
import Footer from './Footer';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const PgMain = lazy(() => import("./PgMain"));
const Kampaniyalar = lazy(() => import("./Kampaniyalar"));
const Filiallar = lazy(() => import("./Filiallar"));
const Sebet = lazy(() => import("./Sebet"));
const Bloglar = lazy(() => import("./Bloglar"));
const Vakansiyalar = lazy(() => import("./Vakansiyalar"));
const Servismerkezleri = lazy(() => import("./Servismerkezleri"));
const Zemanetler = lazy(() => import("./Zemanetler"));
const Bonuslardanistifade = lazy(() => import("./Bonuslardanistifade"));
const Haqqimizda = lazy(() => import("./Haqqimizda"));
const IstifadeSertleri = lazy(() => import("./IstifadeSertleri"));
const Korporativsatislar = lazy(() => import("./Korporativsatislar"));
const Sertlerimiz = lazy(() => import("./Sertlerimiz"));
const Mexfiliksiyaseti = lazy(() => import("./Mexfiliksiyaseti"));
const Login = lazy(() => import("./Login"));
const Sikayetveteklifler = lazy(() => import("./Sikayetveteklifler"));







const App = () => {

  return (

    <div className='boyuk_div'>

      <Router>
        <PgHeader />
        <Suspense fallback={<PgMain />}>
          <Routes>

            <Route exact path='/' element={<PgMain />} />
            <Route exact path='/Kampaniyalar' element={<Kampaniyalar />} />
            <Route exact path='/Bloglar' element={<Bloglar />} />
            <Route exact path='/Filiallar' element={<Filiallar />} />
            <Route exact path='/Sebet' element={<Sebet />} />
            <Route exact path='/Vakansiyalar' element={<Vakansiyalar />} />
            <Route exact path='/Servismerkezleri' element={<Servismerkezleri/>} />
            <Route exact path='/Zemanetler' element={<Zemanetler />} />
            <Route exact path='/Bonuslardanistifade' element={<Bonuslardanistifade />} />
            <Route exact path='/Haqqimizda' element={<Haqqimizda />} />
            <Route exact path='/IstifadeSertleri' element={<IstifadeSertleri />} />
            <Route exact path='/Korporativsatislar' element={<Korporativsatislar />} />
            <Route exact path='/Sertlerimiz' element={<Sertlerimiz />} />
            <Route exact path='/Mexfiliksiyaseti' element={<Mexfiliksiyaseti />} />
            <Route exact path='/Login' element={<Login />} />
            <Route exact path='/Sikayetveteklifler' element={<Sikayetveteklifler />} />



          </Routes>
        </Suspense>
        <Footer />
      </Router>

    </div>
  );
}


export default App
