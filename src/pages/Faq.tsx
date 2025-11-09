import {useState} from 'react'

const faqs = [
  {q:'O que é este projeto?', a:'Uma solução que auxilia pessoas com dificuldades no uso do celular a confirmar consultas médicas.'},
  {q:'Qual foi o objetivo do projeto?', a:'O objetivo foi criar uma solução tecnológica que promovesse inclusão digital, segurança e facilidade de uso para pacientes com dificuldade de leitura ou escrita. Buscamos reduzir faltas em consultas e otimizar o sistema de atendimento do hospital.'},
  {q:'Quem desenvolveu?', a:'Projeto desenvolvido na Sprint 1 e agora fizemos a implementaçãoO projeto foi inicialmente desenvolvido na Sprint 1 e, nesta etapa, evoluímos sua implementação utilizando React com TypeScript. com React + TypeScript.'}
]

export default function Faq(){
  const [open, setOpen] = useState<number|null>(null)
  return (
    <section className="max-w-4xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Perguntas Frequentes</h2>
      <div className="space-y-4">
        {faqs.map((f, i) => (
          <div key={i} className="card">
            <button className="w-full text-left" onClick={()=>setOpen(open===i?null:i)}>
              <div className="flex justify-between items-center">
                <strong>{f.q}</strong>
                <span>{open===i?'-':'+'}</span>
              </div>
            </button>
            {open===i && <p className="mt-3">{f.a}</p>}
          </div>
        ))}
      </div>
    </section>
  )
}
