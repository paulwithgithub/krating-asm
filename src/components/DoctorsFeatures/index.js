import {Component} from 'react'

import './index.css'

class  DoctorsCare extends Component {
    state={name: '', address: '', age: '', number: '', aadhar: '', consult: false, home: false, online: false}

    onClickConsult = () => {
        this.setState((prevState) => ({consult: !prevState.consult}))
    }
    onClickHome= () => {
        this.setState((prevState) => ({home: !prevState.home}))
    }
    onClickOnline= () => {
        this.setState((prevState) => ({online: !prevState.online}))
    }

    onChangeName = (event) => {
        this.setState({name: event.target.value})
    }

    onChangeAge = (event) => {
        this.setState({age: event.target.value})
    }

    onChangeAadhar = (event) => {
        this.setState({aadhar: event.target.value})
    }

    onChangeAddress = (event) => {
        this.setState({address: event.target.value})
    }

    onChangeNumber = (event) => {
        this.setState({number: event.target.value})
    }

    onSubmitConsult = () => {}
    onSubmitHome= () => {}
    onSubmitOnline = () => {}

render(){
    const {name, age, aadhar, number, address} = this.state
    return(
    <div>
        <div className='main-bg'>
                <h1 className='bg-heading'>Better Outcomes <br/> & Better Income</h1>
        </div>
       <div className='types-consultant-cont'>
        <div className='consult-doctor-cont'>
                <img src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682597316/young-handsome-physician-medical-robe-with-stethoscope_v35umy.jpg" alt="consultDoctor"
                className='consult-doc-img' />
                <div className="cons-info">
                    <h1>Consult a Doctor</h1>
                    <p>Consult a doctor who are specialized and experts for senior citizens</p>
                </div>
                <button type='button' className="fillFormBtn" onClick={this.onClickConsult}>Fill the Form</button>
                {this.state.consult && 
                <form  className="userForm" onSubmit='Submit'>
                    <label htmlFor='name'>Name    </label>
                    <input className='nameInputBox' id='name' type='text' value={name} placeholder='Your Name' onChange={this.onChangeName}/>

                    <br/>
                    <label htmlFor='age'>Age</label>
                    <input className='ageInputBox' id='age' type='text' value={age} placeholder='Your Age' onChange={this.onChangeAge}/>
                    <br/>

                    <label htmlFor='aadhar'>Aadhar Number</label>
                    <input className='aadharInputBox' id='aadhar' type='text' value={aadhar} placeholder='Aadhar Number' onChange={this.onChangeAadhar}/>
                    <br/>

                    <label htmlFor='address'>Address</label>
                    <input className='addressInputBox' id='address' type='text' value={address} placeholder='Your address' onChange={this.onChangeAddress}/>
                    <br/>

                    <label htmlFor='number'>Phone Number</label>
                    <input className='numberInputBox' id='number' type='text' value={number} placeholder='Your number' onChange={this.onChangeNumber}/>
                    <br/>
                        <button className="submitBtn" onSubmit={this.onSubmitConsult}>Submit</button>
                </form>
                }
        </div>
        <div className='consult-doctor-cont'>
                <img src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682588538/young-doctor-supporting-his-patient_ab0hg3.jpg" alt="consultDoctor"
                className='home-doc-img' />
                <div className="cons-info">
                    <h1>Consult a Doctor</h1>
                    <p>Consult a doctor who are specialized and experts for senior citizens</p>
                </div>
                <button type='button' className="fillFormBtn" onClick={this.onClickHome}>Fill the Form</button>
                {this.state.home && 
                <form  className="userForm" onSubmit='Submit'>
                    <label htmlFor='name'>Name    </label>
                    <input className='nameInputBox' id='name' type='text' value={name} placeholder='Your Name' onChange={this.onChangeName}/>

                    <br/>
                    <label htmlFor='age'>Age</label>
                    <input className='ageInputBox' id='age' type='text' value={age} placeholder='Your Age' onChange={this.onChangeAge}/>
                    <br/>

                    <label htmlFor='aadhar'>Aadhar Number</label>
                    <input className='aadharInputBox' id='aadhar' type='text' value={aadhar} placeholder='Aadhar Number' onChange={this.onChangeAadhar}/>
                    <br/>

                    <label htmlFor='address'>Address</label>
                    <input className='addressInputBox' id='address' type='text' value={address} placeholder='Your address' onChange={this.onChangeAddress}/>
                    <br/>

                    <label htmlFor='number'>Phone Number</label>
                    <input className='numberInputBox' id='number' type='text' value={number} placeholder='Your number' onChange={this.onChangeNumber}/>
                    <br/>
                        <button className="submitBtn" onSubmit={this.onSubmitHome}>Submit</button>
                </form>
                }
        </div>
        <div className='consult-doctor-cont'>
                <img src="https://res.cloudinary.com/dlbaf9ix7/image/upload/v1682604835/doctor-offering-medical-teleconsultation_nrmfix.jpg" alt="consultDoctor"
                className='online-doc-img' />
                <div className="cons-info">
                    <h1>Consult a Doctor</h1>
                    <p>Consult a doctor who are specialized and experts for senior citizens</p>
                </div>
                <button type='button' className="fillFormBtn" onClick={this.onClickOnline}>Fill the Form</button>
                {this.state.online && 
                <form  className="userForm" onSubmit='Submit'>
                    <label htmlFor='name'>Name    </label>
                    <input className='nameInputBox' id='name' type='text' value={name} placeholder='Your Name' onChange={this.onChangeName}/>

                    <br/>
                    <label htmlFor='age'>Age</label>
                    <input className='ageInputBox' id='age' type='text' value={age} placeholder='Your Age' onChange={this.onChangeAge}/>
                    <br/>

                    <label htmlFor='aadhar'>Aadhar Number</label>
                    <input className='aadharInputBox' id='aadhar' type='text' value={aadhar} placeholder='Aadhar Number' onChange={this.onChangeAadhar}/>
                    <br/>

                    <label htmlFor='address'>Address</label>
                    <input className='addressInputBox' id='address' type='text' value={address} placeholder='Your address' onChange={this.onChangeAddress}/>
                    <br/>

                    <label htmlFor='number'>Phone Number</label>
                    <input className='numberInputBox' id='number' type='text' value={number} placeholder='Your number' onChange={this.onChangeNumber}/>
                    <br/>
                        <button className="submitBtn" onSubmit={this.onSubmitOnline}>Submit</button>
                </form>
                }
        </div>
        </div>
    </div>
)
    }
}

export default DoctorsCare