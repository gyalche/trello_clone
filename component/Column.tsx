import React from 'react';
import { Draggable, DragDropContext, Droppable } from 'react-beautiful-dnd';
import TodoCard from './TodoCard';
import { PlusCircleIcon } from '@heroicons/react/24/solid';
type Props = {
  id: TypedColumn;
  todo: Todo[];
  index: number;
};

const idToColumnText: {
  [key in TypedColumn]: string;
} = {
  todo: 'To do',
  inprogress: 'In progress',
  done: 'Done',
};

const Column = ({ id, todo, index }: Props) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <div
          {...provided.DragDropContext}
          {...provided.dragHandleProps}
          ref={provided.innerRef}>
          {/* render internal droppable */}
          <Droppable droppableId={index.toString()} type="card">
            {(provided, snapshot) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`p-2 rounded-2xl shadow-sm ${
                  snapshot.isDraggingOver ? 'bg-green-200' : 'bg-white/50'
                }`}>
                <h2 className="flex justify-between font-bold text-xl p-2">
                  {idToColumnText[id]}
                  <span className="text-gray-500 bg-gray-200 rounded-full px-2 py-2 text-sm">
                    {todo.length}
                  </span>
                </h2>
                <div className="space-y-2">
                  {todo.map((todo, index) => (
                    <Draggable
                      key={todo.$id}
                      draggableId={todo.$id}
                      index={index}>
                      {(provided, sanpshot) => (
                        <TodoCard
                          todo={todo}
                          index={index}
                          id={id}
                          innerRef={provided.innerRef}
                          draggableProps={provided.draggableProps}
                          dragHandleProps={provided.dragHandleProps}
                        />
                      )}
                    </Draggable>
                  ))}
                  {provided.placeholder}
                  <div>
                    <button className="flex items-end justify-end">
                      <PlusCircleIcon className="h-10 w-10 " />
                    </button>
                  </div>
                </div>
              </div>
            )}
          </Droppable>
        </div>
      )}
    </Draggable>
  );
};
export default Column;
