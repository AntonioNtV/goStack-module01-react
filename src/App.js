import React, { useState } from 'react'
import Header from './components/Header'
/**
 * Principais conceitos do react
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */
function App() {
    const projects = ['Desenvolvimento de app', 'Front-end web']

    function handleAddProject(projectName) {
        projects.push(`Novo Projeto ${Date.now()}`)
        console.log(projects);
    }

    return (
        <> 
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    )
}

export default App