import { useState } from 'react';
import './App.css';

const menus = [
  {
    label: 'Home',
    to: '/',
    children: []
  },
  {
    label: 'Products',
    to: '/products',
    children: [
      {
        label: 'Electronics',
        to: '/products/electronics',
        children: [
          { label: 'Laptops', to: '/products/electronics/laptops', children: [] },
          { label: 'Phones', to: '/products/electronics/phones', children: [] }
        ]
      },
      {
        label: 'Clothing',
        to: '/products/clothing',
        children: [
          { label: 'Men', to: '/products/clothing/men', children: [] },
          { label: 'Women', to: '/products/clothing/women', children: [] }
        ]
      }
    ]
  },
  {
    label: 'About',
    to: '/about',
    children: []
  }
];

function MenuList({ menus }) {
  const [expandedItems, setExpandedItems] = useState({});

  const toggleExpand = (label) => {
    setExpandedItems({
      ...expandedItems,
      [label]: !expandedItems[label]
    });
  };

  return (
    <ul className="menu-list">
      {menus.map(menu => (
        <MenuItem
          key={menu.label}
          menu={menu}
          expandedItems={expandedItems}
          toggleExpand={toggleExpand}
        />
      ))}
    </ul>
  );
}

function MenuItem({ menu, expandedItems, toggleExpand }) {
  const hasChildren = menu.children && menu.children.length > 0;
  const isExpanded = expandedItems[menu.label];

  return (
    <li className="menu-item">
      <div className="menu-label" onClick={() => hasChildren && toggleExpand(menu.label)}>
        <span>{menu.label}</span>
        {hasChildren && <span>{isExpanded ? '▼' : '▶'}</span>}
      </div>
      {hasChildren && isExpanded && (
        <ul className="submenu">
          {menu.children.map(child => (
            <MenuItem
              key={child.label}
              menu={child}
              expandedItems={expandedItems}
              toggleExpand={toggleExpand}
            />
          ))}
        </ul>
      )}
    </li>
  );
}

function App() {
  return (
    <div className="tree-view-container">
      <h1>Tree View / Recursive Menu</h1>
      <MenuList menus={menus} />
    </div>
  );
}

export default App;
