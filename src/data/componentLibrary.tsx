import React from 'react';
import { ComponentData } from '../types';
import { 
  Heart, 
  Star, 
  Download, 
  Share, 
  User, 
  Mail, 
  Phone, 
  MapPin,
  Calendar,
  Clock,
  AlertTriangle,
  CheckCircle,
  Info,
  X
} from 'lucide-react';

// Sample Components
const SampleButton: React.FC<{ variant?: string; children: React.ReactNode }> = ({ 
  variant = 'primary', 
  children 
}) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-4 focus:ring-opacity-50';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
  };
  
  return (
    <button className={`${baseClasses} ${variants[variant as keyof typeof variants]}`}>
      {children}
    </button>
  );
};

const SampleCard: React.FC = () => (
  <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden max-w-sm transition-colors duration-300">
    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Card Title</h3>
      <p className="text-gray-600 dark:text-gray-400 mb-4">This is a sample card component with a beautiful design.</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500 dark:text-gray-400">Jan 15, 2024</span>
        <div className="flex gap-2">
          <Heart className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-red-500 cursor-pointer transition-colors" />
          <Share className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-blue-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </div>
);

const SampleInput: React.FC = () => (
  <div className="max-w-md">
    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Email Address</label>
    <input
      type="email"
      placeholder="Enter your email"
      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
    />
  </div>
);

const SampleModal: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-indigo-600 text-white px-6 py-3 rounded-lg hover:bg-indigo-700 transition-colors"
      >
        Open Modal
      </button>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white dark:bg-gray-800 rounded-xl p-6 max-w-md w-full transform transition-all">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Modal Title</h3>
              <button onClick={() => setIsOpen(false)}>
                <X className="w-5 h-5 text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400" />
              </button>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">This is a sample modal component.</p>
            <div className="flex gap-3 justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button 
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

const SampleAlert: React.FC<{ type?: string }> = ({ type = 'info' }) => {
  const config = {
    success: { icon: CheckCircle, bg: 'bg-green-50 dark:bg-green-900/30', border: 'border-green-200 dark:border-green-700', text: 'text-green-800 dark:text-green-400', iconColor: 'text-green-600 dark:text-green-500' },
    warning: { icon: AlertTriangle, bg: 'bg-yellow-50 dark:bg-yellow-900/30', border: 'border-yellow-200 dark:border-yellow-700', text: 'text-yellow-800 dark:text-yellow-400', iconColor: 'text-yellow-600 dark:text-yellow-500' },
    error: { icon: AlertTriangle, bg: 'bg-red-50 dark:bg-red-900/30', border: 'border-red-200 dark:border-red-700', text: 'text-red-800 dark:text-red-400', iconColor: 'text-red-600 dark:text-red-500' },
    info: { icon: Info, bg: 'bg-blue-50 dark:bg-blue-900/30', border: 'border-blue-200 dark:border-blue-700', text: 'text-blue-800 dark:text-blue-400', iconColor: 'text-blue-600 dark:text-blue-500' }
  };
  
  const { icon: Icon, bg, border, text, iconColor } = config[type as keyof typeof config];
  
  return (
    <div className={`${bg} ${border} border rounded-lg p-4 flex items-start gap-3 max-w-md transition-colors duration-300`}>
      <Icon className={`w-5 h-5 ${iconColor} mt-0.5 flex-shrink-0`} />
      <div className={text}>
        <p className="font-medium">Alert Title</p>
        <p className="text-sm mt-1 opacity-90">This is a sample alert message.</p>
      </div>
    </div>
  );
};

const SampleBadge: React.FC<{ variant?: string; children: React.ReactNode }> = ({ 
  variant = 'primary', 
  children 
}) => {
  const variants = {
    primary: 'bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-400',
    success: 'bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-400',
    warning: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-800 dark:text-yellow-400',
    danger: 'bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-400'
  };
  
  return (
    <span className={`px-3 py-1 rounded-full text-sm font-medium transition-colors duration-300 ${variants[variant as keyof typeof variants]}`}>
      {children}
    </span>
  );
};

// Utility Functions
const formatDate = (date: Date): string => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

const debounce = (func: Function, delay: number) => {
  let timeoutId: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

const validateEmail = (email: string): boolean => {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
};

export const componentLibrary: ComponentData[] = [
  {
    id: 'button-primary',
    name: 'Primary Button',
    category: 'Buttons',
    description: 'A primary action button with hover and focus states',
    preview: <SampleButton variant="primary">Click me</SampleButton>,
    code: `const Button = ({ variant = 'primary', children, ...props }) => {
  const baseClasses = 'px-6 py-3 rounded-lg font-medium transition-all duration-200 focus:ring-4 focus:ring-opacity-50';
  const variants = {
    primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
    secondary: 'bg-gray-200 text-gray-900 hover:bg-gray-300 focus:ring-gray-500',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
    success: 'bg-green-600 text-white hover:bg-green-700 focus:ring-green-500'
  };
  
  return (
    <button 
      className={\`\${baseClasses} \${variants[variant]}\`}
      {...props}
    >
      {children}
    </button>
  );
};`,
    props: `interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'success';
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
}`
  },
  {
    id: 'button-secondary',
    name: 'Secondary Button',
    category: 'Buttons',
    description: 'A secondary button for less prominent actions',
    preview: <SampleButton variant="secondary">Secondary</SampleButton>,
    code: `<Button variant="secondary">Secondary Action</Button>`
  },
  {
    id: 'card-basic',
    name: 'Basic Card',
    category: 'Cards',
    description: 'A versatile card component for displaying content',
    preview: <SampleCard />,
    code: `const Card = ({ title, description, date, children }) => (
  <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden max-w-sm">
    <div className="h-48 bg-gradient-to-br from-blue-400 to-purple-500"></div>
    <div className="p-6">
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{date}</span>
        <div className="flex gap-2">
          <Heart className="w-5 h-5 text-gray-400 hover:text-red-500 cursor-pointer transition-colors" />
          <Share className="w-5 h-5 text-gray-400 hover:text-blue-500 cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  </div>
);`
  },
  {
    id: 'input-text',
    name: 'Text Input',
    category: 'Form Elements',
    description: 'A styled text input with focus states',
    preview: <SampleInput />,
    code: `const TextInput = ({ label, placeholder, type = "text", ...props }) => (
  <div className="max-w-md">
    <label className="block text-sm font-medium text-gray-700 mb-2">
      {label}
    </label>
    <input
      type={type}
      placeholder={placeholder}
      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
      {...props}
    />
  </div>
);`
  },
  {
    id: 'modal-basic',
    name: 'Modal Dialog',
    category: 'Overlays',
    description: 'A modal dialog with backdrop and animations',
    preview: <SampleModal />,
    code: `const Modal = ({ isOpen, onClose, title, children }) => {
  if (!isOpen) return null;
  
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-xl p-6 max-w-md w-full transform transition-all">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-400 hover:text-gray-600" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
};`
  },
  {
    id: 'alert-success',
    name: 'Success Alert',
    category: 'Feedback',
    description: 'An alert component for success messages',
    preview: <SampleAlert type="success" />,
    code: `const Alert = ({ type = 'info', title, message }) => {
  const config = {
    success: { icon: CheckCircle, bg: 'bg-green-50', border: 'border-green-200', text: 'text-green-800', iconColor: 'text-green-600' },
    warning: { icon: AlertTriangle, bg: 'bg-yellow-50', border: 'border-yellow-200', text: 'text-yellow-800', iconColor: 'text-yellow-600' },
    error: { icon: AlertTriangle, bg: 'bg-red-50', border: 'border-red-200', text: 'text-red-800', iconColor: 'text-red-600' },
    info: { icon: Info, bg: 'bg-blue-50', border: 'border-blue-200', text: 'text-blue-800', iconColor: 'text-blue-600' }
  };
  
  const { icon: Icon, bg, border, text, iconColor } = config[type];
  
  return (
    <div className={\`\${bg} \${border} border rounded-lg p-4 flex items-start gap-3\`}>
      <Icon className={\`w-5 h-5 \${iconColor} mt-0.5 flex-shrink-0\`} />
      <div className={text}>
        <p className="font-medium">{title}</p>
        <p className="text-sm mt-1 opacity-90">{message}</p>
      </div>
    </div>
  );
};`
  },
  {
    id: 'badge-primary',
    name: 'Status Badge',
    category: 'Data Display',
    description: 'A small badge for displaying status or tags',
    preview: (
      <div className="flex gap-2">
        <SampleBadge variant="primary">Primary</SampleBadge>
        <SampleBadge variant="success">Success</SampleBadge>
        <SampleBadge variant="warning">Warning</SampleBadge>
        <SampleBadge variant="danger">Danger</SampleBadge>
      </div>
    ),
    code: `const Badge = ({ variant = 'primary', children }) => {
  const variants = {
    primary: 'bg-blue-100 text-blue-800',
    success: 'bg-green-100 text-green-800',
    warning: 'bg-yellow-100 text-yellow-800',
    danger: 'bg-red-100 text-red-800'
  };
  
  return (
    <span className={\`px-3 py-1 rounded-full text-sm font-medium \${variants[variant]}\`}>
      {children}
    </span>
  );
};`
  },
  {
    id: 'format-date',
    name: 'Format Date',
    category: 'Utility Functions',
    description: 'A utility function to format dates in a readable format',
    preview: (
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors duration-300">
        <code className="text-sm text-gray-700 dark:text-gray-300">
          {formatDate(new Date())} → "{formatDate(new Date())}"
        </code>
      </div>
    ),
    code: `const formatDate = (date) => {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
};

// Usage
formatDate(new Date()); // "January 15, 2024"`
  },
  {
    id: 'debounce',
    name: 'Debounce Function',
    category: 'Utility Functions',
    description: 'A debounce utility to limit function execution frequency',
    preview: (
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors duration-300">
        <code className="text-sm text-gray-700 dark:text-gray-300">
          debounce(searchFunction, 300)
        </code>
      </div>
    ),
    code: `const debounce = (func, delay) => {
  let timeoutId;
  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func.apply(null, args), delay);
  };
};

// Usage
const debouncedSearch = debounce(searchFunction, 300);`
  },
  {
    id: 'validate-email',
    name: 'Email Validator',
    category: 'Utility Functions',
    description: 'A function to validate email addresses',
    preview: (
      <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors duration-300">
        <code className="text-sm text-gray-700 dark:text-gray-300">
          validateEmail("user@example.com") → {validateEmail("user@example.com").toString()}
        </code>
      </div>
    ),
    code: `const validateEmail = (email) => {
  const regex = /^[^\\s@]+@[^\\s@]+\\.[^\\s@]+$/;
  return regex.test(email);
};

// Usage
validateEmail("user@example.com"); // true
validateEmail("invalid-email"); // false`
  }
];