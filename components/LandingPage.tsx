import { Box, Button, Rating, styled, Typography } from "@mui/material"
import heroImage from '../public/eyelash-large.jpg'
import theme from "../config/theme"
import FadeInOut from "./FadeInOut"
const Hero = styled('div')({
    backgroundImage: `linear-gradient(rgb(0,0,0,0.8), rgb(0,0,0,0.8)), url("${heroImage.src}")`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '100vw',
    height: '100vh',
    display: 'flex',
    alignItems: 'center', 
    justifyContent: 'space-evenly',

    [theme.breakpoints.down('lg')]: {
        flexDirection: 'column',
        textAlign: 'center',
      },
    
})

export const Blurb = styled('h1')({
    fontSize: '45px',
    color: '#ffffff',

    [theme.breakpoints.down('md')]: {
        fontSize: '30px',
      },
})

const Caption = styled(Typography)({
    // [theme.breakpoints.down('sm')]: {
    //     display: 'none',
    //   },
})


const Wrapper = styled('div')({
    width: '600px',

    [theme.breakpoints.down('md')]: {
        width: '90%',  
      },

})

const FlexContainer = styled('div')({
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center !important'
})

const StyledButton = styled(Button)({
    

    [theme.breakpoints.up('sm')]: {
        height: '80px',
        width: '200px',
        fontSize: '20px',
        fontWeight: 'bold',
        color: '#ffffff',
        display: 'block'
      },
})

const MobileButton = styled(Button)({
    display: 'none',
    [theme.breakpoints.down('sm')]: {
        display: 'block'
      },
})

const Highlight = styled('span')({
    color: theme.palette.primary.main
})

const services = ["Classic Full Set", "Hybrid Full Set", "Volume Full Set", "Mega Volume Full Set", "Lash Lift"]

function LandingPage() {
  return (
    <Hero> 
        <Wrapper>
            <Blurb>Enhance your <Highlight>natural</Highlight> beauty with our expert lash and brow services.</Blurb>
            <Caption variant="h6" color={theme.palette.primary.main}>
                From subtle enhancements to bold statements, our skilled stylists will work with you to achieve the perfect look. Indulge in the highest quality products and techniques for a truly transformative experience.            
            </Caption>
        </Wrapper>
        <Wrapper>
            <FlexContainer>
                {/* <Rating name="read-only" value={5} readOnly /> */}
                <FadeInOut items={services}/>
                <StyledButton size="large" variant="contained" color="warning">Book Now</StyledButton>
            </FlexContainer>
        </Wrapper>
    </Hero>
  )
}

export default LandingPage