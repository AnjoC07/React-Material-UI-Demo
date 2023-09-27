import { Stack, Alert, AlertTitle, Button } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
export const MuiAlert = () => {
  return (
    <Stack spacing={2}>
      {/* Severity Kind */}
      <Alert severity="error">This is an error alert</Alert>
      <Alert severity="warning">This is a warning alert</Alert>
      <Alert severity="info">This is an info alert</Alert>
      <Alert
        severity="success"
        // Icon inclusion
        icon={<CheckIcon fontSize="inherit" />}
      >
        This is a success alert
      </Alert>
      {/* Outlined Variant */}
      <Alert variant="outlined" severity="error">
        This is an outlined error alert
      </Alert>
      <Alert variant="outlined" severity="warning">
        This is a outlined warning alert
      </Alert>
      <Alert variant="outlined" severity="info">
        This is an outlined info alert
      </Alert>
      <Alert variant="outlined" severity="success">
        This is a outlined success alert
      </Alert>
      {/* Filled Variant */}
      <Alert
        variant="filled"
        severity="error"
        onClose={() => alert("Close alert")} //Close Button
      >
        <AlertTitle>Error</AlertTitle>
        This is an filled error alert
      </Alert>
      <Alert variant="filled" severity="warning">
        {/* Alert Title */}
        <AlertTitle>Warning</AlertTitle>
        This is a filled warning alert
      </Alert>
      <Alert variant="filled" severity="info">
        <AlertTitle>Info</AlertTitle>
        This is an filled info alert
      </Alert>
      <Alert
        variant="filled"
        severity="success"
        // Action Button
        action={
          <Button color="inherit" size="small">
            UNDO
          </Button>
        }
      >
        <AlertTitle>Success</AlertTitle>
        This is a filled success alert
      </Alert>
    </Stack>
  );
};
