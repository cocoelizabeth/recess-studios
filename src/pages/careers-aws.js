import React, {useState} from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Header from '../components/header'
import Career from '../components/career'
import Helmet from "react-helmet";

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/careers.scss'
// import { base64, generateBase64 } from 'gatsby-plugin-sharp'


const CareersAWS = (props) => {
    const [base64, setBase64] = useState("");
    const onChange = (e) => {
        const files = e.target.files;
        const file = files[0];
        getBase64(file);
    };
    const onLoad = (fileString) => {
        setBase64(fileString);
        console.log(base64);
    };

    const getBase64 = (file) => {
        let reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
            console.log(file);
            onLoad(reader.result);
            console.log(base64);
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(
            "https://d5ipc6569a.execute-api.us-east-1.amazonaws.com/sendEmail",
            {
                mode: "no-cors",
                method: "POST",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    senderName: "coco@recessworld.com",
                    senderEmail: "coco@recessworld.com",
                    message: "HELLO WORLD THIS IS FROM REACT APP P.S. Lebron the GOAT.",
                    base64Data: base64,
                    date: new Date(),
                    fileName: "TEST_FILE_NAME",
                }),
            }
        );
    };
    return(
        <div>
            <form>
                <input type="file" accept="application/pdf" onChange={onChange} />
            </form>
            <button onClick={handleSubmit}>SEND TO LAMBDA</button>
        </div>

    )

}

export default CareersAWS; 

// export default class CareersPage extends React.Component {
//     constructor(props) {
//         super(props);



//     }

   

//     render() {


//         return (


//         )
//     }
// }




// export const pageQuery = graphql`
//       query  {
//           allContentfulJobListing(sort: {fields: createdAt}) {
//     edges {
//       node {
//         id
//         createdAt
//         jobDescription {
//           raw
//         }
//         jobLocation {
//           cityName
//           id
//         }
//         title
//         capacity
//         contentful_id
//         benefits {
//           raw
//         }
//         responsibilitiesAndQualifications {
//           raw
//         }
//       }
//     }
//     totalCount
//   }
//       }
// `
