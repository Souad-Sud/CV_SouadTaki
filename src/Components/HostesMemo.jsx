import React from "react";
import HostesLeclerc from "./HostesLeclerc";
import { useState } from "react";

const HostesMemo = () => {
    const [togel, setTogel] = useState(false);
    return(
        <div>

        
        
            <ul>
                <li>Work with staff to perform job duties during the special event ERA, the largest annual neurology congress in Europe. </li>
                <li>Assist organizers in controlling the flow of guests and members within manner’s guidelines as promptly as possible. </li>
                <li>Scan delegates. </li>
                <li>Assist and communicate with different delegates in different languages. </li>
            </ul>

               <button onClick={() => setTogel(!togel)} className='hover__btn'>
              <h3>Hostess, LECLERC, Bourges France. </h3>
               </button>
 
{ togel && <HostesLeclerc/>}
</div>
    )
}

export default HostesMemo