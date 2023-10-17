import React from 'react'
import { useEffect } from 'react';

export default function MeanPlanners({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>MeanPlanners</div>
    )
}
