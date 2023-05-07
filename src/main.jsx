
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {ChakraProvider} from "@chakra-ui/react"
import {BrowserRouter} from "react-router-dom"
import { Provider } from 'react-redux'
import { store } from './REdux/store.js'
// import {Provider} from "react-redux"
ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>

    <BrowserRouter>
    <ChakraProvider>
    <App />
    </ChakraProvider>
    </BrowserRouter>
  </Provider>
,
)
