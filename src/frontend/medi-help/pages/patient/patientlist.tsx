
import React, { useState, useEffect } from 'react';
import DataTable from '@/components/patient/dataTable';
import { MyPage } from '@/components/common/types';

interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address:string;
}

const PatientListPage:MyPage = () => {
    const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    debugger
    // Fetch data here using the GET function
    // For example:
    fetch('https://localhost:5001/api/patient/Getall') // Replace with your API endpoint
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <h1>Patient Page</h1>
      <DataTable data={data} />
    </div>
  );
};

export default PatientListPage;
PatientListPage.Layout = "Main";

