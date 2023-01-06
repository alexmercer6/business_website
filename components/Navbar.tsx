import styled from "@emotion/styled"
import { AppBar, Box, Button, IconButton, Toolbar, Link, styled as muiStyled } from "@mui/material"
import theme from '../config/theme'
function Navbar() {
    const StyledAppBar = muiStyled(AppBar)({
        // opacity: '0.5 !important',
        backgroundColor: 'rgb(0,0,0,0)'
    })
    const NavLink = styled.a`
        text-decoration: none;
        margin: 10px;
        cursor: pointer;
        color: white;
        font-size: 20px;
        font-style: bold;

        &:hover {
            transform: scale(1.1);
            color: ${theme.palette.primary.main};
        }
    `
    const Wrapper = styled.div`
        flex-grow: 1;
    `
    const Logo = styled.h1`
        flex-grow: 1;
        color: ${theme.palette.primary.main};
    `
  return (
    <Box sx={{flexGrow: 1}}>
        <StyledAppBar elevation={0}>
            <Toolbar>
                <Logo>Mimosa</Logo>
                <NavLink color="inherit" href="/contact-us">Contact Us</NavLink>
                <NavLink color="inherit" href="/book-an-appointment">Book an Appointment</NavLink>
                <NavLink color="inherit" href="/about-us">About us</NavLink>
            </Toolbar>
        </StyledAppBar>
    </Box>
  )
}

export default Navbar