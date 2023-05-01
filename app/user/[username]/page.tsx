import Image from "next/image";
import { Inter } from "next/font/google";
import ImagesList from "@/components/ImagesList/ImagesList";
import styles from "./page.module.css";
import UserComponent from "@/components/UserComponent/UserComponent";

const inter = Inter({ subsets: ["latin"] });

async function getUserData(username: string) {
    const res = await fetch(
        `${process.env.REACT_APP_API_URI}users/${username}`,
        {
            method: "GET",
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
            },
        }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

async function getUserImageList(username: string) {
    const res = await fetch(
        `${process.env.REACT_APP_API_URI}users/${username}/photos`,
        {
            method: "GET",
            headers: {
                Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
            },
        }
    );
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function User({ params }: { params: { username: string } }) {
    const { username } = params;

    const userData = await getUserData(username);
    const userImageList = await getUserImageList(username);

    return <UserComponent userData={userData} userImageList={userImageList} />;
}
