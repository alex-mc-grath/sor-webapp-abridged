import styled, { css } from 'styled-components/macro';
import inputStyles from '../Form/inputStyles';

export const SelectContainer = styled.div`
  position: relative;
  margin: 0;
  width: 100%;
`;

export const Textlabel = styled.div`
  font-weight: 400;
  letter-spacing: 0px;
  margin: 1rem 0;
`;

export const SelectLabelButton = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  margin: 1rem 0;
  padding: ${(props) => (props.type === 'language' ? '.8rem 1.5rem' : '1.7rem 2rem')};
  min-width: 7rem;
  width: ${(props) => (props.type === 'language' ? '180px' : '290px')};
  width: 100%;
  color: ${(props) => (props.type === 'language' ? '#484848' : '')};
  font-weight: ${(props) => (props.type === 'language' ? '500' : '900')};
  /* background-color: ${(props) => (props.type === 'language' ? '#F3F4F6' : '#fff')}; */
  background-color: ${(props) => props.theme.colors.secondaryShade2};
  /* border: ${(props) => (props.type === 'language' ? 'none' : '1px solid #a5a5a5')}; */
  border-radius: ${(props) => (props.type === 'language' ? '12px' : '5px')};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.3s ease;

  ${(props) =>
    props.type === 'long-text' &&
    css`
    background: #fafafa;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal;
      width: 100%;
      margin: 0.4rem 0;
      
      >div{
        width: 100%;
        white-space:normal;
        line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-height: 1.8;        /* fallback */
        max-height: 2*2;       /* fallback */
    }

    `}



  ${(props) =>
    props.type === 'grey' &&
    css`
      background: #f3f4f6;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal;


      .far.fa-chevron-down{
        font-size: 1rem;
      }
    `}

  ${(props) =>
    props.type === 'empty' &&
    css`
      /* background: #f3f4f6;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal; */
      width: 30rem;
      background: transparent;
      > * {
        /* background: #000; */
        margin-left: 10rem;
        margin-right: 0;
      }
    `}

    ${(props) =>
    props.type === 'profile' &&
    css`
      display: flex;
      background: transparent;
      /* width: 170px; */
      height: 5rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      margin-right: 2rem;
      font-size: 1.3rem;
      border: none;
      padding-left: 1rem;
      /* border-radius: 12px 12px 0 0; */
      > div {
        display: flex;
      }
      svg {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        margin-right: 2.5rem;
      }

      i.far.fa-chevron-down {
        display: none;
        color: #d3d6e4;
        font-size: 1.5rem;
      }
    `}

  &:hover {
    background-color: ${props=>props.theme.colors.secondaryShade1};
  }

  i {
    color: #323232;
  }
`;

export const SelectLabelButtonForm = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  height: 4.5rem;
  padding: 0rem 1.2rem;
  min-width: 7rem;
  width: ${(props) => (props.type === 'language' ? '180px' : '290px')};
  width: 100%;
  color: ${(props) => (props.type === 'language' ? '#484848' : '')};
  font-weight: ${(props) => (props.type === 'language' ? '500' : '900')};
  background-color: ${(props) => (props.type === 'language' ? '#F3F4F6' : '#fff')};
  border: ${(props) => (props.type === 'language' ? 'none' : '1px solid #a5a5a5')};
  border-radius: ${(props) => (props.type === 'language' ? '12px' : '5px')};
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  white-space: nowrap;
  transition: 0.3s ease;
  
  svg{
    margin:0;
  }

  ${(props) =>
    props.type === 'long-text' &&
    css`
    background: #fafafa;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal;
      width: 100%;
      margin: 0.4rem 0;
      >div{
        width: 100%;
        white-space:normal;
        line-height: 1.5em;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2; /* number of lines to show */
        line-height: 1.8;        /* fallback */
        max-height: 2*2;       /* fallback */
    }
    `}



  ${(props) =>
    props.type === 'grey' &&
    css`
      background: #f3f4f6;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal;
      /* margin-top: 0.4rem; */
      >div{
        display:flex;
        align-items:center;
      }
    `}

  ${(props) =>
    props.type === 'empty' &&
    css`
      /* background: #f3f4f6;
      border-radius: 12px;
      border: none;
      font-size: 1.3rem;
      font-weight: normal; */
      width: 30rem;
      background: transparent;
      > * {
        /* background: #000; */
        margin-left: 10rem;
        margin-right: 0;
      }
    `}

    ${(props) =>
    props.type === 'profile' &&
    css`
      display: flex;
      background: transparent;
      /* width: 170px; */
      height: 5rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      margin-right: 2rem;
      font-size: 1.3rem;
      border: none;
      padding-left: 1rem;
      /* border-radius: 12px 12px 0 0; */
      > div {
        display: flex;
      }
      svg {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        margin-right: 2.5rem;
      }

      i.far.fa-chevron-down {
        display: none;
        color: #d3d6e4;
        font-size: 1.5rem;
      }
    `}

  &:hover {
    background-color: #fafafa;
  }

  i {
    color: #323232;
  }
`;

export const SelectLabelButtonFilled = styled.div`
  display: ${(props) => (props.hidden ? 'none' : 'flex')};
  padding: 0.8rem 1.5rem;
  min-width: 7rem;
  width: 180px;
  width: 100%;
  height: 5rem;
  color: #484848;
  font-weight: 500;
  background-color: #f3f4f6;
  border: none;
  border-radius: 12px;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;

  transition: 0.3s ease;

  svg {
    width: 100%;
    max-width: 18px;
    margin-right: 3rem;
  }

  ${(props) =>
    props.type === 'all-status' &&
    css`
      display: flex;
      width: 190px;
      height: 5rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      font-weight: bold;
      font-size: 1.3rem;
      margin-left: auto;

      svg {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        margin-right: 2.5rem;
      }

      i.far.fa-chevron-down {
        color: #d3d6e4;
        font-size: 1.5rem;
      }
    `}
  ${(props) =>
    props.type === 'language' &&
    css`
      display: flex;
      /* width: 170px; */
      height: 5rem;
      justify-content: space-between;
      align-items: center;
      margin-top: 0;
      margin-right: 2rem;
      font-size: 1.3rem;
      /* border-radius: 12px 12px 0 0; */

      svg {
        margin: 0;
        color: ${(props) => props.theme.colors.primary};
        margin-right: 2.5rem;
      }

      i.far.fa-chevron-down {
        color: #d3d6e4;
        font-size: 1.5rem;
      }
    `}
  

  &:hover {
    background-color: #fafafa;
  }

  > div {
    display: flex;
    align-items: center;
    justify-content: center;

    img {
      margin-right: 1.5rem;
    }
  }

  i {
    color: #323232;
  }
`;

export const DropdownStyle = styled.div`
  position: absolute;
  top: 104%;
  ${(props) => (props.side ? props.side : 'left')}: 0;
  max-height: 40vmax;
  min-width: 10rem;
  width: ${(props) => (props.dropdownWidth ? props.dropdownWidth : '100%')};
  padding: 0.4rem;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  background: #fafafa;
  background: #ffffff;
  box-shadow: 0px 10px 49px rgba(0, 0, 0, 0.13);
  border-radius: 12px;
  transition: max-height 0.2s ease;
  z-index: 2;

  /* overflow: scroll; */
  ${(p) =>
    p.isVisible !== true &&
    css`
      max-height: 40px;
      visibility: hidden;
    `}
`;

export const DropdownItem = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  display: flex;
  align-items: center;
  width: 100%;
  margin: 0.15rem 0;
  padding: ${(props) => (props.itemPadding ? props.itemPadding : '.8rem 1.5rem')};
  font-size: 1.3rem;
  font-weight: 400;
  color: #333;
  border-radius: 0.3rem;
  cursor: pointer;
  background: white;
  transition: none;

  button {
    transition: none;
  }

  ${(p) =>
    p.active &&
    css`
      color: #166edc;
      font-weight: 500;
    `}
  &:hover, :focus, :focus:hover {
    background-color: ${props=>props.theme.colors.secondary};
    color: white;
    outline: none;

    button {
      color: white !important;
      transition: none;
    }
  }
`;
