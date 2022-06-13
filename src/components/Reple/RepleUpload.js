import React, { useState } from 'react'
import axios from 'axios'
import { useSelector } from 'react-redux'
import { RepleUploadDiv } from '../../style/RepleCSS'

const RepleUpload = (props) => {
  const [reple, setReple] = useState("")
  const user = useSelector((state) => state.user);

  const submitHandler = (event) => {
    event.preventDefault();
    if (!reple) {
      return alert ("댓글 내용을 채워주세요")
    }

    let body = {
      reple: reple,
      uid: user.uid,
      postId : props.postId,
    }

    axios.post("/api/reple/submit", body).then((reponse) => {
      if (reponse.data.success) {
        alert ("댓글 작성 성공!")
        window.location.reload();
      }else {
        alert ("댓글 작성 실패!")
      }
    })
  }

  return (
    <RepleUploadDiv>
      <form>
        <input 
          type="text" 
          value={reple} 
          onChange={(e) => {
          setReple(e.currentTarget.value);
        }} />
        <button 
          onClick={submitHandler}>
            버튼
        </button>
      </form>
    </RepleUploadDiv>
  )
}

export default RepleUpload