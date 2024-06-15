import { motion } from 'framer-motion';
import "./menu.scss"

const Menu = ({onStart}) => {
    return ( 
        <motion.div
            initial={{ y: 0 }}
            animate={{ y: 0 }}
            exit={{ y: -600, opacity: 0 }}
            transition={{ duration: 0.6 }}
            className='menu'
        >
            <div className='menu_box'>
                <h1 className='menu_box_titulo'>Sequência rápida</h1>
                <button className='menu_box_comecar' onClick={onStart}>Começar</button>
            </div>
        </motion.div>
     );
}
 
export default Menu;