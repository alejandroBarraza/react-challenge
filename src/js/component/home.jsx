import React from 'react'
import rigoImage from '../../img/rigo-baby.jpg'

import { Navbar } from './Navbar'
import { Container } from './Container'
import { Jumbotron } from './Jumbotron'
import { CardContainer } from './CardContainer'
import { Card } from './Card'
import { NavItem } from './NavItem'
//create your first component
const Home = () => {
  return (
    <>
      <Navbar logo='Start Bootstrap'>
        <NavItem />
      </Navbar>
      <Container>
        <Jumbotron />
        <CardContainer />
      </Container>
    </>
  )
}

export default Home
