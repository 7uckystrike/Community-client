import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginDiv } from '../../style/UserCSS'
import firebase from '../../firebase'
import axios from 'axios'


const Register = () => {
  const [name, setName] = useState("") 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [pwConfirm, setPwConfirm] = useState("");
  const [flag, setFlag] = useState(false);
  const [nameCheck, setNameCheck] = useState(false);
  const [nameInfo, setNameInfo] = useState("")
  
  let navigate = useNavigate();

  const RegisterFunc = async (event) => {
    event.preventDefault();
    setFlag(true);
  
    if(password !== pwConfirm){
      return alert("비밀번호와 비밀번호 값은 같아야합니다.")
    }
    if(!nameCheck) {
      return alert("닉네임 중복검사를 진행해주세요.")
    }
    let createUser = await firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)

      await createUser.user.updateProfile({
        displayName: name,
        photoURL:"https://kr.object.ncloudstorage.com/r-community/profile.png",
      })
      let body = {
        email : createUser.user.multiFactor.user.email,
        displayName : createUser.user.multiFactor.user.displayName,
        uid : createUser.user.multiFactor.user.uid,
        photoURL: "https://kr.object.ncloudstorage.com/r-community/profile.png",
      }
      

      axios.post("/api/user/register", body)
        .then((response) => {
          setFlag(false);
          if(response.data.success) {
            navigate("/login") ;
          } else {
            return alert ("회원가입에 실패하였습니다.")
          }
        })
  }

  const nameCheckFunc = (event) => {
    event.preventDefault();
    if(!name) {
      return alert("닉네임을 입력해주세요")
    }
    let body = {
      displayName: name,
    }
    axios.post("/api/user/nameCheck" ,body)
      .then((response) => {
        if(response.data.success) {
          if(response.data.check) {
            setNameCheck(true)
            setNameInfo("사용 가능한 닉네임입니다.")
          }else{
            setNameInfo("사용불가한 닉네임입니다.")
          }

        }
      })
    }

  return (
    <LoginDiv>
      <form>
        <label>닉네임</label>
        <input 
          type="name"
          value={name}
          disabled={nameCheck}
          onChange={(event) => setName(event.currentTarget.value)} />
        {nameInfo}
        <button 
          onClick={nameCheckFunc}>닉네임 중복검사</button>
        <label>이메일</label>
        <input 
          type="email"
          value={email}
          onChange={(event) => setEmail(event.currentTarget.value)} />
        <label>비밀번호</label>
        <input 
          type="password"
          value={password}
          minLength={8}
          onChange={(event) => setPassword(event.currentTarget.value)} />
        <label>비밀번호 확인</label>
        <input 
          type="password"
          value={pwConfirm}
          minLength={8}
          onChange={(event) => setPwConfirm(event.currentTarget.value)} />
        <button 
          onClick={RegisterFunc}
          disabled={flag}>
            확인
        </button>
      </form>

    </LoginDiv>
  )
}

export default Register