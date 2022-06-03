import * as React from "react"
import { Link } from "gatsby"


class ProjectHeroItem extends React.Component {
    constructor(props) {
        super(props)
        this.projectTitle = this.props.projectTitle;
        this.contentType = this.props.contentType;
        this.id = this.props.id;
        this.heroFileUrl = this.props.heroFileUrl;
        this.gatsbyImageData = this.props.gatsbyImageData;
        this.slug = this.props.slug;
    }
    render() {
        let projectMedia;
        let hrefId = "a".concat(this.id)
 
        if (this.contentType.includes("video")) {
            projectMedia= (
                <video playsInline muted loop width="100%">
                    <source src={this.heroFileUrl} type="video/mp4" />
                </video>
            )
        } else {
            projectMedia= (
                <img className="project-image" src={this.heroFileUrl} alt={this.projectTitle} />
            )
        }
        return (
            <Link to={`/work/${this.slug}/`} className="project-link" target="_blank" key={this.id} id={hrefId} title={this.projectTitle}>
                <div className="project-group">
                    {projectMedia}
                    <div className="project-title">{this.projectTitle}</div>
                </div>
            </Link>
        )
    }

}

// const ProjectHeroItem = ({ project, children }) => {

//     return (
         
//         <div>
//             <title>{project.title}</title>

//             <nav>
//                 <ul>
//                     <li><Link to="/work">Our Work</Link></li>
//                     <li><Link to="/">Home</Link></li>
//                 </ul>
//             </nav>

//             <main>
//                 <h1>{project}</h1>
//                 {children}
//             </main>
//         </div>

//     )
// }


export default ProjectHeroItem