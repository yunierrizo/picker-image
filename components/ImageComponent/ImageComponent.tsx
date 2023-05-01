import * as React from "react";
import { useState } from "react";
import { Image, Text } from "@mantine/core";
import { ImageProps } from "@/types/types";
import HoverUser from './HoverUser';
import ImageModal from "./ImageModal";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    imageData: ImageProps;
}


function ImageComponent(props: Props) {
    const { imageData } = props;

    // console.log(imageData)

    const [opened, setOpened] = useState(false);
    
    const handleClose = () =>{
        setOpened(false)
    }

    // console.log(opened)

    return (
        <div style={{ position: "relative" }}>
            <Image
                fit="contain"
                src={imageData?.urls.small}
                alt={imageData?.alt_description}
                withPlaceholder
                placeholder={
                    <Text align="center">{imageData?.alt_description}</Text>
                }
                onClick={() => setOpened(true)}
            />

            <HoverUser userData={imageData?.user} />

            <ImageModal
                opened={opened}
                handleClose={handleClose}
                imageData={imageData}
            />
        </div>
    );
}

export default ImageComponent;
