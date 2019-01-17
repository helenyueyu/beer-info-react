import React, { Component } from 'react'
import { Segment, Button, Label } from 'semantic-ui-react'

class DrinkDescription extends Component {
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
        <Button fluid style={{marginTop: 0}} className="desc-btn"  onClick={this.handleClick}><span style={{fontSize: '1.5rem'}}>{(this.state.button===true) ? '-' : '+'}</span><span> Description</span>
        </Button>
        {
          this.state.hideable &&
          <Segment.Group style={{marginTop: 0}}>
          <Segment>
            <Label className="label" style={{marginRight: '1rem'}}>Brew Description</Label>
            {this.props.description}
          </Segment>
          <Segment>
            <Label className="label" style={{marginRight: '1rem'}}>Brewer Advice</Label>
             {this.props.tips}
             <span><b> First Brewed: </b></span>
             <span><em>{this.props.first}, </em></span>
              <span><b>Contributor:</b></span>
              <span><em> {this.props.contributor.replace(/ *\<[^)]*\> */g, "")}</em></span>
          </Segment>
        </Segment.Group>
        }
      </div>
    )
  }
}


export default DrinkDescription
