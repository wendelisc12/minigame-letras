import { useEffect, useState } from "react";
import CaractereBox from "../caractereBox/CaractereBox";
import {motion} from "framer-motion"
import "./caracteres.scss"

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
        for(let i =0; i<6; i++){
            escolhidos.push(caracteres[Math.floor(Math.random() * 36)])
        }

        return escolhidos
    }

    const teclaPressionada = (e) =>{
        if(e.key == caracteresEscolhidos[indexCaracter]){
            setCaracteresCorretos(prevState => [...prevState, indexCaracter])
            setIndexCaracter(prevIndex => prevIndex + 1);
        }else{
            iniciarGame()
        }
    }

    const iniciarGame =()=>{
        const caracteresGerados = gerarCaracteres();
        setCaracteresEscolhidos(caracteresGerados);
        setCaracteresCorretos([]);
        setIndexCaracter(0);
    }

    useEffect(()=>{
        iniciarGame()
    },[])

    useEffect(()=>{        
        window.addEventListener('keydown', teclaPressionada)

        return () => {
          window.removeEventListener('keydown', teclaPressionada)
        };
    }, [indexCaracter,caracteresEscolhidos])

    return(
        <motion.div 
        initial={{ y: 600, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="caracteres_row">
            {caracteresEscolhidos.map((caracter, index) => (
                <CaractereBox key={index} caractere={caracter} certo={caracteresCorretos.includes(index)}/>
            ))}
        </motion.div>
    )
}
 
export default Caracteres;