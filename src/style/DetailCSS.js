import styled from "@emotion/styled"

const PostDiv = styled.div`
  padding-top: 4rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%;
  }
`

const PostUser = styled.div `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 1px solid #eee;

    .Avatar {
      border: 1px solid #eee; 
      margin-right: 13px;
      margin-top: -5px;
    }

    .displayName {
      margin-bottom: 13px;
      font-size:16px;
    }

    .writer {
      position: relative;
      top: -1px;
      margin-left: 8px;
      padding: 2px 8px;
      font-size: 12px;
      font-weight: bold;
      background: #4869f6;
      border-radius: 5px;
      color: #fff;
    }
  }
`

const PostContent = styled.div`
  margin-top: 30px;
`

const SpinnerDiv = styled.div`
  width: 100%;
  height: calc(100vh - 2rem);
  display: flex;
  align-content: center;
  align-items: center;
  justify-content: center;
`



const BtnDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  margin: 20px 0;
  button {
    border-radius: 6px;
    padding: 5px 10px;
    font-weight: bold;
    &.edit {
      background-color: white;
      color: black;
      border: 1px solid #d9d9da;
      &:hover {
        background-color: #4869f6;
        color: white;
        border: 1px solid #4869f6;
      }
    }
    &.delete {
      margin-left: 10px;
      background-color: #4869f6;
      color: white;
      border: 1px solid #4869f6;
      &:hover {
        background-color: white;
        color: #4869f6;
        border: 1px solid white;
      }
    }
  }
`

const Post = styled.div`
  width: 100%
  height: auto;
  background: #fffff;
  padding: 30px 20px;
  border: 1px solid #d9d9da;
  .title {
    font-weight: bold;
    font-size: 30px;
    margin-left: 5px;
    margin-bottom: 20px;
` 
export { PostDiv, SpinnerDiv, Post, BtnDiv, PostUser, PostContent }