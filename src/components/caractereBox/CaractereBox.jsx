import "./caractereBox.scss"

const CaractereBox = ({caractere, certo}) => {
    return <div className={certo ? "caractere caractere--certo" : "caractere"}>{caractere}</div>
}
 
export default CaractereBox;