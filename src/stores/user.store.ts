import UserResponseDto from "src/interfaces/response/user.response.dto";
import { create } from "zustand";

interface UserStore {
    user: UserResponseDto | null
    setUser: (user: UserResponseDto | null) => void 
}// 타입설정  / (매개변수) => (반환타입)

const useStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })),
})); //매개변수 함수로 전달

export default useStore;