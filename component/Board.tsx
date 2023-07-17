'use client';
import React, { useEffect } from 'react';
import { DragDropContext, DropResult, Droppable } from 'react-beautiful-dnd';
import useBoardStore from '../store/boardStore';
type BoardProps = {};

const Board: React.FC<BoardProps> = () => {
  const [board, getBoard, setBoardState] = useBoardStore((state) => [
    state.board,
    state.getBoard,
    state.setBoardState,
  ]);
  useEffect(() => {
    getBoard();
  }, [getBoard]);

  const ent = {
    id: 'one',
    column: 'two',
  };

  const handleOnDragEnd = (result: DropResult) => {
    const { destination, type, source } = result;
    //check if user drag card outside of board;
    if (!destination) return;

    //handle column drag;
    if (type === 'column') {
      const entries = Array.from(board.columns.entries());
      const [remove] = entries.splice(source.index, 1);
      entries.splice(destination.index, 0, remove);
      const rearrangedColumns = new Map(entries);
      setBoardState({
        ...board,
        columns: rearrangedColumns,
      });
    }
  };

  return (
    <DragDropContext onDragEnd={handleOnDragEnd}>
      <Droppable droppableId="board" direction="horizontal" type="column">
        {(provided) => (
          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-7xl mx-auto"
            {...provided.droppableProps}
            {...provided.innerRef}>
            {Array.from(board.columns.entries()).map(([id, column], index) => (
              <Column key={id} id={id} todos={column.todos} index={index} />
            ))}
          </div>
        )}
      </Droppable>
    </DragDropContext>
  );
};
export default Board;
