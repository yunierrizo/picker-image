import * as React from "react";
import HoverUserDropdown from './HoverUserDropdown';
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { HoverCard, Avatar, Text, Group, Anchor, Stack } from "@mantine/core";
import { UserProps } from "@/types/types";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    userData: UserProps;
}

function HoverUser(props: Props) {
    const { userData } = props;

    return (
        <Group
            position="center"
            style={{ position: "absolute", bottom: 15, left: 15 }}
        >
            <HoverCard
                width={320}
                shadow="md"
                withArrow
                openDelay={200}
                closeDelay={400}
            >
                <HoverCard.Target>
                    <Avatar src={userData?.profile_image?.medium} radius="xl" style={{cursor:"pointer"}} />
                </HoverCard.Target>
                
                <HoverUserDropdown userData={userData}/>
            </HoverCard>
        </Group>
    );
}

export default HoverUser;
