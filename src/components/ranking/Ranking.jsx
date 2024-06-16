import "./ranking.scss"
import { useEffect, useState } from "react";
import {BeatLoader} from "react-spinners"


import api from "../../api/api"

const Ranking = () => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        api.get('/')
            .then(response => {
                setData(response.data)
            })
            .catch(error => {
                console.log(error)
            })
            .finally(()=>{
                setLoading(false)
            })
    }, [])
    return (
        <div className="rank">
            <h1 className="rank_titulo">Ranking</h1>
            <div className="rank_tabela">
                <div className="rank_tabela_header">
                    <h3 className="rank_tabela_header_titulo_clas">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#fff" className="bi bi-trophy-fill" viewBox="0 0 16 16">
                            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5q0 .807-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33 33 0 0 1 2.5.5m.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935m10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935" />
                        </svg>
                    </h3>
                    <h3 className="rank_tabela_header_titulo">NOME</h3>
                    <h3 className="rank_tabela_header_titulo">PONTOS</h3>
                </div>

                {
                    loading ?(
                            <div className="rank_tabela_loading">
                                <BeatLoader color="#601e6d" />  
                            </div>
                        )
                        :
                        (
                        data.map((player, index) => (
                            <div className="rank_tabela_data" key={player.id}>
                                <div className={index == 0 ? "rank_tabela_data_dado_clas rank_tabela_data_dado_clas--1" : index == 1 ? "rank_tabela_data_dado_clas rank_tabela_data_dado_clas--2" : index == 2 ? "rank_tabela_data_dado_clas rank_tabela_data_dado_clas--3" : "rank_tabela_data_dado_clas   "} >{index + 1}</div>
                                <div className="rank_tabela_data_dado">{player.nome}</div>
                                <div className="rank_tabela_data_dado rank_tabela_data_dado_pontos">{player.pontos}</div>
                            </div>
                        ))
                    )
                }

            </div>
        </div>
    );
}

export default Ranking;