import axios from 'axios'
import Avatar from 'react-avatar' 
import { useSelector } from 'react-redux'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { PostDiv, Post, BtnDiv, PostUser, PostContent } from "../../style/DetailCSS.js"

const Detail = (props) => {
  let params = useParams();
  let navigate = useNavigate();
  const user = useSelector(state => state.user)

  const DeleteHandler = () => {
    if(window.confirm(`삭제하시겠습니까?`)){
      let body = {
        postNum : params.postNum
      }
      axios.post("/api/post/delete", body)
        .then((response) => {
          if(response.data.success) {
            alert("게시글이 삭제되었습니다.");
            navigate("/");
          }
        })
        .catch((error) => {
        alert("게시글 삭제에 실패하였습니다.")
        })
    }
  }

  return(
    <PostDiv>
      <Post>
        <p className="title">{props.postInfo.title}</p>
        <PostUser>
          <Avatar 
            size="40" 
            round={true} 
            src={props.postInfo.author.photoURL}
            className="Avatar" />
          <p className="displayName">
            {props.postInfo.author.displayName}
            {user.uid === props.postInfo.author.uid && (
              <span className="writer">작성자</span>
            )}
          </p>
        </PostUser>
        <PostContent>
          {props.postInfo.image ?
             <img src={`${props.postInfo.image}`} alt="" style={{ width:"300px", height:"auto"}} /> : null}
          <p>{props.postInfo.content}</p>
        </PostContent>
      </Post>
      
      {user.uid === props.postInfo.author.uid && (
        <BtnDiv>
          <Link to ={`/edit/${props.postInfo.postNum}`}>
            <button className='edit'>수정</button>
          </Link>
            <button className='delete' onClick={DeleteHandler}>삭제</button>
          </BtnDiv>
       )}
    </PostDiv>
  );
}

export default Detail