import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const Footer = () => {
    const [submitted, setSubmitted ] = useState(false);
    const {register, handleSubmit, setValue,  formState : { errors }, reset } = useForm ({
        defaultValues :{
            username:'', phonenumber:'', mail:'',  dateofbirth:'', address:'', gender:'', qualification:'', resume:'', interests:''
        }
        
    })

    const handleChange = (e) => {
        const {name, value, type, checked} = (e.target);
        if (type === 'checkbox') {
        setValue(name, checked);
        }
        else {
            setValue(name, value)
        }
    }
    

    const validateFileds = (value, fieldName) => {
        const trimmedValue = value.trim();

        if (fieldName === 'username') {
            const words = trimmedValue.split(/\s+/);
            if (words.length < 2) {
                return 'Username must contain Surname';
            }
        }
        else if (fieldName === 'mail') {
            if (!/\S+@\S+\.\S+/.test(trimmedValue)) {
                return 'Email is not in valid format';
            }
        }
        else if (fieldName === 'phonenumber') {
            if (!/^\d+$/.test(trimmedValue)) {
                return 'Phone number should conatin only numbers'
            } else if (trimmedValue.length < 10 || trimmedValue.length > 10) {
                return 'Phone number must contain 10 numbers';
            }
        }
        else if (fieldName === 'gender') {
            if (!value){
                return 'Select Gender';
            }
        }
    }



    const onSubmit = (data) => {
        console.log(data);
        setSubmitted(true);
        reset();
    }

  return (
    <div>
        <div className='loginform'>
            <div className='subform'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className='formelements'>
                        <input {...register('username', {required: 'Enter Username', validate: value => validateFileds(value, 'username')})} placeholder='Username' name="username" onChange={handleChange}/><br />
                        {errors.username && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.username.message}</p>}
                    </div>
                    <div className='formelements'>
                        <input {...register ('mail', {required:'Mail id is required', validate: value => validateFileds(value, 'mail')})} placeholder='Email' type='text' name="mail"  onChange={handleChange}/><br />
                        {errors.mail && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.mail.message}</p>}
                    </div>
                    <div className='formelements'>
                        <input {...register ('phonenumber', {required:'Phone Number is required', validate: value => validateFileds(value, 'phonenumber')})} placeholder='Phone number' type='text' name="phonenumber"  onChange={handleChange}  /><br />
                        {errors.phonenumber && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.phonenumber.message}</p>}
                    </div>
                    <div className='formelements'>
                        <input {...register ('dateofbirth', {required: 'Select correct Date of Birth'})}  placeholder='dd/mm/yyyy' type='date' name="dateofbirth"  onChange={handleChange} /><br />
                        {errors.dateofbirth && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.dateofbirth.message}</p>}  
                    </div>
                    <div className='formelements'>
                        <input {...register ('address', {required:'Address field is required'})} placeholder='Address' name="address"  onChange={handleChange} /><br />
                        {errors.address && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.address.message}</p>}
                    </div>

                    <div className='formelements radio'>
                        <label>Gender: </label>
                        <input {...register ('gender', {validate: value => validateFileds(value, 'gender')})} type='radio' name="gender" value="male" id='male'  onChange={handleChange}  />
                        <label htmlFor='male'>Male</label>

                        <input {...register ('gender')} type='radio' name="gender" value="female" id='female'  onChange={handleChange} />
                        <label htmlFor='female'>Female</label><br />
                        {errors.gender && <p style={{color:'red', margin: '0', fontSize: '0.8em'}}>{errors.gender.message}</p>}
                    </div>

                    <div className='formelements check'>
                        <label>Interests:</label>
                        <input {...register ('interests', {required : 'required', validate: value => validateFileds(value, 'interests')})} type='checkbox' value='devops' name="devops" id='devops' onChange={handleChange}/>
                        <label htmlFor='devops'>Devops</label>
                        <input {...register ('interests')} type='checkbox' value='fullstack' name="fullstack" id='fullstack' onChange={handleChange}/>
                        <label htmlFor='fullstack'>FullStack</label>
                        <input {...register ('interests')} type='checkbox' value='testing' name="testing" id='testing' onChange={handleChange}/>
                        <label htmlFor='testing'>Testing</label>
                        {errors.interests && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.interests.message}</p>}
                    </div>

                    <div className='formelements choose'>
                        <label>Qualification: </label>
                        <select {...register ('qualification', {required : 'Select qualification'})} name="qualification"  onChange={handleChange} >
                            <option value="b.tech">B.Tech</option>
                            <option value="m.tech">M.Tech</option>
                            <option value="bsc">Bsc</option>
                            <option value="m.com">M.com</option>
                        </select>
                        {errors.qualification && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.qualification.message}</p>}
                        <br />
                        
                    </div>
                    <div className='formelements'>
                        <label>Upload Resume:</label>
                        <input {...register ('resume', {required: 'Choose a file'})}  type='file' name="resume"  />
                        {errors.resume && <p style={{color:'red',  margin: '0', fontSize: '0.8em' }}>{errors.resume.message}</p>}
                    </div>
                    <div className='formelements'>
                        <button type='submit'>Submit</button>
                    </div>
                </form>
                {submitted && (<p style={{color:'green'}}>Form Submitted Successfully!</p>)}
            </div>
        </div>
        <div className="footer">
            <h2 id="contactus">Contact Us</h2>
            <div class="box">
                <p>Elico</p>
                <ul>
                    <li><a href="#aboutus">About us</a></li>
                    <li><a href="#applications">Applications</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contactus">Contact us</a></li>
                </ul>
            </div>
            <div className="box">
                <p>Contact</p>
                <address>
                    You may also want to<br />
                    visit us<br />
                    Elico, TS-2<br />
                    Sanath Nagar,<br />
                    Hyderabad
                </address>
            </div>
            <div className="box">
                <p>Social Media</p>
                <ul>
                    <li><a href="#"><img src="https://cdn3.iconfinder.com/data/icons/transparent-on-dark-grey/500/icon-02-512.png" alt="icon1" /></a></li>
                    <li><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcST6nrA1U5ybyRs0l5G8NZj-bimiPvb_1Ntcw&s" alt="icon2" /></a></li>
                    <li><a href="#"><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoHEbl0W02_0MYlmvTx8RdzJP6x08fbfh35g&s" alt="icon3" /></a></li>
                </ul>
            </div>
        </div>
            
        </div>

  )
}


export default Footer;
