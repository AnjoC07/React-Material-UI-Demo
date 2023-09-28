import { Stack, CircularProgress, LinearProgress } from "@mui/material";

export const MuiProgress = () => {
  return (
    <Stack spacing={2}>
      {/* Circular Progress */}
      <CircularProgress />
      <CircularProgress color="success" />
      <CircularProgress variant="determinate" value={60} />
      {/* LinearProgress  */}
      <LinearProgress />
      <LinearProgress color="success" />
      <LinearProgress variant="determinate" value={60} />
    </Stack>
  );
};
