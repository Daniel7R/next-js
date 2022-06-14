import React from 'react'
import Navbar from '@components/Navbar/Navbar'
import Footer from '@components/Footer/Footer'
import { Container } from 'semantic-ui-react'

const Layout = ({children}) => {
  return (
    <>
        <Navbar />
        <Container as="main" text>
        {
            children
        }
        </Container>
        <Footer />
    </>
  )
}

export default Layout