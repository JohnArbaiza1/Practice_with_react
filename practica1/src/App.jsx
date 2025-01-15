//Importamos los componentes
import { CardInfo } from "./components/CardInfo";

//importamos las imagenes y la información 
import images from './IMG/images';
import infoLanguages from "./data/programming_languages";

//Importamos los estilos
import './CSS/home.css'

//Definimos un componente funcional 
export function App(){
    return (
      <>
        <div className="home">
          <h1>Lenguajes de Programación</h1>
          <div className="container">
          {/*Usamos el método .map() para recorrer el array de lenguajes y renderizar un CardInfo para cada lenguaje */}
          {infoLanguages.map((language, index) => {
            // Convertimos el nombre del lenguaje a la clave que usamos en el objeto images
            const imageKey = language.name === 'C#' ? 'CS' : language.name === 'Go' ? 'GO' : language.name;

            return(
              <>
                <CardInfo
                key={index} imgSRC={images[imageKey]}>
                  <h2>{language.name}</h2>
                  <p className="info-lenguaje">{language.description}</p>
                </CardInfo>
              </>
            )
          })};
          </div>
        </div>
      </>
    );
}