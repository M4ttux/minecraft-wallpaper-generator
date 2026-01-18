# Cómo Agregar Texturas de Minecraft

## Opción 1: Extraer del juego (Recomendado si tienes Minecraft)

### Paso 1: Localizar el archivo JAR
1. Presiona `Win + R` y escribe: `%AppData%\.minecraft\versions`
2. Busca la versión que quieras (por ejemplo: `1.21.1`)
3. Dentro de esa carpeta encontrarás un archivo `.jar` (por ejemplo: `1.21.1.jar`)

### Paso 2: Extraer las texturas
1. Cambia la extensión del archivo de `.jar` a `.zip`
2. Ábrelo con WinRAR, 7-Zip o el explorador de archivos
3. Navega a: `assets\minecraft\textures\block\`
4. Extrae las siguientes texturas a `public\textures\`:

**Texturas necesarias:**
```
stone.png
cobblestone.png
mossy_cobblestone.png
stone_bricks.png
mossy_stone_bricks.png
cracked_stone_bricks.png
chiseled_stone_bricks.png
smooth_stone.png
granite.png
polished_granite.png
diorite.png
polished_diorite.png
andesite.png
polished_andesite.png
deepslate.png
cobbled_deepslate.png
deepslate_bricks.png
deepslate_tiles.png
sandstone_top.png (renombrar a sandstone.png)
smooth_sandstone.png
red_sandstone_top.png (renombrar a red_sandstone.png)
coal_ore.png
iron_ore.png
gold_ore.png
diamond_ore.png
emerald_ore.png
redstone_ore.png
oak_planks.png
spruce_planks.png
birch_planks.png
jungle_planks.png
oak_log.png
dirt.png
grass_block_side.png (renombrar a grass_block.png)
mycelium_side.png (renombrar a mycelium.png)
netherrack.png
nether_bricks.png
red_nether_bricks.png
soul_sand.png
end_stone.png
end_stone_bricks.png
purpur_block.png
obsidian.png
bedrock.png
glowstone.png
```

## Opción 2: Descargar de Internet

### Sitios seguros para descargar texturas de Minecraft:

1. **GitHub - Minecraft Assets**
   - URL: https://github.com/InventivetalentDev/minecraft-assets
   - Navega a: `assets/minecraft/textures/block/`
   - Descarga las texturas individualmente

2. **Minecraft Wiki**
   - URL: https://minecraft.wiki
   - Busca cada bloque y descarga su textura

3. **Resource Pack Default**
   - Descarga un resource pack vanilla/default
   - Extrae las texturas de la carpeta `assets/minecraft/textures/block/`

## Opción 3: Usar el script automático (Requiere Python)

He creado un script que descarga las texturas automáticamente:

```bash
python download_textures.py
```

## Verificación

Una vez que hayas copiado las texturas en `public\textures\`, la aplicación debería cargarlas automáticamente. Si una textura no se encuentra, se mostrará un color placeholder.

### Estructura de carpetas final:
```
Proyecto web/
├── public/
│   └── textures/
│       ├── stone.png
│       ├── cobblestone.png
│       ├── mossy_cobblestone.png
│       └── ... (todas las demás texturas)
├── src/
└── ...
```

## Notas importantes

- Las texturas deben ser PNG de 16x16 píxeles
- Los nombres deben coincidir exactamente con los IDs en `src/data/textures.ts`
- Si cambias la extensión de `.jar` a `.zip`, recuerda cambiarla de vuelta después de extraer
- El proyecto funciona sin las texturas (usa colores placeholder), pero con ellas se ve mucho mejor

## ¿Necesitas ayuda?

Si tienes problemas, puedes:
1. Verificar que los nombres de archivo coincidan
2. Verificar que las imágenes estén en formato PNG
3. Revisar la consola del navegador (F12) para ver errores de carga
