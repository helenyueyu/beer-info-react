import React from 'react'
import { Container, Header, Image } from 'semantic-ui-react'
//Root Image
import img from '../bar.jpg'

const Index = () => {
  return (
    <Container>
      <Header as='h1' align="center">
        Alcohol Lookup
      </Header>
        <Image src={img} size="large" style={{margin: 'auto'}}/>
    </Container>
  )
}

export default Index;
