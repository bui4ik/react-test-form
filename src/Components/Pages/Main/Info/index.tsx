import React from "react";
import {ProgressBar} from "react-bootstrap";
import TitlesSwitch from "./Titles";

const myStyles = {
    height: '6px'
} as React.CSSProperties;

const Info  = ({step}: any) => {
    return (
        <>
            <TitlesSwitch step={step}/>
            <h5 className='text-center mt-5 mb-5 text-info'>CREATE ACCOUNT</h5>
            <div >
                <ProgressBar variant="info" now={20 * step} className={`mb-5 `} style={myStyles}/>
            </div>
        </>
    )
};

export default Info;