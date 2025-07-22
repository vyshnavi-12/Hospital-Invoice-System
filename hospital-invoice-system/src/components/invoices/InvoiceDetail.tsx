import React from 'react';
import { Invoice } from '@/lib/types';
import Link from 'next/link';

interface InvoiceDetailProps {
  invoice: Invoice;
  isPrintView?: boolean;
}

const InvoiceDetail: React.FC<InvoiceDetailProps> = ({ invoice, isPrintView = false }) => {
  return (
    <div className="bg-white p-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="text-center mb-6">
        <h1 className="text-2xl font-bold text-gray-900">A1 Hospital</h1>
        <p className="text-sm text-gray-600">123 Main Street, Cityville, State, 123456</p>
        <p className="text-sm text-gray-600">
          Contact: +1 (555) 123-4567 | Website:{' '}
          <span className="text-blue-600">www.A1hospital.com</span>
        </p>
      </div>

      {/* Invoice Details */}
      <div className="grid grid-cols-2 gap-8 mb-6">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice Details:</h3>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span className="font-medium">Invoice No:</span>
              <span>{invoice.invoiceNo}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Visit ID:</span>
              <span>{invoice.visitId}</span>
            </div>
            <div className="flex justify-between">
              <span className="font-medium">Type of Payment Mode:</span>
              <span>{invoice.paymentMode}</span>
            </div>
          </div>
        </div>
        <div className="text-right">
          <div className="space-y-2 text-sm">
            <div>
              <span className="font-medium">Date:</span>
              <span className="ml-2">{invoice.date}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Invoice To */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Invoice To:</h3>
        <div className="space-y-2 text-sm">
          <div>
            <span className="font-medium">Patient Name:</span>
            <span className="ml-2">{invoice.patientName}</span>
          </div>
          <div>
            <span className="font-medium">Mobile:</span>
            <span className="ml-2">{invoice.mobile}</span>
          </div>
          <div>
            <span className="font-medium">Address:</span>
            <span className="ml-2">{invoice.address}</span>
          </div>
        </div>
      </div>

      {/* Invoice Type */}
      <div className="mb-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">
          Invoice: {invoice.paymentMode}
        </h3>
      </div>

      {/* Items Table */}
      <div className="mb-6">
        <table className="w-full border border-gray-300">
          <thead className="bg-gray-50">
            <tr>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">S.No.</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">Item Code</th>
              <th className="border border-gray-300 px-4 py-2 text-left text-sm font-medium">Item Desc</th>
              <th className="border border-gray-300 px-4 py-2 text-center text-sm font-medium">Qty</th>
              <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium">Gross Amount ($)</th>
              <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium">Discount ($)</th>
              <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium">Patient Share ($)</th>
              <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium">Tax Amount ($)</th>
              <th className="border border-gray-300 px-4 py-2 text-right text-sm font-medium">Net Bill ($)</th>
            </tr>
          </thead>
          <tbody>
            {invoice.items.map((item) => (
              <tr key={item.sno}>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.sno}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.itemCode}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm">{item.itemDesc}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-center">{item.qty}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-right">{item.grossAmount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-right">{item.discount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-right">{item.patientShare.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-right">{item.taxAmount.toFixed(2)}</td>
                <td className="border border-gray-300 px-4 py-2 text-sm text-right">{item.netBill.toFixed(2)}</td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-semibold">
              <td className="border border-gray-300 px-4 py-2 text-sm">Total</td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2"></td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-right">{invoice.grossAmount.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-right">{invoice.discount.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-right">{invoice.patientShare.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-right">{invoice.taxAmount.toFixed(2)}</td>
              <td className="border border-gray-300 px-4 py-2 text-sm text-right">{invoice.netBill.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Footer Details */}
      <div className="space-y-2 text-sm mb-6">
        <div className="flex justify-between">
          <span className="font-medium">Billed By:</span>
          <span>{invoice.billedBy}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Status:</span>
          <span>{invoice.status}</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Net Tax collection:</span>
          <span>0.00</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Payment Method Used:</span>
          <span>{invoice.paymentMode}</span>
        </div>
        {invoice.paymentTxnNumber && (
          <div className="flex justify-between">
            <span className="font-medium">Payment Txn number:</span>
            <span>{invoice.paymentTxnNumber}</span>
          </div>
        )}
      </div>

      {/* Amount in Words */}
      <div className="mb-6">
        <div className="bg-blue-600 text-white p-2 inline-block">
          <span className="font-medium">Amount in Words:</span>
          <span className="ml-2">{invoice.amountInWords}</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">
          For: A1 Medical Center
        </div>
      </div>

      {/* Disclaimer */}
      <div className="border-t pt-4">
        <p className="text-xs text-gray-500">
          <span className="font-medium">Disclaimer:</span> This is a system-generated invoice copy and does not require any seal or signature. 
          In case of any changes in the billed services or amount, the final invoice can be verified using our app. 
          Any excess amount paid in cash or card will be kept in the patient account. For further assistance, contact our support team.
        </p>
      </div>

      {!isPrintView && (
        <div className="mt-6 text-center">
          <p className="text-gray-600 mb-4">Thank you for visiting our facility. We wish you a healthy life with us.</p>
          <Link
            href={`/print/${invoice.id}`}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
            target="_blank"
          >
            Print Invoice
          </Link>
        </div>
      )}
    </div>
  );
};

export default InvoiceDetail;