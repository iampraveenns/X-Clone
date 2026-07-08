import { Navigate, Route, Routes } from 'react-router-dom'
import HomePage from './pages/home/HomePage'
import SignUpPage from './pages/auth/signup/SignUpPage'
import LoginPage from './pages/auth/login/LoginPage'
import Sidebar from './components/common/Sidebar'
import RightPanel from './components/common/RightPanel'
import NotificationPage from './pages/notification/NotificationPage'
import ProfilePage from './pages/profile/ProfilePage'
import { Toaster } from 'react-hot-toast'
import LoadingSpinner from './components/common/LoadingSpinner'
import useAuthUser from './hooks/useAuthUser';

const App = () => {

  const { data: authUser, isLoading } = useAuthUser();

  if (isLoading) {
    return (
      <div className='flex items-center justify-center h-screen'>
        <LoadingSpinner size='lg' />
      </div>
    )
  }
  return (
    <div className='flex max-w-6xl mx-auto'>
      <Toaster position='top-center' reverseOrder={false} />
      {authUser && <Sidebar />}
      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" />} />
        <Route path='/signup' element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
        <Route path='/notification' element={authUser ? <NotificationPage /> : <Navigate to="/login" />} />
        <Route path='/profile/:username' element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
      </Routes>
      {authUser && <RightPanel />}
    </div>
  )
}

export default App