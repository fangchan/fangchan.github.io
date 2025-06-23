import React, { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import './Navigation.css';
import Statistics from './Statistics'; // 假設這些組件已正確導入
import BuyEaseForm from './BuyEaseForm';
import Recipt from './Recipt';
import OrderPage from './OrderPage';

import ProductsList from './ProductsList';
import CourseTest from './coursetest';
import { CartContext } from './T_CarContext';

const Navigation = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const menuRef = useRef(null); // 使用 ref 來獲取下拉菜單的引用

   const toggleMenu = () => {
        setMenuOpen((prev) => !prev); // 切換下拉菜單的顯示狀態
    };

    const handleClickOutside = (event) => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setMenuOpen(false);
        }
    };

    useEffect(() => {
        // 添加事件監聽器
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            // 清除事件監聽器
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    const [cartItems, setCartItems] = useState([])

    return (
        <BrowserRouter>
        <CartContext.Provider value = {{cartItems,setCartItems}}>
            <div className="navigation-container">
                <img 
                    src={process.env.PUBLIC_URL + 'Images/icon-menu.svg'} 
                    alt="Menu" 
                    className="menu-icon" 
                    onClick={toggleMenu} 
                />
                 <div className="logo-container">
                    <img 
                        src={process.env.PUBLIC_URL + 'Images/logo-buyinsy.png'} 
                        alt="Logo" 
                        className="logo" 
                    />
                   
                </div>
                {menuOpen && (
                    <div className="dropdown-menu" ref={menuRef}>
                        <Link to="#" onClick={toggleMenu}>全部商店</Link>
                        <Link to="/statistic" onClick={toggleMenu}>銷量情報</Link>
                        <Link to="/BuyEaseForm" onClick={toggleMenu}>BuyEaseForm</Link>
                        <Link to="/Recipt" onClick={toggleMenu}>Recipt</Link>
                        <Link to="/OrderPage" onClick={toggleMenu}>OrderPage</Link>

                        <Link to="/productslist" onClick={toggleMenu}>productslist</Link>
                        <Link to="/coursetest" onClick={toggleMenu}>coursetest</Link>
                    </div>
                )}
            </div>
            <Routes>
                <Route path="/statistic" element={<Statistics />} />
                <Route path="/BuyEaseForm" element={<BuyEaseForm />} />
                <Route path="/Recipt" element={<Recipt />} />
                <Route path="/OrderPage" element={<OrderPage />} />

                <Route path="/productslist" element={<ProductsList />} />
                <Route path="/coursetest" element={<CourseTest />} />
            </Routes>
        </CartContext.Provider>
        </BrowserRouter>
    );
};

export default Navigation;