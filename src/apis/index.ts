import axios from 'axios';

import { SignUpRequestDto, SignInRequestDto } from 'src/interfaces/request/auth';
import { PostBoardRequestDto } from 'src/interfaces/request/board';
import { SignInResponseDto, SignUpResponseDto } from 'src/interfaces/response/auth';
import ResponseDto from 'src/interfaces/response/response.dto';

const API_DOMAIN = 'http://localhost:4040/api/v1';
const SIGN_UP_URL = () => `${API_DOMAIN}/auth/sign-up`;  //인증과 관련된 작업
const SIGN_IN_URL = () => `${API_DOMAIN}/auth/sign-in`;

const GET_TOP3_BOARD_LIST_URL = () => `${API_DOMAIN}/board/top-3`;
const GET_CURRENT_BOARD_LIST_URL = () => `${API_DOMAIN}/board/current-board`;
const GET_POPULAR_LIST_URL = () => `${API_DOMAIN}/search/poplar`;

const GET_SEARCH_BOARD_LIST_URL = (searchWord:string) => `${API_DOMAIN}/board/search/${searchWord}`;
const GET_RELATION_LIST_URL = (searchWord:string) => `${API_DOMAIN}/search/relation/${searchWord}`;

const GET_BOARD_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}`;

const GET_FAVORITE_LIST_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite-list`;
const GET_COMMENT_LIST_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/comment-list`;

const PUT_FAVORITE_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/favorite`;
const POST_COMMENT_URL = (boardNumber:number | string) => `${API_DOMAIN}/board/${boardNumber}/comment`;

const PATCH_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;    
const DELETE_BOARD_URL = (boardNumber: number | string) => `${API_DOMAIN}/board/${boardNumber}`;
const POST_BOARD_URL = () => `${API_DOMAIN}/board`;

const GET_USER_URL = (email:string) => `${API_DOMAIN}/user/${email}`;
const GET_USER_BOARD_LIST_URL = (email:string) => `${API_DOMAIN}/board/user-list/${email}`;

const PATCH_USER_NICKNAME_URL = () => `${API_DOMAIN}/user/nickname`;
const PATCH_USER_PROFILE_URL = () => `${API_DOMAIN}/user/profile`;

const GET_SIGN_IN_USER_URL = () => `${API_DOMAIN}/user`;
const POST_FILE = () => `${API_DOMAIN}/file/upload`;

//! response.data -> 실제로 받는 response body에 대한 내용 //
export const signUpRequest = async (data:SignUpRequestDto) => {
    const result = 
        await axios.post(SIGN_UP_URL(), data).then((response) => {
            const responseBody: SignUpResponseDto = response.data;
            const { code } = responseBody;
          return code;
        })
        .catch((error) => {
            const responseBody: ResponseDto = error.response.data;
            const { code } = responseBody;
          return code;
        });

    return result;
}
// ! code 만 반환하면 안됨 //
export const signInRequest = async (data:SignInRequestDto) => {
    const result = 
        await axios.post(SIGN_IN_URL(), data).then((response) => {
            const responseBody: SignInResponseDto = response.data;
            return responseBody;
        })
        .catch((error) => {
            const responseBody: ResponseDto = error.response.data;
            return responseBody;
        });

    return result;
}

export const getTop3BoardListRequest = async() => {
    const result = await axios.get(GET_TOP3_BOARD_LIST_URL()).then((response) => {
        return response;
    }).catch(error => null);
    return result;
}

export const getCurrentBoardRequset = async () => {
    const result = await axios.get(GET_CURRENT_BOARD_LIST_URL()).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getPopularListRequest = async () => {
    const result = await axios.get(GET_POPULAR_LIST_URL()).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getSearchBoardListRequest = async (searchWord:string) => {
    const result = await axios.get(GET_SEARCH_BOARD_LIST_URL(searchWord)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getRelationListRequest = async (searchWord:string) => {
    const result = await axios.get(GET_RELATION_LIST_URL(searchWord)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getBoardRequest = async (boardNumber:number | string) => {
    const result = await axios.get(GET_BOARD_URL(boardNumber)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getFavoriteListRequest = async (boardNumber:number | string) => {
    const result = await axios.get(GET_FAVORITE_LIST_URL(boardNumber)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getCommentListRequest = async (boardNumber:number | string) => {
    const result = await axios.get(GET_COMMENT_LIST_URL(boardNumber)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const putFavoriteRequest = async (boardNumber: number | string, data:any) => {
    const result = await axios.put(PUT_FAVORITE_URL(boardNumber), data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const postCommentRequest = async (boardNumber: number | string, data:any) => {
    const result = await axios.post(POST_COMMENT_URL(boardNumber), data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const patchBoardRequest = async (boardNumber: number | string, data:any) => {
    const result = await axios.patch(PATCH_BOARD_URL(boardNumber), data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const deleteBoardRequest = async (boardNumber: number | string) => {
    const result = await axios.delete(DELETE_BOARD_URL(boardNumber)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getUserRequest = async (email:string) => {
    const result = await axios.get(GET_USER_URL(email)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getUserBoardListRequest = async (email:string) => {
    const result = await axios.get(GET_USER_BOARD_LIST_URL(email)).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const getSignInUserRequest = async () => {
    const result = await axios.get(GET_SIGN_IN_USER_URL()).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const postFileRequest = async () => {
    const result = await axios.post(POST_FILE()).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const postBoardRequest = async (data:PostBoardRequestDto) => {
    const result = await axios.post(POST_BOARD_URL(),data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const patchUserNicknameRequest = async (data:any) => {
    const result = await axios.patch(PATCH_USER_NICKNAME_URL(),data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

export const patchUserProfileRequest = async (data:any) => {
    const result = await axios.patch(PATCH_USER_PROFILE_URL(),data).then((response) => {
        return response;
    }).catch((error) => null);

    return result;
}

