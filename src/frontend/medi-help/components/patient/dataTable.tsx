// components/DataTable.tsx
import { Patient } from '@/model/patient';
import React from 'react';

interface DataItem {
    id: number;
    firstName: string;
    lastName: string;
    email: string;
    address:string;
  }

interface DataTableProps {
  data: DataItem[];
}

const DataTable: React.FC<DataTableProps> = ({ data }) => {
    debugger
    if (!Array.isArray(data)) {
        return null; // Or display a loading message/error message
      }
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Address</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item.firstName}</td>
            <td>{item.lastName}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default DataTable;
