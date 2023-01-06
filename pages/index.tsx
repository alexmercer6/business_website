import styled from '@emotion/styled'
import { Box } from '@mui/system'
import React from 'react'
import LandingPage from '../components/LandingPage'
import Navbar from '../components/Navbar'
const Container = styled.div`
  max-width: 1200px;
  margin: auto;
`
function Home() {
  return (
    <Box>
      <Navbar/>
        <LandingPage/>
    </Box>
    
  )
}

export default Home