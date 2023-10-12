import React from 'react'
import { useEffect } from 'react';

export default function Courses({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>Courses</div>
    )
}
