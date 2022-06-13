import axios from 'axios'
import React, { useEffect, useState } from 'react' 
import { RepleListDiv } from '../../style/RepleCSS'
import ReleContent from './RepleContent'

const RepleList = (props) => {
  const [repleList, setRepleList] = useState([])
  let body = {
    postId : props.postId,
  }
  useEffect(() => {
    axios.post("/api/reple/getReple", body).then((response) => {
      if (response.data.success) {
        setRepleList([...response.data.repleList])
      }
    })
  },[])
  return (
    <RepleListDiv>
      {repleList.map((reple, index) => {
        return (
          <ReleContent reple={reple} key={index} />
        )
      })}
    </RepleListDiv>
  )
}

export default RepleList