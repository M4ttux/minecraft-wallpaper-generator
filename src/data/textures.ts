// Sistema dinámico de texturas de Minecraft
export interface Texture {
  id: string;
  name: string;
  category: string;
  image: string;
}

// Función para convertir snake_case a Title Case
export function formatTextureName(filename: string): string {
  // Remover extensión .png
  const name = filename.replace('.png', '');
  
  // Convertir snake_case a Title Case
  return name
    .split('_')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Función para auto-categorizar basado en el nombre
export function categorizeTexture(id: string): string {
  if (id.includes('ore')) return 'ore';
  if (id.includes('planks') || id.includes('log') || id.includes('wood')) return 'wood';
  if (id.includes('nether') || id.includes('soul') || id.includes('glowstone')) return 'nether';
  if (id.includes('end') || id.includes('purpur')) return 'end';
  if (id.includes('dirt') || id.includes('grass') || id.includes('mycelium') || id.includes('sand')) return 'natural';
  if (id.includes('stone') || id.includes('granite') || id.includes('diorite') || id.includes('andesite') || 
      id.includes('deepslate') || id.includes('obsidian') || id.includes('bedrock') || id.includes('brick')) return 'stone';
  if (id.includes('door') || id.includes('trapdoor') || id.includes('fence') || id.includes('stairs') || id.includes('slab')) return 'building';
  if (id.includes('wool') || id.includes('carpet') || id.includes('concrete') || id.includes('terracotta')) return 'decoration';
  
  return 'other';
}

export const categories = [
  { id: 'all', name: 'All' },
  { id: 'stone', name: 'Stone' },
  { id: 'ore', name: 'Ores' },
  { id: 'wood', name: 'Wood' },
  { id: 'natural', name: 'Natural' },
  { id: 'nether', name: 'Nether' },
  { id: 'end', name: 'End' },
  { id: 'building', name: 'Building' },
  { id: 'decoration', name: 'Decoration' },
  { id: 'other', name: 'Other' },
];
