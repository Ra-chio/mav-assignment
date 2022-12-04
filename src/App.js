import { Route, Routes } from "react-router-dom";
import "./styles.css";
import CreateUser from "./routes/CreateUser";
import EmpDetails from "./routes/EmpDetails";
import EmpDirectory from "./routes/EmpDirectory";
import Login from "./routes/Login";

function App() {
    return (
        <Routes>
            <Route exact path="/" element={<Login />} />
            <Route exact path="/create-user" element={<CreateUser />} />
            <Route
                exact
                path="/employee-directory"
                element={<EmpDirectory />}
            />
            <Route
                exact
                path="/employee-details/:id"
                element={<EmpDetails />}
            />
        </Routes>
    );
}

export default App;
