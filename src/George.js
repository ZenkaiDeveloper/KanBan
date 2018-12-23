import React from 'react'
import Card from './Card'

export default class George extends React.Component{

  displayCards = () =>{
    return this.props.notes.map(note=>{
       return <Card key={note} owner="george" info={note}/>
    })
  }

  render(){
    return(
      <div className="George">
        <h1>George</h1>
        {this.displayCards()}

        <button onClick={(e)=>this.props.addACard(e, "georgeCards", window.prompt())}>Add a Card</button>
      </div>
    )
  }
}
