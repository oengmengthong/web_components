import React from 'react';
import { Search, ChevronRight } from 'lucide-react';
import ThemeToggle from './ThemeToggle';
import { ComponentData } from '../types';

interface SidebarProps {
  components: ComponentData[];
  selectedComponent: ComponentData;
  onSelectComponent: (component: ComponentData) => void;
  searchTerm: string;
  onSearchChange: (term: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({
  components,
  selectedComponent,
  onSelectComponent,
  searchTerm,
  onSearchChange
}) => {
  const categories = components.reduce((acc, component) => {
    if (!acc[component.category]) {
      acc[component.category] = [];
    }
    acc[component.category].push(component);
    return acc;
  }, {} as Record<string, ComponentData[]>);

  return (
    <div className="w-80 bg-white dark:bg-gray-800 border-r border-gray-200 dark:border-gray-700 flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center justify-between mb-4">
          <h1 className="text-xl font-bold text-gray-900 dark:text-white">UI Showcase</h1>
          <ThemeToggle />
        </div>
        
        {/* Search */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 dark:text-gray-500 w-4 h-4" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
          />
        </div>
      </div>

      {/* Navigation */}
      <div className="flex-1 overflow-y-auto p-4">
        {Object.entries(categories).map(([categoryName, categoryComponents]) => (
          <div key={categoryName} className="mb-6">
            <h2 className="text-sm font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              {categoryName}
            </h2>
            <div className="space-y-1">
              {categoryComponents.map((component) => (
                <button
                  key={component.id}
                  onClick={() => onSelectComponent(component)}
                  className={`w-full text-left px-3 py-2 rounded-lg transition-all duration-200 flex items-center justify-between group ${
                    selectedComponent.id === component.id
                      ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-700'
                      : 'text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:text-gray-900 dark:hover:text-white'
                  }`}
                >
                  <span className="font-medium">{component.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${
                    selectedComponent.id === component.id 
                      ? 'text-blue-700 dark:text-blue-300' 
                      : 'text-gray-400 dark:text-gray-500 group-hover:text-gray-600 dark:group-hover:text-gray-400'
                  }`} />
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;