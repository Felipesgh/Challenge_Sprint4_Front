import { Link } from "react-router-dom"

export default function Home(){
  return (
    <div>
      <section className="bg-gradient-to-r from-primary to-accent text-white py-16">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h1 className="text-3xl md:text-4xl font-bold mb-4">Bem-vindo ao Viva Bem Digital</h1>
          <p className="mb-6">Facilitando a vida de quem tem dificuldade em usar celulares na saúde digital. Confirmação por voz, um toque e apoio familiar.</p>
          <Link to="/solucao" className="inline-block bg-highlight text-white px-6 py-3 rounded-lg font-semibold">Ver Solução</Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto my-12 px-4">
        <div className="grid md:grid-cols-3 gap-6">
          <div className="card">
            <h3 className="font-semibold mb-2">Uma tela simples</h3>
            <p>Botões grandes e texto claro para facilitar o uso.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Confirmação rápida</h3>
            <p>Lembretes com um botão de confirmação para reduzir faltas.</p>
          </div>
          <div className="card">
            <h3 className="font-semibold mb-2">Apoio familiar</h3>
            <p>Cadastro de um responsável que também recebe notificações.</p>
          </div>
        </div>
      </section>
    </div>
  )
}
