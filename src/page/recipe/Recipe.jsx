import React from 'react'
import { useEffect } from 'react';

export default function Recipe({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>Recipe</div>
    )
}
