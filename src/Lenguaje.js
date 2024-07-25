import React, { useContext, useState } from 'react'
import Contexto from './contexto/Contexto';
import uk from './uk.png';
import spain from './spain.jpg';
import valyrio from './velaryon.png';

const Lenguaje = () => {
    const { setCasa } = useContext(Contexto)
    const { casa } = useContext(Contexto)
    const [titulo, setTitulo] = useState("Road To the throne")

    const Sustitucion = (posicion) => {
        setCasa(
            casa.map((dato, indice) =>
                indice == 3
                    ? { ...dato, idioma: posicion }
                    : { ...dato }
            )
        );
    }
    const cambio1 = () => {
        Sustitucion(0)
        setTitulo("Road to the Throne")
    }
    const cambio2 = () => {
        Sustitucion(1)
        setTitulo("Camino al Trono")
    }
    const cambio3 = () => {
        Sustitucion(2)
        setTitulo("Vezhof Jiōrāelza")
    }

    return (
        <>
            <nav className='navbar bg-dark text-light mb-5 pt-3'>
                <div className='container-fluid'>
                    <h1 className='mx-auto'>{titulo}</h1>
                    <div className='lenguajes'>
                        <div className='flag' onClick={cambio1}><img src={uk} /></div>
                        <div className='flag' onClick={cambio2}><img src={spain} alt='spain' /></div>
                        <div className='flag' onClick={cambio3}><img src={valyrio} alt='valiryon' /></div>
                    </div>
                </div>
            </nav>
        </>
    )
}
export default Lenguaje