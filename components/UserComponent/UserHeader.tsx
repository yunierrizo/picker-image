import * as React from "react";
import { useState } from "react";
import { Image, Text } from "@mantine/core";
import { Grid, Avatar, Group, Title, Tooltip, Popover } from "@mantine/core";
import { UserProps } from "@/types/types";
import styles from "./User.module.css";
import PlaceIcon from "@mui/icons-material/Place";
import EmojiEventsIcon from "@mui/icons-material/EmojiEvents";
import PaidIcon from "@mui/icons-material/Paid";
import PublicIcon from "@mui/icons-material/Public";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    userData: UserProps;
}

function UserHeader(props: Props) {
    const { userData } = props;

    const [opened, { close, open }] = useDisclosure(false);

    return (
        <Grid justify="center" style={{ padding: "5% 10%" }}>
            <Grid.Col style={{ position: "relative" }} sm={3} md={3} lg={3}>
                <Avatar
                    className={styles.userAvatar}
                    variant="outline"
                    radius="xl"
                    size="xl"
                    src={userData?.profile_image?.large}
                />

                {userData?.badge && (
                    <div className={styles.avatarPopover}>
                        <Tooltip
                            position="right"
                            label={userData?.badge?.title}
                            style={{
                                backgroundColor: "#303134",
                                color: "white",
                                fontSize: "small",
                            }}
                        >
                            <Link
                                href={userData?.badge?.link}
                                onMouseEnter={open}
                                onMouseLeave={close}
                            >
                                <div className={styles.avatarTrophy}>
                                    <EmojiEventsIcon sx={{ fontSize: 20 }} />{" "}
                                </div>
                            </Link>
                        </Tooltip>
                    </div>
                )}
            </Grid.Col>

            <Grid.Col
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "20px",
                }}
                sm={9}
                md={9}
                lg={9}
            >
                {/* <Group> */}
                <Title size="h1" order={2}>
                    {userData?.name}
                </Title>

                <Text
                    // color="black"
                    size="md"
                    weight={500}
                    sx={{ lineHeight: 1 }}
                >
                    {userData?.bio}
                </Text>

                <Link
                    className={styles.Links}
                    href={`https://www.google.com/maps/place/${userData?.location}`}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <Group className={styles.headerLinks}>
                        <PlaceIcon
                            // style={{ color: "#bbb" }}
                            sx={{ fontSize: 20 }}
                        />

                        <Text
                            // color="black"
                            size="md"
                            weight={500}
                            sx={{ lineHeight: 1 }}
                        >
                            {userData?.location}
                        </Text>
                    </Group>
                </Link>

                {userData?.social?.paypal_email && (
                    <Link
                        className={styles.Links}
                        href={userData?.social?.paypal_email}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Group className={styles.headerLinks}>
                            <PaidIcon
                                // style={{ color: "#bbb" }}
                                sx={{ fontSize: 20 }}
                            />

                            <Text
                                // color="black"
                                size="md"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                            >
                                Paypal Donations to @
                                {userData?.social?.paypal_email}
                            </Text>
                        </Group>
                    </Link>
                )}

                {userData?.social?.portfolio_url && (
                    <Link
                        className={styles.Links}
                        href={userData?.social?.portfolio_url}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Group className={styles.headerLinks}>
                            <PublicIcon
                                // style={{ color: "#bbb" }}
                                sx={{ fontSize: 20 }}
                            />

                            <Text
                                // color="black"
                                size="md"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                            >
                                Portfolio
                            </Text>
                        </Group>
                    </Link>
                )}
                {userData?.social?.instagram_username && (
                    <Link
                        className={styles.Links}
                        href={`https://www.instagram.com/${userData?.social?.instagram_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Group className={styles.headerLinks}>
                            <InstagramIcon
                                // style={{ color: "#bbb" }}
                                sx={{ fontSize: 20 }}
                            />

                            <Text
                                // color="black"
                                size="md"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                            >
                                Instagram
                            </Text>
                        </Group>
                    </Link>
                )}
                {userData?.social?.twitter_username && (
                    <Link
                        className={styles.Links}
                        href={`https://twitter.com/${userData?.social?.twitter_username}`}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <Group className={styles.headerLinks}>
                            <TwitterIcon
                                // style={{ color: "#bbb" }}
                                sx={{ fontSize: 20 }}
                            />

                            <Text
                                // color="black"
                                size="md"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                            >
                                Twitter
                            </Text>
                        </Group>
                    </Link>
                )}

                {/* </Group> */}
            </Grid.Col>
        </Grid>
    );
}

export default UserHeader;
