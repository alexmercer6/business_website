import { Box, Button, styled, Typography } from "@mui/material"
import heroImage from '../public/eyelash-large.jpg'
import theme from "../config/theme"
const Hero = styled('div')({
    backgroundImage: `linear-gradient(rgb(0,0,0,0.5), rgb(0,0,0,0.5)), url("${heroImage.src}")`,
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-evenly',
    
})

const Blurb = styled('h1')({
    fontSize: '45px',
    color: '#ffffff'
})

const Wrapper = styled('div')({
    width: '600px',

})

const StyledButton = styled(Button)({
    height: '80px',
    width: '200px',
    fontSize: '20px',
    fontWeight: 'bold',
    color: '#ffffff',
})

const Highlight = styled('span')({
    color: theme.palette.primary.main
})

function LandingPage() {
  return (
    <Hero> 
        <Wrapper>
            <Blurb>Enhance your <Highlight>natural</Highlight> beauty with our expert lash and brow services.</Blurb>
            <Typography variant="h6" color={theme.palette.primary.main}>
                From subtle enhancements to bold statements, our skilled stylists will work with you to achieve the perfect look. Indulge in the highest quality products and techniques for a truly transformative experience.            
            </Typography>
        </Wrapper>
        <Wrapper sx={{textAlign: 'center'}}>
            <StyledButton size="large" variant="contained" color="warning">Book Now</StyledButton>
        </Wrapper>
    </Hero>
  )
}

export default LandingPage