/**
 * ButtonComponent.tsx
 * @author Matteo Bosshard
 * @version 11.03.2025
 */

"use client"
import ButtonComponent from "@/app/components/ButtonComponent";
import {useState} from "react";

export default function Home() {
  const [counter, setCounter] = useState(0);

  return (
    <>
      <ButtonComponent
          text={counter.toString()}
          onClick={() => setCounter(prev => prev + 1)}
      />
    </>
  );
}
