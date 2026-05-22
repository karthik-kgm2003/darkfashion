import { defineCollection, z } from 'astro:content';

const productsCollection = defineCollection({
  type: 'data',
  schema: z.object({
    name: z.string().min(1, 'Product name is required'),
    price: z.number().positive('Price must be a positive number'),
    category: z.enum([
      'Tops',
      'Bottoms',
      'Outerwear',
      'Accessories',
      'Footwear',
      'Sets',
    ]),
    description: z.string().min(10, 'Description must be at least 10 characters'),
    image: z.string().url('Image must be a valid URL'),
    inStock: z.boolean(),
    tags: z.array(z.string()).optional().default([]),
    sizes: z.array(z.enum(['XS', 'S', 'M', 'L', 'XL', 'XXL', 'XXXL'])).optional().default([]),
    colors: z.array(z.string()).optional().default([]),
    featured: z.boolean().optional().default(false),
  }),
});

export const collections = {
  products: productsCollection,
};
