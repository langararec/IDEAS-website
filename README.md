# Research Website - IDEA in Public Recreation

Welcome to the IDEA's in Public Recreation website. Our research focus is Inclusion, Diversity, Equity, and Accessibility (IDEA) in public recreation for immigrant and racialized communities in British Columbia.

## Project Overview

This research initiative explores how immigrant and racialized communities experience public recreation differently from Canadian-born residents. The project aims to create inclusive frameworks and co-creation processes that enhance access to public recreation through the lens of Belonging, Dignity, Justice, and Joy.

## Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design system
- **Routing**: React Router v6
- **Icons**: React Icons (Heroicons, Font Awesome)
- **Animations**: Tailwind CSS animations with custom cubic-bezier transitions
- **Forms**: Formspree integration
- **Build Tool**: Vite
- **Package Manager**: npm

## Project Structure

```
frontend/
├── public/                 # Static assets
│   ├── images/            # Project images, team photos, maps
│   └── partners/          # Partner organization logos
├── src/
│   ├── components/        # Reusable UI components
│   │   ├── Navbar.tsx     # Navigation with dropdown menus
│   │   └── Footer.tsx     # Site footer
│   ├── pages/             # Page components
│   │   ├── Home/          # Homepage components
│   │   ├── Project/       # Project information
│   │   ├── Team/          # Team member profiles
│   │   ├── Updates/       # Project timeline and updates
│   │   └── Get-Involved/  # Contact form
│   ├── App.tsx           # Main application component
│   ├── App.css           # Global styles and design tokens
│   └── main.tsx          # Application entry point
```

## Component Architecture

### Core Pages

#### Home (`/pages/Home/`)
- **Hero.tsx**: Main landing section with title and description
- **Carousel.tsx**: Image carousel using react-fast-marquee
- **MissionStatement.tsx**: Overlapping quote box with call-to-action
- **Mission.tsx**: Two-column mission section with image
- **Partners.tsx**: Partner organization logos with SSHRCC funding acknowledgment

#### Project (`/pages/Project/`)
- **Project.tsx**: Main project page layout
- **Hero.tsx**: Project introduction with background image
- **Objectives.tsx**: Research objectives with custom SVG icons
- **CityToggle.tsx**: Tabbed interface for Burnaby and Courtenay information
- **ItemToggle.tsx**: Three-tab system for UN SDGs, Framework, and Outcomes
- **CallToAction.tsx**: Project involvement call-to-action

#### Team (`/pages/Team/`)
- **Team.tsx**: Team page layout
- **TeamCard.tsx**: Individual team member cards with zoom transitions
- **TeamContainer.tsx**: Container for multiple team cards
- **ExtendedMemberDescription.tsx**: Full-screen team member details modal

#### Updates (`/pages/Updates/`)
- **Updates.tsx**: Toggle between timeline and updates
- **Timeline.tsx**: Project timeline with custom circular markers
- **ProjectUpdate.tsx**: Individual update components

### Shared Components

#### Navigation
- **Navbar.tsx**: Responsive navigation with desktop dropdown and mobile hamburger menu
- **Footer.tsx**: Site footer with links and information

#### Design System
- **Color Palette**:
  - Primary: `#023f47` (Teal)
  - Secondary: `#1e6f79` (Light Teal)
  - Accent: `#ff5800` (Orange)
  - Base: `#f8fcf8` (Light Green)
- **Typography**: DM Sans font family
- **Spacing**: Harmonic 6-3-2 ratio system

## Key Features

### 1. Responsive Design
- Mobile-first approach with breakpoint-specific styling
- Adaptive navigation (hamburger menu for tablets and mobile)
- Flexible layouts that work across all device sizes

### 2. Interactive Elements
- **Smooth Transitions**: Apple-style zoom animations for team member details
- **Hover Effects**: Scale and color transitions on interactive elements
- **Tab Systems**: Multiple tabbed interfaces for content organization

### 3. Accessibility
- Semantic HTML structure
- Proper ARIA labels and roles
- Keyboard navigation support
- High contrast color ratios
- Screen reader friendly content

### 4. Performance Optimizations
- Optimized images (WebP format)
- Lazy loading for images
- Efficient component rendering
- Minimal bundle size with tree shaking

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:
```bash
git clone https://github.com/langararec/researchwebsite.git
cd researchwebsite/frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

### Available Scripts

```bash
npm run dev          # Start development server
npm run build        # Build for production
npm run preview      # Preview production build
npm run lint         # Run ESLint
```

## Content Management

### Adding Team Members
Team member data is stored in the `Team.tsx` file as TypeScript objects:

```typescript
const memberData: MemberInfo = {
    name: "Member Name",
    role: "Their Role",
    image: "/team/member-image.webp",
    shortDescription: "Brief description for card",
    longDescription: "Detailed biography",
    linkedin: "https://linkedin.com/in/profile", // optional
    program: "Program Name", // optional
    programLink: "https://program-url.com" // optional
};
```

### Updating Timeline
Timeline events are managed in `Timeline.tsx` with the following structure:

```typescript
const timelineData: TimelineItem[] = [
    {
        id: "year",
        year: "2024",
        phases: [
            {
                dateRange: "Month Range",
                title: "Phase Title",
                bullets: ["Activity 1", "Activity 2"]
            }
        ]
    }
];
```

### Managing Partners
Partner logos are stored in `/public/partners/` and configured in `Partners.tsx`.

## Key Design Patterns

### 1. Component Composition
Components are designed to be modular and reusable with clear prop interfaces.

### 2. State Management
Local state management using React hooks, with lifting state up when needed for parent-child communication.

### 3. Animation Patterns
Consistent animation timing and easing curves across the application:
- Hover effects: 200-300ms duration
- Page transitions: 500ms with cubic-bezier easing
- Micro-interactions: 150-200ms for immediate feedback

### 4. Responsive Breakpoints
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px
- Large Desktop: > 1280px (xl breakpoint for navigation)

## Configuration Files

- **vite.config.ts**: Vite build configuration
- **tailwind.config.js**: Tailwind CSS customization
- **tsconfig.json**: TypeScript configuration
- **eslint.config.js**: Linting rules and settings

### Code Standards
- Use TypeScript for all new components
- Follow the existing component structure and naming conventions
- Ensure responsive design for all new features
- Add proper TypeScript interfaces for all props
- Maintain accessibility standards

## Contact

For questions about the research project or website, please use the contact form at `/get-involved` or reach out to the research team.
