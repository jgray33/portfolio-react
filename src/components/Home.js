import React, { useState } from 'react';
import Nav from './Nav'
import Portfolio from './pages/Portfolio'
import Main from './pages/Main'
import projects from '../projects';

export default function PageContainer() {
    const [currentPage, setCurrentPage] = useState('Home')

    const renderPage = () => {
        if (currentPage === 'Home') {
            return <Main />
        }
        if (currentPage === 'Portfolio') {
            return <Portfolio projects={projects} />
        }
    }
    
    const handlePageChange = (page) => setCurrentPage(page)

    return (
        <div>
            <Nav currentPage={currentPage} handlePageChange={handlePageChange} />
            {renderPage()}
        </div>
    )
}