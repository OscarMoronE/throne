import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faScroll, faShield, faCrown } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ infoLema, infoTitle, infoImg, infoHero, infoHistory, setOcultar }) => {

    return (

        <div className='modalContainer'>
            <div className='btnModal'><button onClick={() => setOcultar(false)}>X</button></div>
            <div className='titleModal'>
                <h1> {infoTitle}</h1>
            </div>
            <div className='imgModal'>
                <img src={infoImg} />
            </div>
            <div className='textModal'>
                <h4><FontAwesomeIcon icon={faShield} /> {infoLema}</h4>
            </div>
            <div className='sloganModal'>
                <h5><FontAwesomeIcon icon={faCrown} fade /> {infoHero}</h5>
            </div>
            <div className='historyModal'>
                <p><FontAwesomeIcon icon={faScroll} /> {infoHistory}</p>
            </div>
        </div>
    )
}

export default Modal