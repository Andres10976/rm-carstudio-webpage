# RM Car Studio Website

A modern, responsive website for a professional car detailing service built with Next.js 15, React 19, and TypeScript. The site features smooth animations, dynamic content loading, and a clean, professional design focused on showcasing premium automotive services.

## 🚀 Features

- Modern, responsive design with smooth animations using Framer Motion
- Server-side rendering with Next.js 15
- TypeScript support for enhanced type safety
- Integrated contact form with email service (Resend)
- WhatsApp integration for direct customer communication
- Video gallery integration with YouTube
- Appointment scheduling through Calendly
- Custom UI components with Tailwind CSS
- SEO optimized structure

## 🏗 Technical Architecture

### Core Technologies

- Next.js 15.1.3 (App Router)
- React 19.0.0
- TypeScript 5.7.2
- Tailwind CSS 3.4.1
- Framer Motion for animations
- Resend for email service

### Design Patterns

- Component-based architecture
- Context API for state management (NavbarContext)
- Responsive design with mobile-first approach
- Custom hook patterns
- Server Actions for form handling

### Project Structure

```
├── app/
│   ├── api/
│   │   └── contact/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── layout/
│   ├── sections/
│   └── ui/
├── lib/
│   ├── constants.tsx
│   ├── navbar-context.tsx
│   └── utils.ts
└── public/
```

## 🛠 Setup & Installation

### Prerequisites

- Node.js 18.0.0 or higher
- npm, yarn, or pnpm package manager

### Installation Steps

1. Clone the repository:

```bash
git clone [repository-url]
cd car-detail-website
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
   Create a `.env.local` file in the root directory with:

```env
RESEND_API_KEY=your_resend_api_key
CONTACT_EMAIL=your_contact_email
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

## 📡 API Documentation

### Contact Form Endpoint

`POST /api/contact`

Request body:

```typescript
{
  name: string;
  email: string;
  phone?: string;
  message: string;
}
```

Response:

```typescript
{
  success: boolean;
  message?: string;
  error?: string;
}
```

## 🧪 Testing

The project uses React Testing Library for component testing. Run tests with:

```bash
npm run test
# or
yarn test
```

## 📦 Deployment

The project is optimized for deployment on Vercel:

1. Connect your GitHub repository to Vercel
2. Configure environment variables in Vercel dashboard
3. Deploy using Vercel's automatic deployment

### Manual Deployment

```bash
npm run build
npm run start
```

## ⚡ Performance Considerations

- Images are optimized using Next.js Image component
- Font optimization with next/font
- Code splitting and lazy loading
- Server-side rendering for improved SEO
- Optimized animations with Framer Motion

## 🔒 Security Measures

- Environment variables for sensitive data
- Input validation on contact form
- CORS headers configuration
- CSP headers implementation
- Rate limiting on API routes

## ⚠️ Known Limitations

- YouTube embeds may affect performance on slow connections
- Calendar integration limited to Calendly features
- Contact form requires server-side email service

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Create a Pull Request

### Development Guidelines

- Follow TypeScript best practices
- Use conventional commits
- Maintain component documentation
- Write tests for new features

## 🔧 Troubleshooting

Common issues and solutions:

1. **Build Errors**

   - Clear `.next` folder
   - Delete `node_modules` and reinstall

2. **API Errors**

   - Verify environment variables
   - Check Resend API key validity

3. **Styling Issues**
   - Run Tailwind build process
   - Clear browser cache

## 📄 License

MIT License - see LICENSE file for details
