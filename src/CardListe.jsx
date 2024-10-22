import React, { useState } from 'react'
import Card from './Card'

const CardListe = () => {
    const [Listimg,setListimg]=useState([
        {id:1, src:"/public/angular.png",stat:""},
        {id:1, src:"/public/angular.png",stat:""},
        {id:2, src:"/public/Css.png",stat:""},
        {id:2, src:"/public/Css.png",stat:""},
        {id:3, src:"/public/Html.png",stat:""},
        {id:3, src:"/public/Html.png",stat:""},
        {id:4, src:"/public/Js.png",stat:""},
        {id:4, src:"/public/Js.png",stat:""},
        {id:5, src:"/public/Larael.png",stat:""},
        {id:5, src:"/public/Larael.png",stat:""},
        {id:6, src:"/public/Node_js.png",stat:""},
        {id:6, src:"/public/Node_js.png",stat:""},
        {id:7, src:"/public/Symphony.png",stat:""},
        {id:7, src:"/public/Symphony.png",stat:""},
        {id:8, src:"/public/Symphony.png",stat:""},
        {id:8, src:"/public/Symphony.png",stat:""},
    ].sort(()=> Math.random()-0.5))

    const [prev, setprev] = useState(-1);

    const check=(curent)=>{
      if(Listimg[curent].id==Listimg[prev].id){
        Listimg[curent].stat="corect";
        Listimg[prev].stat="corect";
        setListimg([...Listimg])
        setprev(-1)
      }else{
        Listimg[curent].stat="wrong";
        Listimg[prev].stat="wrong";
        setListimg([...Listimg])
        setprev(-1)
      }
    }
    const handelclick=(id)=>{
        if(prev==-1){
          setprev(id)
          Listimg[id].stat="active";
          setListimg([...Listimg])
        }else{
          check(id)
        }
    }
  return (
    <div className="container">
    {Listimg.map((items,index)=>{
        return <Card key={index} items={items} id={index} handelclick={handelclick}/>
    })}
        
    </div>
  )
}

export default CardListe