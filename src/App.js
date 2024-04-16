
import React, { Fragment } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import DefaultComponent from './components/DefaultComponent/DefaultComponent';
import { routes } from './routes';


export function App() {
  

  return (
    <div className="App">
    <Router>
      <Routes>
        {routes.map((route) => {
          const Name = route.name;
          const Layout = route.showHeader ? DefaultComponent : Fragment
          return (
            <Route
              key={route.path}
              path={route.path}
              element={
                <Layout>
                  <Name />
                </Layout>
              }
            />
          )
        })}
      </Routes>
    </Router>
  </div>
  )
}
export default App