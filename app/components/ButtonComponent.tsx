/**
 * ButtonComponent.tsx
 * @author Matteo Bosshard
 * @version 11.03.2025
 */
import React from "react";

interface ButtonProps {
    text: string;
    onClick: () => void;
}

export default function ButtonComponent({ text, onClick }: ButtonProps) {
    return (
        <div>
            <button
                className="px-4 py-2 bg-blue-600 text-white font-semibold rounded shadow hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 active:bg-blue-800 transition"
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
}