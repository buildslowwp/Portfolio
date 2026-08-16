---
title: 'SyntaxShot'
description: 'A beautiful, feature-rich tool for creating stunning code snippets and browser mockups.'
image: '/SyntaxShot-layout.png'
technologies:
  [
    'Next.js',
    'React',
    'TypeScript',
    'Tailwind CSS',
    'Zustand',
    'Radix UI'
  ]
github: 'https://github.com/Pujan Ratanpara/SyntaxShot'
live: 'https://syntaxshot.vercel.app'
timeline: '1 Week'
role: 'Frontend Developer'
team: 'Solo'
status: 'Completed'
featured: true
challenges:
  [
    'Implementing a seamless real-time preview canvas with resizing capabilities',
    'Handling various exporting options with accurate rendering using html-to-image',
    'Managing complex state across numerous control panels using Zustand',
  ]
learnings:
  [
    'Mastered state management for complex creative tools',
    'Deepened understanding of advanced React hooks and performance optimization',
    'Learned how to build highly responsive, customized UI components',
  ]
isPublished: true
---

# SyntaxShot

## Overview

**SyntaxShot** is a beautiful, feature-rich tool designed to create stunning code snippets and browser mockups. It transforms your code and screenshots into shareable, professional-grade images efficiently through a powerful, highly customizable studio interface. Designed for developers and content creators, SyntaxShot is perfect for generating visually appealing assets for presentations, social media, and technical documentation.

![SyntaxShot Demo](public/SyntaxShot-layout.png)

---

## Why I Built This

Creating beautiful, consistent code snippets and application mockups for social media or documentation is often tedious. Existing tools either lack customization capabilities or are too complex for quick edits. SyntaxShot was built to resolve this issue by providing a dedicated studio environment specialized for developers.

- **Frictionless Creation** — Quickly convert plain code or raw screenshots into polished graphics.
- **Deep Customization** — Full command over typography, window styles, padding, backgrounds, and drop shadows.
- **Unified Workflow** — Eliminates the need to juggle multiple screenshot tools and image editors.

---

## What Users Can Do

- **Generate Code Snippets** — Paste code, select from popular languages, and apply beautiful syntax highlighting themes.
- **Create Browser Mockups** — Showcase web projects in pixel-perfect macOS browser windows featuring an editable URL address bar.
- **Design Custom Layouts** — Fine-tune padding, corner radius, drop shadows, and background patterns dynamically.
- **Export with Ease** — Instantly export your composition as a high-quality graphic.

---

## Key Features

### **Studio Interface**
- **Modern Sidebar Layout**: A clean, collapsible left sidebar ensures quick access to granular controls.
- **Responsive Design**: A fully responsive UI that performs seamlessly on both desktop and mobile layouts.
- **Dark/Light Mode**: The entire application interface and the generated windows independently support striking dark and light themes.

### **Code & Image Tools**
- **Syntax Highlighting**: Reliable formatting and multi-language support.
- **Custom Typography**: Pick from developer-favorite fonts like JetBrains Mono, Fira Code, and Geist Mono, with straightforward controls for font size and line numbers.
- **Versatile Backgrounds**: Choose between solid color blocks, vivid gradients, delicate patterns (dots, grid), or transparent foundations.
- **Window Controls**: Bring mockups to life with customizable window bars mimicking macOS (Traffic Lights), Windows styling, or bare-minimum frames.

---

## Tech Stack

### Frontend
- **Framework**: [Next.js 16](https://nextjs.org/) (App Router) — Leveraged for seamless rendering and optimized performance.
- **UI Library**: [React 19](https://react.dev/) — Powers dynamic interactions and high-performance user interfaces.
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/) — For rapid, utility-first styling in combination with Radix UI primitives.
- **State Management**: [Zustand](https://github.com/pmndrs/zustand) — Simplifies state handling across the highly interactive and deeply nested canvas parameters.

### Image Processing
- **Exporting**: Integrating `html-to-image` for high-fidelity DOM-to-image rendering to guarantee what you observe on the canvas translates accurately onto final output formats.

---

## Technical Implementation

### Complex State Management
With dozens of customizable properties—from padding and font size to window styles and background patterns—SyntaxShot leverages Zustand to manage this state efficiently and comprehensively.

```typescript
const theme = usePreferencesStore((state) => state.theme);
const padding = usePreferencesStore((state) => state.padding);
const showBackground = usePreferencesStore((state) => state.showBackground);
// Granular subscriptions reliably prevent unnecessary re-renders of the complex canvas ecosystem
```

### Resizable Canvas Architecture
The core workspace is built using robust resizable wrappers, allowing users to fluidly adjust canvas dimensions while maintaining aspect ratios and high responsiveness, enabling precise control over the exported asset's proportions.

---

## Future Plans

- **Short-term**: Add more syntax themes, languages, and custom watermark configuration options.
- **Medium-term**: Introduce user accounts capable of saving custom styled presets and an integrated gallery to revisit past modifications.
- **Long-term**: Expand features to forge an all-encompassing suite for developer marketing assets, encompassing animated snippets and video exports.

---

## TL;DR

SyntaxShot is a powerful, highly customizable studio application built with Next.js and Tailwind CSS that lets software engineers effortlessly convert raw code and screenshots into visually stunning, shareable mockups.
