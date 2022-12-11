import { useRef } from 'react';
import styled from 'styled-components/macro';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 2;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: #95909064;
  margin-top: 0rem !important;

  /* background-color: rgba(250, 250, 250, 0.5); */

  /* Hide scrollbar for Chrome, Safari and Opera */
&::-webkit-scrollbar {
    display: none;
  }

  button.close {
    border: 0;
    background: transparent;
    cursor: pointer;
    color: grey;
    i.fa-solid.fa-circle-xmark {
    }
    /* background: #000; */
  }
`;

const ModalBody = styled.div`
  background-color: white;
  /* margin: 10% auto; */
  margin-left: auto;
  padding: 4rem;
  height: ${(props) => props.height || '100%'};
  width: 30%;
  box-shadow: 0px 1px 28px rgba(0, 0, 0, 0.12);

  button > i.fa-solid {
    /* background: #000; */
    border: none;
  }
`;

export const RightPanelModal = ({ shouldShow, size, onRequestClose, children, height }) => {

  const modalBody = useRef()

  const onBackgroundClick = (e) => {
    let modal = modalBody.current.getBoundingClientRect()

    if(e.pageX < modal.x)
    {
      onRequestClose()
    }
  }


  return shouldShow ? (
    <ModalBackground onClick={onBackgroundClick}>
      <ModalBody ref={modalBody}  height={height}>
        {/* <button className='close' onClick={onRequestClose}>
          <i className='fa-solid fa-circle-xmark'></i>
        </button> */}
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null;
};
