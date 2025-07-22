import React from 'react';
import { Invoice } from '@/lib/types';
import Link from 'next/link';

interface InvoiceListProps {
  invoices: Invoice[];
}

const InvoiceList: React.FC<InvoiceListProps> = ({ invoices }) => {
  return (
    <div className="space-y-4">
      <h2 className="text-xl font-semibold text-gray-900">Invoices List</h2>
      
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                S.No.
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Invoice #
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Invoice Date
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Patient Name
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Doctor
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Gross Amount ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Discount ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Patient Share ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Tax Amount ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Net Bill ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Invoice Due ($)
              </th>
              <th className="px-4 py-3 text-center text-sm font-medium text-gray-700 border-b">
                Invoice Status
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Billed By
              </th>
            </tr>
          </thead>
          <tbody>
            {invoices.map((invoice, index) => (
              <tr key={invoice.id} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {index + 1}
                </td>
                <td className="px-4 py-3 text-sm text-blue-600 border-b">
                  <Link href={`/invoices/${invoice.id}`} className="hover:underline">
                    {invoice.invoiceNo}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {invoice.date}
                </td>
                <td className="px-4 py-3 text-sm text-blue-600 border-b">
                  <Link href={`/invoices/${invoice.id}`} className="hover:underline">
                    {invoice.patientName}
                  </Link>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {invoice.doctor}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.grossAmount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.discount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.patientShare.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.taxAmount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.netBill.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {invoice.status === 'Unpaid' ? invoice.netBill.toFixed(2) : '0.00'}
                </td>
                <td className="px-4 py-3 text-center border-b">
                  <span
                    className={`px-2 py-1 text-xs font-medium rounded-full ${
                      invoice.status === 'Paid'
                        ? 'bg-green-100 text-green-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {invoice.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {invoice.billedBy}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between">
        <span className="text-sm text-gray-700">
          1 - {invoices.length} of {invoices.length}
        </span>
        <div className="flex gap-2">
          <button className="px-3 py-2 text-sm bg-gray-200 text-gray-600 rounded hover:bg-gray-300">
            Previous
          </button>
          <button className="px-3 py-2 text-sm bg-blue-600 text-white rounded hover:bg-blue-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;