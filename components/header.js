import React from "react"

export default function Header(){
    return (
        <div className="cabecalho">
        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQF3E9fT2dQVQw/profile-displayphoto-shrink_800_800/0/1644431045271?e=1654128000&v=beta&t=vkoTQdxwkBfZ1SEEvaWS9df1eew4bwzhoFuS6LUIn7c" />
        <h1>Paulo Vinicius</h1>
        <h4>Frontend developer</h4>
        <div className="botoes">
        <button type="button" className="email"><a href="mailto:paulo.vb.souza@unesp.br"><img src="https://icon-icons.com/downloadimage.php?id=56530&root=614/SVG/&file=email-envelope-outline-shape-with-rounded-corners_icon-icons.com_56530.svg"  width="20px" />Email</a></button>
        <button type="button" className="linkedin"><a href="https://www.linkedin.com/in/paulo-vinicius-barbosa-de-souza-32220122b/"><img src="https://icon-icons.com/downloadimage.php?id=16590&root=99/PNG/32/&file=linkedin_socialnetwork_17441.png" width="20px" />Linkedin</a></button>
        </div>
        </div>
    )
}