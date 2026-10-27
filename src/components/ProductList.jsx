import React from 'react';
import ProductCard from './ProductCard';

function ProductList({ products, categories, selectedCategory, onCategoryChange, onOpenAddModal, onSelectProduct }) {
  return (
    <section>
      <div className="list-header-controls">
        <h2 className="section-title" style={{ margin: 0 }}>Product List</h2>
        
        <div style={{ display: 'flex', gap: '12px' }}>
          <select 
            value={selectedCategory} 
            onChange={(e) => onCategoryChange(e.target.value)}
            className="category-select"
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>

          <button className="btn-orange" onClick={onOpenAddModal}>
            + Add New
          </button>
        </div>
      </div>

      <div className="products-grid">
        {products.length > 0 ? (
          products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onSelect={onSelectProduct} 
            />
          ))
        ) : (
          <p style={{ color: 'var(--text-muted)', gridColumn: '1 / -1', textAlign: 'center', padding: '40px 0' }}>
            No fashion products found.
          </p>
        )}
      </div>
    </section>
  );
}

export default ProductList;