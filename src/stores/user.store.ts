import { create } from "zustand";
import { UserResponseDto } from "src/interfaces/response";

interface UserStore {
    user: UserResponseDto | null
    setUser: (user: UserResponseDto | null) => void 
}// 타입설정  / (매개변수) => (반환타입)

const useStore = create<UserStore>((set) => ({
    user: null,
    setUser: (user) => set((state) => ({ ...state, user })), // ...state = user, setUser 가 들어있는것 스프레드함수라고 함
})); //매개변수 함수로 전달

export default useStore;