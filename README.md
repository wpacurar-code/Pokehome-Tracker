# Pokehome Tracker

A lightweight, browser-based completion tracker for your Pokémon HOME Pokédex. Click a Pokémon to mark it as registered, watch your progress climb toward 1395, and save your progress locally in your browser.

**Live site:** https://wpacurar-code.github.io/Pokehome-Tracker/

## Features

- **Box-by-box layout**: Pokémon are grouped by region and by HOME box (30 per box), mirroring the in-game order.
- **All nine regions**: Kanto, Johto, Hoenn, Sinnoh, Unova, Kalos, Alola, Galar and Paldea.
- **Click to register**: click a sprite to toggle it as registered or unregistered.
- **Progress counter**: the header shows `Dex Progress: X / 1395`.
- **Search**: type a Pokémon name (e.g. `pikachu`) and press Enter or click Search to scroll to it and highlight it.
- **Jump to region**: a dropdown in the header skips straight to any region.
- **Save**: progress is stored in your browser's `localStorage`, so it persists between visits.

> Saved progress is tied to your browser and device. Clearing site data will erase it.

## Tech

Vanilla HTML, CSS and JavaScript, plus [Motion](https://motion.dev) for the search highlight animation.
