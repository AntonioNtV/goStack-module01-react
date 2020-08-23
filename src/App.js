import React, { useState } from 'react'
import Header from './components/Header'
import './App.css'
import backgroundImage from './assets/background.jpg'
/**
 * Principais conceitos do react
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */
function App() {
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web'])


    /**
     * useState retorna um array com 2 posições
     * 
     * 1. Variável com o seu valor inicial
     * 2. Função para atualizarmos esse valors
     */
   
    function handleAddProject(projectName) {
        setProjects([...projects, `Novo Projeto ${Date.now()}`])
    }

    return (
        <> 
        <Header title="Projects"/>
        <img width={300} src={backgroundImage}/>

        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    )
}

export default App