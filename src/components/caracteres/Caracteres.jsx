import { useEffect, useState } from "react";
import CaractereBox from "../caractereBox/CaractereBox";

const Caracteres = ({onData}) => {
    
    const [caracteresEscolhidos, setCaracteresEscolhidos] = useState([])
    const [caracteresCorretos, setCaracteresCorretos] = useState([])
    const [indexCaracter, setIndexCaracter] = useState(0)
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
            setCaracteresCorretos(prevState => [...prevState, indexCaracter])
            setIndexCaracter(prevIndex => prevIndex + 1);
        }else{
            console.log("errou")
        }
    }

    useEffect(()=>{
        const caracteresGerados = gerarCaracteres();
        setCaracteresEscolhidos(caracteresGerados);
        setCaracteresCorretos([]);
        setIndexCaracter(0);
    },[])

    useEffect(()=>{        
        window.addEventListener('keydown', teclaPressionada)

        return () => {
          window.removeEventListener('keydown', teclaPressionada)
        };
    }, [indexCaracter,caracteresEscolhidos])

    return(
        <div>
            {caracteresEscolhidos.map((caracter, index) => (
                <CaractereBox key={index} caractere={caracter} certo={caracteresCorretos.includes(index)}/>
            ))}
        </div>
    )
}
 
export default Caracteres;