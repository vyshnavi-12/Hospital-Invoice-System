# Hospital Invoice Management System

A comprehensive hospital invoice management system built with Next.js, TypeScript, and Tailwind CSS.
[Visit Site](https://hospital-invoice-system-erls.vercel.app/dashboard)

## 🚀 Features

- **Dashboard with Two Tabs**
  - Overview: Period-wise breakdown with totals
  - Patient-Wise: Individual patient invoice details

- **Invoice Management**
  - Complete invoice list with filtering
  - Detailed invoice view
  - Print functionality for both Cash and Insurance invoices

- **Responsive Design**
  - Fully responsive across all screen sizes
  - Clean, modern UI with Tailwind CSS
  - Print-friendly invoice layouts

- **Filter Functionality**
  - Filter by Patient Type (Cash Patient, Insurance Patient, Corporate, Charity, Other)
  - Date range filtering
  - Real-time filter application

## 🛠️ Tech Stack

- **Frontend**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: React Icons
- **State Management**: React Hooks (useState, useMemo)

## 📁 Project Structure

```
hospital-invoice-system/
├── src/
│   ├── app/                    # Next.js App Router pages
│   │   ├── dashboard/          # Dashboard page with tabs
│   │   ├── invoices/           # Invoice list and detail pages
│   │   ├── print/              # Print-friendly invoice pages
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   └── page.tsx            # Homepage (redirects to dashboard)
│   ├── components/             # Reusable components
│   │   ├── ui/                 # Basic UI components
│   │   ├── dashboard/          # Dashboard-specific components
│   │   ├── invoices/           # Invoice-related components
│   │   └── layout/             # Layout components
│   ├── lib/                    # Utilities and data
│   │   ├── data.ts             # Mock data
│   │   ├── types.ts            # TypeScript interfaces
│   │   └── utils.ts            # Utility functions
│   └── hooks/                  # Custom React hooks
│       └── useFilters.ts       # Filtering logic hook
└── public/                     # Static assets
```
## My Learning Process

### Challenges I Faced
- Initially struggled with the date filtering logic
- Had to research proper TypeScript interfaces for invoice data
- Learned about Tailwind responsive design while building this
- struggled with app routing in next.js initially
  
### Technologies I Learned
- Next.js 14 App Router (was new to me)
- Advanced Tailwind CSS layouts
- TypeScript interfaces (was new to me)

## 🚦 Getting Started

### Prerequisites

- Node.js 18.0 or later
- npm, yarn, or pnpm

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd hospital-invoice-system
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Run the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000/](http://localhost:3000/)

## 🔧 Build and Deploy

### Build for Production
```bash
npm run build
npm start
```

**Note**: This project uses mock data for demonstration. In a production environment, replace the mock data with actual API calls to your backend system.
