"use client"

import React, { useState } from 'react';
import CustomDropdownMenu from './ui/CustomDropDownMenu';

export interface DNSRecord{
  type: 'A' | 'NS' | 'CNAME';
  hostname: string;
  value: string;
  ttl: number;
}

interface DNSTableProps{
  records: DNSRecord[];
  onEdit: (index: number, updatedRecord: DNSRecord) => void;
  onDelete: (index: number) => void;
}

const DnsTable: React.FC<DNSTableProps> = ({ onEdit, onDelete, records }) => {
  const [editIndex, setEditIndex] = useState<number | null>(null);
  const [editRecord, setEditRecord] = useState<DNSRecord | null>(null);

  const handleEditClick = (index: number, record: DNSRecord) => {
    setEditIndex(index);
    setEditRecord(record);
  };

  const handleEditChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    if (editRecord) {
      setEditRecord({
        ...editRecord,
        [e.target.name]: e.target.value,
      });
    }
  };

  const handleEditConfirm = () => {
    if (editRecord !== null && editIndex !== null) {
      onEdit(editIndex, editRecord);
      setEditIndex(null);
      setEditRecord(null);
    }
  };

  const formatValue = (type: string, value: string) => {
    let label = '';
    let style = 'text-gray-600';

    switch (type){
      case 'A':
      case 'NS':
        label = `returns to `;
        style = 'text-gray-500';
        break
      case 'CNAME':
        label = `is an alias to `;
        style = 'text-gray-500';
        break
      default:
        return value;
    }
    return (
      <span>
        <span className={style}>{label}</span>
        <span className="text-gray-900 font-medium">{value}</span>
      </span>
    );
  };

  return (
    <div className="relative overflow-x-auto">
      <table className="border-2 w-full bg-white">
        <thead className= "bg-zinc-50">
          <tr className="[&>*]:px-5 [&>*]:h-8 [&>*]:text-left [&>*]:text-zinc-500 [&>*]:font-semibold">
            <th>Type</th>
            <th>Hostname</th>
            <th>Value</th>
            <th>TTL (seconds)</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {records.map((record, index) => (
            <tr key={index}  className="[&>*]:border-b [&>*]:border-t [&>*]:px-5 [&>*]:h-12 [&>*]:text-left">
              <td className="text-gray-500">
                {editIndex === index ? (
                  <select
                    name="type"
                    value={editRecord?.type || ''}
                    onChange={handleEditChange}
                    className="border rounded px-2 py-1"
                  >
                    <option value="A">A</option>
                    <option value="NS">NS</option>
                    <option value="CNAME">CNAME</option>
                  </select>
                ) : (
                  record.type
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    name="name"
                    value={editRecord?.hostname || ''}
                    onChange={handleEditChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  record.hostname
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    name="content"
                    value={editRecord?.value || ''}
                    onChange={handleEditChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  formatValue(record.type, record.value)
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <input
                    name="ttl"
                    type="number"
                    value={editRecord?.ttl || ''}
                    onChange={handleEditChange}
                    className="border rounded px-2 py-1"
                  />
                ) : (
                  record.ttl
                )}
              </td>
              <td>
                {editIndex === index ? (
                  <button
                    onClick={handleEditConfirm}
                    className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-1 px-2 rounded"
                  >
                    Confirm
                  </button>
                ) : (
                  <CustomDropdownMenu
                    onEdit={() => handleEditClick(index, record)}
                    onDelete={() => onDelete(index)}
                  />
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DnsTable;
