import * as React from "react";
import { useState } from "react";
import {
    Group,
    Button,
    Stack,
    Text,
    Avatar,
    ActionIcon,
    HoverCard,
} from "@mantine/core";
import { ImageProps } from "@/types/types";
import styles from "./Image.module.css";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import OpenInNew from "@mui/icons-material/OpenInNew";
import VerifiedIcon from "@mui/icons-material/Verified";
import HoverUserDropdown from "./HoverUserDropdown";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    imageData: ImageProps;
}

function HeaderModal(props: Props) {
    const { imageData } = props;

    const [like, setLike] = useState(imageData?.liked_by_user);

    return (
        <Stack
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
            }}
        >
            <HoverCard
                width={320}
                shadow="md"
                withArrow
                openDelay={200}
                closeDelay={400}
            >
                <HoverCard.Target>
                    <Group
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            cursor:"pointer"
                        }}
                    >
                        <Avatar
                            src={imageData?.user?.profile_image?.medium}
                            radius="xl"
                        />
                        <Group
                            style={{
                                display: "flex",
                                flexDirection: "column",
                                gap: "5px",
                                alignItems: "start",
                            }}
                        >
                            <Text
                                // color="black"
                                size="sm"
                                weight={700}
                                sx={{ lineHeight: 1 }}
                            >
                                {imageData?.user?.name}
                            </Text>

                            {imageData?.user?.for_hire && (
                                <Text
                                    style={{ display: "flex", gap: "5px" }}
                                    color="#bbb"
                                    size="sm"
                                    weight={500}
                                    sx={{ lineHeight: 1 }}
                                >
                                    Available for contract{" "}
                                    <VerifiedIcon sx={{ fontSize: 15 }} />
                                </Text>
                            )}
                        </Group>
                    </Group>
                </HoverCard.Target>
                <HoverUserDropdown userData={imageData?.user} />
            </HoverCard>

            <Group>
                <ActionIcon
                    onClick={() => setLike(!like)}
                    variant="transparent"
                >
                    {like ? <FavoriteIcon /> : <FavoriteBorderIcon />}
                </ActionIcon>

                <Button
                    component="a"
                    target="_blank"
                    rel="noopener noreferrer"
                    href={imageData?.links?.html}
                    rightIcon={<OpenInNew />}
                    styles={(theme) => ({
                        root: {
                            backgroundColor: "#14BC7D",
                            border: 0,
                            // height: rem(42),
                            // paddingLeft: rem(20),
                            // paddingRight: rem(20),
                            "&:not([data-disabled])": theme.fn.hover({
                                backgroundColor: theme.fn.darken(
                                    "#14BC7D",
                                    0.05
                                ),
                            }),
                        },

                        leftIcon: {
                            marginRight: theme.spacing.md,
                        },
                    })}
                >
                    Unsplash
                </Button>
            </Group>
        </Stack>
    );
}

export default HeaderModal;
