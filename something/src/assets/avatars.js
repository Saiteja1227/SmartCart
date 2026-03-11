// Avatar placeholder generator - generates colorful avatars based on user initials

export const generateAvatar = (name, size = 100) => {
  const colors = [
    '#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8',
    '#F7DC6F', '#BB8FCE', '#85C1E2', '#F8B739', '#52B788'
  ];
  
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);
  
  const colorIndex = name.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0) % colors.length;
  const bgColor = colors[colorIndex];
  
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="${bgColor}"/>
      <text x="50%" y="50%" text-anchor="middle" dy=".35em" fill="white" font-size="${size/2}" font-family="Arial, sans-serif" font-weight="bold">
        ${initials}
      </text>
    </svg>
  `)}`;
};

export const defaultAvatar = (size = 100) => {
  return `data:image/svg+xml,${encodeURIComponent(`
    <svg width="${size}" height="${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${size/2}" cy="${size/2}" r="${size/2}" fill="#94A3B8"/>
      <circle cx="${size/2}" cy="${size/2.5}" r="${size/5}" fill="white"/>
      <path d="M ${size/4} ${size*0.85} Q ${size/2} ${size*0.65} ${size*0.75} ${size*0.85}" 
        fill="white" stroke="white" stroke-width="${size/20}"/>
    </svg>
  `)}`;
};

export default { generateAvatar, defaultAvatar };
