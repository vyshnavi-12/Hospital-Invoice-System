import { Invoice, OverviewData, PatientWiseData } from './types';

export const sampleInvoices: Invoice[] = [
  {
    id: '1',
    invoiceNo: 'INV2025-001',
    visitId: 'VID12345',
    date: '20 July 2025',
    patientName: 'John Doe',
    patientId: 'P001',
    mobile: '+1 (555) 987-6543',
    address: '789 Elm Street, Cityville, State',
    doctor: 'Dr. Smith',
    paymentMode: 'Insurance',
    patientType: 'Insurance Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED201',
        itemDesc: 'MRI Scan',
        qty: 1,
        grossAmount: 1200.00,
        discount: 200.00,
        patientShare: 90.00,
        taxAmount: 0.00,
        netBill: 910.00
      }
    ],
    grossAmount: 1200.00,
    discount: 200.00,
    patientShare: 90.00,
    taxAmount: 0.00,
    netBill: 910.00,
    billedBy: 'EMP1099',
    status: 'Paid',
    paymentTxnNumber: 'XX123**',
    amountInWords: 'We will proceed the net outstanding of $910.00 with patient\'s Insurance'
  },
  {
    id: '2',
    invoiceNo: 'INV529',
    visitId: 'VID12346',
    date: 'Jun 01, 2022',
    patientName: 'Smith, Emily [1001]',
    patientId: 'P002',
    mobile: '+1 (555) 123-4567',
    address: '123 Main Street, Cityville, State',
    doctor: 'Dr. John Hardy',
    paymentMode: 'Insurance',
    patientType: 'Insurance Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED202',
        itemDesc: 'Blood Test',
        qty: 1,
        grossAmount: 500.00,
        discount: 50.00,
        patientShare: 450.00,
        taxAmount: 20.00,
        netBill: 470.00
      }
    ],
    grossAmount: 500.00,
    discount: 50.00,
    patientShare: 450.00,
    taxAmount: 20.00,
    netBill: 470.00,
    billedBy: 'EMP1099',
    status: 'Paid',
    paymentTxnNumber: 'YY456**',
    amountInWords: 'We have received the net amount of $470.00 via insurance from the patient'
  },
  {
    id: '3',
    invoiceNo: 'INV528',
    visitId: 'VID12347',
    date: 'Jun 02, 2022',
    patientName: 'Smith, Jonathan [1002]',
    patientId: 'P003',
    mobile: '+1 (555) 789-0123',
    address: '456 Oak Avenue, Cityville, State',
    doctor: 'Dr. Sarah Lee',
    paymentMode: 'Cash',
    patientType: 'Cash Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED203',
        itemDesc: 'X-Ray',
        qty: 1,
        grossAmount: 300.00,
        discount: 30.00,
        patientShare: 270.00,
        taxAmount: 15.00,
        netBill: 285.00
      }
    ],
    grossAmount: 300.00,
    discount: 30.00,
    patientShare: 270.00,
    taxAmount: 15.00,
    netBill: 285.00,
    billedBy: 'EMP1100',
    status: 'Unpaid',
    paymentTxnNumber: 'ZZ789**',
    amountInWords: 'We have received the net amount of $285.00 via cash from the patient'
  },
  {
    id: '4',
    invoiceNo: 'INV2025-002',
    visitId: 'VID12348',
    date: '19 July 2025',
    patientName: 'Maria Garcia',
    patientId: 'P004',
    mobile: '+1 (555) 456-7890',
    address: '321 Pine Street, Cityville, State',
    doctor: 'Dr. Michael Johnson',
    paymentMode: 'Card',
    patientType: 'Corporate',
    items: [
      {
        sno: 1,
        itemCode: 'MED204',
        itemDesc: 'CT Scan',
        qty: 1,
        grossAmount: 800.00,
        discount: 100.00,
        patientShare: 0.00,
        taxAmount: 35.00,
        netBill: 735.00
      },
      {
        sno: 2,
        itemCode: 'MED205',
        itemDesc: 'Consultation Fee',
        qty: 1,
        grossAmount: 150.00,
        discount: 0.00,
        patientShare: 0.00,
        taxAmount: 7.50,
        netBill: 157.50
      }
    ],
    grossAmount: 950.00,
    discount: 100.00,
    patientShare: 0.00,
    taxAmount: 42.50,
    netBill: 892.50,
    billedBy: 'EMP1101',
    status: 'Paid',
    paymentTxnNumber: 'AA892**',
    amountInWords: 'We have received the net amount of $892.50 via card from the corporate account'
  },
  {
    id: '5',
    invoiceNo: 'INV2025-003',
    visitId: 'VID12349',
    date: '18 July 2025',
    patientName: 'Robert Wilson',
    patientId: 'P005',
    mobile: '+1 (555) 234-5678',
    address: '654 Cedar Lane, Cityville, State',
    doctor: 'Dr. Lisa Chen',
    paymentMode: 'Cash',
    patientType: 'Cash Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED206',
        itemDesc: 'Ultrasound',
        qty: 1,
        grossAmount: 250.00,
        discount: 25.00,
        patientShare: 225.00,
        taxAmount: 11.25,
        netBill: 236.25
      }
    ],
    grossAmount: 250.00,
    discount: 25.00,
    patientShare: 225.00,
    taxAmount: 11.25,
    netBill: 236.25,
    billedBy: 'EMP1102',
    status: 'Paid',
    paymentTxnNumber: 'BB236**',
    amountInWords: 'We have received the net amount of $236.25 via cash from the patient'
  },
  {
    id: '6',
    invoiceNo: 'INV2025-004',
    visitId: 'VID12350',
    date: '17 July 2025',
    patientName: 'Jennifer Brown [CHR001]',
    patientId: 'P006',
    mobile: '+1 (555) 345-6789',
    address: '987 Maple Drive, Cityville, State',
    doctor: 'Dr. David Miller',
    paymentMode: 'Insurance',
    patientType: 'Charity',
    items: [
      {
        sno: 1,
        itemCode: 'MED207',
        itemDesc: 'ECG Test',
        qty: 1,
        grossAmount: 100.00,
        discount: 80.00,
        patientShare: 20.00,
        taxAmount: 0.00,
        netBill: 20.00
      },
      {
        sno: 2,
        itemCode: 'MED208',
        itemDesc: 'Basic Blood Panel',
        qty: 1,
        grossAmount: 180.00,
        discount: 150.00,
        patientShare: 30.00,
        taxAmount: 0.00,
        netBill: 30.00
      }
    ],
    grossAmount: 280.00,
    discount: 230.00,
    patientShare: 50.00,
    taxAmount: 0.00,
    netBill: 50.00,
    billedBy: 'EMP1103',
    status: 'Paid',
    paymentTxnNumber: 'CC050**',
    amountInWords: 'We have received the net amount of $50.00 via charity fund assistance'
  },
  {
    id: '7',
    invoiceNo: 'INV2025-005',
    visitId: 'VID12351',
    date: '16 July 2025',
    patientName: 'Michael Davis',
    patientId: 'P007',
    mobile: '+1 (555) 567-8901',
    address: '159 Birch Avenue, Cityville, State',
    doctor: 'Dr. Amanda Taylor',
    paymentMode: 'Insurance',
    patientType: 'Insurance Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED209',
        itemDesc: 'Orthopedic Consultation',
        qty: 1,
        grossAmount: 200.00,
        discount: 20.00,
        patientShare: 36.00,
        taxAmount: 9.00,
        netBill: 189.00
      },
      {
        sno: 2,
        itemCode: 'MED210',
        itemDesc: 'Knee X-Ray',
        qty: 2,
        grossAmount: 300.00,
        discount: 30.00,
        patientShare: 54.00,
        taxAmount: 13.50,
        netBill: 283.50
      }
    ],
    grossAmount: 500.00,
    discount: 50.00,
    patientShare: 90.00,
    taxAmount: 22.50,
    netBill: 472.50,
    billedBy: 'EMP1104',
    status: 'Unpaid',
    paymentTxnNumber: 'DD472**',
    amountInWords: 'We will proceed the net outstanding of $472.50 with patient\'s Insurance'
  },
  {
    id: '8',
    invoiceNo: 'INV2025-006',
    visitId: 'VID12352',
    date: '15 July 2025',
    patientName: 'Sarah Thompson [CRP002]',
    patientId: 'P008',
    mobile: '+1 (555) 678-9012',
    address: '753 Willow Street, Cityville, State',
    doctor: 'Dr. Kevin Rodriguez',
    paymentMode: 'Card',
    patientType: 'Corporate',
    items: [
      {
        sno: 1,
        itemCode: 'MED211',
        itemDesc: 'Annual Health Checkup',
        qty: 1,
        grossAmount: 400.00,
        discount: 60.00,
        patientShare: 0.00,
        taxAmount: 17.00,
        netBill: 357.00
      },
      {
        sno: 2,
        itemCode: 'MED212',
        itemDesc: 'Vaccinations',
        qty: 1,
        grossAmount: 120.00,
        discount: 0.00,
        patientShare: 0.00,
        taxAmount: 6.00,
        netBill: 126.00
      }
    ],
    grossAmount: 520.00,
    discount: 60.00,
    patientShare: 0.00,
    taxAmount: 23.00,
    netBill: 483.00,
    billedBy: 'EMP1105',
    status: 'Paid',
    paymentTxnNumber: 'EE483**',
    amountInWords: 'We have received the net amount of $483.00 via card from the corporate account'
  },
  {
    id: '9',
    invoiceNo: 'INV2025-007',
    visitId: 'VID12353',
    date: '14 July 2025',
    patientName: 'Daniel Martinez',
    patientId: 'P009',
    mobile: '+1 (555) 789-0123',
    address: '852 Spruce Road, Cityville, State',
    doctor: 'Dr. Rachel Green',
    paymentMode: 'Cash',
    patientType: 'Other',
    items: [
      {
        sno: 1,
        itemCode: 'MED213',
        itemDesc: 'Emergency Room Visit',
        qty: 1,
        grossAmount: 600.00,
        discount: 50.00,
        patientShare: 550.00,
        taxAmount: 27.50,
        netBill: 577.50
      }
    ],
    grossAmount: 600.00,
    discount: 50.00,
    patientShare: 550.00,
    taxAmount: 27.50,
    netBill: 577.50,
    billedBy: 'EMP1106',
    status: 'Unpaid',
    paymentTxnNumber: 'FF577**',
    amountInWords: 'We have received the net amount of $577.50 via cash from the patient'
  },
  {
    id: '10',
    invoiceNo: 'INV2025-008',
    visitId: 'VID12354',
    date: '13 July 2025',
    patientName: 'Lisa Anderson',
    patientId: 'P010',
    mobile: '+1 (555) 890-1234',
    address: '741 Aspen Court, Cityville, State',
    doctor: 'Dr. Thomas White',
    paymentMode: 'Insurance',
    patientType: 'Insurance Patient',
    items: [
      {
        sno: 1,
        itemCode: 'MED214',
        itemDesc: 'Cardiology Consultation',
        qty: 1,
        grossAmount: 300.00,
        discount: 45.00,
        patientShare: 51.00,
        taxAmount: 12.75,
        netBill: 318.75
      },
      {
        sno: 2,
        itemCode: 'MED215',
        itemDesc: 'Stress Test',
        qty: 1,
        grossAmount: 450.00,
        discount: 50.00,
        patientShare: 80.00,
        taxAmount: 20.00,
        netBill: 420.00
      }
    ],
    grossAmount: 750.00,
    discount: 95.00,
    patientShare: 131.00,
    taxAmount: 32.75,
    netBill: 738.75,
    billedBy: 'EMP1107',
    status: 'Paid',
    paymentTxnNumber: 'GG738**',
    amountInWords: 'We will proceed the net outstanding of $738.75 with patient\'s Insurance'
  }
];

export const overviewData: OverviewData[] = [
  {
    period: '2025-07-20',
    patientType: 'Cash Patient',
    gross: 1800.00,
    discount: 180.00,
    netAfterDiscount: 1620.00,
    patientShare: 1520.00,
    netExcludingPatientShare: 100.00
  },
  {
    period: '2025-07-19',
    patientType: 'Corporate',
    gross: 2850.00,
    discount: 300.00,
    netAfterDiscount: 2550.00,
    patientShare: 0.00,
    netExcludingPatientShare: 2550.00
  },
  {
    period: '2025-07-18',
    patientType: 'Insurance Patient',
    gross: 3200.00,
    discount: 400.00,
    netAfterDiscount: 2800.00,
    patientShare: 450.00,
    netExcludingPatientShare: 2350.00
  },
  {
    period: '2025-07-17',
    patientType: 'Charity',
    gross: 560.00,
    discount: 460.00,
    netAfterDiscount: 100.00,
    patientShare: 100.00,
    netExcludingPatientShare: 0.00
  },
  {
    period: '2025-07-16',
    patientType: 'Insurance Patient',
    gross: 1500.00,
    discount: 150.00,
    netAfterDiscount: 1350.00,
    patientShare: 270.00,
    netExcludingPatientShare: 1080.00
  },
  {
    period: '2025-07-15',
    patientType: 'Corporate',
    gross: 1560.00,
    discount: 180.00,
    netAfterDiscount: 1380.00,
    patientShare: 0.00,
    netExcludingPatientShare: 1380.00
  },
  {
    period: '2025-07-14',
    patientType: 'Other',
    gross: 1800.00,
    discount: 150.00,
    netAfterDiscount: 1650.00,
    patientShare: 1650.00,
    netExcludingPatientShare: 0.00
  }
];

export const patientWiseData: PatientWiseData[] = [
  {
    patientId: 'P001',
    name: 'John Doe',
    invoiceDate: '20/07/2025',
    invoiceNumber: 'INV2025-001',
    patientType: 'Insurance',
    doctor: 'Dr. Smith',
    gross: 1200.00,
    discount: 200.00,
    net: 910.00
  },
  {
    patientId: 'P002',
    name: 'Emily Smith',
    invoiceDate: '01/06/2022',
    invoiceNumber: 'INV529',
    patientType: 'Insurance',
    doctor: 'Dr. John Hardy',
    gross: 500.00,
    discount: 50.00,
    net: 470.00
  },
  {
    patientId: 'P003',
    name: 'Jonathan Smith',
    invoiceDate: '02/06/2022',
    invoiceNumber: 'INV528',
    patientType: 'Cash',
    doctor: 'Dr. Sarah Lee',
    gross: 300.00,
    discount: 30.00,
    net: 285.00
  },
  {
    patientId: 'P004',
    name: 'Maria Garcia',
    invoiceDate: '19/07/2025',
    invoiceNumber: 'INV2025-002',
    patientType: 'Corporate',
    doctor: 'Dr. Michael Johnson',
    gross: 950.00,
    discount: 100.00,
    net: 892.50
  },
  {
    patientId: 'P005',
    name: 'Robert Wilson',
    invoiceDate: '18/07/2025',
    invoiceNumber: 'INV2025-003',
    patientType: 'Cash',
    doctor: 'Dr. Lisa Chen',
    gross: 250.00,
    discount: 25.00,
    net: 236.25
  },
  {
    patientId: 'P006',
    name: 'Jennifer Brown',
    invoiceDate: '17/07/2025',
    invoiceNumber: 'INV2025-004',
    patientType: 'Charity',
    doctor: 'Dr. David Miller',
    gross: 280.00,
    discount: 230.00,
    net: 50.00
  },
  {
    patientId: 'P007',
    name: 'Michael Davis',
    invoiceDate: '16/07/2025',
    invoiceNumber: 'INV2025-005',
    patientType: 'Insurance',
    doctor: 'Dr. Amanda Taylor',
    gross: 500.00,
    discount: 50.00,
    net: 472.50
  },
  {
    patientId: 'P008',
    name: 'Sarah Thompson',
    invoiceDate: '15/07/2025',
    invoiceNumber: 'INV2025-006',
    patientType: 'Corporate',
    doctor: 'Dr. Kevin Rodriguez',
    gross: 520.00,
    discount: 60.00,
    net: 483.00
  },
  {
    patientId: 'P009',
    name: 'Daniel Martinez',
    invoiceDate: '14/07/2025',
    invoiceNumber: 'INV2025-007',
    patientType: 'Other',
    doctor: 'Dr. Rachel Green',
    gross: 600.00,
    discount: 50.00,
    net: 577.50
  },
  {
    patientId: 'P010',
    name: 'Lisa Anderson',
    invoiceDate: '13/07/2025',
    invoiceNumber: 'INV2025-008',
    patientType: 'Insurance',
    doctor: 'Dr. Thomas White',
    gross: 750.00,
    discount: 95.00,
    net: 738.75
  }
];

export const patientTypes = [
  'All',
  'Cash Patient',
  'Insurance Patient',
  'Corporate',
  'Charity',
  'Other'
];

export const totals = {
  totalGross: 13270.00,
  totalDiscount: 1820.00,
  totalNetAfterDiscount: 11450.00,
  totalPatientShare: 2990.00,
  totalNetExcludingPatientShare: 8460.00
};

export const patientWiseTotals = {
  totalGross: 5850.00,
  totalDiscount: 890.00,
  totalNetAfterDiscount: 4960.00,
  totalPatientShare: 2990.00,
  totalNetExcludingPatientShare: 5115.00
};