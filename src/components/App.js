import { useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList.jsx/TaskList";
import { selectError, selectIsLoading } from "../redux/taskSlice";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Layout>
      <TaskForm></TaskForm>
      {isLoading && !error && <b>Request in progress...</b>}
      <TaskList></TaskList>
    </Layout>
  );
}

export default App;
