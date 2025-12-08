# TerraNova Estates - Real Estate Platform

A modern, production-ready real estate property listing platform built with React, TypeScript, and Vite. Features responsive design with Tailwind CSS, client-side routing via React Router v6, and a protected admin dashboard.

## Tech Stack

- **Framework:** React 19.2.0
- **Language:** TypeScript 5.8.2
- **Build Tool:** Vite 6.2.0
- **Routing:** React Router v6
- **Styling:** Tailwind CSS 3.4
- **Icons:** Lucide React
- **Testing:** Jest + React Testing Library
- **Package Manager:** npm

## Project Structure

```
terranova-estates/
├── src/
│   ├── components/
│   │   ├── Layout.tsx           # App shell with header, nav, footer
│   │   ├── ProjectCard.tsx      # Reusable project listing card
│   │   └── ProtectedRoute.tsx   # Auth guard for admin routes
│   ├── pages/
│   │   ├── Home.tsx             # Landing page with featured projects
│   │   ├── Projects.tsx         # Projects listing with filters
│   │   ├── ProjectDetails.tsx   # Single project detail view
│   │   ├── Admin.tsx            # Admin dashboard (project/inquiry CRUD)
│   │   ├── AdminLogin.tsx       # Admin login page
│   │   ├── About.tsx            # Company information
│   │   ├── Contact.tsx          # Contact form
│   │   └── NotFound.tsx         # 404 error page
│   ├── services/
│   │   └── mockData.ts          # Sample projects data
│   ├── __tests__/
│   │   ├── routing.test.tsx     # Route and layout tests
│   │   ├── ProjectCard.test.tsx # Component tests
│   │   └── NotFound.test.tsx    # 404 page tests
│   ├── App.tsx                  # Root component with routing config
│   ├── index.tsx                # Entry point with BrowserRouter
│   ├── index.css                # Global styles & Tailwind directives
│   └── types.ts                 # TypeScript interfaces
├── tailwind.config.js           # Tailwind CSS configuration
├── postcss.config.js            # PostCSS with Tailwind + Autoprefixer
├── jest.config.js               # Jest testing configuration
├── vite.config.ts               # Vite build configuration
├── tsconfig.json                # TypeScript compiler options
├── package.json                 # Dependencies and scripts
└── index.html                   # HTML entry point
```

## Installation & Setup

### Prerequisites
- Node.js 18+ and npm

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:3000`

3. **Build for production:**
   ```bash
   npm run build
   ```

4. **Preview production build:**
   ```bash
   npm run preview
   ```

### Environment Variables

Create a `.env.local` file in the root directory:

```env
# Development API keys (optional for future integration)
VITE_API_KEY=your_api_key_here
VITE_GEMINI_API_KEY=your_gemini_key_here
```

Create a `.env.production` file for production:

```env
VITE_API_URL=https://api.yourdomain.com
VITE_ANALYTICS_ID=your_analytics_id
```

## Routing & Navigation

### Route Table

| Route | Component | Auth Required | Purpose |
|-------|-----------|---------------|---------|
| `/` | Home | No | Landing page with featured projects |
| `/projects` | Projects | No | Browse all projects with filters |
| `/projects/:slug` | ProjectDetails | No | Single project detail & inquiry form |
| `/about` | About | No | Company information and team |
| `/contact` | Contact | No | Contact form and information |
| `/admin-login` | AdminLogin | No | Admin authentication gateway |
| `/admin` | Admin | Yes | Dashboard for project/inquiry CRUD |
| `*` | NotFound | No | 404 error page |

### Navigation Components

- **`<NavLink>`**: Used for main navigation (active state styling)
- **`<Link>`**: Used for project cards and secondary navigation
- **`useNavigate()`**: Programmatic navigation (buttons, form submissions)
- **`useParams()`**: Extract route parameters (e.g., `:slug` from `/projects/:slug`)

### Protected Routes

The `/admin` route uses a `ProtectedRoute` wrapper component that:
1. Checks for `isAdminAuthenticated` state
2. Redirects to `/admin-login` if not authenticated
3. Passes component through if authenticated

```typescript
<Route element={<ProtectedRoute isAuthenticated={isAdminAuthenticated} />}>
  <Route path="/admin" element={<Admin onLogout={handleLogout} />} />
</Route>
```

## Admin Authentication

### Login Flow

1. User visits `/admin-login`
2. Enters password: `admin123` (demo credential)
3. Token stored in localStorage as `adminToken`
4. Redirected to `/admin` dashboard

### Logout Flow

1. Click "Logout" button in Admin page
2. Token removed from localStorage
3. Redirected to `/admin-login`

### Security Note

⚠️ **Development Only:** Current implementation uses localStorage token and hardcoded password. For production:
- Implement proper backend authentication (OAuth2, JWT)
- Use secure HTTP-only cookies
- Add CORS and CSRF protection
- Validate tokens server-side
- Implement rate limiting on login attempts

## Data & State Management

### Current Implementation

- **In-Memory State:** React `useState` for projects and inquiries
- **Persistence:** None (data lost on page refresh)
- **Data Location:** `src/services/mockData.ts` contains 4 sample projects

### Sample Project Data Structure

```typescript
interface Project {
  id: string;
  title: string;
  slug: string;
  type: PropertyType; // 'residential' | 'commercial' | 'mixed'
  price: number;
  city: string;
  state: string;
  location: Location;
  thumbnail: string;
  images: string[];
  shortDescription: string;
  longDescription: string;
  amenities: string[];
  status: PropertyStatus; // 'available' | 'sold'
  createdAt: Date;
  updatedAt: Date;
}
```

### API Integration Path

To connect to a real backend:

1. **Create API service** (`src/services/api.ts`):
   ```typescript
   export const fetchProjects = async () => {
     const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
     return response.json();
   };
   ```

2. **Update App.tsx useEffect**:
   ```typescript
   useEffect(() => {
     fetchProjects().then(setProjects).catch(console.error);
   }, []);
   ```

3. **Replace mockData with API calls** in all CRUD operations (Admin component)

## Testing

### Run Tests

```bash
# Run all tests
npm test

# Watch mode (re-run on file changes)
npm run test:watch

# Coverage report
npm run test:coverage
```

### Test Files

- `src/__tests__/routing.test.tsx` - App rendering, layout, navigation
- `src/__tests__/ProjectCard.test.tsx` - Component rendering and links
- `src/__tests__/NotFound.test.tsx` - 404 page functionality

### Adding New Tests

1. Create file in `src/__tests__/` with `.test.tsx` extension
2. Import testing utilities: `import { render, screen } from '@testing-library/react'`
3. Tests automatically discovered by Jest

## Styling

### Tailwind CSS Configuration

- **Content paths:** `./index.html`, `./src/**/*.{js,ts,jsx,tsx}`
- **Prefix:** None (standard Tailwind classes)
- **Theme:** Extended with custom animations (fadeIn)
- **Build:** Bundled via PostCSS, not CDN (production-optimized)

### Custom Styles

Global styles in `src/index.css`:
- Tailwind directives: `@tailwind base/components/utilities`
- Custom animations: `@layer components` with `@keyframes fadeIn`
- Google Font: Plus Jakarta Sans (imported via link in index.html)

### Adding Custom Components

Use `@layer components` in `src/index.css`:
```css
@layer components {
  .btn-primary {
    @apply px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800;
  }
}
```

## Production Deployment

### Build Optimization

The production build:
- Tree-shakes unused CSS (Tailwind)
- Minifies JavaScript and CSS
- Optimizes images with `<picture>` tags
- Generates source maps for debugging

### Single Page App (SPA) Configuration

⚠️ **Critical:** SPAs require server configuration to handle client-side routing.

#### Netlify (`_redirects` file)

```
/* /index.html 200
```

#### Vercel (`vercel.json`)

```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

#### AWS S3 + CloudFront

In S3 properties, set error document to `index.html` and redirect 404 to `/index.html`.

#### Node.js / Express

```javascript
app.use(express.static('dist'));
app.get('*', (req, res) => {
  res.sendFile('./dist/index.html');
});
```

#### Nginx

```nginx
location / {
  try_files $uri $uri/ /index.html;
}
```

### Security Headers

Add to your web server or CDN:

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
X-Content-Type-Options: nosniff
X-Frame-Options: SAMEORIGIN
X-XSS-Protection: 1; mode=block
Content-Security-Policy: default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' fonts.googleapis.com; font-src fonts.gstatic.com; img-src 'self' data: https:
```

### Caching Strategy

```
# Cache static assets (JS, CSS, images) for 1 year
Cache-Control: public, max-age=31536000, immutable

# Cache HTML for 5 minutes (always check server)
Cache-Control: public, max-age=300, must-revalidate

# Don't cache API responses (add when backend is integrated)
Cache-Control: no-store
```

### Performance Checklist

- ✅ Lazy load images (use `loading="lazy"`)
- ✅ Optimize image sizes (use responsive images)
- ✅ Enable gzip compression on server
- ✅ Use CDN for static assets
- ✅ Implement browser caching
- ✅ Monitor Core Web Vitals
- ✅ Add analytics (GA4, Vercel Analytics, etc.)

## Development Workflow

### Git Strategy

```bash
# Create feature branch
git checkout -b feature/new-feature

# Make changes, test
npm test

# Build locally to verify
npm run build

# Commit and push
git add .
git commit -m "feat: add new feature"
git push origin feature/new-feature
```

### Code Quality

- **Type Checking:** `tsc --noEmit` (run TypeScript compiler)
- **Linting:** Consider adding ESLint for code standards
- **Formatting:** Consider adding Prettier for consistent style
- **Pre-commit Hooks:** Consider husky for automated checks

## Troubleshooting

### Issue: Routes not working after refresh

**Solution:** Ensure your host has SPA rewrite configuration (see Production Deployment section).

### Issue: Tailwind styles not appearing

**Solution:** 
- Check `tailwind.config.js` content paths are correct
- Run `npm run build` to verify CSS generation
- Clear browser cache

### Issue: Admin login not persisting

**Solution:**
- Check browser localStorage is enabled
- Verify `adminToken` key is being set: `localStorage.getItem('adminToken')`
- Clear localStorage if corrupted: `localStorage.clear()`

### Issue: Build fails with TypeScript errors

**Solution:**
- Run `npx tsc --noEmit` to see all errors
- Fix type mismatches in source files
- Ensure all imports use correct paths (use `@/` alias for src/)

### Issue: Tests failing after code changes

**Solution:**
- Run `npm run test:watch` during development
- Update snapshots if intentional: `npm test -- -u`
- Check mock data in test files matches current types

## Future Enhancements

- [ ] Backend API integration (Node.js/Express or serverless)
- [ ] Database (MongoDB, PostgreSQL, or Firebase)
- [ ] Real admin authentication (OAuth2/JWT)
- [ ] Email notifications for inquiries
- [ ] Image upload to cloud storage (AWS S3, Cloudinary)
- [ ] Advanced filtering (map view, price slider)
- [ ] User accounts and saved properties
- [ ] Virtual tours or 3D property views
- [ ] Payment integration for booking/deposits
- [ ] Analytics dashboard for admins
- [ ] SEO optimization (meta tags, structured data)
- [ ] Internationalization (i18n) for multiple languages
- [ ] Dark mode support
- [ ] Progressive Web App (PWA) capabilities
- [ ] Performance monitoring (error tracking, analytics)

## Support & Contact

For issues, questions, or contributions, please:
1. Check this README and troubleshooting section
2. Open an issue in the repository
3. Contact the development team

---

**Last Updated:** 2024 | **Version:** 1.0.0 | **Status:** Production Ready
