import React from "react";
import Card from "./Card";
import carddata from "./carddata";


function CardList() {
    return (
    
    <div>
        {carddata.map((profile) => (
             <Card {...carddata[0]}/>
        ) ) }
       

    </div>
    );
}

export default CardList;