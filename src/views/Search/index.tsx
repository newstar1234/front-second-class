import React, { useEffect, useState } from 'react'
import './style.css';
import BoardListItem from 'src/components/BoardListItem';
import { useParams } from 'react-router-dom';
import { relationWordListMock } from 'src/mocks';

export default function Search() {

  const { searchWord } = useParams();  // 검색어 '안녕'

  const [boardCount, setBoardCount] = useState<number>(0);  
  const [relationList, setRelationList] = useState<string[]>([]);

  useEffect(() => {
    setBoardCount((searchWord as string).length);
    setRelationList(relationWordListMock);
  }, [searchWord]);

  return (
    <div id='search-wrapper'>
      <div className='search-text-container'>
        <div className='search-text-emphasis'> {searchWord} </div>
        <div className='search-text'>에 대한 검색 결과입니다.</div>
        <div className='search-text-emphasis'>{boardCount}</div>
      </div>
      <div className='search-container'>
        <div className='search-board-list'>
          
        </div>
        <div className='search-relation-box'>
          <div className='search-relation-card'>
            <div className='search-relation-text'>관련 검색어</div>
            <div className='search-relation-list'>
              {relationList.map( (item) => (<div className='relation-chip'>{item}</div>) )}
            </div>
          </div>
        </div>
      </div>
      <div className='search-pagination'></div>
    </div>
  )
}
