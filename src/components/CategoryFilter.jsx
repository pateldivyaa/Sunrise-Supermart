const CategoryFilter = ({ selectedCategory, setSelectedCategory }) => {
  const categories = [
    'Personal Care',
    'Home Care',
    'Packaged Foods',
    'Oral Care',
    'World Food',
    'Dry Fruits',
    'Kitchen Care Products',
    'Gruh Udhyog',
    'Hair Care',
    'Ready to Cook/Instant Mix',
    'Spices',
    'Chocolates',
    'Beverages',
    'Staples',
    'Bakery'
  ];

  return (
    <div className="space-y-3">
      <button
        onClick={() => setSelectedCategory('All')}
        className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
          selectedCategory === 'All'
            ? 'bg-orange-600 text-white shadow-lg'
            : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:translate-x-1'
        }`}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => setSelectedCategory(category)}
          className={`w-full text-left px-4 py-3 rounded-xl font-semibold transition-all ${
            selectedCategory === category
              ? 'bg-orange-600 text-white shadow-lg'
              : 'bg-gray-100 text-gray-700 hover:bg-gray-200 hover:translate-x-1'
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;