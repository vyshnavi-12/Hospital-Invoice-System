import React from 'react';
import { OverviewData } from '@/lib/types';
import { formatCurrency } from '@/lib/utils';

interface OverviewProps {
  data: OverviewData[];
  totals: {
    totalGross: number;
    totalDiscount: number;
    totalNetAfterDiscount: number;
    totalPatientShare: number;
    totalNetExcludingPatientShare: number;
  };
}

const Overview: React.FC<OverviewProps> = ({ data, totals }) => {
  return (
    <div className="space-y-6">
      {/* Summary Cards */}
      <div className="bg-gray-50 p-6 rounded-lg">
        <div className="space-y-3">
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Gross:</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(totals.totalGross)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Discount:</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(totals.totalDiscount)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Net (after Discount):</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(totals.totalNetAfterDiscount)}
            </span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-sm text-gray-600">Total Patient Share:</span>
            <span className="text-lg font-semibold text-gray-900">
              {formatCurrency(totals.totalPatientShare)}
            </span>
          </div>
          <div className="flex justify-between items-center border-t pt-3">
            <span className="text-sm text-gray-600 font-medium">Total Net (excluding Patient Share):</span>
            <span className="text-lg font-bold text-gray-900">
              {formatCurrency(totals.totalNetExcludingPatientShare)}
            </span>
          </div>
        </div>
      </div>

      {/* Data Table */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 rounded-lg">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Period
              </th>
              <th className="px-4 py-3 text-left text-sm font-medium text-gray-700 border-b">
                Patient Type
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Gross ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Discount ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Net (after Discount) ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Patient Share ($)
              </th>
              <th className="px-4 py-3 text-right text-sm font-medium text-gray-700 border-b">
                Net (excluding Patient Share) ($)
              </th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {row.period}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b">
                  {row.patientType}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {row.gross.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {row.discount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {row.netAfterDiscount.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {row.patientShare.toFixed(2)}
                </td>
                <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                  {row.netExcludingPatientShare.toFixed(2)}
                </td>
              </tr>
            ))}
            <tr className="bg-gray-50 font-semibold">
              <td className="px-4 py-3 text-sm text-gray-900 border-b">Total</td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b">-</td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                {totals.totalGross.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                {totals.totalDiscount.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                {totals.totalNetAfterDiscount.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                {totals.totalPatientShare.toFixed(2)}
              </td>
              <td className="px-4 py-3 text-sm text-gray-900 border-b text-right">
                {totals.totalNetExcludingPatientShare.toFixed(2)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Overview;