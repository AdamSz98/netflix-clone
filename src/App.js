import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginScreen from './screens/LoginScreen';
import ProfileScreen from './screens/ProfileScreen';
import { auth } from './firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { useDispatch, useSelector } from 'react-redux';
import { logout, login, selectUser } from './features/userSlice';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
        }))
      } else {
        dispatch(logout());
      }
    })
    return unsubscribe;
  }, [])
  return (
    <div className="app">
      <Router >
        {!user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/profile" element={<ProfileScreen />}/>
            <Route path="/" element={<HomeScreen />}/>
          </Routes>
        )}
      </Router>
    </div> 
  );
}

export default App;
