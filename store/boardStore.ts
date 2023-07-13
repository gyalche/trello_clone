import { create } from 'zustand';
import { getTodoBoardByColumn } from '../lib/getTodoBoardByColumn';

interface BoardState {
  board: Board;
  getBoard: () => void;
}
const useBoardStore = create<BoardState>((set) => ({
  board: {
    columns: new Map<TypedColumn, Column>(),
  },
  getBoard: async () => {
    const board = await getTodoBoardByColumn();
    set({ board });
  },
}));

export default useBoardStore;
