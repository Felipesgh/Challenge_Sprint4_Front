import React from "react"
import { Route, Routes, Navigate } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Home from "./pages/Home"
import Integrantes from "./pages/Integrantes"
import IntegranteDetail from "./pages/IntegrantesDetail"
import Faq from "./pages/Faq"
import Contato from "./pages/Contato"
import Solucao from "./pages/Solucao"
import NotFound from "./pages/NotFound"
import BuscarCep from "./pages/BuscarCep"


export default function App(){
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/integrantes" element={<Integrantes />} />
          <Route path="/integrante/:id" element={<IntegranteDetail />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/solucao" element={<Solucao />} />
          <Route path="/home" element={<Navigate to="/" replace />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/buscar-cep" element={<BuscarCep />} />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}
