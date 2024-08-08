import React from 'react';
import CustomDropdownMenu from './ui/CustomDropDownMenu';

export interface DNSRecord{
  type: 'A' | 'NS' | 'CNAME';
  hostname: string;
  value: string;
  ttl: number;
}

interface DNSTableProps{
  records: DNSRecord[];
  onEdit: (record: DNSRecord) => void;
  onDelete: (record: DNSRecord) => void;
}

const DnsTable: React.FC<DNSTableProps> = ({ onEdit, onDelete, records }) => {
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
              <td>{record.type}</td>
              <td>{record.hostname}</td>
              <td>{formatValue(record.type, record.value)}</td>
              <td>{record.ttl}</td>
              <td>
                <CustomDropdownMenu
                  onEdit={() => onEdit(record)}
                  onDelete={() => onDelete(record)} 
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DnsTable;
