import { useEffect, useState } from 'react';
import Detail from './Detail';
import RepleArea from '../Reple/RepleArea';
import { Spinner } from 'react-bootstrap'
import { SpinnerDiv } from "../../style/DetailCSS.js"
import { useParams } from 'react-router-dom'
import axios from 'axios';

const PostArea = (props) => {
  const [postInfo, setPostInfo] = useState({})
  const [flag, setFlag] = useState(false)

  let params = useParams();

  useEffect(() => {
    let body = {
      postNum : params.postNum
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

return(
  <div>
    {flag ? (
      <>
        <Detail postInfo={postInfo} />
        <RepleArea postId={postInfo._id} />
      </>
    ) : (
      <SpinnerDiv>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </SpinnerDiv>
    )}
  </div>
 )
}

export default PostArea