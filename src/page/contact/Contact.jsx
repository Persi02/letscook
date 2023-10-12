import React from 'react'
import { useEffect } from 'react';

export default function Contact({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>Contact</div>
    )
}
