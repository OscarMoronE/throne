import React, { useState } from 'react';
import Contexto from './Contexto';

const valores = [{
    lannister: {
        casa: "Lannister",
        lema: "Hear Me Roar",
        heroe: "Tyrion Lannister",
        logo: "lannister.png",
        historia: "The Lannisters are the wealthy lords of the Westerlands."
    },
    stark: {
        casa: "Stark",
        lema: "Winter Is Comming",
        heroe: "Ned Stark",
        logo: "stark.png",
        historia: "The Starks are the ancient rulers of the North."
    },
    targaryen: {
        casa: "Targaryen",
        lema: "Fire and Blood",
        heroe: "Daenerys Targaryen",
        logo: "targaryen.png",
        historia: "The Targaryens conquered the Seven Kingdoms with their dragons."
    },
    greyjoy: {
        casa: "Greyjoy",
        lema: "We Do Not Sow",
        heroe: "Euron Greyjoy",
        logo: "greyjoy.png",
        historia: "The Greyjoys rule the Iron Islands and follow the Old Way."
    },
    baratheon: {
        casa: "Baratheon",
        lema: "Ours is the Fury",
        heroe: "Robert Baratheon",
        logo: "baratheon.png",
        historia: "The Baratheons overthrew the Mad King to seize the Iron Throne."
    },
    tyrell: {
        casa: "Tyrell",
        lema: "Growing Strong",
        heroe: "Margaery Tyrell",
        logo: "tyrell.png",
        historia: "The Tyrells rule the Reach from Highgarden, known for their wealth and fertile lands."
    }, tully: {
        casa: "Tully",
        lema: "Family, Duty, Honor",
        heroe: "Catelyn Tully",
        logo: "tully.png",
        historia: "The Tullys rule the Riverlands from Riverrun, known for their loyalty and honor."
    }
}, {
    lannister: {
        casa: "Lannister",
        lema: "Oyeme rugir",
        heroe: "Tyrion Lannister",
        logo: "lannister.png",
        historia: "Los Lannister son los señores ricos de las Tierras del Oeste."
    },
    stark: {
        casa: "Stark",
        lema: "El invierno se acerca",
        heroe: "Ned Stark",
        logo: "stark.png",
        historia: "Los Stark son los antiguos gobernantes del Norte."
    },
    targaryen: {
        casa: "Targaryen",
        lema: "Fuego y sangre",
        heroe: "Daenerys Targaryen",
        logo: "targaryen.png",
        historia: "Los Targaryen conquistaron los Siete Reinos con sus dragones."
    },
    greyjoy: {
        casa: "Greyjoy",
        lema: "Nosotros no sembramos",
        heroe: "Euron Greyjoy",
        logo: "greyjoy.png",
        historia: "Los Greyjoy gobiernan las Islas del Hierro y siguen la Antigua Vía."
    },
    baratheon: {
        casa: "Baratheon",
        lema: "Nuestra es la Furia",
        heroe: "Robert Baratheon",
        logo: "baratheon.png",
        historia: "The Baratheons overthrew the Mad King to seize the Iron Throne."
    }, tyrell: {
        casa: "Tyrell",
        lema: "Crecer fuerte",
        heroe: "Margaery Tyrell",
        logo: "tyrell.png",
        historia: "Los Tyrell gobiernan el Dominio desde Altojardín, conocidos por su riqueza y tierras fértiles."
    }, tully: {
        casa: "Tully",
        lema: "Familia, Deber, Honor",
        heroe: "Catelyn Tully",
        logo: "tully.png",
        historia: "Los Tully gobiernan las Tierras de los Ríos desde Aguasdulces, conocidos por su lealtad y honor."
    }
}, {
    lannister: {
        casa: "Lannister",
        lema: "Vezhof anogar",
        heroe: "Tyrion Lannister",
        logo: "lannister.png",
        historia: "Lannister issi gēlenka laesi Ēdarōñe."
    },
    stark: {
        casa: "Stark",
        lema: "Jēda isse qelitsos",
        heroe: "Ned Stark",
        logo: "stark.png",
        historia: "Stark issi ōñar rēbri vāedar nēdenka."
    },
    targaryen: {
        casa: "Targaryen",
        lema: "Āeksio ondos",
        heroe: "Daenerys Targaryen",
        logo: "targaryen.png",
        historia: "Targārien hēnitas sīkūlis ēza sirūvīlzi."
    },
    greyjoy: {
        casa: "Greyjoy",
        lema: "Emble rhēnior",
        heroe: "Euron Greyjoy",
        logo: "greyjoy.png",
        historia: "Greyjoy urnēla Iron Isles arlī iksāntas ondoso vāedar."
    },
    baratheon: {
        casa: "Baratheon",
        lema: "Iksā se Urnēbagon",
        heroe: "Robert Baratheon",
        logo: "baratheon.png",
        historia: "Baratheon ossēry rovaloro Māzi Nārghūlje maz paedā."
    }, tyrell: {
        casa: "Tyrell",
        lema: "Olvie Āeksia",
        heroe: "Margaery Tyrell",
        logo: "tyrell.png",
        historia: "Tyrells rēbentys tobi jorrāelion va sȳrtyssy, līrti ēngos se jēdiāsi."
    }, tully: {
        casa: "Tully",
        lema: "Olvie Āeksia",
        heroe: "Margaery Tyrell",
        logo: "tully.png",
        historia: "Tullys rēbentys tobi ñuhyz va Riñwaēdras, līrti ēngos se rūa.",
    }
}, {
    idioma: 0
}]

const Provider = function ({ children }) {

    const [casa, setCasa] = useState(valores);
    return (
        <Contexto.Provider value={{ casa, setCasa }}>
            {children}
        </Contexto.Provider>
    )
}

export default Provider