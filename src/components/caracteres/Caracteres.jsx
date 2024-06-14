import { useEffect } from "react";

const Caracteres = ({onData}) => {

    const caracteres = []
    
    for (let i = 48; i <= 57; i++) {
        caracteres.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
        caracteres.push(String.fromCharCode(i));
    }

    
    function gerarCaracteres(){
        const escolhidos = []
        for(let i =0; i<5; i++){
            escolhidos.push(caracteres[Math.floor(Math.random() * 36)])
        }

        return escolhidos
    }

    useEffect(()=>{
        const caracteresEscolhidos = gerarCaracteres()
        onData(caracteresEscolhidos)
    },[])
}
 
export default Caracteres;