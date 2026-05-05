export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: number;
  medium: string;
  dimensions: string;
  description: string;
  image: string;
  category: string;
  featured: boolean;
  price?: string;
}

export interface Artist {
  id: string;
  name: string;
  bio: string;
  avatar: string;
  country: string;
  artworks: number;
}

export interface Exhibition {
  id: string;
  title: string;
  description: string;
  startDate: string;
  endDate: string;
  image: string;
  featured: boolean;
}

export const artworks: Artwork[] = [
  {
    id: "1",
    title: "Ethereal Forms",
    artist: "Maya Chen",
    year: 2024,
    medium: "Mixed Media on Canvas",
    dimensions: "120 × 90 cm",
    description: "An exploration of organic shapes and flowing movements, this piece captures the delicate balance between form and void. The warm terracotta tones evoke a sense of earthly connection while maintaining an ethereal quality.",
    image: "/gallery/artwork-1.jpg",
    category: "Abstract",
    featured: true,
    price: "$8,500"
  },
  {
    id: "2",
    title: "Morning Mist",
    artist: "Henrik Larsson",
    year: 2023,
    medium: "Archival Pigment Print",
    dimensions: "100 × 150 cm",
    description: "Captured at dawn in the Norwegian highlands, this photograph embodies the quiet majesty of nature. The soft gradients and misty atmosphere create a meditative viewing experience.",
    image: "/gallery/artwork-2.jpg",
    category: "Photography",
    featured: true,
    price: "$4,200"
  },
  {
    id: "3",
    title: "Infinite Curve",
    artist: "Sofia Moreau",
    year: 2024,
    medium: "Carrara Marble",
    dimensions: "85 × 45 × 45 cm",
    description: "This sculptural piece explores the concept of infinity through continuous, flowing lines carved from a single block of marble. The interplay of light and shadow reveals new perspectives with each viewing angle.",
    image: "/gallery/artwork-3.jpg",
    category: "Sculpture",
    featured: false,
    price: "$22,000"
  },
  {
    id: "4",
    title: "Still Life No. 7",
    artist: "Emma Woodward",
    year: 2024,
    medium: "Photography",
    dimensions: "60 × 80 cm",
    description: "Part of an ongoing series examining the beauty in everyday objects. This composition celebrates the subtle textures and natural forms found in botanical specimens.",
    image: "/gallery/artwork-4.jpg",
    category: "Photography",
    featured: true,
    price: "$2,800"
  },
  {
    id: "5",
    title: "Pacific Dreams",
    artist: "James Nakamura",
    year: 2023,
    medium: "Chromogenic Print",
    dimensions: "120 × 180 cm",
    description: "A dramatic seascape capturing the raw power and beauty of the Pacific Ocean at sunset. The rich tonal range creates an immersive experience that transports viewers to the shore.",
    image: "/gallery/artwork-5.jpg",
    category: "Photography",
    featured: false,
    price: "$5,600"
  },
  {
    id: "6",
    title: "Geometric Meditation",
    artist: "Lucas Weber",
    year: 2024,
    medium: "Oil on Canvas",
    dimensions: "150 × 150 cm",
    description: "Bold geometric forms intersect and overlap in this contemplative work. The earth-toned palette grounds the abstract composition while inviting deeper reflection.",
    image: "/gallery/artwork-6.jpg",
    category: "Abstract",
    featured: true,
    price: "$12,000"
  },
  {
    id: "7",
    title: "Light Study III",
    artist: "Anna Berg",
    year: 2024,
    medium: "Archival Pigment Print",
    dimensions: "80 × 100 cm",
    description: "An architectural photograph exploring how natural light transforms interior spaces. The minimalist composition highlights the poetry of empty rooms and streaming sunlight.",
    image: "/gallery/artwork-7.jpg",
    category: "Photography",
    featured: false,
    price: "$3,400"
  },
  {
    id: "8",
    title: "Makers Hands",
    artist: "Thomas Reid",
    year: 2023,
    medium: "Silver Gelatin Print",
    dimensions: "50 × 70 cm",
    description: "Part of a documentary series on traditional craftspeople. This intimate portrait captures the relationship between artisan and material, celebrating the enduring value of handmade objects.",
    image: "/gallery/artwork-8.jpg",
    category: "Photography",
    featured: false,
    price: "$1,900"
  },
  {
    id: "9",
    title: "Forest Cathedral",
    artist: "Henrik Larsson",
    year: 2024,
    medium: "Archival Pigment Print",
    dimensions: "100 × 120 cm",
    description: "Morning fog transforms an ancient forest into a sacred space. The ethereal atmosphere and vertical composition evoke the grandeur of natural cathedrals.",
    image: "/gallery/artwork-9.jpg",
    category: "Photography",
    featured: true,
    price: "$4,800"
  },
  {
    id: "10",
    title: "Nocturne in Blue",
    artist: "Isabella Russo",
    year: 2024,
    medium: "Acrylic and Gold Leaf",
    dimensions: "180 × 120 cm",
    description: "Dynamic brushstrokes in deep navy are punctuated by accents of gold leaf, creating a sense of movement and luminosity. The piece explores themes of night, water, and the subconscious.",
    image: "/gallery/artwork-10.jpg",
    category: "Abstract",
    featured: true,
    price: "$18,500"
  },
  {
    id: "11",
    title: "Dune Studies",
    artist: "Ahmed Hassan",
    year: 2023,
    medium: "C-Type Print",
    dimensions: "90 × 135 cm",
    description: "The endless curves of desert dunes are transformed into abstract forms through careful composition and the warm light of twilight. A meditation on landscape and geometry.",
    image: "/gallery/artwork-11.jpg",
    category: "Photography",
    featured: false,
    price: "$3,800"
  },
  {
    id: "12",
    title: "Woven Dreams",
    artist: "Clara Nielsen",
    year: 2024,
    medium: "Natural Fibers",
    dimensions: "200 × 100 cm",
    description: "A large-scale textile work combining traditional weaving techniques with contemporary design. The organic patterns and neutral palette create a calming presence in any space.",
    image: "/gallery/artwork-12.jpg",
    category: "Textile",
    featured: false,
    price: "$6,200"
  }
];

export const artists: Artist[] = [
  {
    id: "1",
    name: "Maya Chen",
    bio: "Maya Chen is a contemporary artist based in San Francisco, known for her abstract works that explore the intersection of organic forms and geometric precision.",
    avatar: "/gallery/artwork-1.jpg",
    country: "USA",
    artworks: 24
  },
  {
    id: "2",
    name: "Henrik Larsson",
    bio: "Henrik Larsson is a landscape photographer from Norway, whose work captures the raw beauty of Scandinavian nature.",
    avatar: "/gallery/artwork-2.jpg",
    country: "Norway",
    artworks: 45
  },
  {
    id: "3",
    name: "Sofia Moreau",
    bio: "Sofia Moreau is a French sculptor working primarily in marble and bronze, creating pieces that challenge perceptions of space and form.",
    avatar: "/gallery/artwork-3.jpg",
    country: "France",
    artworks: 18
  }
];

export const exhibitions: Exhibition[] = [
  {
    id: "1",
    title: "Moments in Time",
    description: "A curated collection of photography exploring the fleeting beauty of everyday moments. Featuring works from emerging and established photographers.",
    startDate: "2024-06-01",
    endDate: "2024-08-15",
    image: "/gallery/artwork-2.jpg",
    featured: true
  },
  {
    id: "2",
    title: "Abstract Horizons",
    description: "Contemporary abstract paintings that push the boundaries of color, form, and texture. An immersive experience of modern artistic expression.",
    startDate: "2024-09-01",
    endDate: "2024-11-30",
    image: "/gallery/artwork-6.jpg",
    featured: true
  },
  {
    id: "3",
    title: "Sculptural Forms",
    description: "Three-dimensional works exploring the relationship between material and meaning. Features installations in marble, bronze, and mixed media.",
    startDate: "2024-12-01",
    endDate: "2025-02-28",
    image: "/gallery/artwork-3.jpg",
    featured: false
  }
];

export const categories = ["All", "Abstract", "Photography", "Sculpture", "Textile"];
