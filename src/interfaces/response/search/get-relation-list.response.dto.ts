import ResponseDto from "../response.dto";

export default interface GetPopularListResponseDto extends ResponseDto {
    relationList: string[];
}