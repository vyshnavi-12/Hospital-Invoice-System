export interface Invoice {
  id: string;
  invoiceNo: string;
  visitId: string;
  date: string;
  patientName: string;
  patientId: string;
  mobile: string;
  address: string;
  doctor: string;
  paymentMode: 'Insurance' | 'Cash' | 'Card';
  patientType: 'Cash Patient' | 'Insurance Patient' | 'Corporate' | 'Charity' | 'Other';
  items: InvoiceItem[];
  grossAmount: number;
  discount: number;
  patientShare: number;
  taxAmount: number;
  netBill: number;
  billedBy: string;
  status: 'Paid' | 'Unpaid';
  paymentTxnNumber?: string;
  amountInWords: string;
}

export interface InvoiceItem {
  sno: number;
  itemCode: string;
  itemDesc: string;
  qty: number;
  grossAmount: number;
  discount: number;
  patientShare: number;
  taxAmount: number;
  netBill: number;
}

export interface OverviewData {
  period: string;
  patientType: string;
  gross: number;
  discount: number;
  netAfterDiscount: number;
  patientShare: number;
  netExcludingPatientShare: number;
}

export interface PatientWiseData {
  patientId: string;
  name: string;
  invoiceDate: string;
  invoiceNumber: string;
  patientType: string;
  doctor: string;
  gross: number;
  discount: number;
  net: number;
}

export interface FilterOptions {
  patientType: string;
  fromDate: string;
  toDate: string;
}

export type TabType = 'overview' | 'patient-wise';