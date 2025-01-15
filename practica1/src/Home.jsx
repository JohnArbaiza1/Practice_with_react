//Importamos los componentes
import { CardInfo } from "./CardInfo";

//importamos las imagenes
import images from './IMG/images';

//Importamos los estilos
import './CSS/home.css'

//Definimos un componente funcional 
export function Home(){
    return (
      <>
        <div className="home">
          <h1>Lenguajes de Programación</h1>
          <div className="container">
          <CardInfo
            imgSRC={images['CS']}>
              <h2>C#</h2>    
              <p className="info-lenguaje">
              C# es un lenguaje de programación moderno, innovador, de código abierto, multiplataforma orientado a objetos y uno de los 5 principales
              lenguajes de programación de GitHub. se utiliza para desarrollar aplicaciones web, aplicaciones de escritorio, aplicaciones móviles, juegos y mucho más.
              </p>
            </CardInfo>

            <CardInfo
              imgSRC={images['GO']}>  
              <h2>Go</h2> 
              <p className="info-lenguaje">Go es un lenguaje de programación concurrente y compilado con tipado estático inspirado en la sintaxis de C y de 
                código abierto respaldado por Google Fácil de aprender y excelente para equipos. Ademas Provee un recolector de basura, reflexión y algunas otras capacidades de lenguajes de alto nivel. 
              </p>
            </CardInfo>

            <CardInfo
              imgSRC={images['JAVA']}>   
              <h2>Java</h2> 
              <p className="info-lenguaje">Java es un lenguaje de programación multiplataforma orientado a objetos que se ejecuta en miles de millones de dispositivos de todo el mundo.
                Sustenta aplicaciones, sistemas operativos de smartphones, software empresarial y muchos programas conocidos.
              </p>
            </CardInfo>

            <CardInfo
            imgSRC={images['Kotlin']}>
              <h2>Kotlin</h2>    
              <p className="info-lenguaje">
              Kotlin es un lenguaje de programación moderno pero ya maduro, diseñado para hacer más felices a los desarrolladores. Es conciso, seguro,
              interoperable con Java y otros lenguajes, y ofrece muchas maneras de reutilizar código entre múltiples plataformas para una programación productiva.
              </p>
            </CardInfo>
            
          </div>
        </div>
      </>
    );
}