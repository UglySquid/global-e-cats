import React, { ReactNode } from 'react';
import Sidebar from '../components/Sidebar';

interface LayoutProps {
  children: ReactNode;  // Specify that `children` is of type ReactNode
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <main style={{ flex: 1, padding: '20px' }}>
        {children}
      </main>
    </div>
  );
};

export default Layout;
