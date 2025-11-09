import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'

type FormData = { nome: string; email: string; mensagem: string }

export default function Contato(){
  const { register, handleSubmit, formState:{errors}, reset } = useForm<FormData>()
  const navigate = useNavigate()

  const onSubmit = (data: FormData) => {
    alert('Mensagem enviada (simulado). Obrigado '+data.nome)
    reset()
    navigate('/')
  }

  return (
    <section className="max-w-3xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-primary">Contato</h2>
      <div className="card">
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <label className="block mb-2">Nome</label>
          <input {...register('nome',{required:'Nome é obrigatório'})} className="w-full p-2 border rounded mb-1" />
          {errors.nome && <div className="text-red-600 mb-2">{errors.nome.message}</div>}

          <label className="block mb-2">Email</label>
          <input {...register('email',{required:'E-mail obrigatório', pattern:{value:/^[^\s@]+@[^\s@]+\.[^\s@]+$/, message:'E-mail inválido'}})} className="w-full p-2 border rounded mb-1" />
          {errors.email && <div className="text-red-600 mb-2">{String(errors.email.message)}</div>}

          <label className="block mb-2">Mensagem</label>
          <textarea {...register('mensagem',{required:'Mensagem é obrigatória'})} className="w-full p-2 border rounded mb-1" rows={5} />
          {errors.mensagem && <div className="text-red-600 mb-2">{errors.mensagem.message}</div>}

          <div className="mt-4">
            <button type="submit" className="px-4 py-2 bg-primary text-white rounded">Enviar</button>
          </div>
        </form>
      </div>
    </section>
  )
}