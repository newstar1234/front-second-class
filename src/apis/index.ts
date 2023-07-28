import axios from 'axios';
import SignInRequestDto from 'src/interfaces/request/sign-in.request.dto';

import SignUpReqyestDto from "src/interfaces/request/sign-up.request.dto";

const API_DOMAIN = 'http://localhost:4040/api/v1';
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;  //인증과 관련된 작업
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

const GET_TOP3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;
const GET_CURRENT_BOARD_LIST_URL = () => `${API_DOMAIN}/board/current-board`;
const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/search/poplar`;

const GET_SEARCH_BOARD_LIST_URL = (searchWord:string) => `${API_DOMAIN}/board/search/${searchWord}`;
const GET_RELATION_LIST_URL = (searchWord:string) => `${API_DOMAIN}/search/relation`;

const GET_BOARD_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const GET_FAVORITE_LIST_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite-list`;
const GET_COMMENT_LIST_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/comment-list`;

const PUT_FAVORITE_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;
const POST_COMMENT_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/comment`;

export const signUpRequest = async (data:SignUpReqyestDto) => {
    const result = await axios.post(SIGN_UP_URL(), data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const signInRequest = async (data:SignInRequestDto) => {
    const result = await axios.post(SIGN_IN_URL(), data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getTop3BoardListRequest = async() => {
    const result = await axios.get('').then((response) => {
        return response;
    }).catch(error => null);
    return result;
}