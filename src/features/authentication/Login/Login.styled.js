import styled from 'styled-components';
import closeForm from '../../../assets/closeForm.png';

export const Overlay = styled.div`
  display: flex;
  height: 100vh;
  width: 100%;
  align-items: top;
  justify-content: center;
  background-color: rgba(0, 0, 0, 0.5);
  animation: smoothStart 0.7s ease-in;
  @keyframes smoothStart {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const FormBody = styled.form`
  display: flex;
  flex-direction: column;
  height: 600px;
  width: 40%;
  align-items: center;
  background-color: #151515;
  opacity: 0.9;

  .close-form {
    height: 40px;
    width: 50px;
    margin-top: 1%;
    margin-left: 90%;
    background-image: url(${closeForm});
    cursor: pointer;
  }

  .form-header {
    background-position: center;
    background-repeat: no-repeat;
    background-size: contain;
    padding: 1.5rem;
  }

  .form-title {
    margin-top: 46px;
    color: #edd700;
    font-size: 25.6p;
    font-weight: 400;
    text-align: center;
    text-transform: uppercase;
  }

  @media (max-width: 1200px) {
    width: 60%;
  }

  @media (max-width: 1000px) {
    width: 80%;
  }

  @media (max-width: 700px) {
    width: 100%;
  }

  input {
    display: flex;
    height: 50px;
    width: 550px;
    margin-bottom: 20px;
    background: white;
    font-size: 1rem;
    letter-spacing: 0.8px;
    line-height: 40px;
    border: 1px solid #484848;
    border-radius: 3px !important;
    text-align: left;

    &:focus {
      color: #edd700;
      background-color: #484848;
      border-color: #edd700;
    };
  }
  
  .submit-button {
    width: 35rem;
    margin-top: 5%;
    margin-bottom: 30px;
    color: white;
    background-color: #484848;
    font-size: 1.2rem;
    border-radius: 0.5rem;
    padding: 0.7rem;
    cursor: pointer;

    &:hover {
        background-color: #3f6ca9;
    }
  }
`;

export const Alert = styled.span`
  display: block;
  color: red;
  font-size: 1.2rem;
  text-align: center;
  margin-bottom: 10px;
`;
