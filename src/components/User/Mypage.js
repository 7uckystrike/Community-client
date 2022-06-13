import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Avatar from 'react-avatar'
import axios from 'axios'
import { MyPageDiv } from '../../style/UserCSS'
import firebase from '../../firebase'

const Mypage = () => {
  const user = useSelector((state) => state.user);
  const navigate = useNavigate();
  const [newDisplayName, setNewDisplayName] = useState(user.displayName)
  const [currentImg, setCurrentImg] = useState("")

  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewDisplayName(value)
  }

  const imgUpload = (e) => {
    var formData = new FormData();
    formData.append("file", e.target.files[0]);
    axios.post("/api/user/profile/img", formData).then((response) => {
      setCurrentImg(response.data.filePath);
    });
  };

  const onSubmit = async (event) => {
    event.preventDefault();  
    try {
      await firebase.auth().currentUser.updateProfile({
        displayName: newDisplayName,
        photoURL: currentImg,
      })
    } catch (error) {
      return alert("닉네임 수정에 실패하였습니다.")
    }
    let body = {
      displayName: newDisplayName,
      photoURL: currentImg,
      uid: user.uid
    }
    axios.post("/api/user/profile/update", body)
      .then((response) => {
        if (response.data.success) {
          alert("성공!")
          window.location.reload();
        } else {
          return alert("실패!")
        }
      })
    }

  useEffect(() => {
    if(user.isLoading && !user.accessToken) {
      navigate("/login")
    } else {
      setCurrentImg(user.photoURL)
    }
  },[user])

  return (
    <MyPageDiv style={{ width: "100vw" , height: "100vh"}}>
     <form
        style={{
          width: "50%",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          marginTop: "2rem",
        }}>
          <label>
            <input 
              type="file" 
              accept="image/*" 
              style={{ display: "none"}}
              onChange={imgUpload}
             />
            <Avatar 
              size="100" 
              round={true} 
              src={currentImg}
              style={{ cursor: "pointer"}} />
           </label>
           <h3>{user.displayName}</h3>
           <input 
            onChange={onChange}
            type="text" 
            value={newDisplayName}
            style={{border:`1px solid #d9d9da`, padding:`9px 20px`}} />
          <input type="submit" value="수정하기" onClick={onSubmit} className="Mypagebtn" />
     </form>
    </MyPageDiv>
  )
}

export default Mypage








  



