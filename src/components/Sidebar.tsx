import * as React from 'react';
import { Link } from 'react-router-dom';
import GlobalStyles from '@mui/joy/GlobalStyles';
// import Drawer from '@mui/joy/Drawer';
import Box from '@mui/joy/Box';
import { Stack } from '@mui/material';
import Divider from '@mui/joy/Divider';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import ListItemContent from '@mui/joy/ListItemContent';
import Typography from '@mui/joy/Typography';
import Sheet from '@mui/joy/Sheet';
// import AssignmentRoundedIcon from '@mui/icons-material/AssignmentRounded';
// import LooksOneIcon from '@mui/icons-material/LooksOne';
// import LooksTwoIcon from '@mui/icons-material/LooksTwo';
// import Looks3Icon from '@mui/icons-material/Looks3';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
// import Badge from '@mui/joy/Badge';

// import ColorSchemeToggle from './ColorSchemeToggle';
import { closeSidebar } from '../utils';

function Toggler({
  defaultExpanded = false,
  renderToggle,
  children,
}: {
  defaultExpanded?: boolean;
  children: React.ReactNode;
  renderToggle: (params: {
    open: boolean;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  }) => React.ReactNode;
}) {
  const [open, setOpen] = React.useState(defaultExpanded);
  return (
    <React.Fragment>
      {renderToggle({ open, setOpen })}
      <Box
        sx={[
          {
            display: 'grid',
            transition: '0.2s ease',
            '& > *': {
              overflow: 'hidden',
            },
          },
          open ? { gridTemplateRows: '1fr' } : { gridTemplateRows: '0fr' },
        ]}
      >
        {children}
      </Box>
    </React.Fragment>
  );
}

export default function Sidebar() {
  // const [open, setOpen] = React.useState(false);

  // const handleDrawerOpen = () => {
  //   setOpen(true);
  // };

  // const handleDrawerClose = () => {
  //   setOpen(false);
  // };
  return (
    <Sheet
      className="Sidebar"
      sx={{
        position: { xs: 'fixed', md: 'sticky' },
        transform: {
          xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1)))',
          md: 'none',
        },
        transition: 'transform 0.4s, width 0.4s',
        zIndex: 10000,
        height: '100dvh',
        width: 'var(--Sidebar-width)',
        top: 0,
        p: 2,
        flexShrink: 0,
        display: 'flex',
        flexDirection: 'column',
        gap: 2,
        borderRight: '1px solid',
        borderColor: 'divider',
      }}
    >
      <GlobalStyles
        styles={(theme) => ({ 
          ':root': {
            '--Sidebar-width': '220px',
            [theme.breakpoints.up('lg')]: {
              '--Sidebar-width': '240px',
            },
          },
        })}
      />
      <Box
        className="Sidebar-overlay"
        sx={{
          position: 'fixed',
          zIndex: 9998,
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          opacity: 'var(--SideNavigation-slideIn)',
          backgroundColor: 'var(--joy-palette-background-backdrop)',
          transition: 'opacity 0.4s',
          transform: {
            xs: 'translateX(calc(100% * (var(--SideNavigation-slideIn, 0) - 1) + var(--SideNavigation-slideIn, 0) * var(--Sidebar-width, 0px)))',
            lg: 'translateX(-100%)',
          },
        }}
        onClick={() => closeSidebar()}
      />
      <Stack direction="column" sx={{ gap: 1}}>
        <Typography level="body-sm">Section 4.3</Typography>
        <Typography level="title-lg">Arguments for and against trade control/protection</Typography>
      </Stack>
      <Divider/>
      <Box
        sx={{
          minHeight: 0,
          overflow: 'hidden auto',
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          [`& .${listItemButtonClasses.root}`]: {
            gap: 1.5,
          },
        }}
      >
        <List
          size="sm"
          sx={{
            gap: 2,
            '--List-nestedInsetStart': '30px',
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
          }}
        >
          <ListItem>
            <ListItemButton
                component={Link}
                to="/4-3-1"
                role="menuitem"
            >
              {/* <LooksOneIcon /> */}
              <ListItemContent>
                <Typography level="body-xs">4.3.1</Typography>
                <Typography level="title-sm">Arguments for trade protection</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
                component={Link}
                to="/4-3-2"
                role="menuitem"
            >
              {/* <LooksTwoIcon /> */}
              <ListItemContent>
                <Typography level="body-xs">4.3.2</Typography>
                <Typography level="title-sm">Arguments against trade protection</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

          <ListItem>
            <ListItemButton
                component={Link}
                to="/4-3-3"
                role="menuitem"
            >
              {/* <Looks3Icon /> */}
              <ListItemContent>
                <Typography level="body-xs">4.3.3</Typography>
                <Typography level="title-sm">Free trade versus trade protection</Typography>
              </ListItemContent>
            </ListItemButton>
          </ListItem>

        <Divider />

          <ListItem nested>
            <Toggler
              renderToggle={({ open, setOpen }) => (
                <ListItemButton onClick={() => setOpen(!open)}>
                  {/* <AssignmentRoundedIcon /> */}
                  <ListItemContent>
                    <Typography level="title-sm">Check your understanding</Typography>
                  </ListItemContent>
                  <KeyboardArrowDownIcon
                    sx={[
                      open ? { transform: 'rotate(180deg)' } : { transform: 'none' },
                    ]}
                  />
                </ListItemButton>
              )}
            >
              <List sx={{ gap: 0.5 }}>
                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    to="/Checklist"
                    role="menuitem"
                  >
                    Checklist
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    to="/IB-style-questions"
                    role="menuitem"
                  >
                    IB-style questions
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    to="/Glossary"
                    role="menuitem"
                  >
                    Glossary
                  </ListItemButton>
                </ListItem>

                <ListItem sx={{ mt: 0.5 }}>
                  <ListItemButton
                    component={Link}
                    to="/Videos"
                    role="menuitem"
                  >
                    Videos
                  </ListItemButton>
                </ListItem>
              </List>
            </Toggler>
          </ListItem>
        </List>
        <List
          size="sm"
          sx={{
            mt: 'auto',
            flexGrow: 0,
            '--ListItem-radius': (theme) => theme.vars.radius.sm,
            '--List-gap': '8px',
            mb: 2,
          }}
        >
          <ListItem>
            Made with ♡ from Christine Wei
          </ListItem>
        </List>
      </Box>
    </Sheet>
  );
}