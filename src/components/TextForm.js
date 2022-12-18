import React, { useState } from 'react'

export default function TextForm(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    
    const [text, setText] = useState("")
    
    const changeToLowerCase = () => {
        let newText = text.toLowerCase()
        setText(newText)
        props.showAlert("Converted To Lowercase", "success")
    }

    const changeToUpperCase = () => {
        let newText = text.toUpperCase()
        setText(newText)
        props.showAlert("Converted To Uppercase", "success")
    }

    const handleCopy = () => {
        let text = document.getElementById("myBox")
        text.select()
        navigator.clipboard.writeText(text.value)
        props.showAlert("Copied To Clipboard", "success")
    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/)
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces", "success")
    }

    const clearAllBtn = () => {
        let newText = ""
        setText(newText)
        props.showAlert("Cleared All Text", "danger")
    }


    return (
        <>
        <div>
            <div className={`mb-3 text-${props.mode === "dark"?"light":"dark"}`}>
                <h1>{props.heading}</h1>
                <textarea id="myBox" className={`form-control text-${props.mode === "dark"?"light":"dark"}`} style={{backgroundColor: props.mode === "dark"?"#161616":"white"} } placeholder='Enter Some Text Here' value={text} onChange={handleOnChange} rows="8"></textarea>
            </div>
            <button className="btn btn-primary mx-2" onClick={changeToUpperCase}>Uppercase</button>
            <button className="btn btn-primary mx-2" onClick={changeToLowerCase}>Lowercase</button>
            <button className="btn btn-primary mx-2" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
                <button className="btn btn-primary d-flex ms-auto mb-2" onClick={handleCopy}>Copy To Clipboard</button>
            <button className="btn btn-danger d-flex ms-auto" onClick={clearAllBtn}>Clear All</button>
        </div>
        <div className={`container my-4 text-${props.mode === "dark"?"light":"dark"}`}>
            <h1>Your Text Summary</h1>
            <p>{text.split(" ").length } Words and {text.length} Characters</p>
            <h2>Preview</h2>
            <p>{text.length>0? text:"Write Something In The Box Given Above To Preview It Here"}</p>
        </div>
        </>
    )
}
