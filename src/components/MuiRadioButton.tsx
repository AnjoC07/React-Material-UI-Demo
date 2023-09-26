import { useState } from "react";
import {
  Box,
  FormControl,
  FormLabel,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormHelperText,
} from "@mui/material";

export const MuiRadioButton = () => {
  //  Creata useState Value
  const [value, setValue] = useState("");
  console.log(value);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };
  return (
    <Box>
      <FormControl error>
        <FormLabel id="job-experience-group-label">
          Years of experience
        </FormLabel>
        <RadioGroup
          row // Aligns radio buttons to the row
          aria-labelledby="job-experience-group-label"
          name="job-experience-group"
          value={value}
          onChange={handleChange}
        >
          <FormControlLabel
            labelPlacement="start"
            value="0-2"
            control={<Radio size="medium" color="secondary" />}
            label="0-2 years"
          />
          <FormControlLabel
            labelPlacement="start"
            value="3-5"
            control={<Radio size="small" color="secondary" />}
            label="3-5 years"
          />
          <FormControlLabel
            labelPlacement="start"
            value="6-10"
            control={<Radio size="small" color="secondary" />}
            label="6-10 years"
          />
        </RadioGroup>
        <FormHelperText>Invalid selection</FormHelperText>
      </FormControl>
    </Box>
  );
};
