import Sidebar from '@/components/admin/SideBar'
import Header from '@/components/admin/Header';
import { ReactNode } from 'react';

type Props = {
    children: ReactNode;
}

export default function AdminLayout({children}: Props) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <div className='p-5 min-h-full inset-shadow-sm bg-gray-100 ml-64 mt-24'>
            {children}
        </div>
      </div>
    </div>
  );
}