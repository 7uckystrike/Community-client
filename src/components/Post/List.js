import React from 'react'
import { ListDiv, ListItem, ListUser} from '../../style/ListCSS'
import { Link } from 'react-router-dom'
import { useSelector } from "react-redux";
import moment from 'moment'
import 'moment/locale/ko'
import Avatar from 'react-avatar' 

const List = (props) => {
  const user = useSelector((state) => state.user);

  const SetTime = (a, b) => {
    if (a !== b) {
      return moment(b).format("YYYY년 MMMM Do, hh:mm") + "(수정됨)";
    } else {
      return moment(a).format("YYYY년 MMMM Do, hh:mm") ;
    } 
  }

  return (
    <ListDiv>
      {props.postList.map((post, index)=>{
        return(
          <ListItem key={index}>
            <Link to = {`/post/${post.postNum}`}>
              <p className="title">{post.title}</p>
              <ListUser>
                <Avatar
                  size="40"
                  round={true}
                  src={post.author.photoURL}
                  className="Avatar"
                />
              <div>
                <p className="displayName">
                  {post.author.displayName}
                  {user.uid === post.author.uid && (
                    <span className="writer">작성자</span>
                  )}
                </p>
                <p className="postTime">
                  {SetTime(post.createdAt, post.updatedAt)}
                </p>
              </div>
              </ListUser>
            </Link>
          </ListItem>
        )
      })}
    </ListDiv>
  )
}

export default List