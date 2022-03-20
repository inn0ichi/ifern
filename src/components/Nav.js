import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../assets/logo/ifernLogo.png';
import { Link, animateScroll as scroll } from "react-scroll";
import "./Nav.css";
import { useHistory } from "react-router-dom";

const pages = ['Home', 'About Us', 'Products', 'Contact Us'];


const Nav = () => {
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    const history = useHistory();

    return (
        <AppBar position="fixed" color="transparent" elevation={0}>
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' } }}
                    >
                        <img className='logo' src={Logo} alt="logo" />
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            <Link
                                activeClass="active"
                                to="homeBox"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                onClick={() => history.push('/')}
                            >
                                <MenuItem>
                                    <Typography textAlign="center">HOME</Typography>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="aboutUS"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">ABOUT US</Typography>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="products"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">PRODUCTS</Typography>
                                </MenuItem>
                            </Link>
                            <Link
                                activeClass="active"
                                to="contact"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}>
                                <MenuItem onClick={handleCloseNavMenu}>
                                    <Typography textAlign="center">CONTACT US</Typography>
                                </MenuItem>
                            </Link>
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <img src={Logo} alt="logo" className='logo' />
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' }, justifyContent: "center", alignItems: "center" }}>
                        <Link
                            activeClass="active"
                            to="homeBox"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                            onClick={() => history.push('/')}
                        >
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                HOME
                            </Button>
                        </Link>

                        <Link
                            activeClass="active"
                            to="aboutUS"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                ABOUT US
                            </Button>
                        </Link>
                        <Link
                            activeClass="active"
                            to="products"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                PRODUCTS
                            </Button>
                        </Link>
                        <Link
                            activeClass="active"
                            to="contact"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}>
                            <Button
                                onClick={handleCloseNavMenu}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                CONTACT US
                            </Button>
                        </Link>
                    </Box>


                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Nav;