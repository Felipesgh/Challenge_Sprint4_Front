
import { Link } from "react-router-dom"

export interface IntegranteProps {
  id: string
  name: string
  rm: string
  turma: string
  img: string
  github?: string
  linkedin?: string
}

export default function IntegranteCard({
  id,
  name,
  rm,
  turma,
  img,
  github,
  linkedin,
}: IntegranteProps) {
  return (
    <article className="card text-center p-4 shadow-lg rounded-xl transition-transform hover:scale-105">
      <div className="w-32 h-32 mx-auto rounded-full overflow-hidden mb-3">
        <img src={img} alt={name} className="w-full h-full object-cover" />
      </div>

      <h3 className="font-semibold text-lg text-gray-900">{name}</h3>
      <p className="text-sm text-gray-600">RM: {rm}</p>
      <p className="text-sm text-gray-600">{turma}</p>

      <div className="mt-3 flex justify-center gap-3">
        {github && (
          <a
            href={github}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            GitHub
          </a>
        )}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-blue-600 hover:underline"
          >
            LinkedIn
          </a>
        )}
      </div>

      <Link
        to={`/integrante/${id}`}
        className="inline-block mt-3 text-primary underline hover:text-primary/80"
      >
        Ver perfil
      </Link>
    </article>
  )
}