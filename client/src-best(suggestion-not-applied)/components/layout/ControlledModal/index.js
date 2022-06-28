import styled from 'styled-components';

const ModalBackground = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(250, 250, 250, 0.5);

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
  border-radius: 25px;
  margin: 10% auto;
  padding: 20px;
  width: ${(props) => (props.size ? props.size.width : '50%')};

  button > i.fa-solid {
    /* background: #000; */
    border: none;
  }
`;

export const ControlledModal = ({ shouldShow, size, onRequestClose, children }) => {
  return shouldShow ? (
    <ModalBackground onClick={onRequestClose}>
      <ModalBody onClick={(e) => e.stopPropagation()}>
        <button className='close' onClick={onRequestClose}>
          <i className='fa-solid fa-circle-xmark'></i>
        </button>
        {children}
      </ModalBody>
    </ModalBackground>
  ) : null;
};
