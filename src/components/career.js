import * as React from "react"
import { Link } from "gatsby"
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'

const options = {
    renderMark: {
        [MARKS.BOLD]: (text) => <b>{text}</b>,
        [MARKS.ITALIC]: (text, key) => <em key={key}>{text}</em>,
        [MARKS.UNDERLINE]: (text, key) => <u key={key}>{text}</u>,
    },
    renderNode: {
        [INLINES.HYPERLINK]: (node, children) => {
            const { uri } = node.data
            return (
                <a href={uri} className="underline">
                    {children}
                </a>
            )
        },
        [BLOCKS.PARAGRAPH]: (node, children) => <p>{children}</p>,
        [BLOCKS.UL_LIST]: (node, children) => (
            <ul>{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
            <ol>{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
    }
}


class Career extends React.Component {
    constructor({ job, setSelectedJobCallback, ...props}) {
        
        super(props)
        this.title = job.title;
        this.location = job.jobLocation.cityName;
        this.description = job.jobDescription;
        this.responsibilities = job.responsibilities;
        this.qualifications = job.qualifications;
        this.benefits = job.benefits;
        this.setSelectedJobCallback = setSelectedJobCallback;
        

        this.posCardRef = React.createRef();
        this.handlePosCardClick = this.handlePosCardClick.bind(this)
        this.descRef = React.createRef()
        this.applyRef = React.createRef()
        this.handleApplyClick = this.handleApplyClick.bind(this);
        this.state = {location: ""};
        switch (job.jobLocation.cityName.toLowerCase()) {
            case 'los angeles':
                this.state = {location: 'LA'};
                break;
            case 'new york':
                this.state = {location: 'NY'};
                break;
            case 'portland':
                this.state = {location: 'Portland'}
                break;
        }


        // this.projectTitle = this.props.projectTitle;
        // this.contentType = this.props.contentType;
        // this.id = this.props.id;
        // this.heroFileUrl = this.props.heroFileUrl;
        // this.gatsbyImageData = this.props.gatsbyImageData;
        // this.slug = this.props.slug;
    }

    handlePosCardClick() {
        this.descRef.current.classList.toggle("reveal");
    }

    handleApplyClick(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setSelectedJobCallback(e.target.dataset)

    }
    render() {
        

        return (
            <li key={this.title} ref={this.posCardRef} className="pos-card" id="pos_1" onClick={this.handlePosCardClick}>
                <div className="content grid job-container">
                    <div className="title location">{this.state.location}</div>
                    <div className="title position">{this.title}</div>
                    {/* <div className="dept">Design</div>
                    <div className="date">June 4</div> */}
                    {/* <div className="refer" data-position-title={this.title} data-position-location={this.location} onClick={this.handleApplyClick} ref={this.applyRef}>Apply</div> */}
                </div>
                <div ref={this.descRef} className="desc pp-project-copy">
                    <div className="description-container desc-left">
                        <p>DESCRIPTION</p>
                        {renderRichText(this.description, options)}
                        <br></br>
                        <p>RESPONSIBILITIES</p>
                        {renderRichText(this.responsibilities, options)}
                        <br></br>
                        <p>QUALIFICATIONS</p>
                        {renderRichText(this.qualifications, options)}
                        <br></br>
                    </div>
                    <div className="description-container desc-right">
                        <p>BENEFITS</p>
                        {renderRichText(this.benefits, options)}
                        <div className="open-application" data-position-title={this.title} data-position-location={this.location} onClick={this.handleApplyClick} ref={this.applyRef}>Apply</div>

                    </div>
                       
            
                </div>
            </li>

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


export default Career