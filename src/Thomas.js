import React from 'react'
import Card from './Card'

export default class Thomas extends React.Component{
  displayCards = () =>{
    return this.props.notes.map(note=>{
       return <Card owner="thomas" key={note} info={note}/>
    })
  }


  render(){
    return(
      <div className="Thomas">
        <h1>Thomas</h1>
        {this.displayCards()}
        <button onClick={(e)=>this.props.addACard(e, 'thomasCards', window.prompt())}>Add a Card</button>

      </div>
    )
  }
}
