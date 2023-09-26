import { Routes, Route } from "react-router-dom";
import { Main } from './pages/components/main'
import { DefaultLayout } from "./layout/DefaultLayout";
import { Results } from './pages/components/Results'


export function Router() {
    return (
        <Routes>
            <Route path='/' element={<DefaultLayout></DefaultLayout>}>
                <Route path='/' element={<Main></Main>}></Route>
                <Route path='/Results' element={<Results></Results>}></Route>
            </Route>
        </Routes>
    )
}