import React, { useState, useEffect } from 'react'
import Header from './components/Header'
import { api } from './services/api'
import './App.css'
/**
 * Principais conceitos do react
 * Componente
 * Propriedade
 * Estado & Imutabilidade
 */
function App() {
    const [projects, setProjects] = useState([])


    /**
     * useState retorna um array com 2 posições
     * 
     * 1. Variável com o seu valor inicial
     * 2. Função para atualizarmos esse valors
     */
   
    function handleAddProject(projectName) {
        setProjects([...projects, `Novo Projeto ${Date.now()}`])
    }

    useEffect(() => {
        api.get('projects').then( response => {
            setProjects(response.data)
        })
    }, [])
  
    return (
        <> 
        <Header title="Projects"/>

        <ul>
            {projects.map(project => <li key={project.id}>{project.title}</li>)}
        </ul>

        <button type="button" onClick={handleAddProject}>Adicionar Projeto</button>
        </>
    )
}

export default App