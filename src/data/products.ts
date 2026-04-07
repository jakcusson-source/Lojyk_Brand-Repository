export interface Product {
  id: number
  name: string
  image: string
  description: string
  shortDescription: string
  price: number
  category: string
}

const products: Array<Product> = [
  {
    id: 1,
    name: 'VOID HOODIE',
    image: '/placeholder.png',
    description:
      'Constructed from 400gsm heavyweight French terry. Dropped shoulders, oversized silhouette, raw-edge kangaroo pocket. Garment-dyed in a single-bath process for a lived-in, irregular finish. Ribbed cuffs and hem. LOJYK woven label at left seam.',
    shortDescription: 'Heavyweight French terry. Oversized fit. Garment-dyed.',
    price: 185,
    category: 'Tops',
  },
  {
    id: 2,
    name: 'CIPHER TEE',
    image: '/placeholder.png',
    description:
      'Single-stitch construction. 220gsm combed ring-spun cotton. Boxy, elongated cut with dropped shoulders. Screen-printed LOJYK logotype at chest. Double-needle hem. Designed to fade and soften with wear.',
    shortDescription: 'Boxy cut. 220gsm cotton. Screen-printed logo.',
    price: 85,
    category: 'Tops',
  },
  {
    id: 3,
    name: 'FRAGMENT CARGO',
    image: '/placeholder.png',
    description:
      'Technical ripstop nylon. Relaxed taper through the leg with articulated knee seams for unrestricted movement. Six utility pockets including hidden zip thigh pocket. Adjustable ankle cinch. Laser-cut LOJYK tab at waistband.',
    shortDescription: 'Ripstop nylon. Utility pockets. Relaxed taper.',
    price: 225,
    category: 'Bottoms',
  },
  {
    id: 4,
    name: 'SECTOR JACKET',
    image: '/placeholder.png',
    description:
      'Shell-construction outerwear in waxed cotton canvas. Oversized box fit with interior storm flap. Concealed snap placket. Dual chest pockets, interior media pocket. Tonal LOJYK embroidery at back yoke. Unlined for a clean silhouette.',
    shortDescription: 'Waxed canvas. Box fit. Tonal embroidery.',
    price: 350,
    category: 'Outerwear',
  },
  {
    id: 5,
    name: 'SIGNAL SHORTS',
    image: '/placeholder.png',
    description:
      '8" inseam. Heavyweight cotton twill. Relaxed through the seat and thigh. Exposed seam details. Back patch pocket with LOJYK wordmark stamp. Drawstring waist with branded hardware.',
    shortDescription: 'Cotton twill. 8" inseam. Relaxed fit.',
    price: 115,
    category: 'Bottoms',
  },
  {
    id: 6,
    name: 'NULL CAP',
    image: '/placeholder.png',
    description:
      'Six-panel structured crown. Wool-blend front panels, mesh back. Pre-curved brim. Embroidered LOJYK arc logo at front. Adjustable snapback closure. One size.',
    shortDescription: 'Wool-blend. Structured crown. Snapback.',
    price: 65,
    category: 'Accessories',
  },
]

export default products
