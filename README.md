# ByteSpace

ByteSpace is a responsive front-end web application for an online learning and creator platform. It combines course discovery, creator profiles, learning paths, course details, reviews, and a polished landing page into one consistent user experience.

## Implemented Features

### Landing Page

- Responsive hero section with course search, visual assets, learner badges, and grid background.
- Partner logo strip with responsive marquee behavior.
- Course showcase with category filtering and reusable course cards.
- Learning path cards for major course categories.
- Professional growth and creator feature sections.
- Creator call-to-action banner.
- Community testimonials and responsive footer.

### Course Discovery

- Dedicated `/courses` route.
- Search courses by title or creator.
- Filter courses by category.
- Responsive course card grid.
- Pagination for the course collection.
- Empty-state handling when a filter has no matching courses.

### Creator Profile

- Dedicated `/creators` route.
- Creator profile header with avatar, role, bio, product count, and follower count.
- Follow button interaction.
- Creator course filtering and responsive course grid.

### Course Details

- Dynamic `/courses/[courseId]` route with invalid-course handling.
- Full-width course header with metadata and preview media.
- Responsive two-column desktop layout with course content on the left and enrollment information on the right.
- About, Lessons, and Reviews tabs.
- About tab with description, sneak peek gallery, and key points.
- Lessons tab with module list, lesson content, and progress tracking panel.
- Reviews tab with rating breakdown, rating filters, reviewer cards, timestamps, and reviewer images.
- Responsive layout checked across mobile, tablet, and desktop widths.

## Tech Stack

- Next.js `16.3.7` with the App Router
- React `19.2.8`
- TypeScript
- Tailwind CSS `4`
- Base UI and shadcn components
- Lucide React icons
- `next/image` for optimized image rendering
- pnpm `10.28.1`

## Project Structure

```text
src/
├── app/                    # App Router pages and global styles
├── components/
│   ├── layout/             # Navbar, footer, and container
│   ├── sections/           # Landing page sections
│   └── ui/                 # Reusable UI components
├── data/                   # Course, creator, navigation, and section data
├── lib/                    # Shared utilities
└── types/                  # Shared TypeScript types

public/assets/              # Product, course, creator, and reviewer imagery
```

## Routes

| Route | Description |
| --- | --- |
| `/` | ByteSpace landing page |
| `/courses` | Searchable and filterable course library |
| `/courses/[courseId]` | Course overview, lessons, and reviews |
| `/creators` | Creator profile and course collection |

## Getting Started

From the `client` directory, install dependencies and start the development server:

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Validation Commands

```bash
pnpm lint
pnpm exec tsc --noEmit
pnpm build
```

There is currently no test runner configured. ESLint, TypeScript validation, production builds, and browser-based responsive checks are used to validate the implemented experience.

## Design Direction

The interface uses ByteSpace's primary blue, accent lime, dark heading, muted body, and subtle border tokens. Layouts are built with responsive Tailwind utilities, reusable content components, optimized local assets, accessible labels, and route-aware navigation states.

## Current Scope

This repository focuses on the front-end product experience with local data. Authentication, payments, enrollment processing, video playback, persistent reviews, and backend APIs are not connected yet.
