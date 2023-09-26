import {
  Stack,
  Button,
  IconButton,
  ButtonGroup,
  ToggleButtonGroup,
  ToggleButton,
} from "@mui/material"; //Import Toggle Button
import SendIcon from "@mui/icons-material/Send";
// Import Format Icon Libraries
import FormatBoldIcon from "@mui/icons-material/FormatBold";
import FormatItalicIcon from "@mui/icons-material/FormatItalic";
import FormatUnderlinedIcon from "@mui/icons-material/FormatUnderlined";
// Use of useState
import { useState } from "react";

export const MuiButton = () => {
  // Declaration of useState
  // const [formats, setFormats] = useState<string[]>([]);
  const [formats, setFormats] = useState<string | null>(null); // - exclusive
  console.log({
    formats,
  });
  // Declaration of handleFormatChange Function
  const handleFormatChange = (
    _event: React.MouseEvent<HTMLElement>,
    // updatedFormats: string[]
    updatedFormats: string | null // -exclusive
  ) => {
    setFormats(updatedFormats);
  };

  return (
    <Stack spacing={4}>
      <Stack spacing={2} direction={"row"}>
        {/* <div> //Instead of using div tag use stack */}
        <Button variant="text" href="https://google.com">
          Text
        </Button>{" "}
        {/* for normal text */}
        <Button variant="contained">Contained</Button>{" "}
        {/* for emphasis ex: action button (register or login) */}
        <Button variant="outlined">Outlined</Button>{" "}
        {/* ex: cancel or go back */}
        {/* </div> */}
      </Stack>

      {/* Example of All buttons */}
      <Stack spacing={2} direction="row">
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" color="error">
          Error
        </Button>
        <Button variant="contained" color="warning">
          Warning
        </Button>
        <Button variant="contained" color="info">
          Info
        </Button>
        <Button variant="contained" color="success">
          Success
        </Button>
      </Stack>

      {/* Example of Size Variations */}
      <Stack display="block" spacing={2} direction="row">
        <Button variant="contained" size="small">
          Small
        </Button>
        <Button variant="contained" size="medium">
          Medium
        </Button>
        <Button variant="contained" size="large">
          Large
        </Button>
      </Stack>

      {/* Example of Icon Components */}
      <Stack spacing={2} direction="row">
        {/* Disabling Ripple Effect when clicking */}
        {/* To Handle Click event use the onClick prompt */}
        <Button
          variant="contained"
          startIcon={<SendIcon />}
          disableRipple
          onClick={() => alert("Clicked")}
        >
          Send
        </Button>
        {/* Disabling Shadow */}
        <Button variant="contained" endIcon={<SendIcon />} disableElevation>
          Send
        </Button>
        {/* Example of icon button component (icon w/o text) */}
        <IconButton aria-label="send" color="success" size="small">
          <SendIcon />
        </IconButton>
      </Stack>

      {/* BUTTON GROUP */}
      <Stack>
        {/* Passing Orientation Prompt, size and color */}
        {/* NOTE: the appearance of the group button differs from the tutorial */}
        <ButtonGroup
          variant="contained"
          orientation="vertical"
          size="small"
          color="secondary"
          aria-label="alignment button group"
        >
          <Button onClick={() => alert("Left clicked")}>Left</Button>
          <Button>Center</Button>
          <Button>Right</Button>
        </ButtonGroup>
      </Stack>

      {/* Toggle Button Group Component*/}
      {/* Incorporation of useState */}
      <Stack direction="row">
        <ToggleButtonGroup
          aria-label="text formatting"
          value={formats}
          onChange={handleFormatChange} //define this function above const handleFormatChange
          // Addition of cosmetic prompts
          size="small"
          color="success"
          orientation="vertical"
          // Exclusive Prompt - The user may only choose either one of the following function
          exclusive
        >
          <ToggleButton value="bold" aria-label="bold">
            <FormatBoldIcon />
          </ToggleButton>
          <ToggleButton value="italic" aria-label="italic">
            <FormatItalicIcon />
          </ToggleButton>
          <ToggleButton value="underlined" aria-label="underlined">
            <FormatUnderlinedIcon />
          </ToggleButton>
        </ToggleButtonGroup>
      </Stack>
    </Stack>
  );
};
