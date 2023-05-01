"use client";

import * as React from "react";
import { Image, Text } from "@mantine/core";
import Box from "@mui/material/Box";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";
import { ImageProps } from "@/types/types";
import ImageComponent from "../ImageComponent/ImageComponent";

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    imagesData: ImageProps[];
}

function ImagesList(props: Props) {
    const { imagesData } = props;

    // console.log(imagesData);

    return (
        <Box>
            <ImageList variant="masonry" cols={3} gap={8}>
                {imagesData?.map((image: ImageProps) => (
                    <ImageListItem key={image?.alt_description}>
                        <ImageComponent imageData={image} />
                    </ImageListItem>
                ))}
            </ImageList>
        </Box>
    );
}

export default ImagesList;
