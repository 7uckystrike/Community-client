import styled from "@emotion/styled"

const ListDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;
  @media (max-width: 756px) {
    width: 90%
  }`

const ListItem = styled.div`
  width: 100%;
  height: auto;
  min-height: 120px;
  background: #fff;
  margin-top: 5vh;
  margin-bottom: 5vh;
  padding: 20px;
  border: 1px solid #d9d9da;
  a {
    color: black;
    text-decoration: none;
    .title {
      font-weight: bold;
      font-size: 30px;
      margin-left: 5px;
    }
  }`

  const ListUser = styled.div `
    display: flex;
    align-content: center;
    align-items: center;
    justify-content: flex-start;

    .Avatar {
      border: 1px solid #eee; 
      margin-right: 15px;
      margin-top: -5px;
    }

    .displayName {
      margin-bottom: -2px;
      font-size:16px;
    }

    .writer {
      position: relative;
      top: -3px;
      margin-left: 8px;
      padding: 2px 8px;
      font-size: 12px;
      font-weight: bold;
      background: #4869f6;
      border-radius: 5px;
      color: #fff;
    }

    .postTime {
      margin-top: 2px;
      font-size: 12px;
      color: #999;
    }
  `

export { ListDiv, ListItem, ListUser }
