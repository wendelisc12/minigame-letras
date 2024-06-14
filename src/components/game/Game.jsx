import { useState } from "react";
import Caracteres from "../caracteres/Caracteres";

const Game = () => {

    const [caracteresEscolhidos, setCaracteresEscolhidos] = useState(null)

    const handleCaracteres = (data) =>{
        setCaracteresEscolhidos(data)
    }

    console.log(caracteresEscolhidos)

    return ( 
        <>
            <Caracteres onData={handleCaracteres}/>
        </>
     );
}
 
export default Game;