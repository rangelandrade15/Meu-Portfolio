import React from "react";
import linkedln from "./img/linkedln1.png";
import instagran from "./img/instagran1.png";
import face from "./img/face1.png";
import img1 from "./img/rangel-1.png";

const Header = () => {
    return (
        
        <div className="pagina-1">
            <h1>Olá!</h1><h1>Eu sou</h1><h1>Web Developed</h1>
            <p>Olá me chamo Rangel Andrade, sou graduado em computação <br/> 
            e Informática pelo Instituto Federal da Paraíba (IFPB).</p>

            <a href="https://www.linkedin.com/in/rangel-andrade/"><img className="linkedln1" src={ linkedln } /></a>
            <a href="https://www.instagram.com/andraderangel/"><img className="instagran1" src={ instagran } /></a>
            <a href="https://www.facebook.com/rangel.andrade.127"><img className="face1" src={ face } /></a>

           
            <div className="img1">
            <img src={ img1 } />
            </div>
            
        </div>
    )
}

export default Header
