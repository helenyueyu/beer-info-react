import React, { Component } from 'react'
import { Segment, Button, Label } from 'semantic-ui-react'

class Ingredients extends Component {
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
    let {ingredients} = this.props
    return (
      <div>
      <Button fluid className="desc-btn"  onClick={this.handleClick}><span style={{fontSize: '1.5rem'}}>{(this.state.button===true) ? '-' : '+'}</span><span> Ingredients</span>
      </Button>
        <Segment.Group style={{marginTop: 0}}>
          {this.state.hideable &&
          <Segment>
            <Label style={{marginRight: '0.5rem'}}>Malts</Label>
             {ingredients.malt.map((ing,index) => (index === ingredients.malt.length-1) ? <span key={index}><b>{ing.name}</b>: {ing.amount.value}{(ing.amount.unit == 'grams') ? 'g.' : (ing.amount.unit === 'kilograms') ? 'kg.' : ing.amount.unit} <span style={{color:'darkkhaki'}}>{ing.add}, {ing.attribute} </span></span> : <span key={index}><b>{ing.name}</b>:{ing.amount.value}{(ing.amount.unit === 'grams') ? 'g.' : (ing.amount.unit === 'kilograms') ? 'kg.' : ing.amount.unit}, <span style={{color:'darkkhaki'}}>{ing.add}, {ing.attribute} </span></span>)}
          </Segment>}
          {this.state.hideable &&
          <Segment>
            <Label style={{marginRight: '0.5rem'}}>Hops</Label>
            {ingredients.hops.map((ing,index) => (index === ingredients.hops.length-1) ? <span key={index}><b>{ing.name}</b>: {ing.amount.value}{(ing.amount.unit == 'grams') ? 'g.' : (ing.amount.unit === 'kilograms') ? 'kg.' : ing.amount.unit} <span style={{color:'darkkhaki'}}>{ing.add}, {ing.attribute} </span></span> : <span key={index}><b>{ing.name}</b>:{ing.amount.value}{(ing.amount.unit === 'grams') ? 'g.' : (ing.amount.unit === 'kilograms') ? 'kg.' : ing.amount.unit},  <span style={{color:'darkkhaki'}}>{ing.add}, { ing.attribute} </span></span>)}
          </Segment>
          }
          {this.state.hideable &&
          <Segment>
            <Label style={{transform: 'translateY(-0.5rem)', marginRight: '0.5rem'}}>Yeast</Label>
            {ingredients.yeast}
          </Segment>
        }
        </Segment.Group>
      </div>
    )
  }
}

export default Ingredients
