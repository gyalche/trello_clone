'use client';
import React, { useEffect } from 'react';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  useEffect(() => {}, []);
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
