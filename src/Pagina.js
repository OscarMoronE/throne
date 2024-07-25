import React, { useState } from 'react'
import SnowEffect from './snowEffect'
import Fire from './Fire'

const Pagina = () => {
    const nightKing = `${process.env.PUBLIC_URL}/images/kingNight.png`;
    const dragon = `${process.env.PUBLIC_URL}/images/dragon(1).png`;
    const iceDragon = `${process.env.PUBLIC_URL}/images/iceDragon.png`;
    const [snow, SetSnow] = useState(false)
    const [fire, setFire] = useState(false)
    const [dragons, setDragons] = useState(dragon)

    const nightAction = (e) => {
        SetSnow(!snow);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#e0e5ec"
        setDragons(iceDragon);
    }

    const dragonAction = (e) => {
        setFire(!fire);
        e.target.parentNode.parentNode.parentNode.parentNode.style.backgroundColor = "#EB5B00"
    }

    return (
        <>
            <div className='boxNightKing'>
                <img className='nightKing' onClick={nightAction} src={nightKing} />
            </div>

            <div className='dragon' onClick={dragonAction}>
                <img className='dragonImg' src={dragons} />
            </div>
            {snow && < SnowEffect />}
            {fire && <Fire />}
        </>
    )
}

export default Pagina