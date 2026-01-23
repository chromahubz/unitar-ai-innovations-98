# CLAUDE.md - AI Assistant Guide for UNITAR AI Innovations

This document provides comprehensive guidance for AI assistants working on this codebase. Last updated: 2026-01-23

## Project Overview

**Project Name**: UNITAR AI Innovations
**Type**: Marketing Website / Landing Page for a software development agency
**Purpose**: Showcase AI-first software development services, portfolio, and client contact
**Created With**: Lovable.dev platform
**Deployment**: Vercel
**Project URL**: https://lovable.dev/projects/861c6b04-5db2-4ccd-bf1e-5b6b7ed76c43

### Technology Stack

- **Build Tool**: Vite 5.4
- **Framework**: React 18.3.1
- **Language**: TypeScript 5.5.3
- **UI Library**: ShadcN UI (48 components) built on Radix UI primitives
- **Styling**: Tailwind CSS 3.4.11
- **Routing**: React Router DOM 6.26.2
- **State Management**: TanStack React Query 5.56.2 (configured but not yet used)
- **Form Handling**: React Hook Form 7.53.0 + Zod 3.23.8 (installed but not yet implemented)
- **Icons**: Lucide React 0.462.0
- **Animations**: Embla Carousel, Tailwind Animate

## Directory Structure

```
/home/user/unitar-ai-innovations-98/
├── public/                         # Static assets
│   ├── favicon.ico
│   ├── placeholder.svg
│   └── robots.txt
├── src/
│   ├── components/                 # React components
│   │   ├── ui/                    # 48 ShadcN UI components (button, card, dialog, etc.)
│   │   ├── AnimatedSphere.tsx     # Animated logo component
│   │   ├── PrivacyPolicy.tsx      # Modal version (currently unused)
│   │   └── TermsConditions.tsx    # Modal version (currently unused)
│   ├── hooks/                     # Custom React hooks
│   │   ├── use-mobile.tsx         # Mobile viewport detection
│   │   └── use-toast.ts           # Toast notification management
│   ├── lib/                       # Utility functions
│   │   └── utils.ts               # cn() helper for className merging
│   ├── pages/                     # Page components
│   │   ├── Index.tsx              # Main landing page
│   │   ├── NotFound.tsx           # 404 page
│   │   ├── PrivacyPolicy.tsx      # Privacy policy full page
│   │   └── TermsConditions.tsx    # Terms & conditions full page
│   ├── App.tsx                    # Root app with providers & routing
│   ├── main.tsx                   # Application entry point
│   ├── index.css                  # Global styles & CSS variables
│   └── vite-env.d.ts             # TypeScript declarations
├── Configuration files
│   ├── vite.config.ts             # Vite build configuration
│   ├── tailwind.config.ts         # Tailwind & theme configuration
│   ├── tsconfig.json              # TypeScript configuration
│   ├── eslint.config.js           # ESLint rules
│   ├── postcss.config.js          # PostCSS plugins
│   ├── components.json            # ShadcN UI configuration
│   └── vercel.json                # Vercel deployment config
```

## Application Architecture

### Entry Points & Flow

1. **main.tsx** (`/src/main.tsx`): Application entry, renders App into `#root`
2. **App.tsx** (`/src/App.tsx`): Provider hierarchy and routing setup:
   ```
   QueryClientProvider (React Query)
   └── TooltipProvider (Radix UI)
       └── BrowserRouter (React Router)
           ├── Routes
           │   ├── / → Index
           │   ├── /privacy → PrivacyPolicy
           │   ├── /terms → TermsConditions
           │   └── * → NotFound
           ├── Toaster (ShadcN toast)
           └── Sonner (alternative toast)
   ```

### Routing

**Router**: React Router DOM v6
**Pattern**: Client-side routing with hash-based smooth scrolling for same-page navigation

**Routes**:
- `/` - Main landing page with all sections
- `/privacy` - Privacy policy page
- `/terms` - Terms and conditions page
- `*` - 404 not found page

**Navigation Conventions**:
- Use `<Link to="/path">` from React Router for page navigation
- Use hash links (`#section-id`) for same-page smooth scrolling
- All navigation should update browser history

### Landing Page Structure (`/src/pages/Index.tsx`)

The main page contains these sections in order:
1. **Hero Section**: Animated sphere logo, headline, CTA buttons
2. **Services Grid**: 6 service cards (Custom Software, Mobile Apps, etc.)
3. **App Catalogue**: Preview of upcoming applications
4. **Portfolio/Featured Projects**: VIDEYE, INFIRADIO, VIDEOBLADE showcases
5. **Why UNITAR**: 6 benefit cards
6. **AI Solutions**: AI-focused services section
7. **About Section**: Company information
8. **Contact Form**: Email-based contact (mailto implementation)
9. **Footer**: Links to policies and social media

## Component Conventions

### UI Components (`/src/components/ui/`)

All UI components follow ShadcN patterns:

**Key Characteristics**:
- Built with Radix UI primitives for accessibility
- Use `class-variance-authority` for variant management
- Forward refs using `React.forwardRef`
- TypeScript interfaces for props
- Use `cn()` utility for className composition

**Example Pattern**:
```typescript
import { cn } from "@/lib/utils"
import { forwardRef } from "react"

interface ButtonProps {
  variant?: "default" | "outline" | "ghost"
  size?: "default" | "sm" | "lg"
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    )
  }
)
```

**Available UI Components** (48 total):
- Forms: button, input, textarea, checkbox, select, radio-group, switch, slider, label, form
- Layout: card, separator, tabs, accordion, collapsible, resizable, aspect-ratio
- Overlays: dialog, sheet, drawer, alert-dialog, popover, tooltip, hover-card
- Navigation: navigation-menu, menubar, breadcrumb, pagination, dropdown-menu, context-menu
- Feedback: toast, alert, progress, skeleton
- Data: table, badge, avatar, chart, carousel, scroll-area
- Advanced: command (cmdk), calendar, date-picker, toggle, toggle-group

### Custom Components

When creating new components:

1. **Reusable UI components** → `/src/components/ui/` (follow ShadcN patterns)
2. **Feature-specific components** → `/src/components/`
3. **Page components** → `/src/pages/`

**Naming Conventions**:
- PascalCase for component files: `AnimatedSphere.tsx`
- kebab-case for UI components: `button.tsx`, `data-table.tsx`
- kebab-case for hooks: `use-mobile.tsx`, `use-toast.ts`

**File Structure**:
```typescript
// ComponentName.tsx
import { cn } from "@/lib/utils"

interface ComponentNameProps {
  // Props definition
}

export const ComponentName = ({ prop1, prop2 }: ComponentNameProps) => {
  return (
    // JSX
  )
}
```

## Styling Guidelines

### Tailwind CSS Configuration

**Theme Extension** (`tailwind.config.ts`):
```javascript
unitar: {
  blue: '#1e40af',
  'blue-dark': '#1e3a8a',
  'blue-light': '#3b82f6',
  gray: '#64748b',
  'gray-dark': '#334155',
  'gray-light': '#94a3b8'
}
```

**Typography**:
- Primary font: **Montserrat** (Google Fonts)
- Weights: 300-900 available
- Applied via Tailwind utilities

### CSS Variables (`/src/index.css`)

The project uses HSL-based color tokens for theming:

```css
--background, --foreground
--primary, --primary-foreground
--secondary, --secondary-foreground
--muted, --muted-foreground
--accent, --accent-foreground
--destructive, --destructive-foreground
--border, --input, --ring, --radius
```

**Usage**: Apply via Tailwind utilities: `bg-primary`, `text-foreground`, `border-border`

### Styling Patterns

**Common Patterns Used**:
```css
/* Gradients */
bg-gradient-to-br from-blue-500 to-blue-700

/* Shadows for depth */
shadow-xl, shadow-2xl

/* Hover animations */
hover:-translate-y-3 transition-all duration-300

/* Backdrop effects */
backdrop-blur-sm bg-white/80

/* Rounded corners */
rounded-xl, rounded-2xl

/* Glass morphism */
bg-white/10 backdrop-blur-lg border border-white/20
```

**Custom Animations** (defined in Tailwind config):
- `fade-in`: Opacity animation
- `slide-up`: Translate Y animation
- `accordion-down`, `accordion-up`: For accordion components

### Responsive Design

**Breakpoints** (Tailwind defaults):
- `sm`: 640px
- `md`: 768px (mobile breakpoint)
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile-First Approach**: Start with mobile styles, add breakpoints upward

**Custom Hook**: Use `useMobile()` hook for programmatic mobile detection (<768px)

## State Management & Data Fetching

### Current State

- **No backend API** currently implemented
- **No global state management** (no Redux, Zustand, or Context)
- Local component state using `useState` for UI interactions
- Forms use basic controlled components with `mailto:` submission

### Prepared Infrastructure

**React Query**: Configured and ready for API integration
```typescript
// Already set up in App.tsx
const queryClient = new QueryClient()
```

**Form Handling**: React Hook Form + Zod installed but not yet implemented

### Future Implementation Guidelines

**When adding API integration**:

1. Create API client in `/src/api/` or `/src/lib/api.ts`
2. Define React Query hooks in `/src/hooks/use-[feature].ts`
3. Use TanStack React Query for server state:
   ```typescript
   const { data, isLoading } = useQuery({
     queryKey: ['key'],
     queryFn: fetchFunction
   })
   ```

**When adding forms**:

1. Use React Hook Form for form state
2. Use Zod for validation schemas
3. Integrate with ShadcN form components
4. Example pattern:
   ```typescript
   import { useForm } from "react-hook-form"
   import { zodResolver } from "@hookform/resolvers/zod"
   import * as z from "zod"

   const schema = z.object({
     email: z.string().email()
   })

   const form = useForm({
     resolver: zodResolver(schema)
   })
   ```

**When adding global state**:
- Consider if React Query can handle it (server state)
- For UI state, evaluate Context API first
- Only add Zustand/Redux if complexity demands it

## TypeScript Configuration

### Compiler Options

**Path Alias**: `@/*` maps to `./src/*`

**Type Checking** (relaxed for rapid development):
```json
{
  "noImplicitAny": false,
  "noUnusedParameters": false,
  "noUnusedLocals": false,
  "strictNullChecks": false
}
```

**Important**: While these are relaxed, still strive for type safety in new code.

### Type Patterns

**Component Props**:
```typescript
interface ComponentProps {
  required: string
  optional?: number
  children?: React.ReactNode
  className?: string
}
```

**Event Handlers**:
```typescript
const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
  // handler logic
}
```

**Future Type Organization**:
- Shared types → `/src/types/`
- API types → `/src/types/api.ts`
- Component-specific types → colocate in component file

## Development Workflow

### NPM Scripts

```bash
npm run dev          # Start dev server (http://localhost:8080)
npm run build        # Production build
npm run build:dev    # Development mode build
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

### Git Workflow

**Current Branch**: `claude/claude-md-mkr0kiun3kooy4ne-2MwLC`

**Branch Naming**: Follow pattern `claude/claude-md-[session-id]`

**Commit Messages**: Use conventional format:
```
feat: Add new feature
fix: Fix bug description
docs: Update documentation
style: Format code
refactor: Refactor component
```

**Workflow**:
1. Make changes on feature branch
2. Commit with descriptive messages including session URL
3. Push to origin with: `git push -u origin <branch-name>`
4. Create PR when ready

### Code Quality

**ESLint**: Configured with TypeScript and React plugins
- Runs on `npm run lint`
- React Hooks rules enforced
- React Refresh plugin for HMR

**Best Practices**:
- Use ESLint to catch issues before committing
- Format code consistently
- Avoid unused variables and imports
- Follow React Hooks rules

## Key Utilities & Helpers

### cn() - ClassName Utility (`/src/lib/utils.ts`)

**Purpose**: Merge and deduplicate Tailwind classes

**Implementation**:
```typescript
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
```

**Usage**:
```typescript
<div className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // from props
)} />
```

**Why**: Prevents Tailwind class conflicts (e.g., `p-4 p-8` → `p-8`)

### Custom Hooks

**useMobile** (`/src/hooks/use-mobile.tsx`):
```typescript
import { useMobile } from "@/hooks/use-mobile"

const isMobile = useMobile() // true if viewport < 768px
```

**useToast** (`/src/hooks/use-toast.ts`):
```typescript
import { useToast } from "@/hooks/use-toast"

const { toast } = useToast()

toast({
  title: "Success",
  description: "Action completed",
})
```

## Adding New Features

### Adding a New Page

1. Create page component in `/src/pages/NewPage.tsx`
2. Add route in `/src/App.tsx`:
   ```typescript
   <Route path="/new-page" element={<NewPage />} />
   ```
3. Add navigation links where needed
4. Update sitemap if applicable

### Adding a New Component

**For Reusable UI Component**:
1. Check if similar ShadcN component exists in `/src/components/ui/`
2. If not, consider using `npx shadcn@latest add [component]`
3. Or create custom in `/src/components/ui/ComponentName.tsx`
4. Follow ShadcN patterns (forwardRef, variants, cn())

**For Feature Component**:
1. Create in `/src/components/FeatureName.tsx`
2. Use existing UI components from `/src/components/ui/`
3. Keep component focused and single-purpose

### Adding API Integration

1. **Create API client**:
   ```typescript
   // src/lib/api.ts
   const API_BASE = import.meta.env.VITE_API_URL

   export const api = {
     get: (endpoint: string) => fetch(`${API_BASE}${endpoint}`),
     // ... other methods
   }
   ```

2. **Create React Query hook**:
   ```typescript
   // src/hooks/use-feature-data.ts
   import { useQuery } from "@tanstack/react-query"

   export const useFeatureData = () => {
     return useQuery({
       queryKey: ['feature'],
       queryFn: () => api.get('/feature')
     })
   }
   ```

3. **Use in component**:
   ```typescript
   const { data, isLoading, error } = useFeatureData()
   ```

### Adding Environment Variables

1. Create `.env` file (gitignored)
2. Add variable: `VITE_VARIABLE_NAME=value`
3. Access in code: `import.meta.env.VITE_VARIABLE_NAME`
4. Document in `.env.example`

**Note**: All client-side vars must be prefixed with `VITE_`

## Testing Strategy

### Current State

No testing framework currently configured.

### Recommended Setup

**For Unit/Component Tests**:
- Install Vitest + React Testing Library
- Create `/src/__tests__/` directory
- Test critical business logic and complex components

**For E2E Tests**:
- Consider Playwright or Cypress
- Test critical user flows (contact form, navigation)

**Test File Pattern**:
```
ComponentName.tsx
ComponentName.test.tsx
```

## Deployment

### Vercel Configuration

**File**: `vercel.json`
```json
{
  "rewrites": [
    { "source": "/(.*)", "destination": "/index.html" }
  ]
}
```

**Purpose**: Handle client-side routing (all routes serve `index.html`)

### Build Process

1. **Development**: `npm run dev` - Hot reload on `localhost:8080`
2. **Build**: `npm run build` - Outputs to `/dist`
3. **Preview**: `npm run preview` - Test production build locally

### Deployment Trigger

- **Automatic**: Pushes to main branch trigger Vercel deployment
- **Manual**: Can deploy via Lovable platform interface

## Common Patterns & Idioms

### Import Pattern

**Always use path alias**:
```typescript
// Good
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

// Avoid
import { Button } from "../../components/ui/button"
```

### Component Composition

**Use compound components**:
```typescript
<Card>
  <CardHeader>
    <CardTitle>Title</CardTitle>
  </CardHeader>
  <CardContent>Content</CardContent>
</Card>
```

**Use asChild pattern for polymorphism**:
```typescript
<Button asChild>
  <Link to="/path">Navigate</Link>
</Button>
```

### Conditional Rendering

```typescript
// Conditional classes
<div className={cn("base", isActive && "active")} />

// Conditional rendering
{isLoading ? <Spinner /> : <Content />}
{error && <ErrorMessage />}
```

### Event Handlers

```typescript
// Inline for simple cases
<button onClick={() => console.log('clicked')}>

// Named for complex logic
const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault()
  // logic
}
```

## Accessibility Guidelines

### Built-in Accessibility

- **Radix UI primitives** handle ARIA attributes automatically
- **Keyboard navigation** supported out of the box
- **Focus management** handled by components

### When Adding Custom Components

1. **Use semantic HTML**: `<button>` not `<div onClick>`
2. **Add ARIA labels** where needed: `aria-label`, `aria-describedby`
3. **Ensure keyboard navigation**: `onKeyDown` handlers
4. **Test with screen reader**: NVDA, JAWS, or VoiceOver
5. **Check color contrast**: WCAG AA minimum (4.5:1)

### Form Accessibility

```typescript
<label htmlFor="email">Email</label>
<input id="email" aria-describedby="email-error" />
{error && <span id="email-error">{error}</span>}
```

## Performance Considerations

### Current Optimizations

- **Vite**: Fast HMR and optimized builds
- **React SWC**: Faster transpilation than Babel
- **Code splitting**: Via React Router (lazy load if needed)

### Recommendations for Future

**Lazy Loading**:
```typescript
import { lazy, Suspense } from "react"

const HeavyComponent = lazy(() => import("@/components/HeavyComponent"))

<Suspense fallback={<Spinner />}>
  <HeavyComponent />
</Suspense>
```

**Image Optimization**:
- Use WebP format with fallbacks
- Implement lazy loading for images
- Consider image CDN for production

**Bundle Analysis**:
```bash
npm run build -- --mode analyze
```

## Security Best Practices

### Current Security Posture

- **No backend**: Limited attack surface
- **Static deployment**: Reduced server vulnerabilities
- **Vercel**: Automatic HTTPS

### When Adding Backend Integration

1. **Never expose API keys** in client code
2. **Validate all inputs** on backend
3. **Sanitize user content** to prevent XSS
4. **Use CORS** appropriately
5. **Implement rate limiting** on API endpoints
6. **Use environment variables** for secrets

### Content Security

- **Sanitize user-generated content** before rendering
- **Be cautious with `dangerouslySetInnerHTML`**
- **Validate external links** in contact form

## Troubleshooting Common Issues

### Build Errors

**TypeScript errors**: Check `tsconfig.json` for relaxed settings, may need to fix types

**Import errors**: Verify path alias `@/` is used correctly

**Missing dependencies**: Run `npm install`

### Runtime Errors

**404 on refresh**: Check `vercel.json` rewrite rules are deployed

**Styling issues**: Verify Tailwind classes are correct, check for conflicts

**Component not found**: Check import path uses `@/` alias

### Development Server

**Port already in use**: Change port in `vite.config.ts` or kill process

**Hot reload not working**: Restart dev server, check file watchers

## Project-Specific Notes

### Brand Identity

**Colors**: Blue-focused color scheme (UNITAR blue)
**Tone**: Professional, modern, tech-forward
**Audience**: Businesses seeking custom software and AI solutions

### Content Structure

The landing page tells a story:
1. Hero (attention) → Services (offerings) → Portfolio (proof)
2. Why UNITAR (differentiators) → AI Solutions (specialization)
3. About (credibility) → Contact (conversion) → Footer (navigation)

### Contact Form

**Current**: Uses `mailto:` links (no backend)
**Email**: hello@unitarsoftware.com

**Future Enhancement**: Consider implementing:
- Backend form submission
- Email service integration (SendGrid, Mailgun)
- Form validation with React Hook Form + Zod
- Success/error feedback

### Legal Pages

**Privacy Policy** (`/privacy`): 11 sections covering data handling
**Terms & Conditions** (`/terms`): 12 sections covering service terms

Both pages:
- Are full-page routes (not modals)
- Have navigation back to home
- Include last updated date
- Should be reviewed by legal team before launch

## Future Enhancements Roadmap

### Short Term
- Implement proper contact form with backend
- Add form validation (React Hook Form + Zod)
- Create reusable form components
- Add loading states throughout

### Medium Term
- Integrate CMS for blog/case studies
- Add project portfolio with filtering
- Implement newsletter subscription
- Add testimonials section
- Create admin dashboard

### Long Term
- Build client portal
- Add project tracking features
- Implement real-time chat support
- Create service booking system
- Analytics dashboard

## Resources & Documentation

### Official Documentation
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)
- [ShadcN UI](https://ui.shadcn.com/)
- [Radix UI](https://www.radix-ui.com/)
- [React Router](https://reactrouter.com/)
- [TanStack Query](https://tanstack.com/query/)

### Internal Resources
- Lovable Project: https://lovable.dev/projects/861c6b04-5db2-4ccd-bf1e-5b6b7ed76c43
- Repository: Current GitHub repository
- Design System: ShadcN UI components in `/src/components/ui/`

## Questions or Issues?

For AI assistants encountering unclear patterns or needing clarification:
1. Check this CLAUDE.md file first
2. Examine existing similar implementations in the codebase
3. Follow ShadcN UI patterns for new components
4. Maintain consistency with established conventions
5. Document new patterns added

---

**Document Maintenance**: Update this file when major architectural changes occur, new patterns are established, or significant features are added.
