import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen text-center bg-gray-100 p-6">
      <h1 className="text-6xl font-bold text-primary mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-800">Página não encontrada</h2>
      <p className="text-gray-600 mb-6">
        O endereço que você tentou acessar não existe ou foi movido.
      </p>

      <Link
        to="/"
        className="px-6 py-3 bg-primary text-white rounded-lg shadow hover:bg-primary/90 transition-all"
      >
        Voltar ao início
      </Link>
    </section>
  )
}
