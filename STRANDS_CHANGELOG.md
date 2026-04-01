# STRANDS // Avatar Studio — Changelog

**Fork of:** [m3-org/CharacterStudio](https://github.com/M3-org/CharacterStudio) v0.5.0
**Forked by:** Sean Uddin (Project Strands)
**Date:** 2026-03-25
**Purpose:** Stripped-back avatar creation studio for the Strands demo, replacing Avaturn. Characters created here export as GLB and are used across all Strands mini-games (Signal Training FPS, Holo-Lock, 2042, Circuit Sync).

---

## Summary of Changes from Original

### 1. Full Visual Rebrand — Strands Colour Palette & Fonts

**31 CSS/SCSS module files + 3 other files modified.**

The entire visual identity was replaced from the original m3-org green/gold/dark-blue theme to the Strands cyberpunk aesthetic.

**Colour Mapping:**
- `#5eb086`, `#63af88` (green accent) → `#00C2FF` (Strands cyan)
- `#478666` (muted green) → `#0099CC` (muted cyan)
- `#34634b` (dark green) → `#005577` (dark cyan)
- `#284b39` (darker green border) → `#003344`
- `#111f17` (selection bg) → `#0A1520`
- `#FFC000`, `#fdc503` (gold accent) → `#F000B8` (Strands pink)
- `#1e2530` (panel bg) → `#0A0B0D` (Strands dark)
- `#3b434f`, `#38404E`, `#434B58` (borders) → `rgba(0, 194, 255, 0.15-0.2)`
- `#EAF4EF` (mint white) → `#E0F0FF` (cyan-tinted white)
- `#009564` → `#006EB8`
- `rgb(0, 149, 100)` fallbacks → `rgb(0, 110, 194)`
- Green gradients → Cyan gradients throughout

**Font Mapping:**
- `"TTSC-Bold"` → `"Orbitron", monospace` (headings/labels)
- `"TTSC-Regular"` → `"Rajdhani", sans-serif` (body text)
- All other TTSC variants → appropriate Rajdhani or Orbitron weight

**Key Files:**
- `public/style.css` — Complete rewrite. Removed all 10 `@font-face` declarations for TT Squares Condensed (fonts now loaded from Google Fonts CDN). Added Strands theme with Orbitron/Rajdhani, cyan scrollbar gradients, dark background.
- `index.html` — Added Google Fonts preconnect + stylesheet for Orbitron and Rajdhani. Title changed to "STRANDS // Avatar Studio".
- `src/App.jsx` — generalTitle changed to "STRANDS // Avatar Studio".

**All 31 CSS module files had systematic replacements applied.**

---

### 2. OTG-Style UI Redesign (Appearance Screen)

**Files rewritten:** `src/pages/Appearance.jsx`, `src/pages/Appearance.module.css`

The original multi-panel layout (left categories, center options grid, right tools, bottom animation controls) was replaced with a consolidated Off the Grid-style single right-panel design.

**New Layout:**
- **Left ~60%:** Clean 3D character viewport (full-screen canvas, no overlays)
- **Right 380px:** Single frosted-glass dark panel containing all controls

**Panel Structure:**
- Header: "CUSTOMIZE" in Orbitron with cyan glow
- Tab bar: `CHASSIS | IDENTITY` tabs
  - CHASSIS maps to: body, chest, legs, feet, outer traits
  - IDENTITY maps to: head, eyes, accessories traits
- Stacked category pill buttons (full-width, with icon + name + count)
- Inline trait thumbnail grid (4-column, appears below selected category)
- Bottom action bar: Back / Randomize (pink) / Export

**Removed from UI:**
- Upload button
- ChromePicker colour picker
- Decal/sticker system
- Blend shape sub-view
- RightPanel tools (LoRA, sprites, thumbnails, emotions)
- BottomDisplayMenu animation controls
- JsonAttributes NFT loader

---

### 3. Blockchain/Crypto Code Stubbed

**All blockchain functionality disabled for demo.** Original implementations preserved in git history. Stubbed files contain comments noting they're ready for TON integration later.

**Stubbed Library Files (exports replaced with no-op functions):**
- `src/library/mint-utils.js` — `connectWallet()`, `mintAsset()`, `fetchOwnedNFTs()`, `ownsCollection()`, `buySolanaPurchasableAssets()`, `getTokenPrice()`, `fetchSolanaPurchasedAssets()` all return null/empty
- `src/library/solanaManager.js` — `SolanaManager` class returns empty arrays
- `src/library/walletCollections.js` — `WalletCollections` class returns empty arrays

**Rewritten to Remove Blockchain Imports:**
- `src/Main.jsx` — `Web3ReactProvider` wrapper removed (was wrapping entire app)
- `src/pages/Load.jsx` — `ethers`, `@web3-react/core`, `@web3-react/injected-connector` imports removed

**Untouched (still functional via stubbed imports):**
- `src/pages/Mint.jsx` — imports stubbed `mintAsset`
- `src/pages/Wallet.jsx` — imports stubbed `connectWallet`
- `src/pages/Landing.jsx` — imports stubbed `connectWallet`
- `src/library/characterManager.js` — imports stubbed `WalletCollections` and `buySolanaPurchasableAssets`
- `src/context/AccountContext.jsx` — pure React state, no blockchain imports

**package.json:**
- 13 blockchain dependencies moved to `_blockchain_deps_TODO_TON` key (preserved but not installed):
  - `@ethersproject/providers`, `@metaplex-foundation/js`, `@metaplex-foundation/mpl-candy-machine`, `@metaplex-foundation/umi`, `@metaplex-foundation/umi-bundle-defaults`, `@metaplex-foundation/umi-serializers`, `@solana/spl-token`, `@solana/web3.js`, `@web3-react/core`, `@web3-react/injected-connector`, `@web3-react/network-connector`, `bs58`, `ethers`
- Metaplex/aptos overrides removed

---

### 4. Additional Colour Fixes

- `src/pages/Create.module.css` — `#fcc000` (gold hover) → `#00C2FF` (cyan)
- `src/pages/View.module.css` — `rgb(0, 149, 100)` fallbacks → `rgb(0, 110, 194)`
- `src/pages/Mint.module.scss` — same rgb fallback fix
- `src/components/MenuTitle.module.css` — same rgb fallback fix
- `src/components/BottomDisplayMenu.module.css` — same rgb fallback fix

---

## Files NOT Modified (original m3-org code intact)

- All files in `src/library/` except the 3 stubbed blockchain files
- `src/library/characterManager.js` — unchanged (imports resolve to stubs)
- `src/library/CharacterManifestData.js` — unchanged
- `src/library/VRMExporter.js`, `vrmManager.js`, `animationManager.js`, etc. — unchanged
- All context files except AccountContext (which was already clean)
- Three.js rendering pipeline — unchanged
- VRM loading/export pipeline — unchanged
- Asset management system — unchanged

---

## To Restore Blockchain

1. Move deps from `_blockchain_deps_TODO_TON` back into `dependencies` in package.json
2. Restore `src/library/mint-utils.js` from git history
3. Restore `src/library/solanaManager.js` from git history
4. Restore `src/library/walletCollections.js` from git history
5. Restore `src/Main.jsx` (re-add Web3ReactProvider wrapper)
6. Restore `src/pages/Load.jsx` (re-add ethers imports)
7. Run `npm install`

---

## To Run

```bash
npm install
npx vite --host
```

Open `http://localhost:5173/`

Requires character assets in `public/` directory. Run `npm run get-assets` for default m3-org loot-assets, or point to custom Strands character-assets via manifest.
