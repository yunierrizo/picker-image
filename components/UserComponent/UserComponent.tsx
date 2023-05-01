'use client'

import * as React from "react";
import { useState } from "react";
import { Image, Text } from "@mantine/core";
import { UserProps, ImageProps } from "@/types/types";
import UserHeader from "./UserHeader";
import UserContent from './UserContent';

interface Props {
    /**
     * Injected by the documentation to work in an iframe.
     * You won't need it on your project.
     */
    userData: UserProps;
    userImageList: ImageProps;
}

function UserComponent(props: Props){
    const { userData, userImageList } = props;

    // console.log(userData);
    console.log(userImageList);

    return (
        <>
            <UserHeader userData={userData} />
            <UserContent userImageList={userImageList} />
        </>
    );
}

export default UserComponent;