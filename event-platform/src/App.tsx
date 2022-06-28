

import { Router } from './Router';
import { client } from './lib/apollo'
import { ApolloProvider } from '@apollo/client'
import { BrowserRouter } from 'react-router-dom';
import { NavProvider } from './context/NavContext'
function App() {

  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <NavProvider>
            <Router />
          </NavProvider>
        </BrowserRouter>
      </ApolloProvider>
    </>
  )
}

export default App
