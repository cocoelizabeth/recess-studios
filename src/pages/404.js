import * as React from "react"
import { Link } from "gatsby"
// import Header from "../components/header"
import logoGif from '../images/recess-chrome-v2-optimized.gif'
import backgroundImage from '../images/background.jpg'
import '../css/styles.css'
// styles
// const pageStyles = {
//   color: "#232129",
//   padding: "96px",
//   fontFamily: "-apple-system, Roboto, sans-serif, serif",
// }
// const headingStyles = {
//   marginTop: 0,
//   marginBottom: 64,
//   maxWidth: 320,
// }

// const paragraphStyles = {
//   marginBottom: 48,
// }
// const codeStyles = {
//   color: "#8A6534",
//   padding: 4,
//   backgroundColor: "#FFF4DB",
//   fontSize: "1.25rem",
//   borderRadius: 4,
// }

// markup
const NotFoundPage = () => {
  return (
    <main >
    {/* <Header></Header> */}
      <div className="background-image-container">
        <img className="background-image" src={backgroundImage} alt="Background Image" />
        <div class="not-found-container">
          <Link to="/" >
            <img className="logo" src={logoGif} alt="Logo" />
          </Link>
            <p>Page Not Found</p>
            <Link to="/">Go home</Link>
        </div> 
      </div>
      


      {/* <title>Not found</title>
      <h1>Page not found</h1>
      <p>
        Sorry{" "}
        <span role="img" aria-label="Pensive emoji">
          😔
        </span>{" "}
        we couldn’t find what you were looking for.
        <br /> */}
        <p>
        {process.env.NODE_ENV === "development" ? (
          <>
            <br />
            Try creating a page in <code>src/pages/</code>.
            <br />
          </>
        ) : null}
        <br />
        <Link to="/">Go home</Link>.
      </p>
    </main>
  )
}

export default NotFoundPage
