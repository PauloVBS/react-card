import React from "react"
import Header from "./components/header"
import Footer from "./components/footer"
import Main from "./components/main"

export default function Card(){
    return (
        <div className="card">
        <Header />
        <Main />
        <Footer />
        </div>
    )
}