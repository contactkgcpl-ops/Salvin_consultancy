# Salvin Consultants - Tailwind CSS Setup

## Quick Start

This project now uses **Tailwind CSS** via CDN. No build process required to start using it.

### Current Setup (CDN)
- Tailwind CSS is loaded via CDN in `Salvin.html`
- Custom color theme is configured in the Tailwind config
- You can start using Tailwind utility classes immediately

### Usage Example
```html
<!-- Using Tailwind classes -->
<div class="bg-accent text-white p-4 rounded-lg">
  Content here
</div>

<!-- Using custom colors from config -->
<button class="bg-navy hover:bg-navy2 text-white px-6 py-2 rounded">
  Button
</button>
```

## Custom Colors Available
- `navy` - #0a1628
- `navy2` - #0f2044
- `blue` - #1a3a8f
- `blue2` - #2255cc
- `accent` - #0ea5e9 (cyan)
- `accent2` - #38bdf8 (light cyan)
- `cyan` - #06b6d4
- `light` - #f8fafc
- `gray2` - #64748b

## For Production (Optional - Build Setup)

If you want to optimize CSS for production, install dependencies:

```bash
npm install
npm run build
```

This will create an optimized CSS file with only the classes you use.

### Development Mode
```bash
npm run dev
```

This watches your HTML file for changes and rebuilds the CSS automatically.

## Files
- `Salvin.html` - Main HTML file with Tailwind CSS integrated
- `tailwind.config.js` - Tailwind configuration with custom theme
- `package.json` - Project dependencies and build scripts
