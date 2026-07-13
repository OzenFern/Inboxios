# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project follows [Semantic Versioning](https://semver.org/).

---

## [1.0.0] - 2026-07-12

### Added

#### Backend

- Express 5 application
- Layered architecture (Routes → Controllers → Services)
- Axios-powered Notion REST API integration
- Environment variable configuration
- Database schema validation during startup
- Method Override support for HTML forms
- Morgan request logging
- Helmet security middleware
- Compression middleware
- Static asset caching

#### Frontend

- Server-side rendering with EJS
- Responsive layout
- Catppuccin Mocha theme
- Glassmorphism UI
- Gradient cards and typography
- Native HTML `<dialog>` support
- CSS animations
- Keyboard-accessible interface
- Custom scrollbar

#### Task Management

- Create tasks
- Edit tasks
- Delete tasks
- Status management
- Due dates
- Status filtering
- Persistent filter selection using Local Storage

#### Styling

- CSS Container Queries
- `@starting-style`
- `color-mix()`
- Modern CSS utilities
- View Transition support

#### Testing

- Vitest setup
- Task mapper tests
- Database validation tests

### Planned

- Offline task cache
- Search
- Authentication
- User accounts
- Light theme
- Settings page
- Improved offline support
- Better UI & UX

---

## Upcoming

### Planned

- Authentication
- Search
- Offline-first local cache
- Multi-user support
- Light Mode
- Settings page
- Performance improvements
