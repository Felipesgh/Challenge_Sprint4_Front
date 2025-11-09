import { useState, useEffect } from "react";
import { apiPython } from "../services/apiPython";

type Consulta = {
  id?: number;
  paciente_nome: string;
  paciente_cpf: string;
  medico: string;
  especialidade: string;
  data: string;
  horario: string;
  problema: string;
};

export default function Consultas() {
  const [consultas, setConsultas] = useState<Consulta[]>([]);
  const [novaConsulta, setNovaConsulta] = useState<Consulta>({
    paciente_nome: "",
    paciente_cpf: "",
    medico: "",
    especialidade: "",
    data: "",
    horario: "",
    problema: "",
  });
  const [loading, setLoading] = useState(false);

  const listarConsultas = async () => {
    try {
      const res = await apiPython.get("/consultas");
      setConsultas(res.data);
    } catch (error) {
      alert("Erro ao buscar consultas no servidor Flask.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setNovaConsulta((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async () => {
    const { paciente_nome, paciente_cpf, medico, especialidade, data, horario, problema } = novaConsulta;

    if (!paciente_nome || !paciente_cpf || !medico || !especialidade || !data || !horario || !problema) {
      alert("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    try {
      await apiPython.post("/consultas", novaConsulta);
      setNovaConsulta({
        paciente_nome: "",
        paciente_cpf: "",
        medico: "",
        especialidade: "",
        data: "",
        horario: "",
        problema: "",
      });
      listarConsultas();
    } catch (error) {
      alert("Erro ao salvar a consulta.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm("Tem certeza que deseja excluir esta consulta?")) return;
    try {
      await apiPython.delete(`/consultas/${id}`);
      listarConsultas();
    } catch (error) {
      alert("Erro ao excluir a consulta.");
    }
  };

  useEffect(() => {
    listarConsultas();
  }, []);

  return (
    <section className="max-w-3xl mx-auto my-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Consultas</h1>

      {}
      <div className="grid gap-4 mb-8">
        <input
          name="paciente_nome"
          placeholder="Nome do Paciente"
          value={novaConsulta.paciente_nome}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <input
          name="paciente_cpf"
          placeholder="CPF do Paciente"
          value={novaConsulta.paciente_cpf}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <input
          name="medico"
          placeholder="Nome do Médico"
          value={novaConsulta.medico}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <input
          name="especialidade"
          placeholder="Especialidade"
          value={novaConsulta.especialidade}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <input
          name="data"
          placeholder="Data (dd/mm/aaaa)"
          value={novaConsulta.data}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <input
          name="horario"
          placeholder="Horário (hh:mm)"
          value={novaConsulta.horario}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />
        <textarea
          name="problema"
          placeholder="Descreva o problema"
          value={novaConsulta.problema}
          onChange={handleChange}
          className="border border-gray-300 p-2 rounded-lg"
        />

        <button
          onClick={handleSubmit}
          disabled={loading}
          className={`w-full py-2 text-white font-semibold rounded-lg transition ${
            loading
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-600 hover:bg-blue-700"
          }`}
        >
          {loading ? "Salvando..." : "Salvar Consulta"}
        </button>
      </div>

      {}
      <h2 className="text-xl font-semibold mb-3 text-gray-800">Consultas Agendadas</h2>
      <ul className="space-y-3">
        {consultas.map((c) => (
          <li
            key={c.id}
            className="flex justify-between items-center bg-gray-100 p-4 rounded-lg hover:bg-gray-200 transition"
          >
            <div>
              <p className="font-medium text-gray-800">{c.paciente_nome}</p>
              <p className="text-sm text-gray-600">{c.medico} — {c.especialidade}</p>
              <p className="text-sm text-gray-500">{c.data} — {c.horario}</p>
              <p className="text-sm text-gray-500 italic">{c.problema}</p>
            </div>
            <button
              onClick={() => handleDelete(c.id!)}
              className="text-red-500 hover:text-red-700 font-semibold"
            >
              Excluir
            </button>
          </li>
        ))}
      </ul>

      {consultas.length === 0 && (
        <p className="text-center text-gray-500 mt-6">Nenhuma consulta cadastrada.</p>
      )}
    </section>
  );
}
