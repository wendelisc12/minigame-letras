import { useEffect, useState } from "react";
import CaractereBox from "../caractereBox/CaractereBox";
import { motion } from "framer-motion"
import "./caracteres.scss"
import TempoProgresso from "../tempoProgresso/TempoProgresso";

const Caracteres = ({ onData }) => {

    const [caracteresEscolhidos, setCaracteresEscolhidos] = useState([])
    const [caracteresCorretos, setCaracteresCorretos] = useState([])
    const [indexCaracter, setIndexCaracter] = useState(0)
    const [pontos, setPontos] = useState(0)
    const [endTime, setEndTime] = useState(false)
    const [endGame, setEndGame] = useState(false)
    const caracteres = []

    for (let i = 48; i <= 57; i++) {
        caracteres.push(String.fromCharCode(i));
    }
    for (let i = 97; i <= 122; i++) {
        caracteres.push(String.fromCharCode(i));
    }

    const gerarCaracteres = () => {
        const escolhidos = []
        for (let i = 0; i < 6; i++) {
            escolhidos.push(caracteres[Math.floor(Math.random() * 36)])
        }

        return escolhidos
    }

    const teclaPressionada = (e) => {
        if (/^[a-zA-Z0-9]$/.test(e.key)) {
            if (e.key == caracteresEscolhidos[indexCaracter]) {
                setCaracteresCorretos(prevState => [...prevState, indexCaracter])
                setIndexCaracter(prevIndex => prevIndex + 1);
                setPontos(prevIndex => prevIndex + 1)
            } else {
                setEndGame(true)
            }
        }
    }

    const iniciarGame = () => {
        const caracteresGerados = gerarCaracteres();
        setCaracteresEscolhidos(caracteresGerados);
        setCaracteresCorretos([]);
        setIndexCaracter(0);
        setEndGame(false);
    }

    const fimGame = (isEnd) => {
        setEndTime(isEnd)
    }

    useEffect(() => {
        if (endGame || endTime) {
            onData({end: true, pontos: pontos});
        }
    }, [endGame, endTime, onData]);

    useEffect(() => {
        if (caracteresCorretos.length == 6) {
            iniciarGame()
        }
    }, [caracteresCorretos])

    useEffect(() => {
        if (!endGame) {
            iniciarGame()
        }
    }, [])

    useEffect(() => {
        window.addEventListener('keydown', teclaPressionada)

        return () => {
            window.removeEventListener('keydown', teclaPressionada)
        };
    }, [indexCaracter, caracteresEscolhidos])

    return (
        <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}

            className="caracteres">

                <div className="caracteres_pontos">
                    <h1>{pontos}</h1>
                </div>

            <div className="caracteres_box">

                <div className="caracteres_box_row">
                    {caracteresEscolhidos.map((caracter, index) => (
                        <motion.div
                            key={index}
                            initial={{ y: -200, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.7, delay: index * 0.180 }}
                        >
                            <CaractereBox caractere={caracter} certo={caracteresCorretos.includes(index)} />
                        </motion.div>
                    ))}
                </div>
                <TempoProgresso onEnd={fimGame} />
            </div>
        </motion.div>
    )
}

export default Caracteres;