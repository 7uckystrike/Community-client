import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, clearUser }  from '../src/Reducer/userSlice' 

import firebase from './firebase';
import Heading from './components/Heading';
import MainPage from './components/MainPage'
import Upload from './components/Post/Upload';
import PostArea from './components/Post/PostArea';
import Edit from './components/Post/Edit';
import Login from './components/User/Login';
import Register from './components/User/Register';
import Mypage from './components/User/Mypage';

const App = (props) => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((userInfo) => {
      if(userInfo !== null) {
        dispatch(loginUser(userInfo.multiFactor.user));
      }else{
        dispatch(clearUser());
      }
    });
  }, [])

  return (
    <div>
      <Heading />
      <Routes>
        <Route path="/" element={<MainPage />} />

        {/*post, reple*/}
        <Route path="/Upload" element={<Upload />} />
        <Route path="/post/:postNum" element={<PostArea/>} />
        <Route path="/edit/:postNum" element={<Edit />} />

        {/*user*/}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/mypage" element={<Mypage />} />
      </Routes>
    </div>
  );
}

export default App;
