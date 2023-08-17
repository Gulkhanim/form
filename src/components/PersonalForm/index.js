import React from 'react'
import { useFormik } from 'formik';
import './PersonalForm.css'
import { Container } from 'react-bootstrap';
import { useProfileContext } from '../../context';
import { useNavigate } from 'react-router-dom';

const PersonalForm = () => {
    const {setName, setLastName, setEmail, setBiography, setImg} = useProfileContext()
    const navigate = useNavigate()
  
    const formik = useFormik({
        initialValues: {
          firstName: " ",
          lastName: ' ',
          email: '',
          biography: '',
          img: '',
        },
        onSubmit: values => {
         console.log(values)
         setName(values.firstName)
         setEmail(values.email)
         setLastName(values.lastName)
         setBiography(values.biography)
         setImg(values.img)
         navigate('/profile')

        },
      });

    //   function handleChange(e) {
    //     console.log(e.target.img);
    //     setImg(URL.createObjectURL(e.target.img[0]));
    // }
    

  return (
    <Container>
         <form onSubmit={formik.handleSubmit} className='form'>
       <label htmlFor="firstName">First Name</label>
       <input
         id="firstName"
         name="firstName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.firstName}
       />
       <label htmlFor="lastName">Last Name</label>
       <input
         id="lastName"
         name="lastName"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.lastName}
       />
       <label htmlFor="email">Email Address</label>
       <input
         id="email"
         name="email"
         type="email"
         onChange={formik.handleChange}
         value={formik.values.email}
       />
       <label htmlFor="biography">Biography</label>
       <input
         id="biography"
         name="biography"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.biography}
       />
       <label htmlFor="img">Profile Image</label>
       <input
         id="img"
         name="img"
         type="file"
         onChange={formik.handleChange}
         value={formik.values.img}
         
       />
       <button type="submit">Submit</button>
     </form>
    </Container>
  )
}

export default PersonalForm