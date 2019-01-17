import React, { Component } from 'react'
import { Container, Segment, List } from 'semantic-ui-react'

import Drink from '../components/Drink'
import DrinkDescription from '../components/DrinkDescription'
import DrinkPairing from '../components/DrinkPairing'
import Ingredients from '../components/Ingredients'
import Properties from '../components/Properties'

class FifthPage extends Component {
  state = {
    data: null
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers?page=5&per_page=20')
      .then(res => res.json())
      .then(data => this.setState({
        data: data
      }))
      .catch(err => console.log(err))
  }
  render() {
      const { data } = this.state;
      return (
        <Container>
          <List>
            {
              data && data.map(x =>
                <List.Item key={x.id}>
                  <Segment.Group>
                    <Drink name={x.name} tagline={x.tagline}/>
                    <DrinkDescription description={x.description} tips={x.brewers_tips} contributor={x.contributed_by} first={x.first_brewed}/>
                    <DrinkPairing pairing={x.food_pairing}/>
                    <Ingredients ingredients={x.ingredients} />
                    <Properties ph={x.ph} ibu={x.ibu} method={x.method}/>
                  </Segment.Group>
              </List.Item>
              )
            }
          </List>
        </Container>
      );
  }
}

export default FifthPage;
