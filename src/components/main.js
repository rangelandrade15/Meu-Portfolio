import React from "react";
import javascript from "./img/javascript.png";
import html from "./img/html.png";
import css from "./img/css.png";
import react from "./img/react.png";
import github from "./img/git.png";
import img2 from "./img/R.png";


const main = () => {
    return (
        
        
        <div className="pagina2">

                <h1 id="certificacoes">Skill &<br/>Certificações</h1>
            <p>Aqui tem algumas das minhas habilidades e estou <br/>
            sempre em busca de novos desafios, busco sempre <br/>
            aprender novas tecnologias.</p>
              <h3>Skills</h3>
              <img className="javascript" src={javascript} />
              <img className="html" src={html} />
              <img className="css" src={css} />
              <img className="css" src={react} />
              
              
              
              <div className="cert">
                    <h3>Certificações<br/><span>_____________________________</span></h3>
                    
                    <p><b>INTRODUÇÃO Á PROGRAMAÇÃO PARA WEB</b><br/>
                    Instituto Federal de Educação, Ciência e Tecnologia de São Paulo.<br/><b>HTML- 5</b><br/>
                    Fundação Bradesco.<br/><b>JAVASCRIPT</b><br/>
                    Curso em Vídeo - Gustavo Guanabara<br/><b>ILSC EDUCATION GROUP - ENGLISH LANGUAGE STUDY.</b><br/>
                    Toronto – Canadá<br/><b>GESTÃO FINANCEIRA</b><br/>
                    Sebrae<br/><b>NOTA FISCAL ELETRÔNICA</b><br/>
                    Sebrae<br/><b>CAPACITAÇÃO SOFTSHOP VAREJO E ATACADO</b><br/>
                    Softcom</p>
                                        
                </div>
            <div className="pagina-3">
            <h1 id="projetos">Projetos</h1>
            <div>
                <center>
                <a href="https://github.com/rangelandrade15"><img className="img-2" src={github} /></a>
                </center>
            </div>
            </div>
            <div className="pagina-4">
                <h1>Vamos planejar<br/>Seu projeto?</h1>
               
                <div className="img">
                <img src={img2} />

                </div>
            </div>
                        
        </div>
    )
}

export default main
