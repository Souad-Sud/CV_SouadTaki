import React, { useState } from "react";
import ProfilImage from '../../public/img/Image1.jpg';
import Details from "./Details.jsx";
import EmploymHistory from '../Components/EmploymHistory.jsx';
import Educations from '../Components/Educations.jsx';
import Skills from '../Components/Skills.jsx';
import OtherSkills from '../Components/OtherSkils.jsx';
import '../Details.css';
 



const ProfileDetails = () => {
    const [togel, setTogel] = useState(false);

    return(
        <div className="main__profile">

        
        <section className="profile__container">

 
              <div className="profile__image">

            <h1>Souad Taki</h1>
            <div className="img__containet">

            <img src={ProfilImage} alt="my profile picture" 
             className="profile__img"/>
            </div>

            </div>

            <article className="profile__details">

            <button className="btn__detail" onClick={() => setTogel(!togel)}>
                     <h2>Details</h2>
                     
                </button>

                {togel && <Details/>}
 
   
            </article>

            

            
           
        

        
        </section>
        <div className="history">
        <EmploymHistory />
        <Educations/>
        <Skills/>
         <OtherSkills/>

        </div>
        </div>
    )
}

export default ProfileDetails