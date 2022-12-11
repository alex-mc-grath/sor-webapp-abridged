import { StyledFileInput } from "./Style"
import { useRef, useState } from "react"


export const FileInput = ({onChange = null, text = "Choose File", ...props}) => {

    const [fileText, setFileText] = useState(text)

    const onFileSelected = ({target}) => {

        if(target.files.length > 0)
        {
            setFileText(target.files[0].name)

            if(onChange)
            {
                onChange(target.files)
            }
        }
        else
        {
            setFileText(text)

            if(onChange)
            {
                onChange(null)
            }
        }
    }

    return (
        <label>
            <input type="file" style={{display: "none"}} onChange={onFileSelected}/>
            <StyledFileInput {...props}>
                <span>{fileText}</span>
                <div className="browse-button">Browse</div>
            </StyledFileInput>
        </label>
    )
}