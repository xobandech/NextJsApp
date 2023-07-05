export type TodoCardProps = {
    id: string;
    title: string;
    completed: false;
    toggleTodo: (arg0: boolean, arg1:string) => void;
  };