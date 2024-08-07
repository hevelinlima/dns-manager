import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu';
import CaretDown from '../../assets/caret-down.svg' ;
import Image from 'next/image';

const CustomDropdownMenu: React.FC = () => {
  return(
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center text-blue-500 text-base font-bold">
        More 
        <Image 
          src={CaretDown} 
          alt="Dropdown Icon"
          className="ml-2 color-blue-500" 
          width={20}
          height={20} 
        />
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuItem className="text-blue-500 hover:bg-blue-100">
          Edit
        </DropdownMenuItem>
        <DropdownMenuItem className="text-red-500 hover:bg-red-100">
          Delete
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default CustomDropdownMenu;