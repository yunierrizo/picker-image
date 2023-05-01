import Image from "next/image";
import { Inter } from "next/font/google";
import ImagesList from "@/components/ImagesList/ImagesList";
import styles from "./page.module.css";

const inter = Inter({ subsets: ["latin"] });

async function getImagesData() {
    const res = await fetch(`${process.env.REACT_APP_API_URI}photos`, {
        method: "GET",
        headers: {
            Authorization: `Client-ID ${process.env.REACT_APP_API_KEY}`,
        },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    // Recommendation: handle errors
    if (!res.ok) {
        // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch data");
    }

    return res.json();
}

export default async function Home() {

    const imagesData = await getImagesData();

    return (
        <main className={styles.main}>
            <ImagesList imagesData ={imagesData}/>
        </main>
    );
}
