import styled from '@emotion/styled'

const UploadDiv = styled.div`
  width: 100%
  margin-top: 1rem;
`;

const UploadForm = styled.form`
  width: 80%;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  #title {
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    padding-left: 10px;
    margin-bottom: 10px;
    &: active, &:focus {
      outline: none;
    }
  }
  textarea {
    min-height: 250px;
    resize: none;
    border-radius: 10px;
    border: 1px solid #c6c6c6;
    padding: 10px;
    padding-left: 10px;
    &: active, &:focus {
      outline: none;
    }
    &::-webkit-scrollbar {
      width: 10px;
    }
    &::-webkit-scrollbar-thumb {
      background-color: grey;
      border-radius: 15px;
      background-colip: padding-box;
      border: 2px solid transparent;
    }
    &::-webkit-scrollbar-track {
      background-color: #c6c6c6;
      border-radius: 15px;
      box-shadow: inset 0px 0px 5px whitesmoke;
    }
  }
  label {
    font-weight: bold;
    margin-top: 30px;
  }
`;

const UploadButtonDiv = styled.div`
  margin-top: 1rem;
  display: flex;
  justify-content: flex-end;
  button {
    width: 60px;
    height: 45px;
    background-color: #4869f6;
    font-size: 15px;
    border-radius: 4px;
    border: 1px solid #4869f6;
    color: white;
    font-weight: bold;
    &:hover {
      background-color: white;
      color: black;
      border: 1px solid white;
    }
    &.cancel {
      margin-left: 10px;
      background-color: #fff;
      color: black;
      border: 1px solid #d9d9da;
      &:hover {
        background-color: #4869f6;
        color: #fff;
        border: 1px solid #4869f6;
      }
    }
  }
`;



export { UploadDiv, UploadForm, UploadButtonDiv}
