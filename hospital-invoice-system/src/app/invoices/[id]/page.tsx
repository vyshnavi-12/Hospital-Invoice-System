'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import Header from '@/components/ui/Header';
import InvoiceDetail from '@/components/invoices/InvoiceDetail';
import { sampleInvoices } from '@/lib/data';
import Link from 'next/link';

export default function InvoiceDetailPage() {
  const params = useParams();
  const id = params.id as string;
  
  const invoice = sampleInvoices.find(inv => inv.id === id);
  
  if (!invoice) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="max-w-4xl mx-auto px-4 py-8">
          <div className="bg-white rounded-lg shadow-sm p-8 text-center">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Invoice Not Found</h2>
            <p className="text-gray-600 mb-6">The invoice you're looking for doesn't exist.</p>
            <Link
              href="/invoices"
              className="bg-[#4B928F] text-white px-4 py-2 rounded hover:bg-[#4B928F] transition-colors"
            >
              Back to Invoices
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-5xl mx-auto px-4 py-6">
        {/* Navigation */}
        <div className="mb-6">
          <Link
            href="/invoices"
            className="text-[#4B928F] hover:text-[#4B928F] text-sm font-medium"
          >
            ← Back to Invoice List
          </Link>
        </div>

        {/* Invoice Detail */}
        <div className="bg-white rounded-lg shadow-sm">
          <InvoiceDetail invoice={invoice} />
        </div>
      </div>
    </div>
  );
}