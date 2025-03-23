// import * as React from 'react';
import { Divider, Stack, Typography, Card } from '@mui/joy/';
import { pageOneContent } from '../components/data.ts'; 
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
        <Typography level='body-sm'>4.3.1</Typography>
        <Typography level='h1'>Arguments for trade protection</Typography>
        <Typography level='body-md'>Here are some arguments in favor of trade protection and real life examples</Typography>
        
        <Card sx={{p:2}}>
            <img 
              src="https://www.globaltimes.cn/Portals/0/attachment/2024/2024-04-24/f139c4e7-bd24-4fc9-a9c5-d6d37a0affa1.jpeg"
              alt="South Africa corn market graph"
              style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
          ></img>
        </Card>
        

        
        <Divider/>

{/* Text content about for person to read */}
        {pageOneContent.map((section, idx) => (
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

      <Typography level='h3'>Works Cited</Typography>
      <Typography level='body-sm' sx={{ flex: 1, whiteSpace: 'pre-line' }}>
      {`Bown, Chad P., and Douglas A. Irwin. The Trump Trade War: Its Motivations, Manifestation, and the Future. Peterson Institute for International Economics, 2019.

      European Commission. "Trade Defence: Anti-Dumping Measures." European Commission, https://policy.trade.ec.europa.eu/enforcement-and-protection/trade-defence/anti-dumping_en. Accessed 20 Mar. 2025.

      Gereffi, Gary, and Joonkoo Lee. “Why the World Suddenly Cares About Global Supply Chains.” Journal of Supply Chain Management, vol. 48, no. 3, 2012, pp. 24-32.

      International Trade Administration. “U.S. Tariffs on Chinese Steel and Aluminum.” U.S. Department of Commerce, 2018, https://www.trade.gov/steel-and-aluminum-tariffs. Accessed 20 Mar. 2025.

      Organization for Economic Cooperation and Development (OECD). Trade and Environment Policy Manual. OECD Publishing, 2018.

      Rodrik, Dani. The Globalization Paradox: Democracy and the Future of the World Economy. W. W. Norton & Company, 2011.

      United Nations Conference on Trade and Development (UNCTAD). Economic Development in Africa Report 2021: Reaping the Potential Benefits of the African Continental Free Trade Area for Inclusive Growth. United Nations, 2021.

      World Trade Organization (WTO). World Trade Report 2020: Government Policies to Promote Innovation in the Digital Age. WTO Publications, 2020.`
      }
      </Typography>
          
      </Stack>
      
    </>
  );
}