import { useState } from 'react'
import { Navbar } from './components/navbar'
import { Carr } from './components/carr'
import { Container } from '@chakra-ui/react'
import { Footer } from './components/footer'

function App() {
  const [] = useState(0)

  return (
    <>
      <Navbar />
      <Container as="main" maxWidth="70%" mt="70px" shadow="2xl" shadowColor="black">
      <Carr/>
      <Carr/>
      </Container>
      <Footer />
    </>
  )
}

export default App
