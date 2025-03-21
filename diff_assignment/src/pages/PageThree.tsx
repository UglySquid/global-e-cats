// import * as React from 'react';
import { Divider, Stack, Typography } from '@mui/joy/';
import { pageThreeContent } from '../components/data.ts';

export default function PageOne() {
  return (
    <>
      <Stack
      direction='column'
      spacing={{ xs: 1, sm: 2, md: 4 }}
      sx={{
        mx: 'auto', // margin left & right
        my: 0, // margin top & bottom
        py: 10, // padding top & bottom
        px: 10, // padding left & right
      }}
      >
          
{/* Title */}
        <Typography level='body-sm'>4.3.3</Typography>
        <Typography level='h1'>Free trade versus trade protection</Typography>
        <Typography level='body-md'>Here is a comparison between free trade and trade protection, in particular how economic growth may or may not be supported by either approaches</Typography>
        <Divider/>

{/* Text content about for person to read */}
        {pageThreeContent.map((paragraph, idx) => (
        <div key={idx}>
          {paragraph.items.map((item, subIdx) => (
            <Stack key={subIdx} direction="row" spacing={2} sx={{ mb: 1 }}>
              <Typography level="body-md" sx={{ flex: 1, whiteSpace: 'pre-line' }}>
                {item.paragraphs}
              </Typography>
            </Stack>
          ))}
        </div>
      ))}
      </Stack>
      
    </>
  );
}