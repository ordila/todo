import { useSelector } from "react-redux";
import Layout from "./Layout/Layout";
import TaskForm from "./TaskForm/TaskForm";
import TaskList from "./TaskList.jsx/TaskList";
import { selectError, selectIsLoading } from "../redux/select";

import Loader from "./Loader/Loader";
import Error from "./Error/Error";

function App() {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  return (
    <Layout>
      <TaskForm></TaskForm>
      {isLoading && !error && <Loader></Loader>}
      {error && <Error></Error>}
      <TaskList></TaskList>
    </Layout>
  );
}

export default App;
