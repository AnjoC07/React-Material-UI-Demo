import { Stack, TextField, InputAdornment, IconButton } from "@mui/material"; //Import IconButton
import React, { useState, MouseEvent, ChangeEvent } from "react"; // Import React, useState, MouseEvent, and ChangeEvent
// Import Password Visibility
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";

export const MuiTextField = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");

  // Declaration of useState for pasword visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prevShowPassword) => !prevShowPassword);
  };

  const handlePasswordChange = (_event: ChangeEvent<HTMLInputElement>) => {
    setPassword(_event.target.value);
  };

  const handleVisibilityToggle = (_event: MouseEvent<HTMLButtonElement>) => {
    _event.preventDefault(); // Prevents focus loss on click
    togglePasswordVisibility();
  };

  //   Addition of error
  const [value, setValue] = useState("second");

  return (
    // Basic Text Field
    <Stack spacing={4}>
      <Stack direction="row" spacing={2}>
        <TextField label="Name" />

        {/* Variants */}
        <TextField label="Name" variant="outlined" />
        <TextField label="Name" variant="filled" />
        <TextField label="Name" variant="standard" />
      </Stack>

      {/* Cosmetic Prompts */}
      <Stack direction="row" spacing={2}>
        <TextField label="Small secondary" size="small" color="secondary" />
      </Stack>

      {/* Required Prompt */}
      <Stack direction="row" spacing={2}>
        {/* Addition of error */}
        {/* <TextField label="Form Input" required error /> */}
        <TextField
          label="Form Input"
          value={value}
          onChange={(_event) => setValue(_event.target.value)}
          required
          error={!value}
          helperText={
            !value ? "Required" : "Do not share your password with anyone"
          }
        />
        {/* Type kind of prompt */}
        <TextField
          label="Password"
          type="password"
          helperText="Do not share your password with anyone"
          disabled
        />

        {/* Read only kind of textfield */}
        <TextField label="Read Only" InputProps={{ readOnly: true }} />
      </Stack>

      {/* Input Adornment -  Weight in kg Acts like prefixes and suffixes*/}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Amount"
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
        />
        <TextField
          label="Weight"
          InputProps={{
            endAdornment: <InputAdornment position="end">kg</InputAdornment>,
          }}
        />
      </Stack>

      {/* Password Visibility toggle  */}
      <Stack direction="row" spacing={2}>
        <TextField
          label="Password"
          type={showPassword ? "text" : "password"}
          helperText="Do not share your password with anyone"
          value={password}
          onChange={handlePasswordChange}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton
                  onClick={handleVisibilityToggle}
                  onMouseDown={handleVisibilityToggle} // Prevents focus loss on click
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>
    </Stack>
  );
};
