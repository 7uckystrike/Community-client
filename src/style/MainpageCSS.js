import styled from "@emotion/styled";

const GNBDiv = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  max-width: 756px;
  margin: 0 auto !important;

  display: flex;
  align-content: center;
  align-items: center;
  justify-content: space-between;

    input {
      padding: 8px 20px;
      border: 0.5px solid #4869f5;
      border-radius: 6px;
      height: 100%;
      &:active,
      &:focus {
        outline: none;
      }
    }
    button {
      height: 100%;
      border: 0.5px solid #4869f5;
      margin-bottom: -1px;
    }
  }

  @media (max-width: 756px) {
    width: 90%;
    .search {
      width: auto;
      input {
        padding: 5px 10px;
        width: 100%;
      }
    }
    .btn {
      font-size: 0.75rem;
      margin-left: 1rem;
    }
  }
`;

const FooterDiv = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  button {
    width: 150px;
    height: 50px;
    border: none;
    border-radius: 6px;
    background-color: #4869f5;
    padding: 5px 10px;
    font-weight: bold;
    color: white;
  }
`;

export { GNBDiv, FooterDiv };