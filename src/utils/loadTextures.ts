import type { Texture } from '../data/textures';
import { formatTextureName, categorizeTexture } from '../data/textures';

export async function loadTexturesFromFolder(): Promise<Texture[]> {
  const textures: Texture[] = [];
  
  try {
    // Intentar cargar la lista de texturas desde el servidor
    const response = await fetch('/api/textures');
    if (response.ok) {
      const files = await response.json();
      return files.map((filename: string) => {
        const id = filename.replace('.png', '');
        return {
          id,
          name: formatTextureName(filename),
          category: categorizeTexture(id),
          image: `/textures/${filename}`
        };
      });
    }
  } catch (error) {
    console.log('Using client-side texture detection');
  }
  
  return textures;
}
