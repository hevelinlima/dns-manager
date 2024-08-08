"use client"

import DnsTable, { DNSRecord } from "./components/table";
import DnsForm from "./components/form";
import { useState } from "react";

export default function Home() {
  const [records, setRecords] = useState<DNSRecord[]>([
    { type: 'CNAME', hostname: 'webmail.com.br', value: 'mail1.cloudserver', ttl: 43200 },
    { type: 'A', hostname: 'emails.jest.com', value: 'cloudserver2.com', ttl: 3600 },
    { type: 'NS', hostname: 'dmarc.corp.br', value: 'ns.cloudserver.com', ttl: 1800 },
  ]);

  const addRecord = (newRecord: DNSRecord) => {
    setRecords([...records, newRecord]);
  }

  const deleteRecord = (recordToDelete: DNSRecord) => {
    setRecords(records.filter(record => record.hostname !== recordToDelete.hostname));
  }

  const editRecord = (updatedRecord: DNSRecord) => {
    setRecords(records.map(record => (record.hostname === updatedRecord.hostname ? updatedRecord : record)));
  }

  return (
    <main className="max-w-screen-lg mx-auto m-12">
      <h1 className="text-center font-bold text-3xl text-cyan-800">DNS Manager</h1>
      <p className=" mb-6 mt-6 text-zinc-600">Use @ to create the record at the root of the domain or enter a hostname to create it elsewhere. A records are fot IPv4 addresses only and tell a request where your domain should direct to.</p>
      <DnsForm onSubmit={addRecord} />
      <h2 className="text-zinc-700 text-2xl font-medium mt-8 mb-4">DNS records</h2>
      <DnsTable records={records} onDelete={deleteRecord} onEdit={editRecord} />
    </ main>
  );
}
