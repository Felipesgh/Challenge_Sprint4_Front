import React, { useEffect, useState } from "react"
import IntegranteCard, { type IntegranteProps } from "../components/IntegrantesCard"

import ArthurImg from "../assets/Arthur.jpg"
import FelipeImg from "../assets/Felipe.png"

export default function Integrantes() {
  const [members, setMembers] = useState<IntegranteProps[]>([])

  useEffect(() => {
    setMembers([
      {
        id: "1",
        name: "Felipe Garcia",
        rm: "563485",
        turma: "1TDSA",
        img: FelipeImg,
        github: "https://github.com/felipe",
        linkedin: "https://linkedin.com/in/felipe",
      },
      {
        id: "2",
        name: "Arthur Manso",
        rm: "561612",
        turma: "1TDSA",
        img: ArthurImg,
        github: "https://github.com/arthur",
        linkedin: "https://linkedin.com/in/arthur",
      },
    ])
  }, [])

  return (
    <section className="max-w-4xl mx-auto my-8 px-4">
      <h2 className="text-2xl font-bold mb-4 text-primary text-center">
        Integrantes
      </h2>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {members.map((m) => (
          <IntegranteCard key={m.id} {...m} />
        ))}
      </div>
    </section>
  )
}