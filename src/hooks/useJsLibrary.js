import { useEffect } from "react";

const useJsLibrary = (libraryURL) => {

    useEffect(() => {
        const script = document.createElement('script');
        script.src = libraryURL;
        script.async = true;
        document.body.appendChild(script)
    })

}
export default useJsLibrary