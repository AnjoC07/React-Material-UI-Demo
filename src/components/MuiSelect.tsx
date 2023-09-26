import { Box, TextField, MenuItem } from "@mui/material";
import React, { useState } from "react";

// MENU ITEM COMPONENT
// SINGLE SELECTION
// export const MuiSelect = () => {
//   // Declaration of useState
//   const [country, setCountry] = useState("");
//   console.log({ country });
//   // Declaration of handleChange
//   const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setCountry(event.target.value as string);
//   };
//   return (
//     <Box width="250px">
//       <TextField
//         label="Select country"
//         select
//         value={country}
//         onChange={handleChange}
//         fullWidth // Adjusting the text area width w/o using css
//       >
//         <MenuItem value="IN">India</MenuItem>
//         <MenuItem value="US">USA</MenuItem>
//         <MenuItem value="AU">Australia</MenuItem>
//       </TextField>
//     </Box>
//   );

// MULTIPLE SELECTION
export const MuiSelect = () => {
  // Declaration of useState
  const [countries, setCountries] = useState<string[]>([]);
  console.log({ countries });
  // Declaration of handleChange
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setCountries(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box width="250px">
      <TextField
        label="Select country"
        select
        value={countries}
        onChange={handleChange}
        fullWidth // Adjusting the text area width w/o using css
        SelectProps={{ multiple: true }}
        size="small"
        color="secondary"
        helperText="Please select your country"
        error
      >
        <MenuItem value="IN">India</MenuItem>
        <MenuItem value="US">USA</MenuItem>
        <MenuItem value="AU">Australia</MenuItem>
      </TextField>
    </Box>
  );
};
