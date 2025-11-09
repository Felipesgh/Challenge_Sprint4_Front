import { useState } from "react"
import { api } from "../services/api"

interface Endereco {
  cep: string
  logradouro: string
  complemento?: string
  bairro: string
  localidade: string
  uf: string
  erro?: string
}

export default function BuscarCep() {
  const [cep, setCep] = useState("")
  const [endereco, setEndereco] = useState<Endereco | null>(null)
  const [erro, setErro] = useState("")
  const [carregando, setCarregando] = useState(false)

  async function buscarCep() {
    try {
      setErro("")
      setEndereco(null)

      if (!/^\d{8}$/.test(cep)) {
        setErro("Digite um CEP válido com 8 dígitos (somente números).")
        return
      }

      setCarregando(true)
      const response = await api.get(`/cep/${cep}`)
      const data: Endereco = response.data

      if (data.erro === "true" || data.erro === "True") {
        setErro("CEP não encontrado. Verifique e tente novamente.")
      } else {
        setEndereco(data)
      }
    } catch (err: any) {
      console.error(err)
      setErro("Erro de conexão com o servidor. Tente novamente mais tarde.")
    } finally {
      setCarregando(false)
    }
  }

  return (
    <section className="max-w-lg mx-auto my-10 bg-white p-6 rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">
        Buscar Endereço
      </h2>

      <div className="flex gap-2 mb-4">
        <input
          type="text"
          value={cep}
          onChange={(e) => setCep(e.target.value)}
          placeholder="Digite o CEP (ex: 01001000)"
          className="border border-gray-300 rounded p-2 w-full focus:ring-2 focus:ring-primary outline-none"
        />
        <button
          onClick={buscarCep}
          disabled={carregando}
          className={`px-4 py-2 rounded text-white ${
            carregando
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-primary hover:bg-primary/80"
          }`}
        >
          {carregando ? "Buscando..." : "Buscar"}
        </button>
      </div>

      {}
      {erro && <p className="text-red-500 text-center mb-4">{erro}</p>}

      {}
      {endereco && !erro && (
        <div className="mt-4 text-gray-700 space-y-1">
          <p>
            <strong>CEP:</strong> {endereco.cep}
          </p>
          <p>
            <strong>Logradouro:</strong> {endereco.logradouro}
          </p>
          {endereco.complemento && (
            <p>
              <strong>Complemento:</strong> {endereco.complemento}
            </p>
          )}
          <p>
            <strong>Bairro:</strong> {endereco.bairro}
          </p>
          <p>
            <strong>Cidade:</strong> {endereco.localidade}
          </p>
          <p>
            <strong>UF:</strong> {endereco.uf}
          </p>
        </div>
      )}
    </section>
  )
}
