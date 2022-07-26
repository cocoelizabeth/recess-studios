import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Header from '../components/header'
import Career from '../components/career'
import CareersForm from '../components/careersForm'
import Helmet from "react-helmet";

import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/careers.scss'


function encode(data) {
    const formData = new FormData();

    for (const key of Object.keys(data)) {
        formData.append(key, data[key]);
    }
    debugger
    return formData;
}


export default class CareersPage extends React.Component {
    constructor(props) {
        super(props);
        this.totalJobs = props.data.allContentfulJobListing.totalListings;
        this.jobs = props.data.allContentfulJobListing.edges;
        this.btnRef = React.createRef();


        this.state = {
            selectedJobLocation: "",
            selectedJobTitle: "",
            resumeFile: "Resume",
            coverLetterFile: "Cover Letter",
            removeResumeBtn: "hidden",
            removeCoverLetterBtn: "hidden",
            formData:{}
        }
        this.setSelectedJobCallback = this.setSelectedJobCallback.bind(this)
        this.positionsRef = React.createRef();
        this.referCardRef = React.createRef();
        this.returnRef = React.createRef();
        this.handleReturnClick = this.handleReturnClick.bind(this);
        this.closeModalRef = React.createRef();
        this.modalRef = React.createRef();
        this.closeModal = this.closeModal.bind(this);
        this.formRef = React.createRef();
        this.handleFormChange = this.handleFormChange.bind(this);
        this.resumeRef = React.createRef();
        this.coverLetterRef = React.createRef();
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.fileUploadContentRef = React.createRef();
        this.imageTitleRef = React.createRef();
        this.fauxResumeBtn = React.createRef();
        this.fauxCoverLetterBtn = React.createRef();
        this.removeResumeBtn = React.createRef();
        this.removeCoverLetterBtn = React.createRef();
        this.removeUpload = this.removeUpload.bind(this);
        this.resumeLabelRef = React.createRef();
        this.coverLetterLabelRef = React.createRef();
        this.handleSubmit = this.handleSubmit.bind(this);
        this.modalRef = React.createRef();
        this.closeModal = this.closeModal.bind(this)
    }

    setSelectedJobCallback = (childData) => {
        this.setState({
            selectedJobLocation: childData.positionLocation,
            selectedJobTitle: childData.positionTitle,
            // formData: {
            //     position: childData.positionTitle,
            //     location: childData.positionLocation,
            // }
        })
    
        this.positionsRef.current.classList.add('fadeOut')
        this.referCardRef.current.classList.add('fade')
        this.returnRef.current.classList.add('fade')
        
    }




    handleReturnClick() {
        this.referCardRef.current.classList.remove('fade');
        this.returnRef.current.classList.remove('fade');
        this.positionsRef.current.classList.remove('fadeOut');
    
    }

    // closeModal() {
    //     this.modalRef.classList.remove("show").add('shrink')
    //     this.btnRef.setAttribute("disabled", true) 
        
    // }

    componentDidUpdate(e) {
        console.log(this.state)
    }

    handleFormChange(e) {

        let empty = false;
        let input = e.currentTarget;
        if (input.files && input.files[0]) {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.files[0]
                }
            })
            var reader = new FileReader();
            // reader.onload = (function (f) {
                
            //     console.log(f.name)

            // })(input.files[0]);


            reader.readAsDataURL(input.files[0]);
            if (input.id === "resume") {
                this.setState({ 
                    resumeFile: input.files[0].name,
                    removeResumeBtn: ""

                })
            } else if (input.id === "coverLetter") {
                this.setState({ 
                    coverLetterFile: input.files[0].name,
                    removeCoverLetterBtn: "" 
                })
            } 
            


        } else {
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.value
                }
            })
        }

        let requiredFormFields = Array.from(document.getElementsByClassName('req'));
        requiredFormFields.forEach((requiredField) =>{
           if (requiredField.value === "") {
                requiredField.classList.remove("ui-full")
           } else {
            requiredField.classList.add("ui-full")
           }
        })



        
        Array.from(document.getElementsByTagName('input')).forEach((input)=>{

            if (input.value === "") {
                empty = true;
  
            }
        })

        if (empty) {
            this.btnRef.current.disabled=true;
        } else {
            this.btnRef.current.disabled=false;
        }


    }

    handleFileUpload(file) {
        
        switch(file) {
            case 'resume':
                if (this.resumeRef.current) {
                    this.resumeRef.current.click();
                }

                break;
            case 'coverLetter':
                if (this.coverLetterRef.current) {
                    this.coverLetterRef.current.click();
                }
                break;
        }

    }



   removeUpload(file) {

       switch (file) {
           case 'resume':
               this.setState({ 
                    resumeFile: "Resume",
                    removeResumeBtn: "hidden"
                 })
               if (this.resumeRef.current) {
                   this.resumeRef.current.value="";
               }

               break;
           case 'coverLetter':
               this.setState({ 
                    coverLetterFile: "Cover Letter",
                    removeCoverLetterBtn: "hidden"
                })
               if (this.coverLetterRef.current) {
                   this.coverLetterRef.current.value="";
               }
               break;
       }
   }

    handleSubmit = e => {
        
       debugger
        const form = e.target;
        // document.getElementById('modal').classList.add('show')
        fetch("/", {
            method: "POST",
            body: encode({
                "form-name": form.getAttribute("name"),
                "position": this.state.selectedJobTitle,
                "location": this.selectedJobLocation,
                ...this.state.formData
            })
        })
            .then(() => alert("Success!"))
            // .then(() => document.getElementById('modal').classList.remove('shrink'))
            // .then(() => document.getElementById('modal').classList.add('show'))
            // .then(() => navigate(form.getAttribute("action")))
            .catch(error => alert(error));
        e.preventDefault();
    };

    openModal() {
        this.modalRef.current.classList.remove('shrink')
        this.modalRef.current.classList.add('show')
    }

    closeModal() {
        this.modalRef.current.classList.add('shrink')
        this.modalRef.current.classList.remove('show')
        this.returnRef.current.click()

    }


    render() {
 
        let careerItems = this.jobs.map(job =>  {
            return (
                      <Career 
                        job={job.node} 
                        setSelectedJobCallback={this.setSelectedJobCallback}
                        />
            )
        })

        return (
            <div className="background-image-container">
            <Header leftText="Careers" />
                <>
                    <div ref={this.positionsRef} className="container positions">
                        {/* <h2>Job Openings</h2> */}
                        <ul>
                            {careerItems}
                        </ul>
                    </div>
                    <div ref={this.returnRef} onClick={this.handleReturnClick} className="return">
                        Return to listings
                    </div>
                    <div className="container refer-card" ref={this.referCardRef}>
                        <div id="modal" ref={this.modalRef} className="modal confirmed">
                            <span ref={this.closeModalRef} onClick={this.closeModal} className="close-modal" />
                            <h2>Thank you!</h2>
                            <p>
                                <span id="refer_name" className="focus" /> We have recieved your application for the {this.state.selectedJobTitle} {" "}
                                <span id="refer_pos" className="focus" /> position.
                            </p>
                        </div>
                        <div className="sign-up card">
                            <div className="card__header">
                                {/* <h1>{this.state.selectedJobTitle}</h1> */}
                                <div className="description">
                                    APPLICATION FORM
                                </div>
                            </div>
                            {/* <div className="card__content">
                                <CareersForm></CareersForm>
                            </div> */}
                            <div className="card__content">

                                <form 
                                    onChange={this.handleFormChange} 
                                    name="career-application"
                                    method="post"
                                    action="/careers/thanks/"
                                    data-netlify="true"
                                    data-netlify-honeypot="bot-field"
                                    onSubmit={this.handleSubmit}
                                    ref={this.formRef} 
                                    className="referral" 
                                >
                                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                    <input type="hidden" name="form-name" value="career-application" />
                                    <p hidden>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="bot-field" onChange={this.handleFormChange} value="ignore" />
                                        </label>
                                    </p>
                                    <div className="field line">
                                        <input
                                            className="req"
                                            maxLength={240}
                                            type="text"
                                            name="name"
                                            defaultValue=""
                                            required="required"
                                            id="name"
                                            onChange={this.handleFormChange}
                                        />
                                        <label className="placeholder" htmlFor="name">
                                            Name
                                        </label>
                                    </div>
                                    <div className="field line">
                                        <input
                                            className="req"
                                            maxLength={240}
                                            type="email"
                                            name="email"
                                            defaultValue=""
                                            required="required"
                                            id="email"
                                            onChange={this.handleFormChange}
                                        />
                                        <label className="placeholder" htmlFor="email">
                                            Email
                                        </label>
                                    </div>
                                    {/* BEGIN RESUME UPLOAD */}
                                    <div className="field line file-upload">
                                        <input
                                            type="file"
                                            className="req file-upload-input"
                                            name="resume"
                                            required="required"
                                            id="resume"
                                            onChange={this.handleFormChange}
                                            ref={this.resumeRef}
                                            defaultValue=""
                                        />
                                        <label hidden="hidden" ref="resumeLabelRef" className="placeholder" htmlFor="resume">
                                            Resume
                                        </label>
                                        <div className="file-upload-container">
                                            <div 
                                                ref={this.fauxResumeBtn}
                                                className="file-upload-btn" 
                                                onClick={()=>{this.handleFileUpload("resume")}}>
                                                    {this.state.resumeFile}
                                            </div> 
                                            <div 
                                                className="remove-file-btn"
                                                onClick={()=>{this.removeUpload("resume")}} 
                                                hidden={this.state.removeResumeBtn}>
                                                    {"[REMOVE]"}
                                            </div>
                                        </div>
                                    </div>
                                    {/* BEGIN COVER LETTER UPLOAD */}
                                    <div className="field line">
                                        {/* <div
                                            ref={this.fauxCoverLetterBtn}
                                            class="file-upload-btn"
                                            type="button"
                                            onClick={() => { this.handleFileUpload("coverLetter") }}>
                                            {this.state.coverLetterFile}
                                        </div>
                                        <div 
                                            onClick={()=>{this.removeUpload("coverLetter")}} 
                                            hidden={this.state.removeCoverLetterBtn}>
                                            {"[REMOVE]"}
                                        </div> */}
                                        <input
                                            type="file"
                                            className="req file-upload-input"
                                            name="cover letter"
                                            required="required"
                                            id="coverLetter"
                                            ref={this.coverLetterRef}
                                            onChange={this.handleFormChange}
                                            defaultValue=""
                                        />
                                        <label hidden="hidden" className="placeholder" htmlFor="name">
                                            Cover Letter
                                        </label>
                                        <div className="file-upload-container">
                                            <div
                                                ref={this.fauxCoverLetterBtn}
                                                className="file-upload-btn"
                                                onClick={() => { this.handleFileUpload("coverLetter") }}>
                                                    {this.state.coverLetterFile}
                                            </div>
                                            <div
                                                className="remove-file-btn"
                                                onClick={() => { this.removeUpload("coverLetter") }}
                                                hidden={this.state.removeCoverLetterBtn}>
                                                {"[REMOVE]"}
                                            </div>
                                        </div>
                                    </div>
                    
                                    <div hidden="hidden" className="field line inline display-none">
                                        <input
                                            className=""
                                            type="text"
                                            name="position"
                                            value={this.state.selectedJobTitle + " - " + this.state.selectedJobLocation}
                                            required="required"
                                            id="position"
                                            onChange={this.handleFormChange}
                                        />
                                        <label className="placeholder" htmlFor="position">
                                            Position
                                        </label>
                                        
                                    </div>

                                    <div className="submit-btn-container">
                                        <button
                                            className="submit-job-application-btn"
                                            type="submit"
                                            disabled="disabled"
                                            id="btn"
                                            ref={this.btnRef}>
                                                APPLY
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </>

               
                
            </div>
        )
    }
}




export const pageQuery = graphql`
      query  {
          allContentfulJobListing(sort: {fields: createdAt}) {
    edges {
      node {
        id
        createdAt
        jobDescription {
          raw
        }
        jobLocation {
          cityName
          id
        }
        title
        capacity
        contentful_id
        benefits {
          raw
        }
        responsibilitiesAndQualifications {
          raw
        }
      }
    }
    totalCount
  }
      }
`

