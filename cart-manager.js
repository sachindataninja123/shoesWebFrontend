
// // Get cart from localStorage
// function getCart() {
//     const cart = localStorage.getItem('shoppingCart');
//     return cart ? JSON.parse(cart) : [];
// }

// // Save cart to localStorage
// function saveCart(cart) {
//     localStorage.setItem('shoppingCart', JSON.stringify(cart));
//     updateCartCount();
    
//     // Trigger custom event for real-time updates
//     window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
// }

// // Update cart count badge
// function updateCartCount() {
//     const cart = getCart();
//     const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
//     const cartCountElement = document.getElementById('cartCount');
//     if (cartCountElement) {
//         cartCountElement.textContent = totalItems;
//     }
// }

// // Add item to cart from product cards
// function addToCart(productName, productPrice, productImage, selectedColor, category = 'Shoes') {
//     const cart = getCart();
    
//     // Generate unique ID based on timestamp and random number
//     const productId = Date.now() + Math.floor(Math.random() * 1000);
    
//     // Default sizes for shoes
//     const sizes = [6, 7, 8, 9, 10, 11, 12];
    
//     // Create new cart item
//     const newItem = {
//         id: productId,
//         name: productName,
//         price: productPrice,
//         image: productImage,
//         color: selectedColor,
//         category: category,
//         quantity: 1,
//         sizes: sizes,
//         selectedSize: sizes[0] // Default to first size
//     };
    
//     cart.push(newItem);
    
//     saveCart(cart);
//     showToast('Product added to cart!');
// }

// // Show toast notification
// function showToast(message, type = 'success') {
//     // Remove existing toast if any
//     const existingToast = document.querySelector('.cart-toast');
//     if (existingToast) {
//         existingToast.remove();
//     }
    
//     // Create toast element
//     const toast = document.createElement('div');
//     toast.className = 'cart-toast show';
//     toast.innerHTML = `
//         <i class="ri-${type === 'error' ? 'error-warning' : 'checkbox-circle'}-fill" style="font-size: 1.5rem;"></i>
//         <span>${message}</span>
//     `;
    
//     // Add styles if not already present
//     if (!document.getElementById('cart-toast-styles')) {
//         const styles = document.createElement('style');
//         styles.id = 'cart-toast-styles';
//         styles.textContent = `
//             .cart-toast {
//                 position: fixed;
//                 bottom: 2rem;
//                 right: 2rem;
//                 background: ${type === 'error' ? '#ef4444' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
//                 color: white;
//                 padding: 1.2rem 2rem;
//                 border-radius: 15px;
//                 box-shadow: 0 10px 35px rgba(102, 126, 234, 0.4);
//                 display: none;
//                 align-items: center;
//                 gap: 1rem;
//                 z-index: 10000;
//                 animation: slideIn 0.4s ease;
//             }
//             .cart-toast.show {
//                 display: flex;
//             }
//             @keyframes slideIn {
//                 from {
//                     transform: translateX(400px);
//                     opacity: 0;
//                 }
//                 to {
//                     transform: translateX(0);
//                     opacity: 1;
//                 }
//             }
//         `;
//         document.head.appendChild(styles);
//     }
    
//     document.body.appendChild(toast);
    
//     // Remove toast after 3 seconds
//     setTimeout(() => {
//         toast.classList.remove('show');
//         setTimeout(() => {
//             if (toast.parentNode) {
//                 toast.parentNode.removeChild(toast);
//             }
//         }, 400);
//     }, 3000);
// }

// // Initialize cart functionality when page loads
// document.addEventListener('DOMContentLoaded', function() {
//     // Update cart count on page load
//     updateCartCount();
    
//     // Add click event to all "Add to Cart" buttons
//     const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
//     addToCartButtons.forEach(button => {
//         button.addEventListener('click', function(e) {
//             e.preventDefault();
            
//             // Find the parent card element
//             const card = this.closest('.card');
            
//             if (!card) return;
            
//             // Extract product details from the card
//             const productName = card.querySelector('h2')?.textContent.trim() || 'Unknown Product';
//             const priceText = card.querySelector('.price')?.textContent.trim() || '0';
            
//             // Parse price - handle formats like "Rs. 5,500.00" or "Rs. 5500"
//             const productPrice = parseFloat(priceText.replace(/[^0-9.]/g, ''));
            
//             // Get image source
//             const productImage = card.querySelector('img')?.src || './image/default.png';
            
//             // Get selected color from dropdown
//             const colorSelect = card.querySelector('select');
//             const selectedColor = colorSelect ? colorSelect.value : 'Black';
            
//             // Get category from card text
//             const categoryElement = card.querySelector('p');
//             const category = categoryElement ? categoryElement.textContent.trim() : 'Shoes';
            
//             // Add to cart
//             addToCart(productName, productPrice, productImage, selectedColor, category);
//         });
//     });
    
//     // Listen for cart updates from other tabs/windows
//     window.addEventListener('storage', function(e) {
//         if (e.key === 'shoppingCart') {
//             updateCartCount();
//         }
//     });
// });

// // Export functions for use in other scripts if needed
// window.CartManager = {
//     getCart,
//     saveCart,
//     addToCart,
//     updateCartCount,
//     showToast
// };


// Get cart from localStorage
function getCart() {
    const cart = localStorage.getItem('shoppingCart');
    return cart ? JSON.parse(cart) : [];
}

// Save cart to localStorage
function saveCart(cart) {
    localStorage.setItem('shoppingCart', JSON.stringify(cart));
    updateCartCount();
    
    // Trigger custom event for real-time updates
    window.dispatchEvent(new CustomEvent('cartUpdated', { detail: cart }));
}

// Update cart count badge
function updateCartCount() {
    const cart = getCart();
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCountElement = document.getElementById('cartCount');
    if (cartCountElement) {
        cartCountElement.textContent = totalItems;
    }
}

// Add item to cart from product cards
function addToCart(productName, productPrice, productImage, selectedColor, category = 'Shoes') {
    const cart = getCart();
    
    // Generate unique ID based on timestamp and random number
    const productId = Date.now() + Math.floor(Math.random() * 1000);
    
    // Default sizes for shoes
    const sizes = [6, 7, 8, 9, 10, 11, 12];
    
    // Convert absolute URL to relative path for images
    let relativePath = productImage;
    if (productImage.includes('http://') || productImage.includes('https://')) {
        // Extract relative path from absolute URL
        const url = new URL(productImage);
        relativePath = url.pathname.replace('/shoes/', './');
    }
    
    // Ensure price is a valid number
    const validPrice = isNaN(productPrice) || productPrice === null ? 0 : Number(productPrice);
    
    // Create new cart item
    const newItem = {
        id: productId,
        name: productName,
        price: validPrice,
        image: relativePath,
        color: selectedColor,
        category: category,
        quantity: 1,
        sizes: sizes,
        selectedSize: sizes[0] // Default to first size
    };
    
    cart.push(newItem);
    
    saveCart(cart);
    showToast('Product added to cart!');
}

// Show toast notification
function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.cart-toast');
    if (existingToast) {
        existingToast.remove();
    }
    
    // Create toast element
    const toast = document.createElement('div');
    toast.className = 'cart-toast show';
    toast.innerHTML = `
        <i class="ri-${type === 'error' ? 'error-warning' : 'checkbox-circle'}-fill" style="font-size: 1.5rem;"></i>
        <span>${message}</span>
    `;
    
    // Add styles if not already present
    if (!document.getElementById('cart-toast-styles')) {
        const styles = document.createElement('style');
        styles.id = 'cart-toast-styles';
        styles.textContent = `
            .cart-toast {
                position: fixed;
                bottom: 2rem;
                right: 2rem;
                background: ${type === 'error' ? '#ef4444' : 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'};
                color: white;
                padding: 1.2rem 2rem;
                border-radius: 15px;
                box-shadow: 0 10px 35px rgba(102, 126, 234, 0.4);
                display: none;
                align-items: center;
                gap: 1rem;
                z-index: 10000;
                animation: slideIn 0.4s ease;
            }
            .cart-toast.show {
                display: flex;
            }
            @keyframes slideIn {
                from {
                    transform: translateX(400px);
                    opacity: 0;
                }
                to {
                    transform: translateX(0);
                    opacity: 1;
                }
            }
        `;
        document.head.appendChild(styles);
    }
    
    document.body.appendChild(toast);
    
    // Remove toast after 3 seconds
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 400);
    }, 3000);
}

// Initialize cart functionality when page loads
document.addEventListener('DOMContentLoaded', function() {
    // Update cart count on page load
    updateCartCount();
    
    // Add click event to all "Add to Cart" buttons
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    
    addToCartButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Find the parent card element
            const card = this.closest('.card');
            
            if (!card) return;
            
            // Extract product details from the card
            const productName = card.querySelector('h2')?.textContent.trim() || 'Unknown Product';
            const priceText = card.querySelector('.price')?.textContent.trim() || '0';
            
            // Parse price - handle formats like "Rs. 5,500.00" or "Rs. 5500"
            const productPrice = parseFloat(priceText.replace(/[^0-9.]/g, '')) || 0;
            
            // Get image source
            const imgElement = card.querySelector('img');
            let productImage = './image/default.png'; // Default fallback
            
            if (imgElement && imgElement.src) {
                productImage = imgElement.src;
            }
            
            // Get selected color from dropdown
            const colorSelect = card.querySelector('select');
            const selectedColor = colorSelect ? colorSelect.value : 'Black';
            
            // Get category from card text
            const categoryElement = card.querySelector('p');
            const category = categoryElement ? categoryElement.textContent.trim() : 'Shoes';
            
            // Add to cart
            addToCart(productName, productPrice, productImage, selectedColor, category);
        });
    });
    
    // Listen for cart updates from other tabs/windows
    window.addEventListener('storage', function(e) {
        if (e.key === 'shoppingCart') {
            updateCartCount();
        }
    });
});

// Export functions for use in other scripts if needed
window.CartManager = {
    getCart,
    saveCart,
    addToCart,
    updateCartCount,
    showToast
};