import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
// import LogoAnimation from '../../sor-dev/LogoAnimation';
import { StyledLogin, StyledFormError, StyledFieldError } from './Style';

import { useFormik } from 'formik'
import * as yup from 'yup'

import { motion } from 'framer-motion';
// import { variants1 } from '../../../utils/animationVariants';

import { signIn } from './action';
import { Navigate } from 'react-router-dom';
import { MainButton } from '../../../_boilerplate/inputs/MainButton';
import { Animation } from '../../../_boilerplate/layouts/Animation';
// import { LoginAnimation } from './LoginAnimation';

// import { BubbleMenu } from '../../../layout/BubbleMenu';

// import LoadingIndicator from '../../../layout/bp-components/LoadingIndicator'
// import { Col } from '../../../layout/Col';

// const CutomizedLogoAnimation = styled(LogoAnimation)`
//   min-height: 20vh;
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   justify-content: center;

//   .sor-dev-logo-container {
//     margin: auto;
//   }
// `;

export const Login = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [showSpinner, setShowSpinner] = useState(false)


  const formik = useFormik({
    initialValues: {
      "email": "",
      "password": ""
    },

    validationSchema: yup.object({
      "email": yup.string().email().required(),
      "password": yup.string().min(6).max(20).required()
    }),

    onSubmit: async (values) => {
      setShowSpinner(true)
      setFormErrorMessage('')
      try {
        let authDispatchFunction = await dispatch(signIn(values))
        setView('logInSuccess');
        setTimeout(authDispatchFunction, 1800);
      }
      catch (err) {
        console.log("login failed", err)
        setFormErrorMessage(err.message)
      }

      setShowSpinner(false)
    }
  });


  const [view, setView] = useState('');
  const [showNav, setShowNav] = useState(false);


  if (isLoggedIn) {
    return <Navigate to='/app/dashboard' replace={true} />
  }


  return (
    <Animation>
      <StyledLogin>
        {/* <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/growth']} textOptions={['Dev', 'Growth']} /> */}
        <form onSubmit={formik.handleSubmit}>
          <h2>Sign in</h2>

          {/* {view === '' ? <CutomizedLogoAnimation branchName='APP' /> : <LoginAnimation />} */}

          {/* <Col width='100%'> */}

          <div style={{ position: 'relative' }}>
            <input type='email' name='email' onChange={formik.handleChange} placeholder='Email' value={formik.values.email} onBlur={formik.handleBlur} />
            {formik.touched.email && formik.errors.email && <StyledFieldError>{formik.errors.email}</StyledFieldError>}
          </div>
          <div style={{ position: 'relative' }}>
            <input type='password' name='password' onChange={formik.handleChange} placeholder='Password' value={formik.values.password} onBlur={formik.handleBlur} />
            {formik.touched.password && formik.errors.password && <StyledFieldError>{formik.errors.password}</StyledFieldError>}
          </div>

          {showSpinner ? (
            // <LoadingIndicator />
            'loading...'
          ) : <MainButton text='Next' margin='1rem auto' />}
          <span className='forgot-password'>Forgot Password?</span>
          {/* </Col> */}
          {formErrorMessage && <StyledFormError>{formErrorMessage}</StyledFormError>}
        </form>
      </StyledLogin>
    </Animation>
  );

};
