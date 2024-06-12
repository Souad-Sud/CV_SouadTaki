import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from "@fortawesome/free-solid-svg-icons";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
 import { faGithub } from "@fortawesome/free-brands-svg-icons"; 
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import Languages from "./Languages";


const Details = () =>{
    const [togel, setTogel] = useState(false)
    return(
        <div className="icon__detain__container">
             <div className="icon_details"> 
                    
                    <FontAwesomeIcon icon={faLocationDot} 
                     className="icon__items" />
                    <p>Åsvägen  2A Virsbo Sweden</p>

                </div>
                <div className="icon_details">
                    <FontAwesomeIcon icon={faPhone} className="icon__items" />
                    <p>0721790921 </p>

                </div>
                <div className="icon_details">
                <FontAwesomeIcon icon={faEnvelope} className="icon__items"  />
                <a href="mailto:taki.souad.fr@gmail.com" className="email">taki.souad.fr@gmail.com
                </a>
               

                </div>
                <div className="icon_details">
                <FontAwesomeIcon icon={faLinkedinIn}  className="icon__items" />
                <a href="">https://www.linkedin.com/in/souad-taki-b18873184/</a>


                </div>
                <div className="icon_details">
                <FontAwesomeIcon icon={faGithub} className="icon__items" />
                <a href="">https://github.com/todatoday</a>

                </div>

                <div>

                <article className="lg__container">
                
                
              
            <button className="btn__detail" onClick={() => setTogel(!togel)}>
                     <h2>Languages</h2>
                     
                </button>

                {togel && <Languages/>}
              

               

                </article>

                </div>

        </div>
    )
}

export default Details