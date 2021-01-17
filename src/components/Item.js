import React from 'react'
import { Buttons } from './Buttons'
import './item.css'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';


export const Item = ({
    title, desc, descLink, bg, leftBtnText, leftBtnLink, rightBtnText, rightBtnLink, twoBtn, first }) => {
    return (
        <div className="item" style={{
            backgroundImage: `url(${bg})`
        }}>
            <div className="item_container">
                <div className="item_text">
                    <p>{title}</p>
                    <div className="item_txt__desc">
                        <p>{desc}</p>
                    </div>
                </div>
                <div className="item_lowerThird">
                    <div className="item_buttons">
                        <Buttons imp="primary" text={leftBtnText} link={leftBtnLink} />
                        {twoBtn && (
                            <Buttons imp="secondary" text={rightBtnText} link={rightBtnLink} />
                        )}
                    </div>
                    {first && (
                        <div className="item_expand">
                            <ExpandMoreIcon />
                        </div>
                    )}
                </div>
            </div>

        </div>
    )
}
