import { useState } from "react"

export function App() {
  const [numero, setNumero] = useState(100)

  const [sumir, setSumir] = useState(false)
  // estado booleano que começa com false

  function handleSumir() {
    sumir === true ? setSumir(false) : setSumir(true)
  }


  function handleAumentar() {
    setNumero(numero + 100)

  }

  //função que vai trocar de true pra false ou de false pra true (if/else)

  return (
    <section>
      <h1>App</h1>

      <div>
        <h2>Número: {numero}</h2>

        <button onClick={handleAumentar}>Aumentar</button>
      </div>

      <div>
       {sumir === true ? <p>Sou a favorita do Márcio</p> : ""}

        {/* parágrafo e botão */}
        {/* criar um if ternário vinculado ao sumir. se sumir for verdadeiro, não mostrar nada, se não, mostrar o parágrafo */}

        {}
        

        <button onClick={handleSumir} > {sumir === true ? "Sumir" : "Aparecer"}</button>
      </div>

  
    
    </section>
  )
}