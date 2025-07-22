import { useState, useMemo } from 'react';
import { FilterOptions } from '@/lib/types';

export function useFilters<T>(
  data: T[],
  initialFilters: FilterOptions,
  filterFunction: (item: T, filters: FilterOptions) => boolean
) {
  const [filters, setFilters] = useState<FilterOptions>(initialFilters);

  const filteredData = useMemo(() => {
    return data.filter(item => filterFunction(item, filters));
  }, [data, filters, filterFunction]);

  const updateFilter = (key: keyof FilterOptions, value: string) => {
    setFilters(prev => ({
      ...prev,
      [key]: value
    }));
  };

  const resetFilters = () => {
    setFilters(initialFilters);
  };

  return {
    filters,
    filteredData,
    updateFilter,
    resetFilters,
    setFilters
  };
}