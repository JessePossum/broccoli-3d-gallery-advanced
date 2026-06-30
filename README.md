# Broccoli 3D Gallery — Advanced Starter

A lightweight React Three Fiber starter for an immersive 3D gallery homepage.

## Quick start

```bash
npm install
npm run dev
```

## Add your GLB model

Place your Blender-exported model here:

```text
public/models/gallery.glb
```

The app currently tries to load that file. If it is missing, you will see a fallback placeholder room.

## Add artwork images

Place images here:

```text
public/images/
```

Then edit:

```text
src/data/artworks.js
```

Each artwork has:
- `id`
- `title`
- `artist`
- `year`
- `description`
- `image`
- `productUrl`
- `position`
- `rotation`
- `scale`

## Important

This is a prototype starter, not a finished commercial build. Before using for a client:
- optimise/compress GLB files
- compress images
- test mobile performance
- check licences for any downloaded 3D models
- replace placeholder content
