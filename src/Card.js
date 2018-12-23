import React from 'react'

const Card = (props)=>{
  let showNotes = () => {
    if (props.owner === "winnie") {
      return (
        <div>
          <p>{props.info} <i className="fas fa-greater-than"></i> </p>
        </div>
      )
    }else if(props.owner === "george"){
      return(
        <div>
          <p><i className="fas fa-less-than"></i> {props.info}</p>
        </div>
      )
    }else{
      return(
        <div>
          <p><i className="fas fa-less-than"></i> {props.info} <i className="fas fa-greater-than"></i> </p>
        </div>
      )
    }
  }
  return(
    <div>{showNotes()}</div>
  )
}

export default Card
