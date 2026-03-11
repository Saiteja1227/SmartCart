// Product image placeholders with category-specific designs

export const generateProductImage = (category, productName, index = 0) => {
  const categoryImages = {
    Electronics: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
      'https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=400',
      'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=400',
      'https://images.unsplash.com/photo-1583394838336-acd977736f90?w=400',
    ],
    Fashion: [
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
      'https://images.unsplash.com/photo-1591047139829-d91aecb6caea?w=400',
      'https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=400',
      'https://images.unsplash.com/photo-1603252109303-2751441dd157?w=400',
    ],
    Home: [
      'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400',
      'https://images.unsplash.com/photo-1567016432779-094069958ea5?w=400',
      'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400',
      'https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=400',
    ],
    Books: [
      'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?w=400',
      'https://images.unsplash.com/photo-1524578271613-d550eacf6090?w=400',
      'https://images.unsplash.com/photo-1512820790803-83ca734da794?w=400',
      'https://images.unsplash.com/photo-1495446815901-a7297e633e8d?w=400',
    ],
    Sports: [
      'https://images.unsplash.com/photo-1461896836934-ffe607ba8211?w=400',
      'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=400',
      'https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=400',
      'https://images.unsplash.com/photo-1593012876906-c8947ba46e30?w=400',
    ]
  };

  const images = categoryImages[category] || categoryImages.Electronics;
  return images[index % images.length];
};

export const categoryIcons = {
  Electronics: '📱',
  Fashion: '👕',
  Home: '🏠',
  Books: '📚',
  Sports: '⚽',
  Beauty: '💄',
  Toys: '🧸',
  Grocery: '🛒'
};

export default { generateProductImage, categoryIcons };
