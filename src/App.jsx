import React, { useState } from 'react'
import ProductsPage from './components/ProductsPage'
import './App.css'

function App() {
  return (
    <div className="app">
      <header className="app-header">
        <h1>Distributor Management System</h1>
        <div className="user-info">
          <span>Welcome, <strong>System Admin</strong></span>
          <span className="username">admin</span>
          <button className="logout-btn">Logout</button>
        </div>
      </header>
      <div className="app-container">
        <aside className="sidebar">
          <nav>
            <a href="#dashboard" className="nav-item">
              <span className="icon">📊</span>
              Dashboard
            </a>
            <a href="#distributors" className="nav-item">
              <span className="icon">👥</span>
              Distributors
            </a>
            <a href="#gate-entry-users" className="nav-item">
              <span className="icon">📋</span>
              Gate Entry Users
            </a>
            <a href="#categories" className="nav-item">
              <span className="icon">📁</span>
              Categories
            </a>
            <a href="#products" className="nav-item active">
              <span className="icon">🛍️</span>
              Products
            </a>
            <a href="#orders" className="nav-item">
              <span className="icon">🛒</span>
              Orders
            </a>
            <a href="#gate-entry" className="nav-item">
              <span className="icon">🚪</span>
              Gate Entry
            </a>
          </nav>
        </aside>
        <main className="main-content">
          <ProductsPage />
        </main>
      </div>
    </div>
  )
}

export default App
