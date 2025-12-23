import React, { useState, useEffect } from 'react'
import './ProductsPage.css'

// Sample product data
const initialProducts = [
  { id: 1, name: 'Active', category: 'Milk', mrp: 57, distributorRate: 53.81, retailerPrice: 54.87, uom: '1000 ml', crt: 12, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 2, name: 'Amul Gold', category: 'Milk', mrp: 28, distributorRate: 26.46, retailerPrice: 27, uom: '500 ml', crt: 28, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 3, name: 'Tolu', category: 'Milk', mrp: 20, distributorRate: 17.6, retailerPrice: 18, uom: '250 ml', crt: 32, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 4, name: 'Amul Masti Butter Milk', category: 'Butter Milk', mrp: 5, distributorRate: 4.2, retailerPrice: 4.368, uom: '125 ml', crt: 60, image: 'https://placehold.co/60x60/9b59b6/white?text=Butter' },
  { id: 5, name: 'Amul Masti Butter Milk', category: 'Butter Milk', mrp: 10, distributorRate: 8.61, retailerPrice: 8.95, uom: '250 ml', crt: 30, image: 'https://placehold.co/60x60/9b59b6/white?text=Butter' },
  { id: 6, name: 'Amul Kool', category: 'Milk', mrp: 10, distributorRate: 8.79, retailerPrice: 9, uom: '160 ml', crt: 60, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 7, name: 'Amul Lassi', category: 'Milk', mrp: 10, distributorRate: 8.79, retailerPrice: 9, uom: '160 ml', crt: 60, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 8, name: 'Heritage Milk', category: 'Milk', mrp: 30, distributorRate: 28.5, retailerPrice: 29, uom: '500 ml', crt: 24, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 9, name: 'Mother Dairy', category: 'Dahi', mrp: 10, distributorRate: 9.261, retailerPrice: 9.471, uom: '110 gms', crt: 70, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 10, name: 'Amul Dahi', category: 'Dahi', mrp: 76, distributorRate: 70.748, retailerPrice: 71.799, uom: '950 gms', crt: 12, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 11, name: 'Nandini Dahi', category: 'Dahi', mrp: 20, distributorRate: 18.9075, retailerPrice: 19.095, uom: '165 gms', crt: 12, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 12, name: 'Britannia Dahi', category: 'Dahi', mrp: 50, distributorRate: 47.698, retailerPrice: 48.221, uom: '500 gms', crt: 12, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 13, name: 'Amul Taaza', category: 'Dahi', mrp: 10, distributorRate: 9.232, retailerPrice: 9.5995, uom: '75 gms', crt: 24, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 14, name: 'Nestle Dahi', category: 'Dahi', mrp: 50, distributorRate: 47.698, retailerPrice: 48.221, uom: '500 gms', crt: 30, image: 'https://placehold.co/60x60/e67e22/white?text=Dahi' },
  { id: 15, name: 'Amul Cool', category: 'Milk', mrp: 10, distributorRate: 9.28, retailerPrice: 9.5, uom: '170 ml', crt: 50, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
  { id: 16, name: 'Epigamia Greek Yogurt', category: 'Milk', mrp: 69, distributorRate: 65.72, retailerPrice: 66.77, uom: '1000 ml', crt: 12, image: 'https://placehold.co/60x60/3498db/white?text=Milk' },
];

const categories = ['All', 'Milk', 'Butter Milk', 'Dahi'];

const ProductsPage = () => {
  const [products, setProducts] = useState(initialProducts);
  const [filteredProducts, setFilteredProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [currentPage, setCurrentPage] = useState(1);
  const [showModal, setShowModal] = useState(false);
  const [editingProduct, setEditingProduct] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    mrp: '',
    distributorRate: '',
    retailerPrice: '',
    uom: '',
    crt: '',
    image: 'https://via.placeholder.com/60'
  });

  const itemsPerPage = 10;

  // Filter products by category
  useEffect(() => {
    if (selectedCategory === 'All') {
      setFilteredProducts(products);
    } else {
      setFilteredProducts(products.filter(p => p.category === selectedCategory));
    }
    setCurrentPage(1);
  }, [selectedCategory, products]);

  // Pagination calculations
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentProducts = filteredProducts.slice(startIndex, endIndex);

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleAddProduct = () => {
    setEditingProduct(null);
    setFormData({
      name: '',
      category: '',
      mrp: '',
      distributorRate: '',
      retailerPrice: '',
      uom: '',
      crt: '',
      image: 'https://placehold.co/60x60/95a5a6/white?text=Product'
    });
    setShowModal(true);
  };

  const handleEditProduct = (product) => {
    setEditingProduct(product);
    setFormData({
      name: product.name,
      category: product.category,
      mrp: product.mrp,
      distributorRate: product.distributorRate,
      retailerPrice: product.retailerPrice,
      uom: product.uom,
      crt: product.crt,
      image: product.image
    });
    setShowModal(true);
  };

  const handleDeleteProduct = (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter(p => p.id !== id));
    }
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (editingProduct) {
      // Update existing product
      setProducts(products.map(p => 
        p.id === editingProduct.id 
          ? { ...p, ...formData, mrp: parseFloat(formData.mrp), distributorRate: parseFloat(formData.distributorRate), retailerPrice: parseFloat(formData.retailerPrice), crt: parseInt(formData.crt) }
          : p
      ));
    } else {
      // Add new product
      const newProduct = {
        id: products.length + 1,
        ...formData,
        mrp: parseFloat(formData.mrp),
        distributorRate: parseFloat(formData.distributorRate),
        retailerPrice: parseFloat(formData.retailerPrice),
        crt: parseInt(formData.crt)
      };
      setProducts([...products, newProduct]);
    }
    setShowModal(false);
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="products-page">
      <div className="products-header">
        <h2>Products</h2>
        <button className="add-product-btn" onClick={handleAddProduct}>
          + Add Product
        </button>
      </div>

      <div className="filter-section">
        <label htmlFor="category-filter">Filter by Category:</label>
        <select 
          id="category-filter"
          value={selectedCategory} 
          onChange={handleCategoryChange}
          className="category-filter"
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>{cat}</option>
          ))}
        </select>
      </div>

      <div className="products-table-container">
        <table className="products-table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>MRP</th>
              <th>Distributor Rate</th>
              <th>Retailer Price</th>
              <th>UOM</th>
              <th>CRT</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentProducts.map(product => (
              <tr key={product.id}>
                <td>
                  <img 
                    src={product.image} 
                    alt={product.name} 
                    className="product-image"
                    onError={(e) => {
                      e.target.src = 'https://placehold.co/60x60/95a5a6/white?text=No+Image';
                    }}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.category}</td>
                <td>₹{product.mrp}</td>
                <td>₹{product.distributorRate}</td>
                <td>₹{product.retailerPrice}</td>
                <td>{product.uom}</td>
                <td>{product.crt}</td>
                <td>
                  <div className="action-buttons">
                    <button 
                      className="edit-btn"
                      onClick={() => handleEditProduct(product)}
                    >
                      Edit
                    </button>
                    <button 
                      className="delete-btn"
                      onClick={() => handleDeleteProduct(product.id)}
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button 
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="pagination-btn"
        >
          Previous
        </button>
        <div className="page-numbers">
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index + 1}
              onClick={() => handlePageChange(index + 1)}
              className={`page-btn ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </button>
          ))}
        </div>
        <button 
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="pagination-btn"
        >
          Next
        </button>
      </div>

      {/* Add/Edit Product Modal */}
      {showModal && (
        <div className="modal-overlay" onClick={() => setShowModal(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <h3>{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Name *</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="category">Category *</label>
                  <select
                    id="category"
                    name="category"
                    value={formData.category}
                    onChange={handleFormChange}
                    required
                  >
                    <option value="">Select Category</option>
                    <option value="Milk">Milk</option>
                    <option value="Butter Milk">Butter Milk</option>
                    <option value="Dahi">Dahi</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="mrp">MRP *</label>
                  <input
                    type="number"
                    id="mrp"
                    name="mrp"
                    step="0.01"
                    value={formData.mrp}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="distributorRate">Distributor Rate *</label>
                  <input
                    type="number"
                    id="distributorRate"
                    name="distributorRate"
                    step="0.01"
                    value={formData.distributorRate}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="retailerPrice">Retailer Price *</label>
                  <input
                    type="number"
                    id="retailerPrice"
                    name="retailerPrice"
                    step="0.01"
                    value={formData.retailerPrice}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="uom">UOM *</label>
                  <input
                    type="text"
                    id="uom"
                    name="uom"
                    placeholder="e.g., 1000 ml"
                    value={formData.uom}
                    onChange={handleFormChange}
                    required
                  />
                </div>
              </div>

              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="crt">CRT *</label>
                  <input
                    type="number"
                    id="crt"
                    name="crt"
                    value={formData.crt}
                    onChange={handleFormChange}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="image">Image URL</label>
                  <input
                    type="text"
                    id="image"
                    name="image"
                    placeholder="Image URL"
                    value={formData.image}
                    onChange={handleFormChange}
                  />
                </div>
              </div>

              <div className="modal-actions">
                <button type="button" className="cancel-btn" onClick={() => setShowModal(false)}>
                  Cancel
                </button>
                <button type="submit" className="create-btn">
                  {editingProduct ? 'Update' : 'Create'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProductsPage;
