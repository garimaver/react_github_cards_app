import React from "react";
import Card from "./Card";



function CardList(props) {
    const profiles = props.profiles;
    if(profiles==='') return <div > No Data Found </div>
    console.log(profiles);
    return (
    <div class=" flex flex-wrap mt-4 justify-center  ">
        {profiles.map((profile) => (
             <Card {...profile}/>
        ) ) }
       

    </div>
    );
}

export default CardList;