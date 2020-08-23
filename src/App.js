import React from 'react'
import Header from './components/Header'
/**
 * Principais conceitos do react
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */
function App() {
    const projects = ['Desenvolvimento de app', 'Front-end web']

    return (
        <> 
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>
        </>
    )
}

export default App