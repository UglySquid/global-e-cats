// import * as React from 'react';
import { Divider, Stack, Typography } from '@mui/joy/';
import { pageTwoContent } from '../components/data.ts';
import AccordionGroup from '@mui/joy/AccordionGroup';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails, {
  accordionDetailsClasses,
} from '@mui/joy/AccordionDetails';
import AccordionSummary, {
  accordionSummaryClasses,
} from '@mui/joy/AccordionSummary';


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
        <Typography level='body-sm'>4.3.2</Typography>
        <Typography level='h1'>Arguments against trade protection</Typography>
        <Typography level='body-md'>Here are some arguments against trade protection policies and real life examples</Typography>
        <Divider/>

{/* Text content about for person to read */}
        {pageTwoContent.map((section, idx) => (
        <div key={idx}>
          <Typography level="h3" sx={{ mb: 1 }}>
            {section.title}
          </Typography>
          {section.items.map((item, subIdx) => (
            <Stack key={subIdx} direction="row" spacing={2} sx={{ flex: 1, whiteSpace: 'pre-line', mb: 1 }}>
              <Typography level="body-md" sx={{ flex: 1, whiteSpace: 'pre-line' }}>
                {item.description}
              </Typography>
              <Stack direction="column" spacing={1} sx={{ flex: 1 }}>
                <AccordionGroup
                  variant="outlined"
                  transition="0.2s"
                  sx={(theme) => ({
                    maxWidth: 400,
                    borderRadius: 'lg',
                    [`& .${accordionSummaryClasses.button}:hover`]: {
                      bgcolor: 'transparent',
                    },
                    [`& .${accordionDetailsClasses.content}`]: {
                      boxShadow: `inset 0 1px ${theme.vars.palette.divider}`,
                      [`&.${accordionDetailsClasses.expanded}`]: {
                        paddingBlock: '0.75rem',
                      },
                    },
                  })}
                >
                  <Accordion defaultExpanded>
                    <AccordionSummary>Example 1</AccordionSummary>
                    <AccordionDetails variant="soft" sx={{ flex: 1, fontStyle: 'italic' }}>
                      {item.examples[0]}
                    </AccordionDetails>
                  </Accordion>
                  <Accordion>
                    <AccordionSummary>Example 2</AccordionSummary>
                    <AccordionDetails variant="soft" sx={{ flex: 1, fontStyle: 'italic' }}>
                      {item.examples[1]}
                    </AccordionDetails>
                  </Accordion>
                </AccordionGroup>              
              </Stack>

            </Stack>
          ))}
        </div>
      ))}
      </Stack>
      
    </>
  );
}