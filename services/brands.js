// add mock data for the brands
const brands = [
  {
    id: 'grab-1',
    name: 'Grab',
    image: '/brands/grab.svg',
    status: 'active',
    featured_details: { country: 'Singapore', products: 250 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'amazon-1',
    name: 'Amazon',
    image: '/brands/amazon.svg',
    status: 'inactive',
    featured_details: { country: 'USA', products: 400 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'esprit-1',
    name: 'Esprit',
    image: '/brands/esprit.svg',
    status: 'active',
    featured_details: { country: 'China', products: 250 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'grab-2',
    name: 'Grab',
    image: '/brands/grab.svg',
    status: 'active',
    featured_details: { country: 'Singapore', products: 250 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'lazada-1',
    name: 'Lazada',
    image: '/brands/lazada.svg',
    status: 'active',
    featured_details: { country: 'Singapore', products: 300 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'subway-1',
    name: 'Subway',
    image: '/brands/subway.svg',
    status: 'inactive',
    featured_details: { country: 'USA', products: 100 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'kaspersky-1',
    name: 'Kaspersky Lab',
    image: '/brands/kaspersky.svg',
    status: 'active',
    featured_details: { country: 'Russia', products: 30 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  },
  {
    id: 'lazada-2',
    name: 'Lazada',
    image: '/brands/lazada.svg',
    status: 'active',
    featured_details: { country: 'Singapore', products: 300 },
    other_details: { ID: 123456, company: 'XYZ Inc.', category: 'Gifts', phone: '+123 4455 6677 8899' },
    keywords: [ 'keyword' ],
    socialNetworks: [
        {
            name: 'Website',
            icon: '◎'
        },
        {
            name: 'Facebook',
            icon: 'f'
        },
        {
            name: 'Instagram',
            icon: '◎'
        },
        {
            name: 'Twitter',
            icon: '♥'
        }
    ]
  }
]

export function getBrands() {
  return brands
}

export function getBrandById(id) {
  return brands.find(
    brand => String(brand.id) === String(id)
  )
}

/*export function getAllBrands() {
  if (typeof fetch === 'function') {
    return fetch('/api/brands')
      .then(res => (res.ok ? res.json() : exampleBrands))
      .catch(() => exampleBrands)
  }
  return Promise.resolve(exampleBrands)
}*/

/*export function getBrand(id) {
  const findLocal = () => exampleBrands.find(b => String(b.id) === String(id))
  if (typeof fetch === 'function') {
    return fetch(`/api/brands/${id}`)
      .then(res => (res.ok ? res.json() : findLocal()))
      .catch(() => findLocal())
  }
  return Promise.resolve(findLocal())
}*/

/*export function getBrandById(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const brand = exampleBrands.find(item => item.id === id)

      if (!brand) {
        reject(new Error('Brand not found'))
        return
      }

      resolve(brand)
    }, 300)
  })
}

export default { getAllBrands, getBrandById }*/
