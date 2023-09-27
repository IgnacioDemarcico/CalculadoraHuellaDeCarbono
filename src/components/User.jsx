import {useContext} from "react";
import { UserContext } from "../Context/UserContext.jsx";
const Usuario = () => {
    const {user} = useContext(UserContext); 
    const {result} = useContext(UserContext); 
    return (
        <div className="contexto">
            <br />
            <br />
            <h2>Usuario: {user}</h2>
            <h2>Resultado: {result}</h2>
        </div>
    )
}
export default Usuario;