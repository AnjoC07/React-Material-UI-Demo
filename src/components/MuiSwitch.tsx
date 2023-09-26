import { Box, FormControlLabel, Switch } from "@mui/material";
import { useState } from "react";

// Track Value from useState variable
export const MuiSwitch = () => {
  const [checked, setChecked] = useState(false);
  console.log(checked);
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };
  //   DarkMode Switch
  return (
    <Box>
      <FormControlLabel
        control={
          <Switch
            checked={checked}
            onChange={handleChange}
            size="small"
            color="success"
          />
        }
        label="Dark mode"
      />
    </Box>
  );
};
