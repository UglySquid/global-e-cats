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

// import * as React from 'react';
// import Box from '@mui/joy/Box';

// export default function IndeterminateCheckbox() {
//   const [checked, setChecked] = React.useState([true, false]);

//   const handleChange1 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([event.target.checked, event.target.checked]);
//   };

//   const handleChange2 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([event.target.checked, checked[1]]);
//   };

//   const handleChange3 = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setChecked([checked[0], event.target.checked]);
//   };

//   const children1 = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, gap: 1, mt: 1 }}>
//       <Checkbox checked={checked[0]} onChange={handleChange2} label="free trade" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="protectionism" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="infant industry" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="economies of scale" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="dumping" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="intellectual property" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="balance of payments" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="misallocation of resources" />
//     </Box>
//   );

//   const children2 = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, gap: 1, mt: 1 }}>
//       <Checkbox checked={checked[0]} onChange={handleChange2} label="Protection of infant (sunrise) industries " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="National security " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Health and safety  " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Environmental standards " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Anti-dumping " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Unfair competition" />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Balance of payments correction " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Protection of jobs " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Economically least developed country (ELDC) diversification " />
//     </Box>
//   );

//   const children3 = (
//     <Box sx={{ display: 'flex', flexDirection: 'column', ml: 3, gap: 1, mt: 1 }}>
//       <Checkbox checked={checked[0]} onChange={handleChange2} label="Misallocation of resources " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label=" Retaliation " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Increased costs " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Less choice ​​​​​​ " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Lack of incentives for domestic firms to become more efficient " />
//       <Checkbox checked={checked[1]} onChange={handleChange3} label="Reduced export competitiveness" />
//     </Box>
//   );

  

//   return (
//     <div>
//       <Stack
//           direction='column'
//           spacing={{ xs: 1, sm: 2, md: 4 }}
//           sx={{
//             mx: 'auto', // margin left & right
//             my: 0, // margin top & bottom
//             py: 10, // padding top & bottom
//             px: 10, // padding left & right
//           }}
//           >
//             <Typography level='h1'>
//               By the end of this subtopic 4.3 Arguments for and against trade control/protection, you should be able to: 
//             </Typography>
//         <Checkbox
//           label="Define the following terms"
//           checked={checked[0] && checked[1]}
//           indeterminate={checked[0] !== checked[1]}
//           onChange={handleChange1}
//         />
//         {children1}
//         <Checkbox
//           label=" Explain the arguments for trade protection, including:"
//           checked={checked[0] && checked[1]}
//           indeterminate={checked[0] !== checked[1]}
//           onChange={handleChange1}
//         />
//         {children2}
//         <Checkbox
//           label=" Explain the arguments against protection, including:"
//           checked={checked[0] && checked[1]}
//           indeterminate={checked[0] !== checked[1]}
//           onChange={handleChange1}
//         />
//         {children2}
//         <Checkbox 
//           label=" Evaluate the debate on free trade versus protectionism. "
//           checked={checked[0] && checked[1]}
//         />
//       </Stack>   
//     </div>
//   );
// }