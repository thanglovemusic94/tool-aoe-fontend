import React from 'react';


const Home = React.lazy(() => import('./components/home/Home'))
const Login = React.lazy(() => import('./components/Login'))
const Register = React.lazy(() => import('./components/Register'))
const Profile = React.lazy(() => import('./components/Profile'))
const ChamDiem = React.lazy(() => import('./components/ChamDiem'))
const MaGT = React.lazy(() => import('./components/MaGT'))
const User = React.lazy(() => import('./components/User'))
const XemHang = React.lazy(() => import('./components/XemHang'))
const DanhSachDangKyGiai = React.lazy(() => import('./components/DanhSachDangKyGiai'))
const QuanLyEvent = React.lazy(() => import('./components/event/QuanLyEvent'))


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
    {path: "/danh-sach-dang-ky-giai", exact: true, component: DanhSachDangKyGiai},
    {path: "/quan-ly-event", exact: true, component: QuanLyEvent},
]


