import { useEffect } from "react";

const addJsLibrary = (libraryURL) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = libraryURL;
        script.async = true;
        document.body.appendChild(script)
    })

}
export default addJsLibrary