import { motion } from "framer-motion";
import "./gameOver.scss"
import Ranking from "../ranking/Ranking";

const GameOver = ({ onRestart, onMenu, pontos, nome }) => {
    return (
        <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            exit={{ y: -600, opacity: 0 }}
            className="gameover"
        >
            <div className='gameover_box'>
                <div className='gameover_box_header'>
                    <h1 className='gameover_box_header_titulo'>Fim de jogo</h1>
                    <div className='gameover_box_buttons'>
                        <button className="gameover_box_buttons_button" onClick={onRestart}>jogar novamente</button>
                        <button className='gameover_box_buttons_button' onClick={onMenu}>Menu</button>
                    </div>
                </div>

                <div className="gameover_box_pontuacao">
                    <h2 className="gameover_box_pontuacao_texto">Você fez <span className="gameover_box_pontuacao_texto_pontos">{pontos}</span> pontos</h2>
                </div>

                <Ranking />
            </div>
        </motion.div>
    );
}

export default GameOver;