import React, { useContext, useState } from 'react'
import map from './mapa.jpg';
import Contexto from './contexto/Contexto';
import Modal from './contexto/Modal';

const Map = () => {
    const { casa } = useContext(Contexto)
    const stark = `../images/${casa[0].stark.logo}`
    const idioma = casa[3].idioma;
    const targaryen = `../images/${casa[0].targaryen.logo}`
    const tully = `../images/${casa[0].tully.logo}`
    const tyrell = `../images/${casa[0].tyrell.logo}`
    const baratheon = `../images/${casa[0].baratheon.logo}`
    const greyjoy = `../images/${casa[0].greyjoy.logo}`
    const lannister = `../images/${casa[0].lannister.logo}`

    //House STARK
    const [ocultar, setocultar] = useState(false);
    const mostrar = (e) => {
        setocultar(!ocultar);
        setOcultarTarg(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#333333"
    }

    //HOUSE TARGARYEN
    const [ocultarTarg, setOcultarTarg] = useState(false);
    const mostrarTarg = (e) => {
        setOcultarTarg(!ocultar);
        setocultar(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#B22222"
    }

    //HOUSE TULLY
    const [ocultarTul, setOcultarTul] = useState(false);
    const mostrarTully = (e) => {
        setOcultarTul(!ocultar);
        setocultar(false);
        setOcultarTarg(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#003366"
    }
    //HOUSE TYRELL
    const [ocultarTyr, setOcultarTyr] = useState(false);
    const mostrarTyr = (e) => {
        setOcultarTyr(!ocultar);
        setocultar(false);
        setOcultarTarg(false);
        setOcultarTul(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#339933"
    }

    //HOUSE BARATHEON
    const [ocultarBar, setOcultarBar] = useState(false);
    const mostrarBar = (e) => {
        setOcultarBar(!ocultar);
        setocultar(false);
        setOcultarTarg(false);
        setOcultarTul(false);
        setOcultarTyr(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#FFD700"
    }
    //HOUSE GREYJOY
    const [ocultarGrey, setOcultarGrey] = useState(false);
    const mostrarGrey = (e) => {
        setOcultarGrey(!ocultar);
        setocultar(false);
        setOcultarTarg(false);
        setOcultarTul(false);
        setOcultarTyr(false);
        setOcultarBar(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#333333"
    }
    //HOUSE LANNISTER
    const [ocultarLann, setOcultarLann] = useState(false);
    const mostrarLann = (e) => {
        setOcultarLann(!ocultar);
        setocultar(false);
        setOcultarTarg(false);
        setOcultarTul(false);
        setOcultarTyr(false);
        setOcultarBar(false);
        setOcultarGrey(false);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#FFB200"
    }
    return (
        <>
            <div className='mapGot'>
                <div className='map'><img src={map} alt='map' /></div>
            </div>
            <div className='houseStark'>
                <img className='starkImg' src={stark} onClick={mostrar} alt='stark'></img>
            </div>

            <div className='houseTargaryen'>
                <img className='TargaryenImg' src={targaryen} onClick={mostrarTarg} alt='...'></img>
            </div>

            <div className='houseTully'>
                <img className='tullyImg' src={tully} onClick={mostrarTully} alt='...'></img>
            </div>

            <div className='houseTyrell'>
                <img className='tyrellImg' src={tyrell} onClick={mostrarTyr} alt='...'></img>
            </div>

            <div className='houseBaratheon'>
                <img className='barathImg' src={baratheon} onClick={mostrarBar} alt='...'></img>
            </div>

            <div className='houseGreyjoy'>
                <img className='greyjoyImg' src={greyjoy} onClick={mostrarGrey} alt='...'></img>
            </div>

            <div className='houseLann'>
                <img className='lannImg' src={lannister} onClick={mostrarLann} alt='...'></img>
            </div>

            {ocultar
                ? <Modal infoTitle={casa[idioma].stark.casa} setOcultar={setocultar} infoLema={casa[idioma].stark.lema} infoImg={stark} infoHero={casa[idioma].stark.heroe} infoHistory={casa[idioma].stark.historia} />
                : null}

            {ocultarTarg
                ? <Modal infoTitle={casa[idioma].targaryen.casa} setOcultar={setOcultarTarg} infoLema={casa[idioma].targaryen.lema} infoImg={targaryen} infoHero={casa[idioma].targaryen.heroe} infoHistory={casa[idioma].targaryen.historia} />
                : null}

            {ocultarTul
                ? <Modal infoTitle={casa[idioma].tully.casa} setOcultar={setOcultarTul} infoLema={casa[idioma].tully.lema} infoImg={tully} infoHero={casa[idioma].tully.heroe} infoHistory={casa[idioma].tully.historia} />
                : null}

            {ocultarTyr
                ? <Modal infoTitle={casa[idioma].tyrell.casa} setOcultar={setOcultarTyr} infoLema={casa[idioma].tyrell.lema} infoImg={tyrell} infoHero={casa[idioma].tyrell.heroe} infoHistory={casa[idioma].tyrell.historia} />
                : null}

            {ocultarBar
                ? <Modal infoTitle={casa[idioma].baratheon.casa} setOcultar={setOcultarBar} infoLema={casa[idioma].baratheon.lema} infoImg={baratheon} infoHero={casa[idioma].baratheon.heroe} infoHistory={casa[idioma].baratheon.historia} />
                : null}
            {ocultarGrey
                ? <Modal infoTitle={casa[idioma].greyjoy.casa} setOcultar={setOcultarGrey} infoLema={casa[idioma].greyjoy.lema} infoImg={greyjoy} infoHero={casa[idioma].greyjoy.heroe} infoHistory={casa[idioma].greyjoy.historia} />
                : null}
            {ocultarLann
                ? <Modal infoTitle={casa[idioma].lannister.casa} setOcultar={setOcultarLann} infoLema={casa[idioma].lannister.lema} infoImg={lannister} infoHero={casa[idioma].lannister.heroe} infoHistory={casa[idioma].lannister.historia} />
                : null}
        </>
    )
}

export default Map