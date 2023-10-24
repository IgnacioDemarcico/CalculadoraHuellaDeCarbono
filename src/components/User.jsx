import {useContext} from "react";
import { UserContext } from "../Context/UserContext.jsx";
import './User.css'
const Usuario = () => {
    const { user } = useContext(UserContext); 
    const { result } = useContext(UserContext); 
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