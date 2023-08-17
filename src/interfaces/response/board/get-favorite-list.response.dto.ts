import ResponseDto from "../response.dto";

export default interface GetFavoriteListResponseDto extends ResponseDto {
    favoriteList : FavoriteListResponseDto[];
}

interface FavoriteListResponseDto {
    nickname: string;
    email : string;
    profileImageUrl : string;
}