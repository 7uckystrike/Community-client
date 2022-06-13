import { useState, useEffect } from 'react'
import axios from 'axios'
import { DropdownButton, Dropdown } from 'react-bootstrap'
import { GNBDiv, FooterDiv} from '../style/MainpageCSS'
import List from './Post/List'

const MainPage = () => {
  const [postList, setPostList] = useState([])
  const [sort, setSort] = useState("최신순")
  const [search, setSearch] = useState("")
  const [skip, setSkip] = useState(0)
  const [loadMore, setLoadMore] = useState(true)

  const getPostList = () => {
    setSkip(0);

    let body = {
      sort: sort,
      search: search,
      skip: 0,
    }

    axios.post("/api/post/list", body)
      .then((response) => {
        if(response.data.success) {
          setPostList([...response.data.postList])
          setSkip(response.data.postList.length)
          if(response.data.postList.length < 5) {
            setLoadMore(false)
          }
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  const getLoadMore = () => {
    let body = {
      sort: sort,
      search: search,
      skip: skip,
    }
    axios.post("/api/post/list", body)
      .then((response) => {
        if(response.data.success) {
          setPostList([...postList ,...response.data.postList])
          setSkip(skip + response.data.postList.length)
          if(response.data.postList.length < 5) {
            setLoadMore(false)
          }
        }
      }).catch((error) => {
        console.log(error)
      })
  }

  useEffect(() => {
    getPostList();
  },[sort])


  const SearchHandler = () => {
    getPostList()
  }


  return(
    <div>
      <GNBDiv>
      <DropdownButton 
        variant="outline-primary" 
        title={sort}>
          <Dropdown.Item onClick={() => setSort("최신순")}>
            최신순
          </Dropdown.Item>
          <Dropdown.Item onClick={() => setSort("인기순")}>
            인기순
          </Dropdown.Item>
        </DropdownButton>
      <input type="text" value={search} onChange={(e) => setSearch(e.currentTarget.value)}
        onKeyDown={(e) => {
          if(e.keyCode === 13) SearchHandler();
        }} />
        </GNBDiv>
    
      <List postList={postList} />
      {loadMore && (
        <FooterDiv>
          <button 
            style={{ marginBottom: "10vh"}}
            onClick={() => getLoadMore()}>
              더보기
          </button>
        </FooterDiv>
      )}
    </div>
  )
}

export default MainPage