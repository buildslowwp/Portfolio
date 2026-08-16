---
title: 'AlertWise'
description: 'Disaster Preparedness & Learning Platform with real-time safety alerts and comprehensive learning modules.'

# Path to your project thumbnail (place image in /public/project/)
image: './frontend/public/images/landing-page.png'

# Tech stack — list every major technology used
technologies:
  [
    'Next.js 16',
    'React 19',
    'TypeScript',
    'Tailwind CSS 4',
    'Framer Motion',
    'Fumadocs',
    'Express',
    'MongoDB',
    'Clerk Auth',
  ]

# Links — remove any that don't apply
github: 'https://github.com/Pujan Ratanpara/alertwise'

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
status: 'Completed'

# Show this project in the featured section on your portfolio?
featured: true

# Main difficulties you faced — be specific, these show up as tags
challenges:
  [
    'Integrating real-time alerts',
    'Structuring complex disaster learning modules',
    'Seamless authentication flow with Clerk',
  ]

# What you gained — be specific, these show up as tags
learnings:
  [
    'Next.js App Router and Server Components',
    'Building documentation sites with Fumadocs',
    'Full-stack TypeScript development',
  ]

# Set to false to hide this post without deleting it
isPublished: true

---

# AlertWise

## Overview

**AlertWise** is dedicated to saving lives through education. It is an interactive disaster preparedness and learning platform designed to provide essential training, real-time safety alerts, and comprehensive learning modules. By combining rich educational content with actionable alerts, AlertWise helps communities stay safe and informed during natural emergencies.

---

## Why I Built This

I built AlertWise to address the critical gap in accessible and engaging disaster preparedness education. Traditional resources are often scattered or difficult to digest during emergencies.

- **Centralized Knowledge** — People need a single, reliable source for disaster response protocols.
- **Engagement** — Interactive quizzes and minimalist design help users retain life-saving information more effectively than plain text manuals.
- **Real-Time Awareness** — Integrating alerts and an SOS system ensures users aren't just learning, but also staying informed when it matters most.

---

## What Users Can Do

- **Interactive Learning** — Deep-dive into disaster education with rich, documented content built using Fumadocs.
- **Safety Assessments** — Test your knowledge with minimalist, high-legibility quizzes designed to reinforce learning.
- **Real-Time Readiness** — Stay informed with a dedicated alerts and SOS system providing crucial updates.
- **Secure Profiles** — Create an account, track progress, and manage preferences securely via Clerk authentication.

---

## Tech Stack

### Frontend

- **Framework**: Next.js 16 (App Router) & React 19 for a high-performance, SEO-friendly React framework.
- **Styling**: Tailwind CSS 4 & Framer Motion for rapid UI development and smooth, premium animations.
- **Documentation/Content**: Fumadocs for managing and rendering structured disaster preparedness guides.
- **State Management**: Jotai for lightweight and flexible atomic state management.

### Backend

- **Runtime / Framework**: Node.js & Express with TypeScript for a robust, strongly-typed RESTful API.
- **Database**: MongoDB & Mongoose for flexible, schema-driven document storage (handling lessons, user progress, etc.).
- **Auth**: Clerk (via `@clerk/nextjs` and `@clerk/express`) for seamless, secure user authentication across both frontend and backend.

---

## Development Progress

### Completed

- ✅ Core interactive learning modules and Fumadocs integration
- ✅ Safety assessment and quiz system
- ✅ Full-stack authentication with Clerk
- ✅ Express backend connected to MongoDB

### Planned

- 📋 Advanced real-time push notifications for disaster alerts
- 📋 Offline mode for accessing crucial safety information without internet
- 📋 Localization/Multi-language support for broader community reach

---

## TL;DR

AlertWise is a full-stack Next.js and Express platform that gamifies and streamlines disaster preparedness education. It combines interactive learning modules, quizzes, and real-time alerts to ensure users are ready and informed before, during, and after emergencies.
