import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'

class DrinkPairing extends Component {
  state = {
    hideable: false,
    button: false
  }
  handleClick = () => {
    this.setState({
      hideable: !this.state.hideable,
      button: !this.state.button
    })
  }
  render() {
    return (
      <div>
        <Button fluid className="desc-btn"  onClick={this.handleClick}><span style={{fontSize: '1.5rem'}}>{(this.state.button===true) ? '-' : '+'}</span><span> Food Pairings</span>
        </Button>
        {this.state.hideable && <Segment style={{marginTop: 0}}>
            {this.props.pairing.map((pairing,index) => (index===this.props.pairing.length-1) ? <span key={index}>{pairing.toLowerCase()} </span> : <span key={index}>{pairing.toLowerCase()}, </span>)}
        </Segment>}
      </div>
    )
  }
}


export default DrinkPairing
