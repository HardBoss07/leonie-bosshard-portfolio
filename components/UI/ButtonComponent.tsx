import React from "react";
import "./ButtonComponent.css";

interface ButtonProps {
    text: string;
    style: string;
    onClick: () => void;
}

export default function ButtonComponent({text, style, onClick}: ButtonProps) {
    return (
        <div>
            <button
                className={style}
                onClick={onClick}
            >
                {text}
            </button>
        </div>
    );
}