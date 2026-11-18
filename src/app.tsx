import './app.css'
import { Tunnel } from './components'
import { ResumeContextProvider } from 'contexts'

export const AppComponent = () => (
  <ResumeContextProvider>
    <Tunnel />
  </ResumeContextProvider>
)
