import type { APIRoute } from 'astro';
import fs from 'fs';
import path from 'path';

const imageFolder = path.join(process.cwd(), 'imagenes');

const getContentType = (filename: string) => {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.png') return 'image/png';
  if (ext === '.webp') return 'image/webp';
  if (ext === '.gif') return 'image/gif';
  return 'image/jpeg';
};

export const GET: APIRoute = async ({ url }) => {
  try {
    if (!fs.existsSync(imageFolder)) {
      return new Response(JSON.stringify([]), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const requestedName = url.searchParams.get('name');
    const files = fs
      .readdirSync(imageFolder)
      .filter((file) => /\.(png|jpe?g|webp|gif)$/i.test(file))
      .sort();

    if (!requestedName) {
      return new Response(JSON.stringify(files), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    if (!files.includes(requestedName)) {
      return new Response('Not found', { status: 404 });
    }

    const imagePath = path.join(imageFolder, requestedName);
    const imageBuffer = fs.readFileSync(imagePath);

    return new Response(imageBuffer, {
      status: 200,
      headers: {
        'Content-Type': getContentType(requestedName),
        'Cache-Control': 'public, max-age=86400',
      },
    });
  } catch (error) {
    console.error('Error reading profile images:', error);
    return new Response(JSON.stringify([]), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  }
};
