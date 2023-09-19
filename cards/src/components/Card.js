import React from 'react';



function Card(props) {
  const profile = props;
  return (

            <div className="bg-white rounded-lg shadow-md dark:bg-gray-800 text-2xl ml-10 mt-8 w-1/5">
                <a href="#" className=""><img src={profile.avatar_url}
                        class=" w-full h-64 rounded-t-lg"/></a>
                <div class="p-5">
                  
                   
                    <div className="flex items-center justify-between">
                        <div class="flex items-center ">
                           
                            <div className="ml-2">
                                <h2 className="text-lg font-semibold text-gray-700 dark:text-gray-400">{profile.name}
                                </h2>
                                <span className="text-sm text-gray-500 dark:text-gray-500">{profile.company}</span>
                            </div>
                        </div>
                        <a href="#"
                            className="px-3 py-2 text-xs text-gray-200 bg-blue-700 rounded-full dark:bg-blue-700 dark:hover:bg-blue-600 hover:bg-blue-600 hover:text-gray-100">
                            View Details</a>
                    </div>
                </div>
            </div>

         // <div class="text-2xl ml-10 mt-8 w-1/5 text-blue-800 ">
    
  //     <img src={profile.avatar_url}/> 
  //     <div className="info">
  //     <div className="name">{profile.name}</div>
  //     <div className="company">{profile.company}</div>
  //   </div>
  //  </div>
  );
}

export default Card;
