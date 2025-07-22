'use client';

import React, { useState } from 'react';
import Header from '@/components/ui/Header';
import Navigation from '@/components/layout/Navigation';
import Overview from '@/components/dashboard/Overview';
import PatientWise from '@/components/dashboard/PatientWise';
import DatePicker from '@/components/ui/DatePicker';
import Select from '@/components/ui/Select';
import Button from '@/components/ui/Button';
import { TabType, FilterOptions } from '@/lib/types';
import { overviewData, patientWiseData, patientTypes, totals, patientWiseTotals } from '@/lib/data';
import { useFilters } from '@/hooks/useFilters';
import Link from 'next/link';

export default function DashboardPage() {
  const [activeTab, setActiveTab] = useState<TabType>('overview');
  
  const initialFilters: FilterOptions = {
    patientType: 'All',
    fromDate: '2025-07-01',
    toDate: '2025-07-31'
  };

  const overviewFilters = useFilters(
    overviewData,
    initialFilters,
    (item, filters) => {
      if (filters.patientType !== 'All' && item.patientType !== filters.patientType) {
        return false;
      }
      // Add date filtering logic here if needed
      return true;
    }
  );

  const patientWiseFilters = useFilters(
    patientWiseData,
    initialFilters,
    (item, filters) => {
      if (filters.patientType !== 'All' && item.patientType !== filters.patientType) {
        return false;
      }
      // Add date filtering logic here if needed
      return true;
    }
  );

  const currentFilters = activeTab === 'overview' ? overviewFilters : patientWiseFilters;

  const handleApplyFilter = () => {
    // Filter logic is automatically applied through the useFilters hook
    console.log('Filters applied:', currentFilters.filters);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 py-6">
        {/* Filter Section */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <Select
              label="Filter by Patient Type:"
              value={currentFilters.filters.patientType}
              onChange={(value) => currentFilters.updateFilter('patientType', value)}
              options={patientTypes}
            />
          </div>
          
          <div className="flex items-center gap-4">
            <Link
              href="/invoices"
              className="text-[#4B928F] hover:text-[#4B928F] text-sm font-medium"
            >
              View All Invoices →
            </Link>
          </div>
        </div>

        {/* Tabs Navigation */}
        <Navigation activeTab={activeTab} onTabChange={setActiveTab} />

        {/* Date Filters */}
        <div className="flex items-center gap-4 mt-6 mb-6">
          <DatePicker
            label="From:"
            value={currentFilters.filters.fromDate}
            onChange={(value) => currentFilters.updateFilter('fromDate', value)}
          />
          <DatePicker
            label="To:"
            value={currentFilters.filters.toDate}
            onChange={(value) => currentFilters.updateFilter('toDate', value)}
          />
          <Button onClick={handleApplyFilter}>
            Apply Filter
          </Button>
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          {activeTab === 'overview' ? (
            <Overview 
              data={overviewFilters.filteredData} 
              totals={totals}
            />
          ) : (
            <PatientWise 
              data={patientWiseFilters.filteredData} 
              totals={patientWiseTotals}
            />
          )}
        </div>
      </div>
    </div>
  );
}