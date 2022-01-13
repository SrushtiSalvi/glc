import React from "react";

// const SidebarCard = (props) => {
//     return (
//         <div>
//             <div className='flex-row m-5 my-7 md:mr-5 shadow-md shadow-gray-400 border-0 rounded-md bg-white'>
//                 <p className='bg-navbackground text-white text-xs p-4 font-bold border-t-0 rounded-t-md'>{props.heading}</p>
//                 {props.img ?
//                     <img className='mx-auto my-2' src={props.img} alt="img"/>
//                 : <img className='hidden' src='props.img' alt='none'/> }
//                 <p className='m-4 text-sm pb-2'>{props.message}</p>
//                 {props.button ?
//                 <button className='bg-black m-4 py-1 px-4 text-xs text-white border-0 rounded-md'>{props.button}</button> : <button className='hidden'></button>
//                 }
//             </div>
//         </div>
//     )
// }

// export default SidebarCard

const Card = ({ children }) => {
    return(
        <div>
            {children}
        </div>
    )
}

const SidebarCardHeader = ({ children }) => {
  return (
    <div className="bg-navbackground text-white text-xs p-4 font-bold border-t-0 rounded-t-md mt-8 mr-4">
      {children}
    </div>
  );
};

const SidebarCardBody = ({ children }) => {
  return (
    <div className="shadow-md rounded-b-md">
      <span>{children}</span>
    </div>
  );
};

const Button = ({children}) => {
    return(
        <button className="bg-black m-4 py-1 px-4 text-xs text-white border-0 rounded-md">
            {children}
        </button>
    )
}

export { SidebarCardHeader, SidebarCardBody, Card, Button };
