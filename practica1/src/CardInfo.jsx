// Importamos PropTypes para la validación de propiedades
import PropTypes from 'prop-types';

//Importamos los estilos
import './CSS/card.css'

//Definimos el componentes cardInfo y lo exportamos
export function CardInfo({imgSRC,children}){
    return(
        <>
        <div className="card">
            <div className="card-body">
                <img src={imgSRC} alt="IMG" className="card-img" />
                <div className="information">
                    {children}
                </div>
            </div>
        </div>
        </>
    );
}

// Validaciones de los props con PropTypes
CardInfo.propTypes = {
    imgSRC: PropTypes.string.isRequired,
    children: PropTypes.node.isRequired,
};
