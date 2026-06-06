import { BrowserRouter, Routes, Route } from "react-router-dom"
import SplashScreen from "../features/splash/SplashScreen"
import Login from "../features/auth/Login"
import Register from "../features/auth/Register"
import Home from "../features/dashboard/Home"

export const AppRouter = () => {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SplashScreen />} />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    )
}

export default AppRouter