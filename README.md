# GroceryMart - Complete E-Commerce Website

A modern, fully-featured grocery e-commerce website built with React. Shop for fresh produce, dairy, meat, bakery items, and more with an intuitive shopping experience.

![GroceryMart](https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=800)

## Features Checklist

### Core Functionality
- ✅ **Shopping Cart** - Add, update quantity, and remove items
- ✅ **Cart Badge** - Real-time cart item count in header
- ✅ **LocalStorage Persistence** - Cart data persists across sessions
- ✅ **Context API** - Global state management for cart

### Product Features
- ✅ **Product Catalog** - Browse 12 unique grocery products
- ✅ **Product Details** - Detailed view with images, ratings, and descriptions
- ✅ **Search Functionality** - Search products by name, description, or category
- ✅ **Category Filter** - Filter by Fruits & Vegetables, Dairy & Eggs, Meat & Seafood, Bakery, Pantry, Beverages
- ✅ **Sorting Options** - Sort by name, price (low to high), price (high to low), and rating
- ✅ **Related Products** - See similar products on detail pages

### Pages
- ✅ **Home Page** - Hero section, featured products, and benefits
- ✅ **Products Page** - Full catalog with search, filter, and sort
- ✅ **Product Detail Page** - Individual product information
- ✅ **Cart Page** - Review cart items and see order summary
- ✅ **Checkout Page** - Complete order form with validation
- ✅ **About Page** - Company story and values
- ✅ **Contact Page** - Contact form with validation

### User Experience
- ✅ **Responsive Design** - Mobile-first design, works on all screen sizes
- ✅ **Lazy Loading** - Images and routes load on demand for better performance
- ✅ **Code Splitting** - React Router lazy loading for optimal bundle size
- ✅ **Loading States** - Spinner for async operations
- ✅ **Form Validation** - Contact and checkout forms with error messages
- ✅ **Success Feedback** - Visual confirmation for actions

### Technical Features
- ✅ **React 18** - Latest React features with functional components
- ✅ **React Router v6** - Client-side routing with lazy loading
- ✅ **Tailwind CSS** - Modern utility-first styling
- ✅ **Lucide Icons** - Beautiful, consistent icon set
- ✅ **Mock Data** - JSON-based product catalog
- ✅ **No Backend Required** - Completely frontend-only

## Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Open in browser:**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
grocery-ecommerce/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   ├── CartItem.jsx
│   │   ├── SearchBar.jsx
│   │   ├── CategoryFilter.jsx
│   │   └── LoadingSpinner.jsx
│   ├── pages/               # Route pages
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── Cart.jsx
│   │   ├── About.jsx
│   │   ├── Contact.jsx
│   │   └── Checkout.jsx
│   ├── context/             # React Context
│   │   └── CartContext.jsx
│   ├── data/                # Mock data
│   │   └── products.json
│   ├── App.jsx              # Main app with routing
│   ├── main.jsx             # Entry point
│   └── index.css            # Global styles
├── public/
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## Key Technologies

- **React 18.3** - UI library
- **React Router v6** - Routing and navigation
- **Tailwind CSS 3.4** - Styling
- **Vite 5.4** - Build tool and dev server
- **Lucide React** - Icon library

## Features in Detail

### Shopping Cart
- Add products to cart from product cards or detail page
- Update quantities with + and - buttons
- Remove individual items or clear entire cart
- Real-time total calculation with tax and shipping
- Free shipping on orders over $50
- Cart persists in localStorage

### Product Search & Filter
- Real-time search across product names, descriptions, and categories
- Filter by product categories
- Sort by multiple criteria (name, price, rating)
- Responsive sidebar with filter controls

### Form Validation
- Contact form with email validation
- Checkout form with comprehensive validation
- Real-time error messages
- Success feedback after submission

### Responsive Design
- Mobile-first approach
- Breakpoints for tablet and desktop
- Touch-friendly buttons and controls
- Collapsible mobile menu

## Mock Data

The project includes 12 sample grocery products in `src/data/products.json` with:
- Product ID, name, category
- Price and unit information
- High-quality stock photos from Pexels
- Descriptions and ratings
- Stock quantities

## Customization

### Adding More Products
Edit `src/data/products.json` and add new product objects with the same structure.

### Changing Colors
The primary color is green. To change it, update Tailwind classes:
- `bg-green-600` → `bg-blue-600`
- `text-green-600` → `text-blue-600`
- `hover:bg-green-700` → `hover:bg-blue-700`

### Modifying Categories
Update the category filter in `src/pages/Products.jsx` and product data in `products.json`.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Code splitting with React.lazy()
- Lazy loading of images
- Optimized bundle size
- Fast initial load time

## License

This project is open source and available for personal and commercial use.

## Credits

- Images from [Pexels](https://www.pexels.com)
- Icons from [Lucide](https://lucide.dev)
- Design inspired by modern e-commerce platforms

## Support

For issues or questions, please open an issue on the project repository.

---

**Built with ❤️ using React, Tailwind CSS, and Vite**
