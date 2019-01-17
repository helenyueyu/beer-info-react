import React, { Component } from 'react'
import { Segment, Button, Icon, Label } from 'semantic-ui-react'

class Drink extends Component {
  state = {
    liked: Math.floor(Math.random()*100),
    disabled: false
  }
  handleClick = (e) => {
    e.preventDefault();
    this.setState({
      liked: this.state.liked + 1,
      disabled: !this.state.disabled
    })
  }
  render() {
    if (this.state.disabled === false) {
    return (
      <Segment secondary style={{marginBottom: '0'}}>


          <span style={{fontSize: '1.1rem'}}><b>{this.props.name}</b></span><br/> <span style={{fontSize: '0.8rem'}}>{this.props.tagline}</span>


          <Button as='div' labelPosition='right' style={{float: 'right', transform: 'translateY(-1.2rem)'}}>
          <Button icon onClick={this.handleClick}>
        <Icon name='heart' />
           <span> Like</span>
      </Button>
      <Label as='a' basic pointing='left'>
        {this.state.liked}
      </Label>
    </Button>
      </Segment>
    )
  } else {
    return (
      <Segment secondary style={{marginBottom: '0'}}>
          <span style={{fontSize: '1.1rem'}}><b>{this.props.name}</b></span> <br/> <span style={{fontSize: '0.8rem'}}>{this.props.tagline}</span>
          <Button as='div' labelPosition='right' style={{float: 'right', transform: 'translateY(-1.2rem)'}}>
          <Button icon onClick={this.handleClick} disabled>
        <Icon name='heart'/>
           <span> Liked</span>
      </Button>
      <Label as='a' basic pointing='left' style={{background: 'darkkhaki'}}>
        {this.state.liked}
      </Label>
    </Button>
      </Segment>
    )
  }
  }
}


export default Drink

/*
inverted color='red' secondary
*/
