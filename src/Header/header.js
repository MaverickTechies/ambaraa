import React, { useEffect, useRef } from 'react';
import {
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Typography,
    Menu,
    Container,
    Avatar,
    Button,
    MenuItem
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

const Header = (props) => {
    const { sections } = props;
    const headerRef = useRef(null);
    const [anchorElNav, setAnchorElNav] = React.useState(null);

    useEffect(() => {
        const updateHeaderHeight = () => {
          if (headerRef.current) {
            document.documentElement.style.setProperty(
              '--header-height',
              `${headerRef.current.offsetHeight}px`
            );
          }
        };
    
        // Set initial height
        updateHeaderHeight();
    
        // Listen for resize events
        const resizeObserver = new ResizeObserver(() => updateHeaderHeight());
        resizeObserver.observe(headerRef.current);
    
        return () => {
          resizeObserver.disconnect();
        };
    }, []);

    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: "smooth", block: "start" });
    };

    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar ref={headerRef} position="fixed">
            <Container maxWidth="xl">
                <Toolbar disableGutters sx={{ justifyContent: 'space-between' }}>
                    <Box sx={{ flexGrow: 0 , display: "flex" ,flexDirection:'row',alignItems:'center',gap: "10px"}}>
                        <Avatar alt="Ambaraa Logo" src="/images/logo.jpg" />
                        <Typography
                            variant="h6"
                            noWrap
                            sx={{
                                mr: 2,
                                fontWeight: 400,
                                letterSpacing: '.1rem'
                            }}
                        >
                            AMBARAA
                        </Typography>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'flex', md: 'none' } }}>
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
                            sx={{ display: { xs: 'block', md: 'none' } }}
                        >
                            {sections.map((section) => (
                                <MenuItem key={section.title} onClick={() => scrollToSection(section.id)}>
                                <Typography sx={{ textAlign: 'center' }}>{section.title}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>
                    <Box sx={{ flexGrow: 0, display: { xs: 'none', md: 'flex' } }}>
                        {sections.map((section) => (
                            <Button
                                key={section.id}
                                onClick={() => scrollToSection(section.id)}
                                sx={{ my: 2, color: 'white', display: 'block' }}
                            >
                                {section.title}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default Header;
