//Importamos el estilo del css
import './App.css'

import { TwitterFollowCard } from './TwitterFollowCard';

//Definimos y exportamos nuestra función App y le indicamos lo que debe renderizar
export function App (){
    return(
        <>
            <div className="App">
                <TwitterFollowCard 
                    // isFollowing 
                    username={"Luffy"} 
                    // name={"Monkey D. Luffy"}
                    imgSRC={"https://storage.googleapis.com/pod_public/1300/212827.jpg"}>    
                    Monkey D. Luffy                
                </TwitterFollowCard>

                <TwitterFollowCard 
                    // isFollowing={false} 
                    username={"Zoro"} 
                    // name={"Roronoa Zoro"} 
                    imgSRC={"https://storage.googleapis.com/pod_public/1300/212828.jpg"}>
                    Roronoa Zoro
                </TwitterFollowCard>

                <TwitterFollowCard 
                    // isFollowing 
                    username={"Trafalgar Law"}
                    // name={"Trafalgar D. Water Law"} 
                    imgSRC={"https://i.pinimg.com/736x/ff/a9/8d/ffa98d248a1cdd116e7b6d9c37fc4a8b.jpg"}>
                    Trafalgar D. Water Law
                </TwitterFollowCard>

                <TwitterFollowCard 
                    // isFollowing={false} 
                    username={"Shanks el Pelirrojo"} 
                    // name={"Shanks"} 
                    imgSRC={"https://beebom.com/wp-content/uploads/2023/03/shanks-word.jpg?w=512"}>
                    Shanks
                </TwitterFollowCard>
            </div>
        </>
    );
}
