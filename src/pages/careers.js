import React from 'react'
import { Link, graphql, navigate } from 'gatsby'
import Header from '../components/header'
import Career from '../components/career'
import Helmet from "react-helmet";
import FormFileInput from '../components/formFileInput'
import { SEO } from '../components/seo';


import '../css/font.css'
import '../css/reset.css'
import '../css/styles.css'
import '../css/work-menu.css'
import '../css/careers.scss'

export default class CareersPage extends React.Component {
    constructor(props) {
        super(props);
        this.totalJobs = props.data.allContentfulJobListing.totalListings;
        this.jobs = props.data.allContentfulJobListing.edges;

        
        this.state = {
            selectedJobLocation: "",
            selectedJobTitle: "",
            resumeFile: "Resume",
            coverLetterFile: "Cover Letter",
            removeResumeBtn: "hidden",
            removeCoverLetterBtn: "hidden",
            formData: {},
            errors: {},
            fileError: "",
        }

        this.setSelectedJobCallback = this.setSelectedJobCallback.bind(this)
        this.handleReturnClick = this.handleReturnClick.bind(this);  
        this.closeOpenJobTabs = this.closeOpenJobTabs.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleFormChange = this.handleFormChange.bind(this);
        this.handleFileUpload = this.handleFileUpload.bind(this);
        this.removeUpload = this.removeUpload.bind(this);
        this.handleErrors = this.handleErrors.bind(this);
        this.resetForm = this.resetForm.bind(this)

        this.setBase64Callback = this.setBase64Callback.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.showLoadingSpinner = this.showLoadingSpinner.bind(this);
        this.hideLoadingSpinner = this.hideLoadingSpinner.bind(this);
        this.formRef = React.createRef();
        this.btnRef = React.createRef();
        this.positionsRef = React.createRef();
        this.referCardRef = React.createRef();
        this.returnRef = React.createRef();
        this.closeModalRef = React.createRef();
        this.modalRef = React.createRef();
        this.resumeRef = React.createRef();
        this.coverLetterRef = React.createRef();
        this.fileUploadContentRef = React.createRef();
        this.removeResumeBtn = React.createRef();
        this.removeCoverLetterBtn = React.createRef();
        this.errorsRef = React.createRef();
        this.careerFormRef = React.createRef();
        this.loadingSpinnerRef = React.createRef();
        this.careersHeaderText = React.createRef();
       
    }

    // tracks which position the user clicks the 'apply' button for
    setSelectedJobCallback = (childData) => {
        this.setState({
            ...this.state.formData,
            selectedJobLocation: childData.positionLocation,
            selectedJobTitle: childData.positionTitle,
            formData: {
                position: childData.positionTitle,
            }
        })
        this.positionsRef.current.classList.add('fadeOut')
        this.referCardRef.current.classList.add('fade')
        this.returnRef.current.classList.add('fade')
        this.careersHeaderText.current.classList.add('display-none')
    }

    // closes the application form and returns to job listings
    handleReturnClick() {
        this.closeOpenJobTabs();
        this.referCardRef.current.classList.remove('fade');
        this.returnRef.current.classList.remove('fade');
        this.positionsRef.current.classList.remove('fadeOut');
        this.careersHeaderText.current.classList.remove('display-none')

        this.resetForm();

    }

    closeOpenJobTabs() {
        Array.from(document.getElementsByClassName('reveal')).forEach((job) => {
            job.classList.remove('reveal')
        })
    }

    // success modal
    openModal() {
        this.modalRef.current.classList.remove('shrink')
        this.modalRef.current.classList.add('show')
    }

    closeModal() {
        this.modalRef.current.classList.add('shrink')
        this.modalRef.current.classList.remove('show')
        this.returnRef.current.click()
    }

    // loading spinner 
    showLoadingSpinner() {
        this.careerFormRef.current.classList.add('blur')
        this.loadingSpinnerRef.current.classList.add('show')
    }

    hideLoadingSpinner() {
        this.careerFormRef.current.classList.remove('blur');
        this.loadingSpinnerRef.current.classList.remove('show')
    }

    handleFormChange(e) {
        let empty = false;
        let input = e.currentTarget;
        // if user uploads a file, - store file information in state and display the filename. else, if user changes a different input, store value in state
        if (input.files && input.files[0]) {
            // store file in state
            this.setState({
                formData: {
                    ...this.state.formData,
                    [e.target.name]: e.target.files[0]
                }
            })
            const name = input.files[0].name.length <= 17 ? input.files[0].name : input.files[0].name.slice(0,17).concat('...')
            if (input.id === "resume") {
            
                this.setState({
                    resumeFile: name,
                    removeResumeBtn: ""
                })
            } else if (input.id === "coverLetter") {
                this.setState({
                    coverLetterFile: name,
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
        requiredFormFields.forEach((requiredField) => {
            if (requiredField.value === "") {
                requiredField.classList.remove("ui-full")
            } else {
                requiredField.classList.add("ui-full")
            }
        })
        // submit btn disable logic: 
        // check all inputs; if an input is blank and it is not optional, change empty variable to "true"
        Array.from(document.getElementsByTagName('input')).forEach((input) => {
            if (input.value === "" && !(input.classList.contains('optional-field'))) {
                empty = true;

            }
        })

        if (empty) {
            this.btnRef.current.disabled = true;
        } else {
            this.btnRef.current.disabled = false;
        }
        this.handleErrors(input)
    }


    // clicking the psuedo file upload button triggers the fileupload
    handleFileUpload(file) {
        switch (file) {
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

    // logic for removing uploaded file
    removeUpload(file) {
        switch (file) {
            case 'resume':
                this.setState({
                    resumeFile: "Resume",
                    removeResumeBtn: "hidden"
                })
                break;
            case 'coverLetter':
                this.setState({
                    coverLetterFile: "Cover Letter",
                    removeCoverLetterBtn: "hidden"
                })
                break;
        }
    }

    // gets base64 data from child components for file uploads
    setBase64Callback = (inputName, childData) => {
        var base64 = inputName.concat("Base64")
        this.setState({
            formData: {
                ...this.state.formData,
                [base64]: childData
            }
        })
        
    }

    handleErrors(input) {
        let errors = this.state.errors;
        const validEmailRegex = RegExp(
            /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
        );
        
        
        switch (input.name) {
           
            case 'name':
                errors.name =
                    input.value.length < 5
                        ? 'Name must be at least 5 characters long.'
                        : '';
                break;
            case 'email':
                errors.email =
                    validEmailRegex.test(input.value)
                        ? ''
                        : 'Invalid email.';
                break;
            case 'resume': 
                if (input.files[0]) {
                    let resumeFileSize = input.files[0].size / 1024 / 1024;
                    let resumeFileType = input.files[0].type;
                    let invalidResumeFile = resumeFileType === "application/pdf" ? false : true;
                    if (resumeFileSize > 2 || invalidResumeFile) {
                        this.state.fileError = "Resume must be a PDF and cannot exceed 2MB. If you would like to include a larger file as part of your application, please use the optional 'Link to Work' field to send a public Dropbox/Google Drive link."
                        this.removeUpload('resume');
                    } else {
                        this.state.fileError = "";
                    }
                }else {
                    this.removeUpload('resume')
                }
                break;
            case 'coverLetter': 
            if (input.files[0]) {
                let coverLetterFileSize = input.files[0].size / 1024 / 1024;
                let coverLetterFileType = input.files[0].type;
                let invalidCoverLetterFileType = coverLetterFileType === "application/pdf" ? false : true;
                if (coverLetterFileSize > 2 || invalidCoverLetterFileType) {
                    this.state.fileError = "Cover Letter must be a PDF and cannot exceed 2MB. If you would like to include a larger file as part of your application, please use the optional 'Link to Work' field to send a public Dropbox/Google Drive link."
                    this.removeUpload('coverLetter');
                } else {
                    this.state.fileError = "";
                }
            } else {
                this.removeUpload('coverLetter')
            }
                break;
            default:
                break;
        }
        this.setState({ errors, [input.name]: input.value });
    }

    validateForm(errors) {
        let valid = true;
        Object.values(errors).forEach(val => val.length > 0 && (valid = false));
        return valid;
    }

    resetForm() {
        let requiredFormFields = Array.from(document.getElementsByClassName('req'));

        requiredFormFields.forEach((requiredField) => {
            
            requiredField.value = "";
            requiredField.classList.remove("ui-full")
        })
        this.removeUpload('resume');
        this.removeUpload('coverLetter')
        this.btnRef.current.disabled=true;
        this.state.formData={};
        this.state.errors={};
        this.state.fileError="";

    }
    

    handleSubmit = e => {
        const form =  e.target;
        e.preventDefault();
        if (this.validateForm(this.state.errors)) {
            const data = this.state.formData;
            const name = data.name;
            const email = data.email;
            const position = data.position;
            const location = this.state.selectedJobLocation;
            const date = new Date().toDateString();
            const linkToWork = data.linkToWork;
            const resumeBase64 = data.resumeBase64;
            const coverLetterBase64 = data.coverLetterBase64;
            // const resumeFileName = name.toUpperCase().split(" ").join("_").concat("_RESUME.pdf");
            // const coverLetterFileName = name.toUpperCase().split(" ").join("_").concat("_COVER_LETTER.pdf");
            const resumeFileName = [name.toUpperCase(), "RESUME", position, location].join("_").concat(".pdf")
            const coverLetterFileName  = [name.toUpperCase(), "COVER LETTER", position, location].join("_").concat(".pdf")
            const subject = ["Job App: ", name, " - ", position, " - ", location].join("");
         
            this.showLoadingSpinner();

            let event = {
                    mode: "no-cors",
                    method: "POST",
                    headers: {
                        Accept: "application/json",
                        "Content-Type": "application/json",
                    },
                    body: JSON.stringify({
                        senderName: '"RECESS CAREERS" <careers@recessworld.com>',
                        senderEmail: "careers@recessworld.com",
                        message: "NEW MESSAGE",
                        resumeBase64Data: resumeBase64,
                        coverLetterBase64Data: coverLetterBase64,
                        name: name,
                        email: email,
                        position: position,
                        location: location,
                        date: date,
                        linkToWork: linkToWork,
                        subject: subject,
                        resumeFileName: resumeFileName,
                        coverLetterFileName: coverLetterFileName,

                    })
            }
            
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
                        senderName: '"RECESS CAREERS" <careers@recessworld.com>',
                        senderEmail: "careers@recessworld.com",
                        message: "NEW MESSAGE",
                        resumeBase64Data: resumeBase64,
                        coverLetterBase64Data: coverLetterBase64,
                        name: name,
                        email: email,
                        position: position,
                        location: location,
                        date: date,
                        linkToWork: linkToWork,
                        subject: subject,
                        resumeFileName: resumeFileName,
                        coverLetterFileName: coverLetterFileName,

                    })
                })
                .then(response => console.log(response))
                .then(()=> this.resetForm())
                .then(()=> this.hideLoadingSpinner())
                .then(() => navigate(`/careers/thanks?pos=${position.split(" ").join("-")}?loc=${location.split(" ").join("-")}?name=${name.split(" ").join("-")}`))
                // .then(() => document.getElementById('modal').classList.remove('shrink'))
                // .then(() => document.getElementById('modal').classList.add('show'))
                // .then(() => <Link to={`/careers/thanks`}/>)       
                // .then(() => navigate(form.getAttribute("action"), { state: this.state, replace: false }))
                .catch(error => alert(error));
        } else {
            this.errorsRef.current.classList.remove('display-none');
            this.btnRef.current.disabled = true;
        }
    };

    render() {
        let errors = Object.values(this.state.errors).map(error => {
            return (
                <p>{error}</p>
            )
        })
      
        let careerItems = this.jobs.map((job, i) => {
            return (
                <Career
                    idx={i}
                    key={i}
                    job={job.node}
                    setSelectedJobCallback={this.setSelectedJobCallback}
                />
            )
        })

        return (
            <div className="careers-container">
                <Header leftText="Careers" background="black-header-background" leftTextLink="/careers/"/>

                <div ref={this.careersHeaderText} class="careers-header-text-container">
                    <div class="careers-header-text">Recess Studios©</div>
                    <div class="careers-header-text">— Careers</div>
                   
                </div>
           
                    <div ref={this.positionsRef} className="container positions">

                        <ul>
                            {careerItems}
                        </ul>
                    </div>
                    <div ref={this.returnRef} onClick={this.handleReturnClick} className="return">
                        Return to listings
                    </div>
                    <div className="container refer-card" ref={this.referCardRef}>


                        <div ref={this.careerFormRef} className="sign-up card">
                            <div className="card__header">
                                <div className="description">
                                    APPLICATION FORM
                                </div>
                                <div ref={this.errorsRef} className="errors-container display-none">{errors}</div>
                                <div className="errors-container">{this.state.fileError}</div>
                            </div>
                            <div className="card__content">
                                
                             
                                <form
                                    name="career-application"
                                    method="post"
                                    onSubmit={this.handleSubmit}
                                    className="referral"
                                    ref={this.formRef}
                                    action="/careers/thanks"
                                >
                                    {/* The `form-name` hidden field is required to support form submissions without JavaScript */}
                                    <input type="hidden" name="form-name" value="career-application" />
                                    <p hidden>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="bot-field" onChange={this.handleFormChange} value="ignore" />
                                        </label>
                                        <label>
                                            Don’t fill this out:{" "}
                                            <input name="phone" onChange={this.handleFormChange} value="ignore" />
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
                                            {/* <span className="underline-form-field">Name</span> */}
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
                                    <FormFileInput
                                        name="resume"
                                        labelText="Resume"
                                        fileName={this.state.resumeFile}
                                        setBase64Callback={this.setBase64Callback}
                                        handleFileUploadCallback={this.handleFileUpload}
                                        removeFileBtn={this.state.removeResumeBtn}
                                        handleFormChangeCallback={this.handleFormChange}
                                        removeUploadCallback={this.removeUpload}
                                    />

                                    {/* BEGIN COVER LETTER UPLOAD */}
                                    <FormFileInput
                                        name="coverLetter"
                                        labelText="Cover Letter"
                                        fileName={this.state.coverLetterFile}
                                        setBase64Callback={this.setBase64Callback}
                                        handleFileUploadCallback={this.handleFileUpload}
                                        removeFileBtn={this.state.removeCoverLetterBtn}
                                        handleFormChangeCallback={this.handleFormChange}
                                        removeUploadCallback={this.removeUpload}
                                    />
                                    {/* LINK TO WORK */}
                                    <div className="field line">
                                        <input
                                            className="req optional-field"
                                            type="text"
                                            name="linkToWork"
                                            defaultValue=""
                                            id="linkToWork"
                                            onChange={this.handleFormChange}
                                        />
                                        <label className="placeholder" htmlFor="linkToWork">
                                            Link to Work (Optional)
                                        </label>
                                    </div>

                                    <div hidden="hidden" className="field line inline display-none">
                                        <input
                                            className=""
                                            type="text"
                                            name="position"
                                            value={this.state.selectedJobTitle}
                                            required="required"
                                            id="position"
                                            onChange={this.handleFormChange}
                                        />
                                        <label className="placeholder" htmlFor="position">
                                            Position
                                        </label>

                                    </div>
                                    <div hidden="hidden" className="field line inline display-none">
                                        <input
                                            className=""
                                            type="text"
                                            name="location"
                                            value={this.state.selectedJobLocation}
                                            required="required"
                                            id="location"
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

                        {/* BEGIN CAREER SPINNER */}
                        <div ref={this.loadingSpinnerRef} className="submit-spinner-careers">
                            <div className="loading-spinner"></div>
                            {/* <img className="logo not-found-logo" src={logoGif} alt="Logo" /> */}
                        </div>

                        {/* THANK YOU MODAL */}
                        {/* <div id="modal" ref={this.modalRef} className="modal confirmed">
                            <span ref={this.closeModalRef} onClick={this.closeModal} className="close-modal" />
                            <h2 className="thank-you-h2">Thank you, {this.state.formData.name} </h2>
                            <p className="thank-you-text">
                            
                                    We have recieved your application for the {this.state.selectedJobTitle} {" - "} {this.state.selectedJobLocation} {" position."}
                        
                            </p>
                        </div> */}

                    </div>
   

                   <p className="equal-opportunity-text">Recess Studios is an equal opportunity employer. All qualified applicants will receive consideration for employment without regard to age, ancestry, color, family or medical care leave, gender identity or expression, genetic information, marital status, medical condition, national origin, physical or mental disability, political affiliation, protected veteran status, race, religion, sex (including pregnancy), sexual orientation, or any other characteristic protected by applicable laws, regulations and ordinances. We also consider qualified applicants regardless of criminal histories, consistent with legal requirements. If you need assistance and/or a reasonable accommodation due to a disability during the application or the recruiting process, please send a request an Accomodation Request form via email: <a className="underline-link" href="mailto:careers@recessworld.com">careers@recessworld.com</a></p>     

            </div>
        )
    }
}




export const pageQuery = graphql`
      query  {
           allContentfulJobListing(sort: {order: DESC, fields: createdAt}) {
    edges {
      node {
        id
        createdAt
        title
        jobLocation {
          cityName
          id
        }
        jobDescription {
          raw
        }
        responsibilities {
          raw
        }
        qualifications {
          raw
        }
        requirements {
          raw
        }
        benefits {
          raw
        }
        employmentType {
            type
            id
        }
        contentful_id
      }
    }
    totalCount
  }
      }
`

export const Head = () => (
  <SEO title="RECESS STUDIOS | CAREERS" />
)
