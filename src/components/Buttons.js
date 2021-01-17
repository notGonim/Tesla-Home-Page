import React from 'react'
import './btn.css'


export const Buttons = ({ imp, text, link }) => {
    return (
        <div className={`button ${imp === 'secondary' ? 'btn_white' : ''}`}>
            <a href={link}>
                {text}
            </a>
        </div>
    )
}
