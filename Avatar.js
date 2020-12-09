import React, { Component } from 'react';
import './Avatar.css';
import Avatarlist from './Avatarlist';
import 'tachyons';



 class Avatar extends Component{
      
   constructor(){
         super();
         this.state = {
            name: "Welcome to Avatar world"
         }
   }
    namechange(){
         this.setState({
             name: "Subscribe to PatelTechnicial Channel"
         })
    } 

     render() {
       // array used ***
      const avaratlistarray = [
         {
            id:1,
            name:"Amit",
            work:"Leader"

         },
         {
          id:2,
          name:"Sandhaya",
          work:"Software Engineer"

       },
       {
          id:3,
          name:"Patel",
          work:"Web Developer"

       },
       {
          id:4,
          name:"PatelTechnicial",
          work:"Full Stack Developer"

       }

   ]

  //  using array MAPing
     const arrayavartcard =  avaratlistarray.map( (avatarcard,i ) => {
                      return <Avatarlist  key={i} id={avaratlistarray[i].name} 
                      name={avaratlistarray[i].name} 
                      work={avaratlistarray[i].work} />
      }    )

        return (  
            <div className="mainpage">
                <h1>{this.state.name} </h1>
                {arrayavartcard}
                       <button onClick= { () => this.namechange() }> Subscribe </button>
               </div>
         )
   }
 }

   

      
      //   return (  
      //      <div className="mainpage">
      //             <h1> Welcome to Avatar World</h1>

      //                  {/* <Avatarlist  id={avaratlistarray[0].name} ******arraylist uisng lin6 60 to 71
      //   //                             name={avaratlistarray[0].name} 
      //   //                             work={avaratlistarray[0].work} />
      //   //               <Avatarlist  id={avaratlistarray[1].name}  
      //   //                           name={avaratlistarray[1].name} 
      //   //                           work={avaratlistarray[1].work} />
      //   //               <Avatarlist  id={avaratlistarray[2].name}
      //   //                             name={avaratlistarray[2].name} 
      //   //                             work={avaratlistarray[2].work} />
      //   //               <Avatarlist  id={avaratlistarray[3].name} 
      //   //                           name={avaratlistarray[3].name} 
      //   //                            work={avaratlistarray[3].work} />
      //   //                */}

      //                {arrayavartcard} 
      //                   <button> Subscribe </button>
      //           </div>
      //    )                                       


export default Avatar;