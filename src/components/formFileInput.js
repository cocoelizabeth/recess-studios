import React, {useState, useRef } from 'react'

const FormFileInput = (
    {
        name, 
        fileName,
        labelText,
        removeFileBtn, 
        handleFormChangeCallback, 
        handleFileUploadCallback,
        setBase64Callback,
        removeUploadCallback, 
        ...props}
) => {
 

    const ref = useRef(null)

    const handleFileUpload = (e) => {
   
 
        ref.current.click();
    }

    const [base64, setBase64] = useState("");


    const onChange = (e) => {
        
        const files = e.target.files;
        const file = files[0];
        if (file) {
            getBase64(file);
        }
        handleFormChangeCallback(e);
    };

    const onLoad = (fileString) => {
        setBase64(fileString);
        setBase64Callback(name, fileString)
    };
    
    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            onLoad(reader.result);
        };
    };

    const handleRemoveFile = (e) => {
        
        e.preventDefault();
        ref.current.value="";
        removeUploadCallback(ref.current.id)

    }


    return(
        <div className="field line file-upload">
            <input
                type="file"
                accept="application/pdf"
                className="req file-upload-input ui-full"
                name={name}
                required="required"
                id={name}
                onChange={onChange}
                ref={ref}/>

            <label className="placeholder display-none" htmlFor={name}>
                <span>{labelText}</span>
            </label> 
            <div className="file-upload-container">
                <div
                    className="file-upload-btn"
                    // onClick={() => { handleFileUploadCallback(name) }}>
                    role="button"
                    tabIndex="0"
                    onClick={handleFileUpload}
                    onKeyDown={handleFileUpload}
                >
    
                    {fileName}
                   {/* <span className="underline-form-field">{fileName}</span> */}
                    
                </div>
                <div
                    className="remove-file-btn"
                    role="button"
                    tabIndex="0"
                    // onClick={() => { removeUploadCallback(name) }}
                    onClick={handleRemoveFile}
                    onKeyDown={handleRemoveFile}
                    // onClick={() => { removeUploadCallback() }}
                    hidden={removeFileBtn}>
                </div>
            </div>
        </div>
    )

}

export default FormFileInput; 

