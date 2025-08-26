import React, { useState } from 'react';
import { Copy, Check, Eye, Code } from 'lucide-react';
import { ComponentData } from '../types';

interface MainContentProps {
  component: ComponentData;
}

const MainContent: React.FC<MainContentProps> = ({ component }) => {
  const [activeTab, setActiveTab] = useState<'preview' | 'code'>('preview');
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(component.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="flex-1 flex flex-col">
      {/* Header */}
      <div className="bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-6 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">{component.name}</h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">{component.description}</p>
          </div>
          
          {/* Tabs */}
          <div className="flex bg-gray-100 dark:bg-gray-700 rounded-lg p-1 transition-colors duration-300">
            <button
              onClick={() => setActiveTab('preview')}
              className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'preview'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Eye className="w-4 h-4" />
              Preview
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`px-4 py-2 rounded-md transition-all duration-200 flex items-center gap-2 ${
                activeTab === 'code'
                  ? 'bg-white dark:bg-gray-600 text-gray-900 dark:text-white shadow-sm'
                  : 'text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white'
              }`}
            >
              <Code className="w-4 h-4" />
              Code
            </button>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
        {activeTab === 'preview' ? (
          <div className="p-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-8 transition-colors duration-300">
              <div className="flex items-center justify-center min-h-64">
                {component.preview}
              </div>
            </div>
            
            {component.props && (
              <div className="mt-8 bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm p-6 transition-colors duration-300">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Props</h3>
                <pre className="bg-gray-50 dark:bg-gray-900 p-4 rounded-lg text-sm text-gray-700 dark:text-gray-300 overflow-x-auto transition-colors duration-300">
                  <code>{component.props}</code>
                </pre>
              </div>
            )}
          </div>
        ) : (
          <div className="p-8">
            <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 shadow-sm transition-colors duration-300">
              <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Source Code</h3>
                <button
                  onClick={handleCopy}
                  className={`px-4 py-2 rounded-lg transition-all duration-200 flex items-center gap-2 ${
                    copied
                      ? 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 border border-green-200 dark:border-green-700'
                      : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600 border border-gray-200 dark:border-gray-600'
                  }`}
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                  {copied ? 'Copied!' : 'Copy Code'}
                </button>
              </div>
              <pre className="p-6 text-sm text-gray-800 dark:text-gray-200 overflow-x-auto bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
                <code>{component.code}</code>
              </pre>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MainContent;