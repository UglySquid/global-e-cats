// import * as React from 'react';
import { Divider, Stack, Typography, Card } from '@mui/joy/';
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
        
        <Card sx={{p:2}}>
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/4/46/Free_Trade_and_Protection.jpg"
              alt="South Africa corn market graph"
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
          ></img>
        </Card>
        
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
                    maxWidth: 600,
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
                  <Accordion>
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

      <Typography level='h3'>Works Cited</Typography>
      <Typography level='body-sm' sx={{ flex: 1, whiteSpace: 'pre-line' }}>
      {`Bown, Chad P., and Douglas A. Irwin. "The Trump Trade War: Its Motivations, Manifestation, and the Future." Peterson Institute for International Economics, Sept. 2019.

European Commission. “EU Response to U.S. Steel and Aluminum Tariffs.” European Commission Trade Policy, 2018, https://ec.europa.eu/commission/presscorner/detail/en/IP_18_4220.

U.S. Department of Agriculture. "China’s Retaliatory Tariffs on U.S. Agricultural Products." USDA Foreign Agricultural Service, 2019, https://fas.usda.gov/data/chinas-retaliatory-tariffs-us-agricultural-products.

Paarlberg, Robert. Food Politics: What Everyone Needs to Know. Oxford University Press, 2013.

World Trade Organization. “Trade Policy Review: United States 2018.” WTO Secretariat Report, 2018, https://www.wto.org/english/tratop_e/tpr_e/tp471_e.htm.

Irwin, Douglas A. Clashing over Commerce: A History of US Trade Policy. University of Chicago Press, 2017.

OECD. "The Impact of Agricultural Policies on Fertilizer Use and the Environment." Organisation for Economic Co-operation and Development, 2019, https://www.oecd.org/agriculture/topics/agri-environmental-indicators/.`
      }
      </Typography>
      
    </>
  );
}