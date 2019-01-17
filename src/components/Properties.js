import React, { Component } from 'react'
import { Segment, Button } from 'semantic-ui-react'

class Properties extends Component {
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
        <Button fluid className="desc-btn"  onClick={this.handleClick}><span style={{fontSize: '1.5rem'}}>{(this.state.button===true) ? '-' : '+'}</span><span> Properties</span>
        </Button>
        {this.state.hideable && <Segment style={{marginTop: 0}}>
            <b>PH</b>: {this.props.ph} | <b>IBU</b>: {this.props.ibu} | <b>Mash Temp</b>: {this.props.method.mash_temp[0].temp.value} | <b>Fermentation Temp</b>: {this.props.method.fermentation.temp.value}
        </Segment>}
      </div>
    )
  }
}


export default Properties
