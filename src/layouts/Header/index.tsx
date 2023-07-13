import React from 'react'
import {useState} from 'react'
import './style.css';
import { useLocation } from 'react-router-dom';

export default function Header() {

  const [searchState, setSearchState] = useState<boolean>(false);

  const {pathname} = useLocation();

  return (
    <div id='header'>
      <div className='header-left'>
        <div className='header-left-logo-icon'></div>
        <div className='header-left-logo-text'>NEWSTAR's Board</div>
      </div>
      <div className='header-right'>
        { ( pathname !== '/my-page' && pathname !== '/board/write' && pathname !== 'board/update') && 
        (searchState ? 
          (
            <div className='header-search-box'>
              <input className='header-search-input'/>
              <div className='header-icon-box' onClick={ () => setSearchState(false) }>
                <div className='header-search-icon'></div>
              </div>
            </div>
          ) :
          (
            <div className='header-icon-box' onClick={ () => setSearchState(true) }>
             <div className='header-search-icon'></div>
            </div>
          ) )
        }
        {
          pathname !== '/auth' && (
            <>
              <div className='header-black-button'>로그인</div>
              <div className='header-white-button'>마이페이지</div>
              <div className='header-white-button'>로그아웃</div>
              <div className='header-black-disable-button'>업로드</div>
            </>
          )
        }
      </div>
    </div>
  )
}
