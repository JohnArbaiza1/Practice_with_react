// Importamos PropTypes para la validación de propiedades
import PropTypes from 'prop-types';

//importamos un Hooks
import { useState } from 'react';

// Definimos un Componente TwitterFollowCard
export function TwitterFollowCard({ username = 'user', children, imgSRC, }) {
    
    // Definimos un estado local isFollowing para manejar si el usuario está siguiendo o no
    const [isFollowing, setIsFollowing] = useState(false)
     // Función que cambia el estado isFollowing al hacer clic en el botón
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    //hacemos un renderizado condicional
    const text = isFollowing ? "Siguiendo" : "Seguir"; 
    const buttonClassName = isFollowing ? 'tw-followCard-button is-following' : 'tw-followCard-button'   

    // Estructura del componente
    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-avatar"
                    src={imgSRC}
                    alt={`Avatar de ${children}`}
                />
                <div className="tw-followCard-info">
                    <strong>{children}</strong>
                    <span className="tw-followCard-info-userName">@{username}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={handleClick}>
                    {text}
                </button>
            </aside>
        </article>
    );
}

// Validaciones de los props con PropTypes
TwitterFollowCard.propTypes = {
    username: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    imgSRC: PropTypes.string.isRequired,
    // isFollowing: PropTypes.bool,
};

// TwitterFollowCard.defaultProps = {
//     isFollowing: false,
// };
