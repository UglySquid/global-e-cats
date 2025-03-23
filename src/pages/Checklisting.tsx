// // import * as React from 'react';
import { Stack, Checkbox } from '@mui/joy';
import FormControl from '@mui/joy/FormControl';
import FormHelperText from '@mui/joy/FormHelperText';
import Typography from '@mui/joy/Typography';

export default function Checklisting() {
  return (
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
            <Typography level='h1'>
              By the end of this subtopic 4.3 Arguments for and against trade control/protection, you should be able to: 
            </Typography>
            <FormControl>
              <Checkbox label="Define the following terms" />
              <FormHelperText>free trade, protectionism, infant industry, economies of scale, dumping, intellectual property, balance of payments, misallocation of resources. </FormHelperText>
            </FormControl>
            <FormControl>
              <Checkbox label="Explain the arguments for trade protection, including: " />
              <FormHelperText>
                Protection of infant (sunrise) industries,
                National security,
                Health and safety,
                Environmental standards,
                Anti-dumping,
                Unfair competition,
                Balance of payments correction,
                Protection of jobs,
                Economically least developed country (ELDC) diversification
              </FormHelperText>
            </FormControl>
            <FormControl>
              <Checkbox label="Explain the arguments against protection, including:" />
              <FormHelperText>
                Misallocation of resources,
                Retaliation,
                Increased costs,
                Less choice,
                Lack of incentives for domestic firms to become more efficient,
                Reduced export competitiveness,
              </FormHelperText>
            </FormControl>
            <FormControl>
              <Checkbox label="Evaluate the debate on free trade versus protectionism. " />
            </FormControl>
          </Stack>
    
  );
}