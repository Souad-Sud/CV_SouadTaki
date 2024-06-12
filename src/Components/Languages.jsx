import React from "react";
import EnglishImg from '../../public/img/United-kingdom_flag_icon_round.svg.png';
import FrenchImg from '../../public/img/197560.png';
import SwedishImg from '../../public/img/197564.png';
 

const Languages = () =>{
   
    return(
        <div className="lg__detain__container">
            <div className="lg__item mrg_top">
                    <img src={EnglishImg} alt="" 
                    className="lg__icon" />
                    <p>Fluent</p>

                </div>
                <div className="lg__item">
                    <img src={FrenchImg} alt="" className="lg__icon" />
                    <p>Fluent</p>

                </div>
                <div className="lg__item">
                    <img src={SwedishImg} alt=""  className="lg__icon"/>
                    <p>Fluent</p>

                </div>

               

        </div>
    )
}

export default Languages