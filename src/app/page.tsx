import Image from "next/image";
import DnsTable from "./components/table";

export default function Home() {
  return (
    <main className="max-w-screen-lg mx-auto m-8">
      <h1 className="m-6 text-center font-bold text-3xl text-cyan-800">DNS Manager</h1>
      <p className=" m-6 text-zinc-600">Use @ to create the record at the root of the domain or enter a hostname to create it elsewhere. A records are fot IPv4 addresses only and tell a request where your domain should direct to.</p>
      <DnsTable />
    </ main>
  );
}
