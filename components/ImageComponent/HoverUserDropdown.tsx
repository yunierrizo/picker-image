import * as React from "react";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from "@mantine/core";
import { ImageUserProps } from "@/types/types";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import Link from "next/link";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    userData: ImageUserProps;
}

function HoverUserDropdown(props: Props) {
    const {userData} = props;

    return (
        <HoverCard.Dropdown
            style={{
                backgroundColor: "#303134",
                borderColor: "#303134",
            }}
        >
            <Group
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignContent: "center",
                    justifyContent: "center",
                    justifyItems: "center",
                    alignItems: "center",
                }}
            >
                <Link href={`/user/${userData?.username}`}>
                    <Stack
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignContent: "center",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                        }}
                    >
                        <Avatar
                            src={userData?.profile_image?.medium}
                            radius="xl"
                            size="lg"
                        />
                        <Stack
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                alignContent: "center",
                                justifyContent: "center",
                                justifyItems: "center",
                                alignItems: "center",
                            }}
                        >
                            <Text
                                // color="black"
                                size="sm"
                                weight={700}
                                sx={{ lineHeight: 1 }}
                            >
                                {userData?.name}
                            </Text>

                            <Text
                                // color="black"
                                size="sm"
                                weight={500}
                                sx={{ lineHeight: 1 }}
                            >
                                {userData?.username}
                            </Text>
                        </Stack>
                    </Stack>
                </Link>
                <Stack
                    spacing={5}
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        alignContent: "center",
                        justifyContent: "center",
                        justifyItems: "center",
                        alignItems: "center",
                    }}
                >
                    <Anchor
                        style={{
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                        }}
                        href={`https://twitter.com/${userData?.social?.twitter_username}`}
                        color="dimmed"
                        size="xs"
                        sx={{ lineHeight: 1 }}
                    >
                        {userData?.social?.twitter_username && (
                            <>
                                <TwitterIcon />@
                                {userData?.social?.twitter_username}
                            </>
                        )}
                    </Anchor>

                    <Anchor
                        style={{
                            display: "flex",
                            alignContent: "center",
                            justifyContent: "center",
                            justifyItems: "center",
                            alignItems: "center",
                        }}
                        href={`https://instagram.com/${userData?.social?.instagram_username}`}
                        color="dimmed"
                        size="xs"
                        sx={{ lineHeight: 1 }}
                    >
                        {userData?.social?.instagram_username && (
                            <>
                                <InstagramIcon />@
                                {userData?.social?.instagram_username}
                            </>
                        )}
                    </Anchor>
                </Stack>
            </Group>

            <Text size="sm" mt="md" align="center">
                {userData?.bio}
            </Text>

            <Group
                mt="md"
                spacing="xl"
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text size="sm">
                    <b>{userData?.total_photos}</b> Photos
                </Text>
                <Text size="sm">
                    <b>{userData?.total_collections}</b> Collections
                </Text>
            </Group>
        </HoverCard.Dropdown>
    );
}

export default HoverUserDropdown;