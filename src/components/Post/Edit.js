import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import {UploadDiv, UploadForm, UploadButtonDiv} from '../../style/UploadCSS'
import ImageUpload from './ImageUpload'


const Edit = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState("")
  const [postInfo, setPostInfo] =useState({})
  const [flag, setFlag] =useState(false)

  let navigate = useNavigate();
  let params = useParams();

  useEffect(() => {
    let body = {
      postNum : params.postNum,
    }

    axios.post("/api/post/detail", body)
      .then((response) => {
        if(response.data.success) {
          setPostInfo(response.data.post);
          setFlag(true);
        }
      }).catch((error) => {
        console.log(error)
      })
    },[])

    function onSubmit(event) {
      event.preventDefault();
      if (title === "" || content === "") {
        return (
          alert ("모든 항목을 채워주세요!")
        )}  
      let body  = {
        title : title,
        content : content,
        postNum : params.postNum,
        image : image,
      };
  
      axios.post("/api/post/edit", body)
        .then((responce) => {
          if(responce.data.success) {
            alert("글 수정이 완료되었습니다.")
            navigate(`/post/${params.postNum}`);
          }else {
            alert("글 수정이 실패하였습니다.")
          }
        }).catch((error) => {
          console.log(`에러입니다! ${error}`)
        })
    };

    useEffect(() => {
      setTitle(postInfo.title)
      setContent(postInfo.content)
      setImage(postInfo.image)
    },[postInfo])

  return(
    <UploadDiv>
      <UploadForm>
        <label htmlFor="title">제목</label>
        <input 
          id="title"
          type="text" 
          value={title}
          onChange={(event) => {
            setTitle(event.currentTarget.value)
          }} />

        <ImageUpload setImage={setImage}  />

        <label htmlFor="content">내용</label>
        <textarea
          id="content"
          value={content}
          onChange={(event) => {
            setContent(event.currentTarget.value)
          }} />
        <UploadButtonDiv>
          <button onClick={onSubmit}>
            전송
          </button>
          <button className='cancel' onClick={(event) => {
            event.preventDefault();
            navigate(-1);
          }}>
            취소
          </button>
        </UploadButtonDiv>
      </UploadForm>
      
    </UploadDiv>
  )
}

export default Edit