import React from "react"
import { Link } from "react-router-dom"

export default function Header(){
  return (
    <header className="bg-primary text-white">
      <div className="max-w-6xl mx-auto flex items-center justify-between p-4 md:p-6">
        <Link to='/' className="text-xl font-bold">Viva Bem Digital</Link>
        <nav className="hidden md:flex gap-4">
          <Link to="/integrantes" className="hover:text-highlight">Integrantes</Link>
          <Link to="/faq" className="hover:text-highlight">FAQ</Link>
          <Link to="/contato" className="hover:text-highlight">Contato</Link>
          <Link to="/solucao" className="hover:text-highlight">Solução</Link>
          <Link to="/buscar-cep" className="hover:underline">Buscar CEP</Link>
        </nav>
        {}
        <div className="md:hidden">
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}

function MobileMenu(){
  const [open, setOpen] = React.useState(false)
  return (
    <div>
      <button aria-label="menu" onClick={()=>setOpen(v=>!v)} className="mr-4 text-2xl">☰</button>
      {open && (
        <div className="absolute right-4 top-16 bg-primary text-white rounded-lg p-4 w-48 shadow-lg">
          <MobileLink to="/">Início</MobileLink>
          <MobileLink to="/integrantes">Integrantes</MobileLink>
          <MobileLink to="/faq">FAQ</MobileLink>
          <MobileLink to="/contato">Contato</MobileLink>
          <MobileLink to="/solucao">Solução</MobileLink>
        </div>
      )}
    </div>
  )
}

function MobileLink({to, children}:{to:string, children:React.ReactNode}){
  return <div className="py-2 border-b last:border-b-0"><Link to={to} onClick={()=>{}} className="block">{children}</Link></div>
}