import { Stack, Button, IconButton } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export const MuiButton = () => {
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
    </Stack>
  );
};
