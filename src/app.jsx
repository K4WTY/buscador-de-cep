import { Search } from "lucide-react"
import { useState } from "react"
import api from "./services/api"

export function App() {
    const [input, setInput] = useState("")
    const [result, setResult] = useState()

    async function handleSearch() {
        if (input == "") {
            return
        }

        try {
            const response = await api.get(`${input}/json`)
            console.log(response.data)
            setResult(response.data)
            setInput("")
        } catch {
            setInput("")
            alert("Erro ao buscar!!!")
        }
    }

    return (
        <div className="container">
            <h1 className="title">Buscador de CEP</h1>
            <div className="containerInput">
                <input type="text" placeholder="Digite seu CEP..." value={ input } onChange={(e) => setInput(e.target.value)} />
                <button className="buttonSearch" onClick={ handleSearch }><Search /></button>
            </div>
            {result && (
                <main className="main">
                    <h2>{ result.cep }</h2>
                    <span>{ result.localidade } - { result.uf }</span>
                </main>
            )}
        </div>
    )
}