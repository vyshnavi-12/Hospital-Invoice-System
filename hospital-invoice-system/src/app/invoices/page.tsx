'use client';

import React from 'react';
import Header from '@/components/ui/Header';
import InvoiceList from '@/components/invoices/InvoiceList';
import DatePicker from '@/components/ui/DatePicker';
import Button from '@/components/ui/Button';
import { sampleInvoices } from '@/lib/data';
import { FilterOptions } from '@/lib/types';
import { useFilters } from '@/hooks/useFilters';
import Link from 'next/link';

export default function InvoicesPage() {
  const initialFilters: FilterOptions = {
    patientType: 'All',
    fromDate: '2025-07-19',
    toDate: '2025-07-20'
  };

  const invoiceFilters = useFilters(
    sampleInvoices,
    initialFilters,
    (invoice, filters) => {
      // Add filtering logic based on date range and other criteria
      return true;
    }
  );

  const handleApplyFilter = () => {
    console.log('Invoice filters applied:', invoiceFilters.filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header showUserInfo showExportButtons />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Navigation Link */}
        <div className="mb-4">
          <Link
            href="/dashboard"
            className="text-[#4B928F] hover:text-[#4B928F] text-sm font-medium"
          >
            ← Back to Dashboard
          </Link>
        </div>

        {/* Filter Section */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-6">
          <div className="flex items-center gap-4 mb-4">
            <DatePicker
              label="From:"
              value={invoiceFilters.filters.fromDate}
              onChange={(value) => invoiceFilters.updateFilter('fromDate', value)}
            />
            <DatePicker
              label="To:"
              value={invoiceFilters.filters.toDate}
              onChange={(value) => invoiceFilters.updateFilter('toDate', value)}
            />
            <Button onClick={handleApplyFilter}>
              Apply
            </Button>
          </div>
        </div>

        {/* Invoice List */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <InvoiceList invoices={invoiceFilters.filteredData} />
        </div>
      </div>
    </div>
  );
}