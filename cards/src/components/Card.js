import React from 'react';



function Card(props) {
  const profile = props;
  return (
    <div class="text-2xl ml-10 mt-8 w-1/5 text-blue-800 ">
    
      <img src={profile.avatar_url}/> 
      <div className="info">
      <div className="name">{profile.name}</div>
      <div className="company">{profile.company}</div>
    </div>
   </div>
  );
}

export default Card;
