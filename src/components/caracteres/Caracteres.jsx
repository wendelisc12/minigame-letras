import { useEffect, useState } from "react";
import CaractereBox from "../caractereBox/CaractereBox";

const Caracteres = ({onData}) => {
    
    const [caracteresEscolhidos, setCaracteresEscolhidos] = useState([])
    let indexCaracter = 0
    const caracteres = []
    
    for (let i = 48; i <= 57; i++) {
        caracteres.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
        caracteres.push(String.fromCharCode(i));
    }

    
    const gerarCaracteres = () => {
        const escolhidos = []
        for(let i =0; i<5; i++){
            escolhidos.push(caracteres[Math.floor(Math.random() * 36)])
        }

        return escolhidos
    }

    const teclaPressionada = (e) =>{
        if(e.key == caracteresEscolhidos[indexCaracter]){
            console.log(e.key)
            indexCaracter++
        }else{
            console.log("errou")
        }
    }

    useEffect(()=>{
        const caracteresGerados = gerarCaracteres()
        setCaracteresEscolhidos(caracteresGerados)
    },[])

    useEffect(()=>{
        console.log(caracteresEscolhidos)
        
        window.addEventListener('keydown', teclaPressionada)

        return () => {
          window.removeEventListener('keydown', teclaPressionada)
        };
    }, [caracteresEscolhidos])

    return(
        <div>
            {caracteresEscolhidos.map((caracter, index) => (
                <CaractereBox key={index} caractere={caracter} />
            ))}
        </div>
    )
}
 
export default Caracteres;