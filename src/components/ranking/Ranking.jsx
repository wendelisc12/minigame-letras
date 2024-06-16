import "./ranking.scss"

const Ranking = () => {
    return ( 
        <div className="rank">
            <h1 className="rank_titulo">Ranking</h1>
            <table className="rank_tabela">
            <thead>
                <tr>
                    <th></th>
                    <th>nome</th>
                    <th>pontos</th>
                </tr>
            </thead>
            </table>
        </div>
     );
}
 
export default Ranking;