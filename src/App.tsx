import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import { CssVarsProvider } from '@mui/joy/styles';
import CssBaseline from '@mui/joy/CssBaseline';
import Box from '@mui/joy/Box';
import Sidebar from './components/Sidebar';
import PageOne from './pages/PageOne';
import PageTwo from './pages/PageTwo';
import PageThree from './pages/PageThree';
import Checklisting from './pages/Checklisting'
import Questions from './pages/Questions.tsx'
import Glossary from './pages/Glossary.tsx'
import { Stack } from '@mui/joy';
import Videos from './pages/Videos.tsx'

// Lazy-loaded components
// const Checklisting = React.lazy(() => import('./pages/Checklisting'));
// const Questions = React.lazy(() => import('./pages/Questions.tsx'));
// const Glossary = React.lazy(() => import('./pages/Glossary.tsx'));
// const Videos = React.lazy(() => import('./pages/Videos.tsx'));

const App: React.FC = () => (
  <CssVarsProvider disableTransitionOnChange>
    <CssBaseline />
    <Box sx={{ display: 'flex', minHeight: '100vh' }}>
      <Sidebar />
      <Box
        component="main"
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          minWidth: 0,
          height: '100vh',
          gap: 1,
          overflow: 'auto',
        }}
      >
        {/* <Suspense fallback={<Stack>Loading...</Stack>}> */}
          <Routes>
            <Route path="/4-3-1" element={<PageOne />} />
            <Route path="/4-3-2" element={<PageTwo />} />
            <Route path="/4-3-3" element={<PageThree />} />
            <Route path="/Checklist" element={<Checklisting />} />
            <Route path="/IB-style-questions" element={<Questions />} />
            <Route path="/Glossary" element={<Glossary />} />
            <Route path="/Videos" element={<Videos />} />
          </Routes>
        {/* </Suspense> */}
      </Box>
    </Box>
  </CssVarsProvider>
);

export default App;
