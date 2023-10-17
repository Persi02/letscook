import React, { useEffect } from 'react'

function Profil({ setIsLayout, isLayout }) {
    useEffect(() => { !isLayout ? setIsLayout(true) : null }, [isLayout]);
    return (
        <div>profil</div>
    )
}

export default Profil