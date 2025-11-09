import { useParams, useNavigate } from 'react-router-dom'

import RafaelImg from '../assets/rafael.jpg'
import FelipeImg from '../assets/Felipe.png'

const members = [
  {
    id:'1',
    name:'Felipe da Silva Garcia Honores',
    rm:'563485',
    turma:'1TDSA',
    img: FelipeImg,
    github: 'https://github.com/Felipesgh',
    linkedin: 'https://www.linkedin.com/in/felipe-garcia-298741363/'
  },
  {
    id:'2',
    name:'Rafael Siqueira Martins',
    rm:'564900',
    turma:'1TDSA',
    img: RafaelImg,
    github: 'https://github.com/SiqueiraMartins',
    linkedin: 'https://www.linkedin.com/in/rafael-siqueira-martins-240a3430a/?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app'
  }
]

export default function IntegranteDetail(){
  const { id } = useParams()
  const navigate = useNavigate()

  const member = members.find(m => m.id === id)

  if (!member) {
    return <p className="text-center mt-8">Integrante não encontrado</p>
  }

  return (
    <section className="max-w-2xl mx-auto my-8 px-4">
      <div className="card text-center p-6 shadow-lg rounded-xl">
        <h2 className="text-xl font-bold mb-2">Perfil do Integrante</h2>

        
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden mb-4">
          <img src={member.img} alt={member.name} className="w-full h-full object-cover" />
        </div>

        
        <p><strong>{member.name}</strong></p>
        <p>RM: {member.rm}</p>
        <p>Turma: {member.turma}</p>

        
        <div className="mt-4 flex justify-center gap-4">
          <a 
            href={member.github} 
            target="_blank" 
            rel="noreferrer" 
            className="px-4 py-2 bg-gray-800 text-white rounded hover:bg-gray-700"
          >
            GitHub
          </a>
          <a 
            href={member.linkedin} 
            target="_blank" 
            rel="noreferrer" 
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-500"
          >
            LinkedIn
          </a>
        </div>

    
        <button 
          onClick={() => navigate('/integrantes')} 
          className="mt-6 px-4 py-2 bg-primary text-white rounded"
        >
          Voltar
        </button>
      </div>
    </section>
  )
}
