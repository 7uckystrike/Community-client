import React, { useState, useEffect } from 'react'
import { LoginDiv } from '../../style/UserCSS'
import firebase from '../../firebase'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errormsg, setErrorMsg] = useState("");

  let navigate = useNavigate();

  const singInFunc = async (event) => {
    event.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(email, password)
      navigate("/")
    } catch(error) {
      if((error.code = "auth/user-not-found")) {
        setErrorMsg("존재하지 않는 이메일 입니다.")
      }else if((error.code = "auth/wrong-password")) {
        setErrorMsg("비밀번호가 일치하지 않습니다.")
      }else {
        setErrorMsg("로그인이 실패하였습니다.")
      }
    }
  }

  useEffect(() => {
    setTimeout(() => {
      setErrorMsg("");
    }, 5000);
  },[errormsg])

  return (
    <LoginDiv>
      <form>
        <label>이메일</label>
        <input 
          type="email"
          value={email}
          required
          onChange={(event) => setEmail(event.currentTarget.value)} />
        <label>비밀번호</label>
        <input 
          type="password"
          value={password}
          required
          onChange={(event) => setPassword(event.currentTarget.value)} />
        {errormsg !== "" && <p>{errormsg}</p>}
        <button onClick={singInFunc}>로그인</button>
        <button onClick={(event) => {
          event.preventDefault();
          navigate(`/register`);
        }}>
        회원가입</button>
      </form>
    </LoginDiv>
  )
}

export default Login