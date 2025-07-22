'use client';

import React, { useEffect } from 'react';
import { useParams } from 'next/navigation';
import InvoiceDetail from '@/components/invoices/InvoiceDetail';
import { sampleInvoices } from '@/lib/data';

export default function PrintPage() {
  const params = useParams();
  const id = params.id as string;
  
  const invoice = sampleInvoices.find(inv => inv.id === id);
  
  useEffect(() => {
    // Auto-print when page loads
    const timer = setTimeout(() => {
      window.print();
    }, 1000);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!invoice) {
    return (
      <div className="min-h-screen bg-white">
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Invoice Not Found</h2>
            <p className="text-gray-600">The invoice you're trying to print doesn't exist.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white print-container">
      <InvoiceDetail invoice={invoice} isPrintView />
    </div>
  );
}