"use client";

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CssBaseline from "@mui/material/CssBaseline";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import Fade from "@mui/material/Fade";
import Logo from "../../public/ImagePickerLogo.png";
import Image from "next/image";
import { Input } from "@mantine/core";
import SearchIcon from "@mui/icons-material/Search";
import styles from "./Navigation.module.css"
import Link from "next/link";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    window?: () => Window;
    children: React.ReactElement;
}

function ElevationScroll(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
        target: window ? window() : undefined,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0,
    });
}

function ScrollTop(props: Props) {
    const { children, window } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({
        target: window ? window() : undefined,
        disableHysteresis: true,
        threshold: 100,
    });

    const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
        const anchor = (
            (event.target as HTMLDivElement).ownerDocument || document
        ).querySelector("#back-to-top-anchor");

        if (anchor) {
            anchor.scrollIntoView({
                block: "center",
            });
        }
    };

    return (
        <Fade in={trigger}>
            <Box
                onClick={handleClick}
                role="presentation"
                sx={{ position: "fixed", bottom: 16, right: 16 }}
            >
                {children}
            </Box>
        </Fade>
    );
}

function Navigation(props: Props) {
    // console.log(process.env.REACT_APP_API_KEY, "asdasd");
    return (
        <React.Fragment>
            <CssBaseline />
            <ElevationScroll {...props}>
                <AppBar
                    style={{
                        backgroundColor: "#202124eb",
                        backdropFilter: "blur(10px)",
                        zIndex: "5",
                    }}
                >
                    <Container
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            justifyContent: "space-between",
                        }}
                    >
                        <Link href="/">
                            <Toolbar style={{ gap: "20px" }}>
                                <Image
                                    src={Logo}
                                    alt="Favicon"
                                    width={40}
                                    height={40}
                                />
                                <Typography variant="h6" component="div">
                                    Image Picker
                                </Typography>
                            </Toolbar>
                        </Link>

                        <Toolbar className={styles.toolBarSearch}>
                            <Input
                                className={styles.inputSearch}
                                icon={<SearchIcon />}
                                placeholder="Search"
                                radius="xl"
                            />
                        </Toolbar>
                    </Container>
                </AppBar>
            </ElevationScroll>
            <Toolbar id="back-to-top-anchor" />
            <ScrollTop {...props}>
                <Fab
                    size="small"
                    style={{ backgroundColor: "#303134", color: "white" }}
                    aria-label="scroll back to top"
                >
                    <KeyboardArrowUpIcon />
                </Fab>
            </ScrollTop>
        </React.Fragment>
    );
}

export default Navigation;
