export const destinationsData = [
  { 
    id: 1, 
    name: 'Kota Beach Resort', 
    location: 'Bantayan, Cebu', 
    price: '₱ 12,000', 
    match: '92%', 
    image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8, 
    reviewCount: 1247, 
    lokal: true,
    tags: ['Beach', 'Nature', 'Culture'],
    quickStats: {
      bestTime: 'March - May',
      temp: '25-32°C',
      duration: '3-5 days',
      distance: '380 km from Mactan'
    },
    about: 'Experience the breathtaking beauty and rich culture of this stunning destination. Perfect for adventure seekers and relaxation enthusiasts alike.',
    highlights: ['Crystal clear waters', 'Pristine beaches', 'Local cuisine', 'Adventure activities'],
    popularActivities: ['Island Hopping', 'Snorkeling & Diving', 'Beach Activities', 'Local Food Tour', 'Sunset Watching', 'Photography'],
    routePreview: {
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      distance: '850 km',
      travelTime: '15h 10m',
      stops: '5 places'
    },
    budgetBreakdown: {
      total: '₱12,000',
      accommodation: '₱4,800',
      food: '₱3,000',
      activities: '₱3,000',
      transportation: '₱1,200'
    },
    gallery: [
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1499793983690-e29da59ef1c2?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1506929562872-bb421503ef21?auto=format&fit=crop&w=400&q=80'
    ],
    mapQuery: 'Kota+Beach+Resort,Bantayan,Cebu',
    reviews: [
      { id: 1, name: 'Maria Santos', avatar: 'https://i.pravatar.cc/40?u=maria', rating: 5, comment: 'The sandbar is absolutely magical! Loved every second here.' },
      { id: 2, name: 'John Doe', avatar: 'https://i.pravatar.cc/40?u=john', rating: 4, comment: 'Beautiful beach, great service. The food at the restaurant was okay.' }
    ]
  },
  { 
    id: 2, 
    name: 'Camiguin Island', 
    location: 'Northern Mindanao', 
    price: '₱ 9,000', 
    match: '90%', 
    image: 'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=1200&q=80',
    rating: 4.8, 
    reviewCount: 98, 
    lokal: true,
    tags: ['Island', 'Volcano', 'Nature'],
    quickStats: {
      bestTime: 'April - June',
      temp: '26-31°C',
      duration: '4-6 days',
      distance: '1,200 km from Manila'
    },
    about: 'Known as the "Island Born of Fire," Camiguin offers a dramatic landscape of seven volcanoes. Explore lush jungles, relax in hot springs, and visit the famous White Island sandbar.',
    highlights: ['Volcano Views', 'Hot Springs', 'Diving Spot', 'Eco-Tourism'],
    popularActivities: ['Hot Spring Dip', 'Volcano Hike', 'Scuba Diving', 'Sunken Cemetery', 'Island Hopping'],
    routePreview: {
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      distance: '1,200 km',
      travelTime: '2h 15m',
      stops: '2 places'
    },
    budgetBreakdown: {
      total: '₱9,000',
      accommodation: '₱3,500',
      food: '₱2,500',
      activities: '₱1,500',
      transportation: '₱1,500'
    },
    gallery: [
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1542259009477-d625272157b7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1551632811-561732d1e306?auto=format&fit=crop&w=400&q=80'
    ],
    mapQuery: 'Camiguin+Island,Northern+Mindanao',
    reviews: [
      { id: 1, name: 'Alex Reyes', avatar: 'https://i.pravatar.cc/40?u=alex', rating: 5, comment: 'So much to explore! Perfect for adventure seekers.' }
    ]
  },
  { 
    id: 3, 
    name: 'El Nido Resorts', 
    location: 'Palawan', 
    price: '₱ 25,000', 
    match: '95%', 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    rating: 5.0, 
    reviewCount: 215, 
    lokal: false,
    tags: ['Luxury', 'Beaches', 'Romantic'],
    quickStats: {
      bestTime: 'December - May',
      temp: '27-33°C',
      duration: '4-7 days',
      distance: '1 hr flight from Manila'
    },
    about: 'Experience world-class luxury amidst the staggering limestone karsts of El Nido. Access private lagoons, hidden beaches, and unparalleled snorkeling directly from your overwater bungalow.',
    highlights: ['Luxury Stay', 'Private Beach', 'Snorkeling', 'Island Hopping', 'Gourmet Dining'],
    popularActivities: ['Private Boat Tour', 'Kayaking', 'Fine Dining', 'Spa & Wellness', 'Scuba Diving'],
    routePreview: {
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      distance: '590 km',
      travelTime: '1h 20m',
      stops: '1 place'
    },
    budgetBreakdown: {
      total: '₱25,000',
      accommodation: '₱12,000',
      food: '₱6,000',
      activities: '₱5,000',
      transportation: '₱2,000'
    },
    gallery: [
      'https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1559128010-7c1ad6e1b6a5?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1498654077810-12c21d4d6dc3?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1510414842594-a61c69b5ae57?auto=format&fit=crop&w=400&q=80'
    ],
    mapQuery: 'El+Nido+Resorts,Palawan',
    reviews: [
      { id: 1, name: 'Sarah Lee', avatar: 'https://i.pravatar.cc/40?u=sarah', rating: 5, comment: 'Pure paradise. Expensive but absolutely worth it.' }
    ]
  },
  { 
    id: 4, 
    name: 'Siargao Surfing', 
    location: 'Surigao del Norte', 
    price: '₱ 15,000', 
    match: '88%', 
    image: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1200&q=80',
    rating: 4.7, 
    reviewCount: 156, 
    lokal: true,
    tags: ['Surfing', 'Nightlife', 'Backpacking'],
    quickStats: {
      bestTime: 'August - November',
      temp: '26-32°C',
      duration: '5-10 days',
      distance: '2 hr flight from Manila'
    },
    about: 'Ride the world-famous Cloud 9 wave or relax in the bohemian vibe of General Luna. Siargao is a haven for surfers, digital nomads, and nature lovers seeking a laid-back lifestyle.',
    highlights: ['World-Class Surfing', 'Digital Nomad Friendly', 'Nightlife', 'Lagoons', 'Motorbike Friendly'],
    popularActivities: ['Surfing Lessons', 'Island Hopping', 'Motorbike Tour', 'Cafe Hopping', 'Yoga Classes'],
    routePreview: {
      mapImage: 'https://images.unsplash.com/photo-1524661135-423995f22d0b?auto=format&fit=crop&w=800&q=80',
      distance: '800 km',
      travelTime: '2h 10m',
      stops: '1 place'
    },
    budgetBreakdown: {
      total: '₱15,000',
      accommodation: '₱6,000',
      food: '₱4,000',
      activities: '₱3,000',
      transportation: '₱2,000'
    },
    gallery: [
      'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1515238152791-8216bfdf89a7?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1505881402582-c5bc11054f91?auto=format&fit=crop&w=400&q=80',
      'https://images.unsplash.com/photo-1520942702018-0862200e6873?auto=format&fit=crop&w=400&q=80'
    ],
    mapQuery: 'Cloud+9,Siargao',
    reviews: [
      { id: 1, name: 'Chris Evans', avatar: 'https://i.pravatar.cc/40?u=chris', rating: 4, comment: 'Great waves, great food. Can get a bit crowded during peak season.' }
    ]
  }
];