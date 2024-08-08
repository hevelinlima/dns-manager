import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { z } from "zod";

const formSchema = z.object({
  type: z.enum(['A', 'NS', 'CNAME']),
  hostname: z.string().min(1, 'Hostname is required'),
  value: z.string().min(1, 'Value is required'),
  ttl: z.number().min(1, 'TTL is required') 
});

type FormValues = z.infer<typeof formSchema>

const DnsForm: React.FC<{onSubmit: (data: FormValues) => void}> = ({ onSubmit }) => {
  const { control, handleSubmit, formState: { errors }} = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: 'A',
      hostname: '',
      value: '',
      ttl: 3600
    }
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-wrap items-end gap-4">
      <div className="flex flex-col mb-4 w-32">
        <label htmlFor="type" className="block text-sm text-zinc-600 font-semibold mb-2">TYPE</label>
        <Controller 
          name="type"
          control={control}
          render={({ field }) => (
            <select id="type" {...field} className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom">
              <option value="A">A</option>
              <option value="NS">NS</option>
              <option value="CNAME">CNAME</option>
            </select>
          )}
        />
        {errors.type && <p className="text-red-700 text-sm">{errors.type.message}</p>}
      </div>
      <div className="flex flex-col mb-4 w-full sm:w-auto sm:flex-grow">
        <label htmlFor="hostname" className="block text-sm text-zinc-600 font-semibold mb-2">HOSTNAME</label>
        <Controller 
          name="hostname"
          control={control}
          render={({field}) =>(
            <input id="hostname" {...field} className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Enter @ or hostname" />
          )}
        />
        {errors.hostname && <p className="text-red-700 text-sm">{errors.hostname.message}</p>}
      </div>
      <div className="flex flex-col mb-4 w-full sm:w-auto sm:flex-grow">
        <label htmlFor="value" className="block text-sm text-zinc-600 font-semibold mb-2">WILL REDIRECT TO</label>
        <Controller 
          name="value"
          control={control}
          render={({field}) =>(
            <input id="value" {...field} className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Select resource or enter custom IP" />
          )}
        />
        {errors.value && <p className="text-red-700 text-sm">{errors.value.message}</p>}
      </div>
      <div className="flex flex-col mb-4 w-32">
        <label htmlFor="ttl" className="block text-sm text-zinc-600 font-semibold mb-2">TTL (SECONDS)</label>
        <Controller 
          name="ttl"
          control={control}
          render={({field}) => (
            <input id="ttl" {...field} type="number" className="shadow appearance-none border rounded py-2 px-3 w-full placeholder-custom" placeholder="Enter TTL" />
          )}
        />
        {errors.ttl && <p className="text-red-700 text-sm">{errors.ttl.message}</p>}
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