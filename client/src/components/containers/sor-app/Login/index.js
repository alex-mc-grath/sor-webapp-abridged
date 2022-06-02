import LogoAnimation from '../../sor-dev/LogoAnimation'
import { StyledLogin } from './Style'
import styled from 'styled-components/macro'

import { motion } from 'framer-motion'
import { variants1 } from '../../../utils/animationVariants'

import { signIn } from './action'
import { useInput } from '../../../hooks/useInput'
import { useNavigate } from 'react-router-dom'


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
`

export const Login = () => {
  const { value: email, bind: bindEmail, resetEmail } = useInput('')
  const { value: password, bind: bindPassword, resetPassword } = useInput('')

  const navigate = useNavigate()

  //     const AUTH_TOKEN = 'auth-token';

  //     const LOGIN_MUTATION = gql`
  //     mutation LoginMutation(
  //       $email: String!
  //       $password: String!
  //     ) {
  //       login(email: $email, password: $password) {
  //         token
  //       }
  //     }
  //   `;

  //   const [login] = useMutation(LOGIN_MUTATION, {
  //     variables: {
  //       email: formState.email,
  //       password: formState.password
  //     },
  //     onCompleted: ({ login }) => {
  //       localStorage.setItem(AUTH_TOKEN, login.token);
  //       navigate('/');
  //     }
  //   });

  const onSubmit = (e) => {
    e.preventDefault()
    signIn({ email, password })
    // if()
    // navigate('/app/')
  }

  return (
    <motion.div
      variants={variants1}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        x: { type: 'spring', stiffness: 300, damping: 30 },
        opacity: { duration: 0.2 },
      }}
    >
      <StyledLogin>
        <form>
          <CutomizedLogoAnimation branchName="APP" />
          <span className="forgot-password">Forgot Password?</span>
          <div className="group">
            <input
              {...bindEmail}
              type="email"
              name="email"
              id="email"
              placeholder="email@contact.com"
            />
            <input
              {...bindPassword}
              type="password"
              name="password"
              id="password"
            />
          </div>
          <button onClick={onSubmit}>Connect</button>
        </form>
      </StyledLogin>
    </motion.div>
  )
}
