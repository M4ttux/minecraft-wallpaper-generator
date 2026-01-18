# Minecraft Wallpaper Generator

Una aplicación web para generar wallpapers personalizados con texturas de Minecraft.

## Características

- 🎨 Selección múltiple de texturas de Minecraft
- 🔍 Búsqueda y filtrado por categorías
- 📐 Múltiples resoluciones (480p hasta 8K)
- 🎚️ Control de escala de texturas (100% - 1000%)
- 💾 Exportación en PNG, JPG o WEBP
- 🎲 Distribución aleatoria de texturas seleccionadas
- ⚡ Interfaz moderna con TailwindCSS

## Tecnologías

- **Astro** - Framework web moderno
- **TailwindCSS** - Estilos utilitarios
- **TypeScript** - Tipado estático
- **Canvas API** - Generación de imágenes

## Instalación

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Abre tu navegador en `http://localhost:4321`

## Uso

1. **Selecciona texturas**: Haz clic en una o más texturas del panel izquierdo
2. **Ajusta la escala**: Usa el slider para cambiar el tamaño de las texturas
3. **Elige la resolución**: Selecciona desde 480p hasta 8K
4. **Selecciona el formato**: PNG (mejor calidad), JPG o WEBP
5. **Descarga**: Haz clic en "Download" para guardar tu wallpaper

### Características adicionales

- **Búsqueda**: Filtra texturas por nombre
- **Categorías**: Filtra por tipo (Stone, Ores, Wood, etc.)
- **Preview en tiempo real**: Ve los cambios instantáneamente

## Scripts disponibles

- `npm run dev` - Servidor de desarrollo
- `npm run build` - Construir para producción
- `npm run preview` - Vista previa de la build

## Estructura del proyecto

```
/
├── public/
├── src/
│   ├── components/
│   │   └── WallpaperGenerator.astro
│   ├── data/
│   │   └── textures.ts
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
├── tailwind.config.mjs
└── tsconfig.json
```

## Personalización

### Agregar nuevas texturas

Edita `src/data/textures.ts` y agrega nuevas texturas al array:

```typescript
{
  id: 'nueva_textura',
  name: 'Nueva Textura',
  category: 'stone',
  image: '/textures/nueva_textura.png'
}
```

### Agregar nuevas categorías

Agrega categorías en el mismo archivo:

```typescript
{ id: 'nueva_cat', name: 'Nueva Categoría' }
```

## Notas

- Las texturas actualmente usan colores placeholder
- Para usar texturas reales, agrega las imágenes en la carpeta `public/textures/`
- Las texturas de Minecraft tienen 16x16 píxeles base
- La escala 600% significa que cada textura se mostrará a 96x96 píxeles

## Licencia

MIT
