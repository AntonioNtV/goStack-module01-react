import React from 'react'
import Header from './components/Header'
/**
 * Principais conceitos do react
 * Componente
 * Propriedade
 * Estado
 */
function App() {
    return (
        <> 
        <Header title="Homepage">
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
            </ul>
        </Header>
        <Header title="Projects">
            <ul>
                <li>Homepage</li>
                <li>Projects</li>
                <li>Login</li>
            </ul>
        </Header>
        <h1>Hello World</h1>
        </>
    )
}

export default App