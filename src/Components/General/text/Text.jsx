import React from 'react'

export default function Text({ tag, text, className, size, weight, color }) {
    const Tag = tag;

    return (
        <Tag className={className} size='16px' weight='300' color='black'
            style={{ fontSize: size, fontWeight: weight, color: color }}>
            {text}
        </Tag>
    )
}
