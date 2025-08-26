import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Sidebar from './components/Sidebar';
import MainContent from './components/MainContent';
import { ComponentData } from './types';
import { componentLibrary } from './data/componentLibrary';

function App() {
  const [selectedComponent, setSelectedComponent] = useState<ComponentData>(componentLibrary[0]);
  const [searchTerm, setSearchTerm] = useState('');

  const filteredComponents = componentLibrary.filter(component =>
    component.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    component.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <ThemeProvider>
      <div className="flex h-screen bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        <Sidebar
          components={filteredComponents}
          selectedComponent={selectedComponent}
          onSelectComponent={setSelectedComponent}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />
        <MainContent component={selectedComponent} />
      </div>
    </ThemeProvider>
  );
}

export default App;