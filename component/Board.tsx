'use client';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import useBoardStore from '../store/boardStore';
type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const getBoard = useBoardStore((state) => state.getBoard);
  useEffect(() => {
    getBoard();
  }, [getBoard]);
  return (
    <DragDropContext>
      <Droppable
        droppableId="board"
        direction="horizontal"
        type="column"></Droppable>
    </DragDropContext>
  );
};
export default Board;
