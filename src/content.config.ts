// src/content.config.ts
import { defineCollection, z } from 'astro:content';
// 1. Importamos el cargador de archivos locales (glob)
import { glob } from 'astro/loaders';

const blogCollection = defineCollection({
  // 2. Le decimos dónde buscar los Markdown y qué patrón seguir
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/blog" }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(), // 'coerce' transforma texto "2026-06-13" en un objeto Date real de JS
    description: z.string(),
    tags: z.array(z.string()),
    lang: z.string()
  }),
});
const animeCollection = defineCollection({
  loader: glob({ pattern: '**/[^_]*.md', base: "./src/content/anime" }),
  // 👇 AQUÍ LA MAGIA: Pasamos "{ image }" a la función del schema
  schema: ({ image }) => z.object({
    title: z.string(),
    tags: z.array(z.string()),
    malsId: z.array(z.number()),
    // 👇 Ahora sí, validamos la imagen local de forma correcta en Astro
    image: image().optional(), 
    lang: z.string(),
  }),
});
export const collections = {
  'blog': blogCollection,
  'anime': animeCollection,
};