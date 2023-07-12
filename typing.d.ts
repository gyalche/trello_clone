interface Board {
  columns: Map<TypedColumn, Column>;
}
interface Column {
  id: TypedColumn;
  todos: Todo[];
}
type TypedColumn = 'todo' | 'inprogress' | 'done';

type Todo = {
  $id: string;
  $createdAt: string;
  title: string;
  status: TypedColumn;
  image?: Image;
};

interface Image {
  bucketId: string;
  fieldId: string;
}
