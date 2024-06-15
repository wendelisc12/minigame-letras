import { useState } from "react";
import Caracteres from "../caracteres/Caracteres";
import Menu from "../menu/Menu";
import { AnimatePresence } from 'framer-motion';

const Game = () => {

    const [showMenu, setShowMenu] = useState(true);

    const handleStart = () => {
        setShowMenu(false);
    }
    
    return ( 
        <>
            <AnimatePresence>
                {showMenu ? (
                    <Menu key="menu" onStart={handleStart} />
                ) : (
                    <Caracteres key="caracteres" />
                )}
            </AnimatePresence>
        </>
     );
}
 
export default Game;