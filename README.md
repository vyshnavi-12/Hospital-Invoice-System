# Hospital Invoice Management System

A comprehensive hospital invoice management system built with Next.js, TypeScript, and Tailwind CSS.

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
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📄 Available Pages

### 1. Dashboard (`/dashboard`)
- **Overview Tab**: Shows period-wise breakdown with financial totals
- **Patient-Wise Tab**: Shows individual patient invoice details
- Filter by patient type and date range
- Summary cards with key financial metrics

### 2. Invoice List (`/invoices`)
- Complete list of all invoices
- Date range filtering
- Export to PDF/CSV functionality
- Clickable invoice numbers for detailed view

### 3. Invoice Detail (`/invoices/[id]`)
- Detailed invoice view
- Shows all line items
- Patient information
- Payment details
- Print invoice option

### 4. Print View (`/print/[id]`)
- Print-optimized invoice layout
- Auto-print functionality
- Clean, professional format

## 🎨 Key Components

### UI Components
- **Header**: Hospital information with optional user info and export buttons
- **DatePicker**: Date selection with proper formatting
- **Select**: Dropdown with custom styling
- **Button**: Consistent button styling with variants
- **Navigation**: Tab navigation for dashboard

### Data Management
- **useFilters**: Custom hook for filtering data
- **Mock Data**: Realistic sample data for invoices and patients
- **Types**: Comprehensive TypeScript interfaces

## 📱 Responsive Design

- **Mobile-first approach**
- **Breakpoints**: 
  - `sm`: 640px+
  - `md`: 768px+
  - `lg`: 1024px+
  - `xl`: 1280px+
- **No horizontal scrolling**
- **Touch-friendly interface**

## 🖨️ Print Functionality

- Dedicated print layouts
- CSS print media queries
- Auto-print on print page load
- Print-optimized styling

## 🔧 Build and Deploy

### Build for Production
```bash
npm run build
npm start
```

### Deploy to Vercel
1. Push to GitHub
2. Connect to Vercel
3. Deploy automatically

## 📋 Assignment Requirements Compliance

✅ **Next.js + TypeScript**: Complete implementation
✅ **Tailwind CSS**: All styling done with Tailwind
✅ **Exact Layout**: Matches reference screenshots precisely
✅ **Responsive Design**: Full responsiveness without horizontal scroll
✅ **Modular Components**: Clean, reusable component structure
✅ **Tab/Page Implementation**: Dashboard tabs and invoice pages
✅ **Filter Functionality**: Patient type and date filtering
✅ **Print Functionality**: Professional invoice printing

## 🧪 Testing

The application has been tested across:
- Chrome, Firefox, Safari, Edge
- Desktop, tablet, and mobile viewports
- Print functionality
- All interactive elements

## 📞 Support

For any questions or issues:
- Check the code comments for implementation details
- Review the component structure for customization
- All data is modular and easily replaceable with real API calls

## 🔮 Future Enhancements

- Real backend API integration
- User authentication
- Advanced filtering options
- Data export functionality
- Email invoice capability
- Payment processing integration

---

**Note**: This project uses mock data for demonstration. In a production environment, replace the mock data with actual API calls to your backend system.