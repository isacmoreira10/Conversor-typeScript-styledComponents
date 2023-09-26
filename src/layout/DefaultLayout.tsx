import { Outlet } from 'react-router-dom'
import { Header } from '../pages/components/header/index'

export function DefaultLayout() {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}