// lib/data.ts

export const products = [
  // --- FASHION SECTION (1-15) ---
  {
    id: 1,
    name: "Velvet Evening Gown",
    description: "Italian silk velvet evening gown with a sophisticated draped silhouette.",
    category: "Fashion",
    details: ["Silk Velvet", "Hand-stitched", "Dry Clean"],
    variants: [
      {
        id: 101,
        colorName: "Burgundy Red",
        colorCode: "#800020",
        images: ["https://images.unsplash.com/photo-1566174053879-31528523f8ae?q=80&w=1924"],
        sizes: [{ label: "S", weight: "45-55 kg", price: 12500 }, { label: "M", weight: "55-65 kg", price: 12500 }]
      }
    ]
  },
  {
    id: 2,
    name: "Linen Summer Set",
    description: "Tailored linen blazer and trousers for summer elegance.",
    category: "Fashion",
    details: ["100% Linen", "Breathable"],
    variants: [
      {
        id: 102,
        colorName: "Sage Green",
        colorCode: "#B2AC88",
        images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887"],
        sizes: [{ label: "M", weight: "50-65 kg", price: 4500 }]
      }
    ]
  },
  {
    id: 3,
    name: "Satin Wrap Blouse",
    description: "Sophisticated satin blouse with wrap detail.",
    category: "Fashion",
    details: ["Satin Silk", "Adjustable Waist"],
    variants: [
      {
        id: 103,
        colorName: "Champagne",
        colorCode: "#F7E7CE",
        images: ["https://images.unsplash.com/photo-1624273527250-e85c8a6f47af?q=80&w=1935"],
        sizes: [{ label: "S", weight: "45-55 kg", price: 1850 }]
      }
    ]
  },
  {
    id: 4,
    name: "Floral Silk Midi Dress",
    description: "Delicate floral patterns on premium mulberry silk.",
    category: "Fashion",
    details: ["100% Silk", "Lined", "Floral Print"],
    variants: [
      {
        id: 104,
        colorName: "Rose Petal",
        colorCode: "#F3CFC6",
        images: ["https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?q=80&w=1946"],
        sizes: [{ label: "S", weight: "45-55 kg", price: 3200 }, { label: "M", weight: "55-65 kg", price: 3200 }]
      }
    ]
  },
  {
    id: 5,
    name: "Cashmere Oversized Sweater",
    description: "Luxuriously soft Mongolian cashmere for chilly evenings.",
    category: "Fashion",
    details: ["100% Cashmere", "Oversized Fit"],
    variants: [
      {
        id: 105,
        colorName: "Oatmeal",
        colorCode: "#D9D0C1",
        images: ["https://images.unsplash.com/photo-1574201635302-388dd92a4c3f?q=80&w=1964"],
        sizes: [{ label: "S", weight: "50-60 kg", price: 4800 }, { label: "L", weight: "70-85 kg", price: 5100 }]
      }
    ]
  },
  {
    id: 6,
    name: "High-Waist Wool Trousers",
    description: "Classic tailoring with a modern high-waist silhouette.",
    category: "Fashion",
    details: ["Wool Blend", "Tailored Fit"],
    variants: [
      {
        id: 106,
        colorName: "Charcoal",
        colorCode: "#36454F",
        images: ["https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?q=80&w=1887"],
        sizes: [{ label: "M", weight: "55-65 kg", price: 2900 }]
      }
    ]
  },
  {
    id: 7,
    name: "Tweed Chanel-Style Jacket",
    description: "Iconic tweed jacket with pearl button details.",
    category: "Fashion",
    details: ["Textured Tweed", "Pearl Buttons"],
    variants: [
      {
        id: 107,
        colorName: "Ivory Mix",
        colorCode: "#FFFFF0",
        images: ["https://images.unsplash.com/photo-1548624149-f7b2e8886759?q=80&w=1887"],
        sizes: [{ label: "S", weight: "45-55 kg", price: 6500 }]
      }
    ]
  },
  {
    id: 8,
    name: "Pleated Maxi Skirt",
    description: "Flowing sunray pleats with a subtle metallic shimmer.",
    category: "Fashion",
    details: ["Pleated Fabric", "Elastic Waist"],
    variants: [
      {
        id: 108,
        colorName: "Silver Mist",
        colorCode: "#C0C0C0",
        images: ["https://images.unsplash.com/photo-1583337130417-3346a1be7dee?q=80&w=1964"],
        sizes: [{ label: "M", weight: "50-70 kg", price: 2100 }]
      }
    ]
  },
  {
    id: 9,
    name: "Embroidered Kaftan",
    description: "Traditional silhouette with modern gold-thread embroidery.",
    category: "Fashion",
    details: ["Cotton-Silk Blend", "Hand Embroidery"],
    variants: [
      {
        id: 109,
        colorName: "Emerald Gold",
        colorCode: "#046307",
        images: ["https://images.unsplash.com/photo-1585060544812-6b459032535d?q=80&w=2070"],
        sizes: [{ label: "Free Size", weight: "All", price: 5500 }]
      }
    ]
  },
  {
    id: 10,
    name: "Classic White Poplin Shirt",
    description: "The essential crisp white shirt with structured cuffs.",
    category: "Fashion",
    details: ["100% Crisp Cotton", "Regular Fit"],
    variants: [
      {
        id: 110,
        colorName: "Pure White",
        colorCode: "#FFFFFF",
        images: ["https://images.unsplash.com/photo-1598033129183-c4f50c7176c8?q=80&w=1936"],
        sizes: [{ label: "S", weight: "45-55 kg", price: 1400 }, { label: "XL", weight: "75-90 kg", price: 1500 }]
      }
    ]
  },

  // --- BEAUTY SECTION (16-25) ---
  {
    id: 16,
    name: "Rose Glow Face Oil",
    description: "Infused with organic rose petals for ultimate skin radiance.",
    category: "Beauty",
    details: ["Cold Pressed", "Vegan", "Organic"],
    variants: [
      {
        id: 111,
        colorName: "Rose",
        colorCode: "#FF007F",
        images: ["https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&w=1887"],
        sizes: [{ label: "30ml", weight: "Small", price: 850 }]
      }
    ]
  },
  {
    id: 17,
    name: "Oud & Sandalwood Perfume",
    description: "Signature MemoElle scent. Deep, woody, and alluring.",
    category: "Beauty",
    details: ["Extrait de Parfum", "Long Lasting"],
    variants: [
      {
        id: 112,
        colorName: "Amber",
        colorCode: "#FFBF00",
        images: ["https://images.unsplash.com/photo-1543473211-1273247505e4?q=80&w=2070"],
        sizes: [{ label: "100ml", weight: "Large", price: 3200 }]
      }
    ]
  },
  {
    id: 18,
    name: "Mulberry Silk Hair Wraps",
    description: "Prevents hair breakage while you sleep.",
    category: "Beauty",
    details: ["100% Silk", "Set of 3"],
    variants: [
      {
          id: 113,
        colorName: "Mixed Nudes",
        colorCode: "#D2B48C",
        images: ["https://images.unsplash.com/photo-1616432043562-3671ea2e5242?q=80&w=1887"],
        sizes: [{ label: "One Size", weight: "All", price: 450 }]
      }
    ]
  },
  {
    id: 19,
    name: "Jade Facial Roller Set",
    description: "Natural jade roller and Gua Sha for lymphatic drainage.",
    category: "Beauty",
    details: ["Genuine Jade", "Dual Sided"],
    variants: [
      {
          id: 114,
        colorName: "Jade Green",
        colorCode: "#00A86B",
        images: ["https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&w=1887"],
        sizes: [{ label: "Set", weight: "Boxed", price: 750 }]
      }
    ]
  },
  {
    id: 20,
    name: "Botanical Cleansing Balm",
    description: "Melts away makeup while nourishing the skin.",
    category: "Beauty",
    details: ["Essential Oils", "Shea Butter"],
    variants: [
      {
          id: 115,
        colorName: "Balm",
        colorCode: "#FFFFE0",
        images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?q=80&w=1887"],
        sizes: [{ label: "100g", weight: "Standard", price: 600 }]
      }
    ]
  },

  // --- HOME COLLECTION (26-43) ---
  {
    id: 26,
    name: "Scented Soy Candle",
    description: "Vanilla & Bergamot blend for a relaxing atmosphere.",
    category: "Home",
    details: ["Soy Wax", "60h Burn Time"],
    variants: [
      {
          id: 116,
        colorName: "Cream",
        colorCode: "#FFFDD0",
        images: ["https://images.unsplash.com/photo-1603006905003-be475563bc59?q=80&w=1887"],
        sizes: [{ label: "Standard", weight: "Large", price: 550 }]
      }
    ]
  },
  {
    id: 27,
    name: "Gold-Rimmed Glassware",
    description: "Elegant set of 4 glasses with hand-painted gold rims.",
    category: "Home",
    details: ["Handmade Glass", "Gold Leaf"],
    variants: [
      {
          id: 117,
        colorName: "Gold/Clear",
        colorCode: "#D4AF37",
        images: ["https://images.unsplash.com/photo-1516594915697-87eb3b1c14ea?q=80&w=2070"],
        sizes: [{ label: "Set of 4", weight: "350ml", price: 1200 }]
      }
    ]
  },
  {
    id: 28,
    name: "Velvet Throw Pillow",
    description: "Soft velvet cushion to add texture to your sofa.",
    category: "Home",
    details: ["Velvet Cover", "Feather Filling"],
    variants: [
      {
        id: 118,
        colorName: "Muted Rose",
        colorCode: "#B76E79",
        images: ["https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?q=80&w=1937"],
        sizes: [{ label: "Square", weight: "50x50cm", price: 850 }]
      }
    ]
  },
  {
    id: 29,
    name: "Marble Jewelry Tray",
    description: "Hand-carved Carrara marble for your nightstand.",
    category: "Home",
    details: ["Natural Marble", "Polished Finish"],
    variants: [
      {
        id: 119,
        colorName: "Carrara White",
        colorCode: "#F0F0F0",
        images: ["https://images.unsplash.com/photo-1544457070-4cd773b4d71e?q=80&w=1887"],
        sizes: [{ label: "Medium", weight: "Tray", price: 950 }]
      }
    ]
  },
  {
    id: 30,
    name: "Artisan Ceramic Vase",
    description: "Textured ceramic vase with an organic silhouette.",
    category: "Home",
    details: ["Hand-thrown Ceramic", "Matte Finish"],
    variants: [
      {
          id: 120,
        colorName: "Terracotta",
        colorCode: "#E2725B",
        images: ["https://images.unsplash.com/photo-1581783062773-99455a73a307?q=80&w=1887"],
        sizes: [{ label: "Tall", weight: "30cm", price: 1100 }]
      }
    ]
  },
  {
    id: 31,
    name: "Luxury Egyptian Cotton Towels",
    description: "Extra thick and absorbent 800 GSM towels.",
    category: "Home",
    details: ["100% Giza Cotton", "Set of 2"],
    variants: [
      {
          id: 121,
        colorName: "Cloud White",
        colorCode: "#FFFFFF",
        images: ["https://images.unsplash.com/photo-1583943483480-519c313a42af?q=80&w=1887"],
        sizes: [{ label: "Large", weight: "Bath", price: 1600 }]
      }
    ]
  },
  {
    id: 32,
    name: "Woven Rattan Coasters",
    description: "Hand-woven natural rattan set to protect your surfaces.",
    category: "Home",
    details: ["Natural Rattan", "Handmade"],
    variants: [
      {
        id: 122,
        colorName: "Natural",
        colorCode: "#F5DEB3",
        images: ["https://images.unsplash.com/photo-1616046229478-9901c5536a45?q=80&w=1887"],
        sizes: [{ label: "Set of 6", weight: "Round", price: 350 }]
      }
    ]
  },
  {
    id: 33,
    name: "Brass Photo Frame",
    description: "Vintage-inspired brass frame for your cherished memories.",
    category: "Home",
    details: ["Solid Brass", "Glass Front"],
    variants: [
      {
          id: 123,
        colorName: "Aged Brass",
        colorCode: "#B8860B",
        images: ["https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?q=80&w=1887"],
        sizes: [{ label: "5x7", weight: "Standard", price: 650 }]
      }
    ]
  }
];