import React from 'react'
import { useEffect } from 'react';

export default function Admipage({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>About</div>
    )
}
