
import * as React from "react";
import { useState } from "react";
import { Image, Text, Tabs } from "@mantine/core";
import { ImageProps } from "@/types/types";
import UserHeader from "./UserHeader";
import PhotoIcon from "@mui/icons-material/Photo";
import CollectionsIcon from "@mui/icons-material/Collections";
import BarChartIcon from "@mui/icons-material/BarChart";
import styles from "./User.module.css";
import ImageComponent from "../ImageComponent/ImageComponent";
import ImageList  from '../ImagesList/ImagesList';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    userImageList: ImageProps[];
}

function UserContent(props: Props){
    const {userImageList} = props;

    return (
        <Tabs color="gray" variant="outline" defaultValue="photos">
            <Tabs.List grow style={{ borderBottom: "0.0625rem solid #41434a" }}>
                <Tabs.Tab
                    className={styles.tabButton}
                    value="photos"
                    icon={<PhotoIcon />}
                >
                    Photos
                </Tabs.Tab>
                <Tabs.Tab
                    className={styles.tabButton}
                    value="collections"
                    icon={<CollectionsIcon />}
                >
                    Collections
                </Tabs.Tab>
                <Tabs.Tab
                    className={styles.tabButton}
                    value="stats"
                    icon={<BarChartIcon />}
                >
                    Stats
                </Tabs.Tab>
            </Tabs.List>

            <Tabs.Panel value="photos" pt="xs" style={{ padding: "5% 10%" }}>
                <ImageList imagesData={userImageList} />
            </Tabs.Panel>

            <Tabs.Panel value="collections" pt="xs">
                Collections tab content
            </Tabs.Panel>

            <Tabs.Panel value="stats" pt="xs">
                Stats
            </Tabs.Panel>
        </Tabs>
    );
}

export default UserContent;