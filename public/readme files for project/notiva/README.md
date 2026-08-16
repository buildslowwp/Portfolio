---
# ============================================================
# REQUIRED FIELDS — fill every field below
# ============================================================

title: 'Notiva'
description: 'Modern, collaborative note-taking with real-time editing and beautiful markdown support.'

# Path to your project thumbnail (place image in /public/project/)
image: '/project/notiva.png'

# Tech stack — list every major technology used
technologies:
  [
    'Next.js',
    'TypeScript',
    'Tailwind CSS',
    'PostgreSQL',
    'Drizzle ORM',
    'Tiptap',
    'Better Auth',
  ]

# Links — remove any that don't apply
github: 'https://github.com/Pujan Ratanpara/notiva'
live: 'https://notiva-olive.vercel.app'

# ============================================================
# PROJECT METADATA
# ============================================================

# How long it took: e.g. '2 Days', '1 Month', '3 Hours', '2024' (for hackathons)
timeline: '1 Month'

# Your role on the project
role: 'Full Stack'

# Team size/type
team: 'Solo'

# Current state of the project
status: 'Active'

# Show this project in the featured section on your portfolio?
featured: true

# Main difficulties you faced — be specific, these show up as tags
challenges:
  [
    'Building real-time collaboration with WebSockets',
    'Managing rich text editor state with Tiptap',
    'Implementing secure authentication with Better Auth',
  ]

# What you gained — be specific, these show up as tags
learnings:
  [
    'Integrating Better Auth in Next.js 16',
    'Advanced Tiptap configuration and custom extensions',
    'Optimizing database queries with Drizzle ORM',
  ]

# Set to false to hide this post without deleting it
isPublished: true

---

# Notiva

## Overview

**Notiva** is a modern, privacy-focused note-taking application that combines the simplicity of markdown with powerful collaboration features. Built with performance and user experience in mind, Notiva provides a seamless writing environment that works both online and offline. The application stands out with its real-time collaboration capabilities, beautiful typography, and intuitive interface. Whether you're a student taking lecture notes, a developer documenting code, or a professional organizing thoughts, Notiva adapts to your workflow.

---

## What Users Can Do

- **Rich Text Editing** — Experience a seamless writing environment powered by Tiptap, with full markdown support, code highlighting, and clean semantic HTML output.
- **Real-time Collaboration** — Edit documents simultaneously with multiple users. Changes reflect in real-time using WebSockets for efficient data synchronization and conflict resolution.
- **Secure File Organization** — Securely store and organize notes with a dedicated hierarchy and folders accessible from your structured workspace layout.
- **Dark Mode Selection** — Seamlessly toggle between full support light and dark themes with automatic system preference detection powered by Next Themes.
- **Secure Authentication** — Secure your platform using Better Auth based authentication with email verification, password reset flows, and social login capabilities.

---

## Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router) to harness fast server-side rendering, improved SEO, and unified layouts.
- **Styling**: Tailwind CSS for rapid prototyping and Radix UI + Shadcn/UI for accessible, interactive components.
- **State / Data**: React Hooks and Tiptap API for dynamic real-time editor state manipulation. React Hook Form alongside Zod is used for resilient data validation.

### Backend

- **Runtime / Framework**: Node.js and Next.js API Routes power the entire server-side architecture.
- **Database**: PostgreSQL hosted on Neon with Drizzle ORM ensuring type-safe, optimized query operations.
- **Auth**: Better Auth for a comprehensive, modern, and type-safe authentication.
- **Email**: Resend API acts as the robust backbone for seamless application-wide email operations.

---

## Technical Implementation

### Real-time Architecture

Notiva uses efficient WebSockets for real-time data synchronization. This permits immediate conflict resolution and broadcasts rapid cursor movements across all remote instances editing the document simultaneously.

### Performance Optimizations

- **Code Splitting & Lazy Loading** — Enhances first-contentful paint speed.
- **Image Optimization** — Powered by Next.js `<Image />` tags preserving cumulative layout shift scores.
- **Optimized DB Queries** — Leveraging Drizzle ORM alongside Neon serverless Postgres for low latency querying patterns.
- **Smooth Animations** — Using Motion for seamless layout transitions and micro-interactions.

---

## Challenges & Solutions

### Challenge 1: Enabling Real-time Content Collaboration

- **Problem**: When multiple users modified a single document, immediate state mismatches and content clobbering constantly corrupted data persistence.
- **Solution**: We integrated collaborative operations recognizing text differences in granular fragments without destructive collisions natively on top of the document model.

### Challenge 2: Efficient Note State Management

- **Problem**: The raw text representations grew increasingly heavy, severely degrading React DOM update velocity.
- **Solution**: Reconfigured the Tiptap node update strategy to use internal extensions and managed complex state structures effectively outside standard React Context when not necessary to avoid extraneous re-renders.

---

## Impact & Results

- Provided a robust framework serving concurrent users inside a unified collaborative editing workspace.
- Implemented **accessible elements** ensuring WAI-ARIA compliance with high color contrast visibility profiles.
- Leveraged server-side rendering principles leading to optimal search engine discoverability.

---

## TL;DR

Notiva provides a highly efficient, cooperative Markdown note-taking experience leveraging Next.js App Router, Tiptap's extensible rich-text editing abstractions, Better Auth for secure access, and an uncompromising Drizzle/Postgres database stack for speed and reliability.
