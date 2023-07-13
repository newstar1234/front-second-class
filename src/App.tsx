import { Routes, Route } from 'react-router-dom';

import Header from 'src/layouts/Header';
import Footer from 'src/layouts/Footer';

import Main from 'src/views/Main';
import Authentication from 'src/views/Authentication';
import Search from 'src/views/Search';
import MyPage from 'src/views/MyPage';
import BoardDetail from 'src/views/Board/Detail';
import BoardWrite from 'src/views/Board/Write';
import BoardUpdate from 'src/views/Board/Update';

import './App.css';
import BoardListItem from './components/BoardListItem';
import Top3ListItem from './components/Top3ListItem';
import CommentListItem from './components/CommentListItem';
import InputBox from './components/InputBox';

// 메인화면            - path: '/'                         / component: <Main />
// 로그인 / 회원가입   - path: '/auth'                      / component: <Authentication />
// 검색               - path: '/search/:searchWord'         / component: <Search />
// 마이페이지          - path: '/my-page'                   / component: <MyPage />
// 게시글 상세         - path: '/board/detail/:boardNumber' / component: <BoardDetail />
// 게시글 작성         - path: '/board/write'               / component: <BoardWrite />
// 게시글 수정         - path: '/board/update/:boardNumber' / component: <BoardUpdate />

function App() {
  return (
  <>
  <InputBox label='주소 *' type='text' placeholder='우편번호 찾기' helper='우편번호를 선택해주세요.' />
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/auth' element={<Authentication />} />
      <Route path='/search/:searchWord' element={<Search />} />
      <Route path='/my-page' element={<MyPage />} />
      <Route path='/board'>
        <Route path='detail/:boardNumber' element={<BoardDetail />} />
        <Route path='write' element={<BoardWrite />} />
        <Route path='update/:boardNumber' element={<BoardUpdate />} />
      </Route>
    </Routes>
    {/* TODO : auth 경로일 때는 안 보이도록 작업 */}
    <Footer />
  </>
  );
}

export default App;
