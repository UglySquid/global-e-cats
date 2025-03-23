// import * as React from 'react';
import { Divider, Stack, Typography, List, ListItem, Card } from '@mui/joy/';

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
        
        <Card sx={{p:2}}>
          <img 
            src="https://i.redd.it/npk2hb277a1z.png"
            alt="South Africa corn market graph"
            style={{ width: '100%', borderRadius: '8px', marginTop: '1rem' }}
        ></img>
      </Card>
        
        <Divider/>

        <List sx={{ listStyleType: 'disc' }}>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography level='body-md'>
            Free trade enables countries to specialise based on comparative advantage, e.g., China in electronics, Bangladesh in textiles, and Belgium in chocolate. When nations specialise, global output increases.
            </Typography>
          </ListItem>
          <ListItem sx={{ display: 'list-item' }}>
            <Typography level='body-md'>
            However, benefits are unevenly distributed. A country’s benefit depends on global market conditions. For example, despite Mali being the lowest-cost producer of cotton, U.S. cotton subsidies depress global cotton prices, making it difficult for Malian farmers to compete, even on very low wages.
            </Typography>
          </ListItem>
        </List>

        <Stack direction='row' spacing={3}>
          <Card variant="outlined"
                sx={{
                  mx: 'auto',
                  my: 0,
                  py: 5,
                  px: 5,
                }}
          >
              <Typography level='h3'>
                The Case for Trade Protection
                </Typography>

                <Typography level='h4'>
                Boosting Domestic Industries
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Trade protection (e.g., tariffs on imported steel) can benefit local industries like Kenya’s steel sector by making imports more expensive.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    This encourages domestic production, allowing firms to scale up, reduce average costs through economies of scale, and eventually compete without tariffs.
                    </Typography>
                  </ListItem>
                </List>

                <Typography level='h4'>
                Long-term Competitiveness
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    If economies of scale lower production costs below world prices, Kenya could remove tariffs and access cheaper steel.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    This, in turn, reduces input costs for sectors like car and machinery production, making Kenya more competitive internationally.
                    </Typography>
                  </ListItem>
                </List>

                <Typography level='h4'>
                Government Revenue for Infrastructure
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Tariffs generate revenue, potentially funding infrastructure (roads, ports, bridges).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Infrastructure improvements can enhance export capacity and internal trade, driving economic growth.
                    </Typography>
                  </ListItem>
                </List>
            </Card>

                    
            <Card variant="outlined" 
                  sx={{
                    mx: 'auto',
                    my: 0,
                    py: 5,
                    px: 5,
                  }}
            >
              <Typography level='h3'>
                The Case Against Trade Protection
                </Typography>
                
                <Typography level='h4'>
                Inefficiency and Lack of Innovation
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Protection reduces competitive pressure, leading to inefficient firms.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Without the need to innovate or lower costs, protected industries may remain less productive over time.
                    </Typography>
                  </ListItem>
                </List>

                <Typography level='h4'>
                Misallocation of Resources
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Protection distorts resource allocation by diverting capital and labour into less efficient sectors (e.g., steel) instead of sectors where Kenya may have a comparative advantage (e.g., agriculture).
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Higher steel prices may also increase costs for related sectors, like agricultural machinery.
                    </Typography>
                  </ListItem>
                </List>

                <Typography level='h4'>
                Potential Misuse of Tariff Revenues
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Government spending may be subject to corruption or poor planning.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    For example, Indonesia’s failed Jakarta monorail project demonstrates how infrastructure projects can collapse due to financial mismanagement.
                    </Typography>
                  </ListItem>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Governments might also prioritise emergency spending or debt repayments over long-term infrastructure.
                    </Typography>
                  </ListItem>
                </List>

                <Typography level='h4'>
                Public vs. Private Sector Efficiency
                </Typography>
                <List sx={{ listStyleType: 'disc' }}>
                  <ListItem sx={{ display: 'list-item' }}>
                    <Typography level='body-md'>
                    Some argue private firms are more likely to deliver cost-effective infrastructure due to the profit motive, ensuring efficient resource allocation.
                    </Typography>
                  </ListItem>
                </List>
            </Card>

        </Stack>

        
        
      <Divider/>
      <Typography level='h3'>
      Evaluation Tip
      </Typography>
      <Typography level='body-md'>
        When evaluating, aim for a balanced argument. Consider both short-term and long-term effects, as well as the trade-offs between government intervention and market efficiency.
      </Typography>

      <Divider/>
      <Typography level='h3'>
      International Mindedness
      </Typography>
      <List sx={{ listStyleType: 'disc' }}>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography level='body-md'>
          Beggar-thy-neighbour policies: Policies that boost one country's economy at another’s expense (e.g., EU subsidies for Airbus).
          </Typography>
        </ListItem>
        <ListItem sx={{ display: 'list-item' }}>
          <Typography level='body-md'>
          Consider how protectionist measures could be applied without severely harming trading partners.
          </Typography>
        </ListItem>
      </List>

            <Typography level='h3'>Works Cited</Typography>
            <Typography level='body-sm' sx={{ flex: 1, whiteSpace: 'pre-line' }}>
            {`International Monetary Fund. The Benefits and Costs of Trade Protection. IMF, 2021.

Oxfam International. Cultivating Poverty: The Impact of US Cotton Subsidies on Africa. Oxfam Briefing Paper, Sept. 2002.

Stiglitz, Joseph E., and Andrew Charlton. Fair Trade for All: How Trade Can Promote Development. Oxford University Press, 2005.

The World Bank. Kenya Economic Update: Unbundling the Slack in Private Sector Investment. The World Bank, 2017.

United Nations Conference on Trade and Development (UNCTAD). Trade and Development Report 2023: Structural Transformation and Inclusive Growth. United Nations, 2023.

The Economist. "Jakarta’s Failed Monorail: When Big Projects Go Nowhere." The Economist, 15 May 2015, www.economist.com.

World Trade Organization (WTO). World Trade Report 2022: The Future of Globalization. WTO, 2022.`
            }
            </Typography>


      </Stack>
      
    </>
  );
}