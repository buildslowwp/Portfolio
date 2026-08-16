---
title: 'Learnix LMS'
description: 'A full-featured enterprise learning management system built with Next.js 15, Stream.io WebRTC, and Stripe payments.'

image: '/project-image/home-page.png'

technologies:
  [
    'Next.js 15',
    'React 18',
    'TypeScript',
    'Express.js & Node.js',
    'MongoDB (Mongoose)',
    'Tailwind CSS v4 & Shadcn',
    'Stripe (Payments)',
    'Stream.io (WebRTC Video)',
    'Clerk (Authentication)',
    'AWS S3',
    'Arcjet (Security)',
    'Zod (Validation)'
  ]

github: 'https://github.com/Pujan Ratanpara/learnix'
live: 'https://learnix-tawny.vercel.app/'

timeline: '3 Months'
role: 'Full Stack'
team: 'Solo'
status: 'Completed'
featured: true

challenges:
  [
    'Secure direct-to-S3 video uploads bypassing Node.js buffers',
    'Payment Webhook Idempotency & Race Conditions',
    'Live WebRTC token authorization mapped to enrolled User contexts',
    'Role-Based Access Control bridging Clerk JWTs and MongoDB',
  ]

learnings:
  [
    'Advanced Next.js App Router Server Actions',
    'Stripe Checkout Session Lifecycle Management',
    'Building stateless streaming uploads via Presigned URLs',
    'Drag-and-Drop state reconciliation with dnd-kit',
  ]

isPublished: true
---

# Learnix LMS

## Overview

**Learnix LMS** is a modern, enterprise-grade Learning Management System that bridges the gap between pre-recorded Video-on-Demand (VoD) learning and active live-class conferencing. Built on a fully decoupled Next.js 15 (App Router) frontend and an Express.js/MongoDB backend, it solves the challenge of monolithic educational platforms by utilizing managed SaaS providers—handling secure auth with Clerk, live WebRTC streaming via Stream.io, and robust payment routing through Stripe. It delivers a scalable, highly interactive experience for students, mentors, and administrators.

---

## Why I Built This

Traditional open-source learning systems are often bloated, difficult to monetize, or impossible to scale without massive video-hosting bills. This project tackled those pain points head-on:

- **Scalability** — Monolithic servers choke on video buffer streams; Learnix delegates media directly to S3/Cloudflare R2 using AWS presigned URLs.
- **Monetization Complexity** — Handling credit cards is extremely risky. I wanted to build a bulletproof Stripe Checkout webhook pipeline that safely prevents duplicate enrollments on network drops.
- **Static Learning** — Typical LMS platforms lack real-time engagement. Integrating Stream.io allowed for seamless, browser-native live WebRTC classes mapped directly to course cohorts.

---

## What Users Can Do

- **Course Discovery & Checkout** — Browse a debounced, real-time searchable course catalog and safe-checkout via Stripe (or enroll instantly in free courses).
- **Interactive Learning Journey** — Consume VOD lessons with automatic completion tracking, visualized by circular SVG milestone graphs and celebration confetti at 100%.
- **Take Quizzes & Assignments** — Test knowledge through auto-graded assessments with configured attempts, shuffling, and passing-score thresholds.
- **Join Live Sessions** — Connect instantly to Mentor-hosted WebRTC conferences equipped with component layouts (Speaker, Grid) directly inside the browser.

---

## Admin / Mentor Features

- **Drag-And-Drop Builder** — Mentors can create and re-order rich-text courses, chapters, and lessons effortlessly using `@dnd-kit`.
- **S3 Content Management** — Mentors upload large video files straight from the client (skipping server memory limits) using time-locked AWS S3 / R2 presigned URLs.
- **Progress Analytics** — Mentors monitor per-student granular progress, quiz performance, and assignment grades.
- **Global Admin Dashboard** — Administrators manage platform-wide user roles (User/Mentor/Admin bans) and track aggregation revenue charts using Tremor/Recharts.
- **Class Activities** — Create and grade custom multi-file assignment uploads featuring interactive grading Rubrics.

---

## Key Features

### **Content Delivery**

- **Server-Side Rendering (SSR)**: Course discovery pages are rendered instantly for superior SEO and initial load times.
- **Edge Analytics**: Vercel-hosted frontend components map directly to Tremor UI charts for sub-second admin metric reads.

### **Stateless Micro-services**

- **Clerk Offloading**: Complete user lifecycle managed entirely without custom DB-hashing. Clerk webhooks silently update Mongo state records in the background.

---

## Tech Stack

### Frontend

- **Framework**: Next.js 15 (App Router) — Chosen for Server Components (RSC) which radically drops React bundle payload size.
- **Styling**: Tailwind CSS (v4) & Shadcn/ui — Provides a highly customizable, accessible, and fast utility-first component library themed heavily around `oklch` color spaces.
- **State / Data**: React hooks paired with `framer-motion` for complex layout transitions.

### Backend

- **Runtime / Framework**: Node.js & Express.js — Keeps the REST API layer stateless, predictable, and distinctly separated from the UI for easy horizontal scaling.
- **Database**: MongoDB (Mongoose ODM) — Selected due to its powerful Document mapping schema handling diverse shapes (Quizzes with deep array options vs simple Video models).
- **Auth**: Clerk — Hooked into Express middleware (`verifyClerkToken`) strictly validating JWT headers and Role restrictions before any controllers execute.
- **Deployment**: Vercel (Frontend) and standard Node Linux hosting (Backend).

---

## Technical Implementation

### Topic 1 — Payment Webhook Idempotency

Processing payments asynchronously via webhooks introduces the risk of race conditions or duplicate network drops causing double-enrollments.

This was solved on the DB layer using a **Compound Unique Index** in Mongoose on `{ userId: 1, courseId: 1 }`. When the Stripe `checkout.session.completed` event fires, the Express backend attempts to create the enrollment. Even if Stripe fires the webhook twice simultaneously, MongoDB strictly blocks the second write.

```typescript
// Example Implementation Fragment (Logic Map)
try {
  await Enrollment.create({ userId, courseId, status: 'Active' });
} catch (error) {
  // 11000 is Mongo's Duplicate Key Error Code
  if (error.code === 11000) return { success: true, message: 'Idempotent Catch' };
  throw error;
}
```

### Topic 2 — Stateless Direct-to-S3 Uploads

To prevent massive video files from crashing the Node.js Express server loop via `multer` memory loads:

1. **API Layer**: Frontend requests a 5-minute Presigned URL from the API `/api/s3/upload`.
2. **Client Upload**: Frontend `PUTs` the binary file directly to S3's servers, bypassing the Express backend entirely.
3. **Commit Phase**: Frontend commits the resulting static `s3://` URL string back to the Course MongoDB model.

---

## Challenges & Solutions

### Challenge 1: Live WebRTC Token Orchestration

- **Problem**: How do we prevent unregistered, non-paying users from crashing live video classes via shared URL links?
- **Solution**: The Stream.io React SDK relies on backend tokens. I implemented a strict dependency check: when a user clicks "Join Live", the Express backend first queries the `Enrollments` database. Only if the user has an `Active` enrollment mapped securely to that specific `courseId` does the server sign a JWT using the hidden `STREAM_API_SECRET`.

### Challenge 2: Secure Route Guards & Bot Attacks

- **Problem**: Public endpoints (like `/api/enroll` and `/webhook`) are vulnerable to credential stuffing, double-checkout bots, and DDoS loops.
- **Solution**: Integrated **Arcjet Shield** natively into Next.js Server Actions. Before initiating massive Stripe payloads, Arcjet analyzes client IP headers, enforcing strict fixed-windows Rate Limiting (e.g., 5 attempts/minute) and entirely blocking automated programmatic headless-browser fingerprints dynamically.

---

## Development Progress

### Completed

- ✅ Full User Role matrix mapping (Users -> Mentors -> Admins) via MongoDB & Clerk.
- ✅ Complete VOD integration using Drag-and-Drop chapters.
- ✅ Full Stripe Checkout flow with webhook sync handling duplicate drops.
- ✅ Live Stream.io WebRTC classes natively integrated into course catalogs.
- ✅ Automated Quizzes mapped with React-Confetti triggers.

### In Progress

- 🔄 Auto-scaling Edge analytics mapped globally.

### Planned

- 📋 Integration of i18n Language Localizations supporting broader audiences.
- 📋 Realtime course discussion pipelines using WebSockets (Socket.io).
- 📋 Auto-generated PDF Certificates using PDFKit on 100% completion milestones.

---

## Future Plans

- **Short-term**: Finalize deployment containerization (`Dockerfile` configs) for self-hosting enthusiasts.
- **Medium-term**: Launch per-chapter discussion forums powered by real-time WebSockets to enhance peer-to-peer engagement without leaving the lesson UI.
- **Long-term**: Expand to a native mobile OS companion application using React Native, utilizing the exact same backend Express API endpoints logic.

---

## TL;DR

Learnix is a standalone, full-stack learning platform (Next.js/Express) that offloads the heavy lifting of video hosting (S3), live classes (Stream.io), authentication (Clerk), and payments (Stripe) to specialized SaaS providers, resulting in an exceptionally lightweight, scalable, and enterprise-grade application.
