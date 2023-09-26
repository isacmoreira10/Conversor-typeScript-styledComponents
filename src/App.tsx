import { ThemeProvider } from 'styled-components'
import { DefaultThemes } from './styles/themes/Default.ts'
import { BrowserRouter } from 'react-router-dom'
import { Router } from '../src/Router.tsx'
import { ConversionValue } from './context/Context.tsx'

export function App() {
    return (
        <ConversionValue>
            <ThemeProvider theme={DefaultThemes}>
                <BrowserRouter>
                    <Router />
                </BrowserRouter>
            </ThemeProvider>
        </ConversionValue>
    )

}

