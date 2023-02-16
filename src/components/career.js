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
        [BLOCKS.LIST_ITEM]: (node, children) => <li className="careers-bullets">{children}</li>,
    }
}


const summaryOptions = {
    renderNode: {
        [BLOCKS.UL_LIST]: (node, children) => (
            <div className="benefits-summary-container">{children}</div>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => <span className="benefits-summary-item">{children}</span>,
    }
}


class Career extends React.Component {
    constructor(props) {
      
        super(props)
        
        this.title = this.props.job.title;
        this.location = this.props.job.jobLocation.cityName;
        this.description = this.props.job.jobDescription;
        this.responsibilities = this.props.job.responsibilities;
        this.qualifications = this.props.job.qualifications;
        this.requirements = this.props.job.requirements;
        this.benefits = this.props.job.benefits;
        this.setSelectedJobCallback = this.props.setSelectedJobCallback;
        
        this.employmentType = this.props.job.employmentType.type;


        this.posCardRef = React.createRef();
        this.handlePosCardClick = this.handlePosCardClick.bind(this)
        this.descRef = React.createRef()
        this.applyRef = React.createRef()
        this.handleApplyClick = this.handleApplyClick.bind(this);
        this.state = {location: ""};
        switch (this.props.job.jobLocation.cityName.toLowerCase()) {
            case 'los angeles':
                this.state = {location: '(LA)'};
                break;
            case 'new york':
                this.state = {location: '(NYC)'};
                break;
            case 'portland':
                this.state = {location: '(Portland)'}
                break;
            default:
                this.state = {location: this.props.job.jobLocation}

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
        let benefitsSummary = "";

        if (this.employmentType.toLowerCase() == "full time") {
            benefitsSummary = "401k + PTO + Health, Dental & Vision Insurance"
        }
        
        // let benefitsRichText = renderRichText(this.benefits, options);
        // let benefits;
        // if (benefitsRichText[0].props.children[0].props.children[0].props.children) {
        //     benefitsRichText = renderRichText(this.benefits, options);
        //     benefits = benefitsRichText[0].props.children[0].props.children[0].props.children;

        // }
        // debugger
        

        return (
            <li ref={this.posCardRef} className="pos-card" id={`pos-${this.props.idx}`} onClick={this.handlePosCardClick}>
                <div className="content grid job-container">
                    <div className="title position">{this.title}</div>
                    {/* Note: changed the class name for this; if the form stops working try commenting this in and taking out 'location-small'; */}
                    <div className="title location">{this.state.location}</div>
                    {/* <div className="location-small">{this.state.location}</div> */}

                    {/* <div className="dept">Design</div> */}
                    {/* <div className="date">June 4</div> */}
                    {/* <div className="refer" data-position-title={this.title} data-position-location={this.location} onClick={this.handleApplyClick} ref={this.applyRef}>Apply</div> */}
                </div>
                 <div className="sub-text">
                    <span class="full-time">{this.employmentType}</span>

                    {/* Get benefits item to create summary (logic to display first 2 in css) */}
                   {/* {renderRichText(this.benefits, summaryOptions)} */}
                   <span>{benefitsSummary}</span>
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
                        <p>REQUIREMENTS</p>
                        {renderRichText(this.requirements, options)}
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