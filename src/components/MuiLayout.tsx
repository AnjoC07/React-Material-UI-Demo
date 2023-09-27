import { Box, Stack, Grid, Paper } from "@mui/material";

// Box components in MUI used as replacement in Div
// Box accepts layout component prompt such as span

export const MuiLayout = () => {
  return (
    // Paper - Establishing Visual hierarchy - ex: signup button, card component
    <Paper sx={{ padding: "32px" }} elevation={2}>
      {/* 2. Stack  component for one dimensional Layout */}
      {/* <Stack 
        sx={{ border: "1px solid" }} 
        direction="row" 
        spacing={2} 
        divider={<Divider orientation="vertical" flexItem/>}
      > */}
      <Stack border="1px solid" spacing={2} direction="row">
        {/* 1. Box */}
        <Box
          component="span"
          sx={{
            backgroundColor: "primary.main",
            color: "white",
            height: "100px",
            width: "100px",
            padding: "16px",
            "&:hover": {
              backgroundColor: "primary.light",
            },
          }}
        >
          Codevolution
        </Box>
        {/* Flex */}
        <Box
          display="flex"
          height="100px"
          width="100px"
          bgcolor="success.light"
          p={2}
        ></Box>
      </Stack>
      {/* 3. Grid Component */}
      Grid
      {/* Grid Container for Parent */}
      <Grid rowSpacing={2} columnSpacing={1} container my={4}>
        {/* Grid Container for Children */}
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 1
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 2
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 3
          </Box>
        </Grid>
        <Grid item xs={6}>
          <Box p={2} bgcolor="primary.light">
            Item 4
          </Box>
        </Grid>
      </Grid>
    </Paper>
  );
};
