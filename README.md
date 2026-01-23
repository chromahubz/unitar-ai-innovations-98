# UNITAR AI Innovations - Website

This is the official marketing website for UNITAR AI Innovations, showcasing our portfolio of AI-powered applications and development services.

## Project Overview

**Website**: UNITAR AI Innovations Marketing Site
**Stack**: React + TypeScript + Vite
**Deployment**: Vercel
**Contact**: contact@unitar.app

## Technologies Used

- **Vite** - Lightning-fast build tool
- **React 18** - Modern UI framework
- **TypeScript** - Type-safe development
- **ShadcN UI** - Beautiful, accessible component library
- **Tailwind CSS** - Utility-first CSS framework
- **React Router** - Client-side routing

## Development

### Prerequisites

- Node.js 16+ (install with [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))
- npm or bun package manager

### Local Setup

```sh
# Clone the repository
git clone https://github.com/chromahubz/unitar-ai-innovations-98.git

# Navigate to the project directory
cd unitar-ai-innovations-98

# Install dependencies
npm install

# Start the development server
npm run dev
```

The development server will start at `http://localhost:8080`

### Available Scripts

```sh
npm run dev          # Start development server
npm run build        # Build for production
npm run build:dev    # Build in development mode
npm run lint         # Run ESLint
npm run preview      # Preview production build locally
```

## Project Structure

```
/src
├── components/     # React components
│   └── ui/        # ShadcN UI components (48 components)
├── pages/         # Page components (Index, NotFound, PrivacyPolicy, Terms)
├── hooks/         # Custom React hooks
├── lib/           # Utility functions
├── App.tsx        # Root app component with routing
└── main.tsx       # Application entry point
```

## Deployment

This project is automatically deployed to Vercel. Any push to the main branch triggers a new deployment.

### Manual Deployment

```sh
# Build the project
npm run build

# The dist/ folder contains the production build
```

## Portfolio Applications

The website showcases 14+ production-ready applications including:

- **VIDEYE** - AI-powered video creation
- **INFINITEMIX** - AI DJ mix creator
- **INFIRADIO** - Professional music mixing
- **VIDEOBLADE** - Browser-based video editor
- **PRODUCTPHOTO** - AI product photography
- **BG-REMOVE-PRO** - Background removal tool
- **SITECLONE PRO** - Website recreation tool
- **KEY OF SONG** - Music analysis platform (Live at https://www.keyofsong.com/)
- And more...

## Contributing

For development guidelines and contribution instructions, see [CLAUDE.md](./CLAUDE.md).

## License

Proprietary - UNITAR AI Innovations © 2024-2026

## Contact

- **Email**: contact@unitar.app
- **Website**: Coming soon
