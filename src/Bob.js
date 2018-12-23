import React from 'react'
import Card from './Card'

export default class Bob extends React.Component{

  displayCards = () =>{
    return this.props.notes.map(note=>{
       return <Card owner="bob" key={note} info={note}/>
    })
  }


  render(){
    return(
      <div className="Bob">
        <h1>Bob</h1>
        {this.displayCards()}
        <button onClick={(e)=>this.props.addACard(e, "bobCards", window.prompt())}>Add a Card</button>
      </div>
    )
  }
}
