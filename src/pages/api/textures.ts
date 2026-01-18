import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

export const GET: APIRoute = async () => {
  try {
    const texturesPath = path.join(process.cwd(), 'public', 'textures');
    
    // Verificar si existe la carpeta
    if (!fs.existsSync(texturesPath)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: {
          'Content-Type': 'application/json'
        }
      });
    }
    
    // Leer archivos .png de la carpeta
    const files = fs.readdirSync(texturesPath)
      .filter(file => file.endsWith('.png'))
      .sort();
    
    return new Response(JSON.stringify(files), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (error) {
    console.error('Error reading textures:', error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: {
        'Content-Type': 'application/json'
      }
    });
  }
};
