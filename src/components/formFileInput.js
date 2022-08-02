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
                className="req file-upload-input"
                name={name}
                required="required"
                id={name}
                onChange={onChange}
                ref={ref}/>

            <label hidden="hidden" className="placeholder" htmlFor="resume">
                {labelText}
            </label>
            <div className="file-upload-container">
                <div
                    className="file-upload-btn"
                    // onClick={() => { handleFileUploadCallback(name) }}>
                
                   onClick={handleFileUpload}>
                    {fileName}
                </div>
                <div
                    className="remove-file-btn"
                    // onClick={() => { removeUploadCallback(name) }}
                    onClick={handleRemoveFile}
                    // onClick={() => { removeUploadCallback() }}
                    hidden={removeFileBtn}>
                </div>
            </div>
        </div>
    )

}

export default FormFileInput; 

