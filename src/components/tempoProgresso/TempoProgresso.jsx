import { useEffect, useState } from "react";
import "./tempoProgresso.scss"

const TempoProgresso = ({onEnd}) => {

    const [timeProgresso, setTimeProgresso] = useState(10)
    const [delay, setDelay] = useState(false)
    const [barraProgresso, setBarraProgresso] = useState(0)   
    const [fimTime, setFimTime] = useState(false)
    let total = 10

    const fimTempo = () =>{
        onEnd(fimTime)
    }

    useEffect(()=>{
        const delayTimer = setTimeout(()=>{
            setDelay(true)
        }, 700)

        return () => clearTimeout(delayTimer)
    }, [])

    
    useEffect(()=>{
        if(delay){
            const interval = setInterval(()=>{
                setTimeProgresso((prev)=>{
                    if(prev > 0){
                        return prev - 1
                    }else{
                        clearInterval(interval)
                        setFimTime(true)
                        return prev
                    }
                })
            }, 1000)
        }
    },[delay])

    useEffect(()=>{
        setBarraProgresso((timeProgresso*100) / total)
    }, [timeProgresso])

    useEffect(()=>{
        fimTempo()
    }, [fimTime])

    return ( 
        <div className="barra">
            <div className="barra_progresso" style={{ width: `${barraProgresso}%` }}></div>
        </div>
     );
}
 
export default TempoProgresso;