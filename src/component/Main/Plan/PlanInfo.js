import React from "react";
import * as axios from "axios";

const PlanInfo = (proms) =>{

    let myText = React.createRef()

    let print = () => {
        alert(myText.current.value)
    }



    return(
        <div>
            <b> olala</b>
            <textarea ref={myText}/>
            <button onClick={print}>add</button>
        </div>
    )
}

export default PlanInfo