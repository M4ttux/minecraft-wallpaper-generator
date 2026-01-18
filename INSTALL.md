# Guía de Instalación - Minecraft Wallpaper Generator

## Prerequisitos

Antes de comenzar, necesitas instalar Node.js en tu sistema:

### Instalar Node.js

1. Ve a [https://nodejs.org/](https://nodejs.org/)
2. Descarga la versión LTS (recomendada)
3. Ejecuta el instalador y sigue las instrucciones
4. Reinicia VS Code después de la instalación

Para verificar que Node.js está instalado correctamente, abre una terminal y ejecuta:
```bash
node --version
npm --version
```

## Instalación del Proyecto

Una vez que Node.js esté instalado:

1. Abre una terminal en la carpeta del proyecto
2. Ejecuta:
   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:
   ```bash
   npm run dev
   ```

4. Abre tu navegador en la URL que se muestre (generalmente http://localhost:4321)

## Si tienes problemas

### Error: "npm no se reconoce"
- Asegúrate de haber instalado Node.js
- Reinicia VS Code completamente
- Reinicia tu computadora si es necesario

### Puertos ocupados
Si el puerto 4321 está ocupado, Astro automáticamente usará otro puerto disponible.

## Desarrollo

El servidor de desarrollo tiene hot-reload automático. Cualquier cambio que hagas en los archivos se reflejará instantáneamente en el navegador.

## Construcción para producción

Para crear una versión optimizada para producción:

```bash
npm run build
```

Los archivos se generarán en la carpeta `dist/`.

Para previsualizar la build de producción:

```bash
npm run preview
```
