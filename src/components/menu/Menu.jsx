import { motion } from 'framer-motion';
import "./menu.scss"
import { useState } from 'react';

const Menu = ({onStart}) => {

    const [nomePlayer, setNomePlayer] = useState("")

    return ( 
        <motion.div
            initial={{ y: 600, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -600, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='menu'
        >
            <div className='menu_box'>
                <div className='menu_box_header'>
                    <h1 className='menu_box_header_titulo'>Sequência rápida</h1>
                    <p className='menu_box_header_subtitulo'>Escreva na sequência para marcar</p>
                </div>

                <div className='menu_box_form'>
                    <input type="text" name="" id="" className='menu_box_form_input' onChange={(e) => {setNomePlayer(e.target.value)}} placeholder='Insira seu nome'/>
                </div>

                <div className='menu_box_buttons'>
                    <button className='menu_box_buttons_comecar' onClick={() => {onStart(nomePlayer)}}>jogar</button>
                    <button className='menu_box_buttons_comecar' onClick={onStart}>ranking</button>
                </div>
            </div>
        </motion.div>
     );
}
 
export default Menu;