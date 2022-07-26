import React from 'react';
import LogoPNG from "@/assets/kumham-logo.png";

export default function ApplicationLogo({ className }) {
    return (
        <img src={LogoPNG} alt="logo" className="w-24 h-24 m-auto" />
    );
}
