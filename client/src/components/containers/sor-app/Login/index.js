import { useState } from 'react';
import {useDispatch, useSelector} from 'react-redux'
import LogoAnimation from '../../sor-dev/LogoAnimation';
import { StyledLogin, StyledFormError, StyledFieldError } from './Style';
import styled from 'styled-components/macro';

import {useFormik} from 'formik'
import * as yup from 'yup'
import { motion } from 'framer-motion';
import { variants1 } from '../../../utils/animationVariants';

import { signIn } from './action';
import { Navigate } from 'react-router-dom';
import { LoginAnimation } from './LoginAnimation';

import { BubbleMenu } from '../../../layouts/BubbleMenu/';

import LoadingIndicator from '../../../bp-components/LoadingIndicator'

const CutomizedLogoAnimation = styled(LogoAnimation)`
  /* background: ${(props) => props.theme.colors.black}; */
  min-height: 20vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .sor-dev-logo-container {
    margin: auto;
  }
`;

export const Login = () => {

  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isAuthenticated)
  const [formErrorMessage, setFormErrorMessage] = useState('');
  const [showSpinner, setShowSpinner] = useState(false)


  const formik = useFormik({
      initialValues: {
          "email":"",
          "password":""
      },

      validationSchema: yup.object({
          "email": yup.string().email().required(),
          "password": yup.string().min(6).max(20).required()
      }),

      onSubmit: async (values) => {
        setShowSpinner(true)
        setFormErrorMessage('')
        try
        {
          let authDispatchFunction = await dispatch(signIn(values))
          setView('logInSuccess');
          setTimeout(authDispatchFunction, 1800);
        }
        catch(err)
        {
          console.log("login failed", err)
          setFormErrorMessage(err.message)
        }

        setShowSpinner(false)
      }
  });


  const [view, setView] = useState('');
  const [showNav, setShowNav] = useState(false);


  if(isLoggedIn)
  {
    return <Navigate to='/app/analytics' replace={true}/>
  }


  return (
    <motion.div
      variants={variants1}
      initial='enter'
      animate='center'
      exit='exit'
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        // opacity: { duration: 0.2 },
      }}>
      <StyledLogin>
        <BubbleMenu onceToggled={() => setShowNav(!showNav)} showNav={showNav} linkOptions={['/', '/app/login', '/growth']} textOptions={['Dev', 'Growth']} />
        <form onSubmit={formik.handleSubmit}>

          {view === '' ? <CutomizedLogoAnimation branchName='APP' /> : <LoginAnimation />}
          {formErrorMessage && <StyledFormError>{formErrorMessage}</StyledFormError>}

          <span className='forgot-password'>Forgot Password?</span>

          <div className='group'>

            <input type='email' name='email' onChange={formik.handleChange} placeholder='email' value={formik.values.email} onBlur={formik.handleBlur}/>
            {formik.touched.email && formik.errors.email && <StyledFieldError>{formik.errors.email}</StyledFieldError>}

            <input type='password' name='password' onChange={formik.handleChange} placeholder='password' value={formik.values.password} onBlur={formik.handleBlur}/>
            {formik.touched.password && formik.errors.password && <StyledFieldError>{formik.errors.password}</StyledFieldError>}

          </div>

          {showSpinner? (<LoadingIndicator />) : <button type="submit">Connect</button>}

        </form>
      </StyledLogin>
    </motion.div>
  );

};
