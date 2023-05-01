import * as React from "react";
import { useState } from "react";
import {
    Modal,
    Group,
    useMantineTheme,
    Text,
    Image,
    ScrollArea,
    CloseButton,
} from "@mantine/core";
import { ImageProps } from "@/types/types";
import styles from "./Image.module.css";
import HeightIcon from "@mui/icons-material/Height";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import DescriptionIcon from "@mui/icons-material/Description";
import HeaderModal from "./HeaderModal";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    opened: boolean;
    handleClose: () => void;
    imageData: ImageProps;
}

function ImageModal(props: Props) {
    const { opened, handleClose, imageData } = props;
    const theme = useMantineTheme();

    const createdAt = new Date(imageData?.created_at);

    const [like, setLike] = useState(false);

    // console.log(imageData);

    return (
        <Modal
            withCloseButton={false}
            title={<HeaderModal imageData={imageData}/>}
            className={styles.modal}
            centered
            size="90%"
            opened={opened}
            onClose={handleClose}
            transitionProps={{
                transition: "fade",
                duration: 100,
                timingFunction: "linear",
            }}
            overlayProps={{
                color: theme.colors.dark[9],
                zIndex: "9",
                // theme.colorScheme === "dark"
                //     ? theme.colors.dark[9]
                //     : theme.colors.gray[2],
                opacity: 0.55,
                blur: 3,
            }}
            scrollAreaComponent={ScrollArea.Autosize}
        >

            <Image
                className={styles.modalImage}
                height="100%"
                width="auto"
                src={imageData?.urls.full}
                alt={imageData?.alt_description}
                withPlaceholder
                placeholder={
                    <Text align="center">{imageData?.alt_description}</Text>
                }
            />
            <Group
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "start",
                    color: "#bbb",
                    marginTop: "50px",
                }}
            >
                {imageData?.description && (
                    <Group style={{ gap: "5px" }}>
                        <DescriptionIcon
                            style={{ color: "#bbb" }}
                            sx={{ fontSize: 15 }}
                        />

                        <Text
                            // color="black"
                            size="sm"
                            weight={500}
                            sx={{ lineHeight: 1 }}
                        >
                            {imageData?.description}
                        </Text>
                    </Group>
                )}

                <Group style={{ gap: "5px" }}>
                    <HeightIcon
                        style={{ color: "#bbb" }}
                        sx={{ fontSize: 15 }}
                    />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        {imageData?.height} pixels
                    </Text>
                </Group>

                <Group style={{ gap: "5px" }}>
                    <HeightIcon
                        style={{ transform: "rotate(90deg)", color: "#bbb" }}
                        sx={{ fontSize: 15 }}
                    />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        {imageData?.width} pixels
                    </Text>
                </Group>

                {/* <Group>
                    <LocationOnIcon style={{ color: "#bbb" }} />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        {imageData?.width} pixels
                    </Text>
                </Group> */}
                <Group style={{ gap: "5px" }}>
                    <CalendarMonthIcon
                        style={{ color: "#bbb" }}
                        sx={{ fontSize: 15 }}
                    />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        {createdAt.toDateString()}
                    </Text>
                </Group>
                {/* <Group>
                    <CameraAltIcon style={{ color: "#bbb" }} />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        {imageData?.created_at}
                    </Text>
                </Group> */}
                <Group style={{ gap: "5px" }}>
                    <VerifiedUserIcon
                        style={{ color: "#bbb" }}
                        sx={{ fontSize: 15 }}
                    />

                    <Text
                        // color="black"
                        size="sm"
                        weight={500}
                        sx={{ lineHeight: 1 }}
                    >
                        Free use under the Unsplash License
                    </Text>
                </Group>
            </Group>
        </Modal>
    );
}

export default ImageModal;
