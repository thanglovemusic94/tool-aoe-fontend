import React from 'react';


const Home = React.lazy(() => import('./components/Home'))
const Login = React.lazy(() => import('./components/Login'))
const Register = React.lazy(() => import('./components/Register'))
const Profile = React.lazy(() => import('./components/Profile'))
const ChamDiem = React.lazy(() => import('./components/ChamDiem'))
const MaGT = React.lazy(() => import('./components/MaGT'))
const User = React.lazy(() => import('./components/User'))
const XemHang = React.lazy(() => import('./components/XemHang'))

export const routes = [
    {path: "/", exact: true, component: Home},
    {path: "/home", exact: true, component: Home},
    {path: "/login", exact: true, component: Login},
    {path: "/register", exact: true, component: Register},
    {path: "/profile", exact: true, component: Profile},
    {path: "/cham-diem", exact: true, component: ChamDiem},
    {path: "/quan-ly-magt", exact: true, component: MaGT},
    {path: "/quan-ly-user", exact: true, component: User},
    {path: "/xem-hang", exact: true, component: XemHang},
]


