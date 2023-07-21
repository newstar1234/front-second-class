import { create } from "zustand"

interface BoardWirteStore {
    boardTitle: string;
    boardContent: string;
    boardImage: File | null;

    setBoardTitle: (boardTitle: string) => void;
    setBoardContent: (boardContent: string) => void;
    setBoardImage: (boardImage: File | null) => void;
}

const useStore = create<BoardWirteStore>((set) => ({
    boardTitle: '',
    boardContent: '',
    boardImage: null,
    
}));