import { useEffect, useState } from "react";
import Caracteres from "../caracteres/Caracteres";
import Menu from "../menu/Menu";
import { AnimatePresence } from 'framer-motion';
import GameOver from "../gameOver/GameOver";

const Game = () => {

    const [showMenu, setShowMenu] = useState(true);
    const [showGameOver, setShowGameOver] = useState(false)
    const [player, setPlayer] = useState("visitante")
    const [pontos, setPontos] = useState(0)
    const [updateRanking, setUpdateRanking] = useState(false)

    const handleMenu = () => {
        setShowMenu(true)
        setShowGameOver(false)
    }

    const handleStart = (data) => {
        setShowMenu(false);
        setPlayer(data)
    }

    const handleEnd = (end) => {
        setShowGameOver(end.end)
        setPontos(end.pontos)
    }

    const handleRestart = () => {
        setShowGameOver(false)
        setShowMenu(false)
        setPontos(0)
    }
    const atualizarRanking = () => {
        setUpdateRanking((prev) => !prev)
    }
    return (
        <>
            <AnimatePresence>
                {showMenu ? (
                    <Menu key="menu" onStart={handleStart} />
                ) : showGameOver ? (
                    <GameOver key="gameover" onRestart={handleRestart} onMenu={handleMenu} pontos={pontos} player={player} updateRanking={updateRanking} />
                ) : (
                    <Caracteres key="caracteres" onData={handleEnd} nome={player} atualizarRanking={atualizarRanking} />
                )}
            </AnimatePresence>
        </>
    );
}

export default Game;