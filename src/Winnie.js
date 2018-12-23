import React from 'react'
import Card from './Card'

export default class Winnie extends React.Component{


  displayCards = () =>{
    return this.props.notes.map(note=>{
       return <Card owner="winnie" key={note} info={note}/>
    })
  }

  render(){
    return(
      <div className="Winnie">
        <h1>Winnie</h1>
        {this.displayCards()}
        <button onClick={(e)=>this.props.addACard(e, "winnieCards", window.prompt())}>Add a Card</button>
      </div>

    )
  }
}
