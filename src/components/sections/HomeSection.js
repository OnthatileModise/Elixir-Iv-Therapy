import React, {useState} from "react";
import backGroundImage from '../images/pexels-olia-danilevich-8964902.jpg';
import logo from "../images/shared-image.jpg"
import {
    Drawer,
    IconButton,
    List,
    styled,
    Toolbar,
    useTheme
} from "@mui/material";
import MuiAppBar from '@mui/material/AppBar';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const drawerWidth = 240;
styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        marginRight: -drawerWidth,
        ...(open && {
            transition: theme.transitions.create('margin', {
                easing: theme.transitions.easing.easeOut,
                duration: theme.transitions.duration.enteringScreen,
            }),
            marginRight: 0,
        }),
        /**
         * This is necessary to enable the selection of content. In the DOM, the stacking order is determined
         * by the order of appearance. Following this rule, elements appearing later in the markup will overlay
         * those that appear earlier. Since the Drawer comes after the Main content, this adjustment ensures
         * proper interaction with the underlying content.
         */
        position: 'relative',
    }),
);
const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
    transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
        }),
        marginRight: drawerWidth,
    }),
}));

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
}));

const HomeSection = () => {
    const theme = useTheme();
    const [open, setOpen] = useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <>
            <section className="home" id="home">
                <div className={"background1"} style={{
                    backgroundImage: `url(${backGroundImage})`,
                    height: '100vh',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                }}>
                    <AppBar position="fixed" open={open}>
                        <Toolbar>
                            <div style={{
                                backgroundImage: `url(${logo})`,
                            }} className="elixir-logo"></div>
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="end"
                                onClick={handleDrawerOpen}
                                sx={{...(open && {display: 'none'})}}
                            >
                                <MenuIcon className="icon-button"/>
                            </IconButton>
                        </Toolbar>
                    </AppBar>
                    <Drawer
                        sx={{
                            width: drawerWidth,
                            flexShrink: 0,
                            '& .MuiDrawer-paper': {
                                width: drawerWidth,
                            },
                        }}
                        variant="persistent"
                        anchor="right"
                        open={open}
                    >
                        <DrawerHeader>
                            <IconButton className="icon-button" onClick={handleDrawerClose}>
                                {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
                            </IconButton>
                        </DrawerHeader>
                        <List>
                            <ul className="menu">
                                <li><a href="#home" className="menu-btn hover-underline-animation" onClick={handleDrawerClose}>Home</a></li>
                                <br/>
                                <li><a href="#services" className="menu-btn hover-underline-animation" onClick={handleDrawerClose}>Our Services</a>
                                </li>
                                <br/>
                                <li><a href="#contact" className="menu-btn hover-underline-animation" onClick={handleDrawerClose}>Contact Us</a>
                                </li>
                            </ul>
                        </List>
                    </Drawer>
                    <h1 className={"background-header"}>HYDRATION AT YOUR DOORSTEP</h1>
                    <div className={"h1-background-content"}>
                        <h1 className={"h1-background-content-header"}>WHAT IS IV THERAPY?</h1>
                        <p className={"h1-background-content-header-p"}>IV
                            Therapy is a process of infusing vitamins, minerals and electrolytes directly into the
                            bloodstream
                            through a vein using an intravenous drip</p>
                        <div className={"deco-line"}/>
                        <h1 className={"h1-background-content-header"}>...IV Drips</h1>
                        <p className={"h1-background-content-header-p"}>Are
                            you feeling dehydrated, fatigued or run down? IV Therapy can help you get the hydration,
                            nutrients
                            and vitamins your body needs to feel it's absolute best ! We offer a range of IV Therapy
                            treatments to help you feel hydrated and rejuvenated </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default HomeSection;