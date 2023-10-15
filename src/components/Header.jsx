import React, { useState } from 'react';
import { Box, useTheme, Typography, IconButton, useMediaQuery } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import logo from "/images/logo.png";

const links = [
    { title: "home", path: "/" },
    { title: "our shop", path: "/shop" },
    { title: "product details", path: "/products" },
    { title: "contact us", path: "/contact" },
];

const Header = () => {
    const theme = useTheme();
    const location = useLocation().pathname;
    const [open, setOpen] = useState(false);
    const isMobile = useMediaQuery(theme.breakpoints.down('md'));

    const toggleDrawer = () => setOpen(!open);

    const linkStyle = {
        fontSize: {xs : "15px" , md : "20px" },
        textTransform: "capitalize",
        fontWeight: 300,
        letterSpacing: "2px",
        padding: "10px 15px",
        borderRadius: "100px",
        transition: "background-color 200ms linear",
        "&:hover": { backgroundColor: "rgba(255, 255, 255, 0.10)" },
    };

    const activeLinkStyle = {
        ...linkStyle,
        backgroundColor: "rgba(255, 255, 255, 0.10)",
    };

    const menuStyle = {
        position: 'absolute',
        top: '100%',
        left: '50%',
        width: '80%',
        backgroundColor: "#fff",
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        transform: open ? "translate(-50%, 0)" : "translate(-50%, -100%)",
        opacity: open ? 1 : 0,
        visibility: open ? "visible" : "hidden",
        transition: "transform 300ms linear , opacity 300ms linear ",
    };

    return (
        <Box
            sx={{
                backgroundColor: theme.palette.mainColor.primary,
                borderBottomLeftRadius: "35px",
                borderBottomRightRadius: "35px",
                position: 'sticky',
                top: 0,
                zIndex: 2,
            }}
        >
            <Box sx={{ width: "90%", mx: "auto", p: "15px", display: "flex", justifyContent: "space-between", alignItems: "center", borderBottom: "1px solid rgba(255, 255, 255, 0.2)" }}>
                <Box sx = {{width : { xs : "125px" , md : "158px"} }} >
                    <img src={logo} alt="logo"  />
                </Box>

                {isMobile ? (
                    <IconButton onClick={toggleDrawer} sx={{ color: "white" }}>
                        {open ? <CloseIcon /> : <MenuIcon />}
                    </IconButton>
                ) : (
                    <Box sx={{ display: 'flex', gap: 2 }}>
                        {links.map(({ title, path }, i) => (
                            <Link key={i} to={path} >
                                <Typography variant="a" color="white" sx={location === path ? activeLinkStyle : linkStyle}>
                                    {title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                )}

                {isMobile && (
                    <Box sx={{ ...menuStyle, mt: "20px" }}>
                        {links.map(({ title, path }, i) => (
                            <Link key={i} to={path} onClick={toggleDrawer}>
                                <Typography
                                    textTransform="capitalize"
                                    variant="a" color={location === path ? theme.palette.lightRed.primary : "#1e1e1e"}>
                                    {title}
                                </Typography>
                            </Link>
                        ))}
                    </Box>
                )}
            </Box>
        </Box >
    );
};

export default Header;