"use client"
import ButtonComponent from "@/components/UI/ButtonComponent";
import {useState} from "react";
import IntroPage from "@/components/Pages/IntroPage";

export default function Home() {
    const [counter, setCounter] = useState(0);

    return (
        <>
            <IntroPage/>
        </>
    );
}
