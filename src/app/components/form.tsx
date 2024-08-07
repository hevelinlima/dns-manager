const DnsForm: React.FC = () => {
  return (
    <form className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col mb-4 w-32">
        <label className="block text-sm text-zinc-600 font-semibold mb-2">TYPE</label>
        <input className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Select type" />
      </div>
      <div className="flex flex-col mb-4 w-full sm:w-auto sm:flex-grow">
        <label className="block text-sm text-zinc-600 font-semibold mb-2">HOSTNAME</label>
        <input className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Enter @ or hostname" />
      </div>
      <div className="flex flex-col mb-4 w-full sm:w-auto sm:flex-grow">
        <label className="block text-sm text-zinc-600 font-semibold mb-2">WILL REDIRECT TO</label>
        <input className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Select resource or enter custom IP" />
      </div>
      <div className="flex flex-col mb-4 w-32">
        <label className="block text-sm text-zinc-600 font-semibold mb-2">TTL (SECONDS)</label>
        <input className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Enter TTL" />
      </div>
      <div className="mb-4 w-32 sm:w-auto sm:flex-grow">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded w-full" type="submit">
          Create record
        </button>
      </div>
    </form>

  );
};

export default DnsForm;