# STRANDS // Avatar Studio

> **Fork of [m3-org/CharacterStudio](https://github.com/M3-org/CharacterStudio) v0.5.0** — customised for the Strands demo.
> See [STRANDS_CHANGELOG.md](./STRANDS_CHANGELOG.md) for a detailed record of every modification from the original.

A stripped-back, Strands-branded 3D avatar creator. Characters built here export as GLB/VRM and are used across all Strands mini-games (Signal Training, Holo-Lock, 2042, Circuit Sync). Replaces Avaturn in the DemoOS.

## What Changed

- Full visual rebrand to Strands palette (cyan `#00C2FF`, pink `#F000B8`, dark `#0A0B0D`) with Orbitron + Rajdhani fonts
- Appearance screen rebuilt as OTG-style single right-panel (CHASSIS/IDENTITY tabs, stacked category buttons, inline trait grid)
- All blockchain/crypto code stubbed (Solana, Ethereum, Metaplex, Web3React) — deps preserved in `_blockchain_deps_TODO_TON` for future TON integration
- Simplified for demo: removed upload, colour picker, decals, blend shapes, animation controls, minting UI

## Installation

```bash
npm install
npx vite --host
```

Open `http://localhost:5173/`

Character assets go in `public/`. Run `npm run get-assets` for default m3-org loot-assets, or use custom Strands character-assets.

---

## Original README

*The following is from the upstream m3-org/CharacterStudio repo.*

# Character Studio

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![Discord](https://img.shields.io/discord/770382203782692945?label=Discord&logo=Discord)](https://discord.gg/8zBvTMb8SU)
[![Twitter Follow](https://img.shields.io/twitter/follow/m3org)](https://twitter.com/m3org)

An open, collaborative, and evolving 3D avatar studio for making glTF / VRM avatars with.

![image](https://github.com/M3-org/CharacterStudio/assets/32600939/fad3002f-78cd-4cd2-8eae-0c1663a86d25)

:star: **DOCS:** https://m3-org.github.io/characterstudio-docs/

### Original Installation

```bash
git clone https://github.com/M3-org/CharacterStudio
cd CharacterStudio
npm install
npm run dev
npm run get-assets
```

---

## Load Your Assets

We separate the program from the asset packs. We have some sample assets here: https://github.com/memelotsqui/character-assets
![Screenshot from 2023-10-17 17-10-38](https://github.com/M3-org/CharacterStudio/assets/32600939/23768dc3-b834-4f70-a986-a4a0141c4014)

Refer to docs to add your own 3d models

## Features
- **Personalized Creation**: Point and click to build 3D characters
    - Drag and drop local 3D files (VRM) and textures
    - Color picker for adding a personal touch
    - Export creatoins as glb and VRM + screenshots
- **Dynamic animation**: Variety of programmable animations
- **Effortless Optimization** One-click VRM optimizer
    - Merge skinned meshes + Texture atlassing
        - Can reduce avatars to a single draw call!
- **Batch Export**: Randomize or adhere to metadata schemas
- **Transparent Development**: Open-source MIT licensed codebase
- **Robust Rendering**: Using Three.js, WebGL, and React
    - Recently refactored to NOT need React as a dependency
    - Logic is now all inside `CharacterManager` class
- **Face auto culling**: Automatically cull undereneath faces with custom layer system

---

## Special Thanks

Shoutout to [original repo by Webaverse](https://github.com/webaverse/characterstudio)

Thanks m00n, memelotsqui, boomboxhead, jin, and many others for contributing
