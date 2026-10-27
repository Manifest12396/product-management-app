import React, { useState } from 'react';

function AddProductForm({ onAddProduct, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    category: 'Apparel',
    price: '',
    quantity: '',
    rating: '4.5',
    image: '/tshirt.jpg',
    description: '',
    specifications: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.price || !formData.quantity) {
      alert('Please fill in required fields!');
      return;
    }

    onAddProduct({
      id: Date.now(),
      name: formData.name,
      category: formData.category,
      price: Number(formData.price),
      quantity: Number(formData.quantity),
      rating: Number(formData.rating),
      image: formData.image || '/tshirt.jpg',
      description: formData.description || 'New fashion arrival.',
      specifications: formData.specifications || 'Standard sizing and high quality materials.'
    });

    onClose();
  };

  const fieldStyle = { display: 'flex', flexDirection: 'column', gap: '4px', marginBottom: '12px' };
  const inputStyle = { backgroundColor: '#2a2a2a', border: '1px solid #3d3d3d', color: '#fff', padding: '8px', borderRadius: '6px' };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()} style={{ maxWidth: '450px' }}>
        <h3 style={{ marginTop: 0, color: 'var(--primary-orange)' }}>Add New Fashion Product</h3>
        
        <form onSubmit={handleSubmit}>
          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Product Name</label>
            <input type="text" name="name" value={formData.name} onChange={handleChange} style={inputStyle} placeholder="e.g. Vintage Leather Jacket" required />
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Category</label>
              <select name="category" value={formData.category} onChange={handleChange} style={inputStyle}>
                <option value="Apparel">Apparel</option>
                <option value="Footwear">Footwear</option>
                <option value="Accessories">Accessories</option>
              </select>
            </div>
            
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Price (₱)</label>
              <input type="number" name="price" value={formData.price} onChange={handleChange} style={inputStyle} placeholder="999" required />
            </div>
          </div>

          <div style={{ display: 'flex', gap: '10px' }}>
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Quantity</label>
              <input type="number" name="quantity" value={formData.quantity} onChange={handleChange} style={inputStyle} placeholder="10" required />
            </div>
            
            <div style={{ ...fieldStyle, flex: 1 }}>
              <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Rating</label>
              <input type="number" step="0.1" max="5" name="rating" value={formData.rating} onChange={handleChange} style={inputStyle} />
            </div>
          </div>

          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Image Path or URL</label>
            <input type="text" name="image" value={formData.image} onChange={handleChange} style={inputStyle} placeholder="/tshirt.jpg" />
          </div>

          <div style={fieldStyle}>
            <label style={{ fontSize: '0.85rem', color: '#a1a1aa' }}>Description</label>
            <input type="text" name="description" value={formData.description} onChange={handleChange} style={inputStyle} placeholder="Short product description" />
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px', marginTop: '16px' }}>
            <button type="button" className="btn-cancel" onClick={onClose}>Cancel</button>
            <button type="submit" className="btn-orange">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddProductForm;