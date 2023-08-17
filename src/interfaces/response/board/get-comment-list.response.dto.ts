import ResponseDto from "../response.dto";

export default interface GetCommentListResponseDto extends ResponseDto {
    commentList : CommentListResponseDto[];
}

interface CommentListResponseDto {
    profileImageUrl : string; 
    nickname : string;
    content : string;
    writeDatetime : string;
}