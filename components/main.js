import React from "react"

let anoAtual = new Date();
let idade = anoAtual.getFullYear() - 1995;
export default function Main(){
    return (
        <div className="corpo">
        <h2>Sobre</h2>
        <p>Eu me chamo Paulo Vinicius tenho {idade} anos e atualmente sou estudante de música, porém pretendo trabalhar com programação diretamente em um futuro não muito distante.
        </p>
        <h2>Interesses</h2>
        <p>
        Estou trabalhando como frontend no momento, buscando uma vaga para programador júnior.
        Conheço HTML, CSS, javascript, um pouco de C# e SQL, e no momento estou estudando React.
        </p>
        </div>
    )}