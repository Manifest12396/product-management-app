import React from 'react';

function Sidebar({ categories, selectedCategory, onSelectCategory }) {
  return (
    <aside style={{
      width: '240px',
      backgroundColor: '#1e1e1e',
      border: '1px solid #2d2d2d',
      borderRadius: '10px',
      padding: '20px',
      height: 'fit-content'
    }}>
      <h3 style={{
        fontSize: '1.1rem',
        color: '#ff5722',
        marginBottom: '15px',
        borderBottom: '1px solid #2d2d2d',
        paddingBottom: '8px'
      }}>
        Categories
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {categories.map((category) => {
          const isSelected = selectedCategory === category;
          return (
            <button
              key={category}
              onClick={() => onSelectCategory(category)}
              style={{
                background: isSelected ? '#ff5722' : 'transparent',
                color: isSelected ? '#ffffff' : '#a1a1aa',
                border: 'none',
                padding: '10px 14px',
                borderRadius: '6px',
                textAlign: 'left',
                fontWeight: isSelected ? '700' : '500',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              {category}
            </button>
          );
        })}
      </div>
    </aside>
  );
}

export default Sidebar;