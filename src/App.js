import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./styles.css";
import CreateUser from "./routes/CreateUser";
import EmpDetails from "./routes/EmpDetails";
import EmpDirectory from "./routes/EmpDirectory";
import Login from "./routes/Login";
import ProtectedRoute from "./ProtectedRoute";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/create-user" element={<CreateUser />} />
                {/* <Route
                    path="/employee-directory"
                    element={<ProtectedRoute component={EmpDirectory} />}
                />
                <Route
                    exact
                    path="/employee-details/:id"
                    element={<EmpDetails />}
                /> */}
                <Route element={<ProtectedRoute />}>
                    <Route
                        path="/employee-directory"
                        element={<EmpDirectory />}
                    />
                    <Route
                        exact
                        path="/employee-details/:id"
                        element={<EmpDetails />}
                    />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
