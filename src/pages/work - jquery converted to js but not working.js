// import * as React from "react"
// import Layout from "../components/layout"
// import { useStaticQuery, graphql, Link } from "gatsby"

// // import Img from "gatsby-image"


// import '../css/font.css'
// import '../css/reset.css'
// import '../css/styles.css'

// const data = useStaticQuery(
//   graphql`
//       query  {
//   allContentfulProjectDatabase {
//     edges {
//       node {
//         id
//         listOfProjects {
//           title
//           id
//           slug
//           pressLink
//           hero {
//             gatsbyImageData
//             file {
//               fileName
//               url
//               contentType
//             }
//           }
//           copy {
//             raw
//           }
//           slideshowMedia {
//             gatsbyImageData
//             file {
//               url
//               contentType
//             }
//           }
//         }
//       }
//     }
//   }
// }
//     `
// )


// class Work extends React.Component {
//   constructor(props) {
//     super(props);
//     this.projects = data;

//   }
// }


// export default Work

// // markup
// // const WorkPage = () => {

  




// //   React.useEffect(() => {

// //     let videos = document.getElementsByTagName('video');
    

// //     if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// //       for (let i=0; i <videos.length; i++) {
// //         videos[i].autoplay = 'autoplay';
// //         videos[i].preload = 'metadata';
// //         videos[i].muted = 'muted';
// //       }
// //     }


// //     window.addEventListener('load', (event) => {
// //       if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
// //         for (let i = 0; i < videos.length; i++) {
// //           videos[i].autoplay = 'autoplay';
// //           videos[i].preload = 'metadata';
// //           videos[i].muted = 'muted';
// //         }
// //         videos[0].play();
// //       }
// //       videos[0].play();
// //     })

// //     window.addEventListener('scroll', (event) =>{

// //       let videos = document.getElementsByTagName('video');
// //       for (let i=0; i < videos.length; i++) {
     
// //         var elOffsetVh = Math.round(parseFloat(-150)) || 0;
// //         var elT = videos[i].offsetTop;
// //         var elB = elT + videos[i].offsetHeight;
// //         var viewT = window.scrollY;
// //         var viewB = viewT + (window.outerHeight + elOffsetVh)

// //         debugger
// //         if (elB > viewT && elT < viewB) {
// //           videos[i].play();
// //         } else {
// //           videos[i].pause();
// //         }
// //       }

// //       });






// //   });

// //   const projectData = data.allContentfulProjectDatabase.edges[0].node.listOfProjects.map(edge => {
// //     return (edge)
// //   })

// //   let projectItems;
// //   projectItems = projectData.map(project => {
// //     if (project.hero.file.contentType === "video/mp4") {
// //       return (
// //         <Link to={`/work/${project.slug}/`} className="project-link" target="_blank" key={project.id} id={project.id} title={project.title}>
          
// //             <div className="project-group">
// //               <video playsInline muted loop width="100%">
// //                 <source src={project.hero.file.url} type="video/mp4" />
// //               </video>
// //               <div className="project-title">{project.title}</div>
// //             </div>
        
// //         </Link>

// //       )
// //     }
// //   })


// //   return (
    
// //     <Layout pageTitle="Work">
// //       <div className="page-background">
// //         {projectItems}
// //       </div>
// //     </Layout>

// //   )
// // }

