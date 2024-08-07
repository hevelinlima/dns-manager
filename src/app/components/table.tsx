import React from 'react';
import CustomDropdownMenu from './ui/CustomDropDownMenu';

const DnsTable: React.FC = () => {
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
         
            <tr  className="[&>*]:border-b [&>*]:border-t [&>*]:px-5 [&>*]:h-12 [&>*]:text-left">
              <td>type</td>
              <td>name</td>
              <td>content</td>
              <td>seconds</td>
              <td>
                <CustomDropdownMenu />
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default DnsTable;
