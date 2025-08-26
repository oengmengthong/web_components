# Component Guide: Adding New Components to the UI Showcase

This guide explains how to add new components and utility functions to the UI Component Showcase website.

## 📁 File Structure

```
src/
├── data/
│   └── componentLibrary.tsx    # Main component definitions
├── components/
│   ├── Sidebar.tsx            # Navigation sidebar
│   ├── MainContent.tsx        # Preview and code display
│   └── ThemeToggle.tsx        # Dark/light mode toggle
├── contexts/
│   └── ThemeContext.tsx       # Theme management
└── types/
    └── index.ts               # TypeScript interfaces
```

## 🚀 Quick Start: Adding a New Component

### Step 1: Create Your Component

First, create your component in `src/data/componentLibrary.tsx`. Add it inside the file with other sample components:

```tsx
// Add this with other sample components
const SampleTooltip: React.FC = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  
  return (
    <div className="relative inline-block">
      <button
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors"
      >
        Hover me
      </button>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 dark:bg-gray-700 text-white text-sm rounded-lg shadow-lg">
          This is a tooltip!
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900 dark:border-t-gray-700"></div>
        </div>
      )}
    </div>
  );
};
```

### Step 2: Add to Component Library Array

Add your component to the `componentLibrary` array at the bottom of the file:

```tsx
export const componentLibrary: ComponentData[] = [
  // ... existing components
  {
    id: 'tooltip-basic',
    name: 'Tooltip',
    category: 'Overlays',
    description: 'A tooltip that appears on hover with smooth animations',
    preview: <SampleTooltip />,
    code: `const Tooltip = ({ children, content, position = 'top' }) => {
  const [isVisible, setIsVisible] = useState(false);
  
  return (
    <div className="relative inline-block">
      <div
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
      >
        {children}
      </div>
      {isVisible && (
        <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg shadow-lg">
          {content}
          <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
};`,
    props: `interface TooltipProps {
  children: React.ReactNode;
  content: string;
  position?: 'top' | 'bottom' | 'left' | 'right';
}`
  }
];
```

## 📋 Component Data Structure

Each component must follow the `ComponentData` interface:

```tsx
interface ComponentData {
  id: string;              // Unique identifier (kebab-case)
  name: string;            // Display name in sidebar
  category: string;        // Category for grouping
  description: string;     // Brief description
  preview: React.ReactNode; // Live preview component
  code: string;            // Source code as string
  props?: string;          // Optional props documentation
}
```

### Required Fields

- **id**: Unique identifier using kebab-case (e.g., `'button-primary'`, `'modal-confirmation'`)
- **name**: Human-readable name displayed in the sidebar
- **category**: Groups components in the sidebar (e.g., `'Buttons'`, `'Forms'`, `'Navigation'`)
- **description**: Brief explanation of the component's purpose
- **preview**: The actual React component to render in the preview
- **code**: String containing the component's source code

### Optional Fields

- **props**: TypeScript interface or prop documentation as a string

## 🎨 Dark Mode Support

Ensure your components support both light and dark themes:

```tsx
// ✅ Good - Uses dark mode classes
<div className="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  Content
</div>

// ❌ Bad - No dark mode support
<div className="bg-white text-black">
  Content
</div>
```

### Common Dark Mode Patterns

```tsx
// Backgrounds
"bg-white dark:bg-gray-800"
"bg-gray-50 dark:bg-gray-900"
"bg-gray-100 dark:bg-gray-700"

// Text
"text-gray-900 dark:text-white"
"text-gray-600 dark:text-gray-400"
"text-gray-500 dark:text-gray-500"

// Borders
"border-gray-200 dark:border-gray-700"
"border-gray-300 dark:border-gray-600"

// Transitions (always include)
"transition-colors duration-300"
```

## 📂 Categories

Current categories include:
- **Buttons**: Interactive button components
- **Cards**: Content display cards
- **Form Elements**: Input fields, selects, etc.
- **Overlays**: Modals, tooltips, dropdowns
- **Feedback**: Alerts, notifications, loading states
- **Data Display**: Tables, badges, avatars
- **Navigation**: Menus, breadcrumbs, pagination
- **Utility Functions**: Helper functions and utilities

You can create new categories by simply using a new category name.

## 🔧 Utility Functions

For utility functions, create a simple preview showing usage:

```tsx
{
  id: 'format-currency',
  name: 'Format Currency',
  category: 'Utility Functions',
  description: 'Format numbers as currency with locale support',
  preview: (
    <div className="bg-gray-50 dark:bg-gray-800 p-4 rounded-lg transition-colors duration-300">
      <code className="text-sm text-gray-700 dark:text-gray-300">
        formatCurrency(1234.56) → "{formatCurrency(1234.56)}"
      </code>
    </div>
  ),
  code: `const formatCurrency = (amount, currency = 'USD', locale = 'en-US') => {
  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency: currency,
  }).format(amount);
};

// Usage
formatCurrency(1234.56); // "$1,234.56"
formatCurrency(1234.56, 'EUR', 'de-DE'); // "1.234,56 €"`
}
```

## 🎯 Best Practices

### 1. Component Design
- Use consistent spacing (multiples of 4px/8px)
- Include hover and focus states
- Support keyboard navigation where applicable
- Use semantic HTML elements

### 2. Code Quality
- Write clean, readable code
- Include proper TypeScript types
- Use meaningful variable names
- Add comments for complex logic

### 3. Documentation
- Write clear descriptions
- Include usage examples
- Document all props with types
- Show common use cases

### 4. Accessibility
- Include proper ARIA labels
- Support keyboard navigation
- Ensure sufficient color contrast
- Use semantic HTML

## 🔍 Testing Your Component

After adding a component:

1. **Visual Check**: Verify it appears in the sidebar under the correct category
2. **Preview Test**: Click on it to ensure the preview renders correctly
3. **Code Copy**: Test the copy code functionality
4. **Dark Mode**: Toggle between light and dark modes to ensure proper theming
5. **Responsive**: Check on different screen sizes

## 📝 Example: Complete Button Component

Here's a complete example of adding a new button variant:

```tsx
// 1. Create the component
const SampleIconButton: React.FC = () => (
  <button className="bg-indigo-600 hover:bg-indigo-700 text-white p-3 rounded-lg transition-all duration-200 focus:ring-4 focus:ring-indigo-500 focus:ring-opacity-50">
    <Download className="w-5 h-5" />
  </button>
);

// 2. Add to componentLibrary array
{
  id: 'button-icon',
  name: 'Icon Button',
  category: 'Buttons',
  description: 'A button containing only an icon for compact interfaces',
  preview: <SampleIconButton />,
  code: `const IconButton = ({ icon: Icon, onClick, variant = 'primary', ...props }) => {
  const variants = {
    primary: 'bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500',
    secondary: 'bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 focus:ring-gray-500',
    danger: 'bg-red-600 hover:bg-red-700 focus:ring-red-500'
  };
  
  return (
    <button 
      className={\`text-white p-3 rounded-lg transition-all duration-200 focus:ring-4 focus:ring-opacity-50 \${variants[variant]}\`}
      onClick={onClick}
      {...props}
    >
      <Icon className="w-5 h-5" />
    </button>
  );
};

// Usage
<IconButton icon={Download} onClick={handleDownload} />`,
  props: `interface IconButtonProps {
  icon: React.ComponentType<{ className?: string }>;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'danger';
  disabled?: boolean;
}`
}
```

## 🚀 Advanced Features

### Interactive Components with State

For components that need state, use React hooks:

```tsx
const SampleAccordion: React.FC = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  
  return (
    <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 text-left bg-gray-50 dark:bg-gray-800 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
      >
        <div className="flex justify-between items-center">
          <span className="font-medium text-gray-900 dark:text-white">Accordion Title</span>
          <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <div className="px-4 py-3 bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
          <p className="text-gray-600 dark:text-gray-400">
            This is the accordion content that can be expanded or collapsed.
          </p>
        </div>
      )}
    </div>
  );
};
```

### Multiple Variants in One Preview

Show different variants of the same component:

```tsx
preview: (
  <div className="flex gap-4 flex-wrap">
    <SampleButton variant="primary">Primary</SampleButton>
    <SampleButton variant="secondary">Secondary</SampleButton>
    <SampleButton variant="danger">Danger</SampleButton>
    <SampleButton variant="success">Success</SampleButton>
  </div>
)
```

## 🎉 You're Ready!

You now have everything you need to add new components to the UI Showcase. Remember to:

- Follow the established patterns
- Support dark mode
- Write clean, documented code
- Test thoroughly before committing

Happy coding! 🚀