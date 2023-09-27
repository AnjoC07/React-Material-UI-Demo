import { Stack, Chip, Avatar } from "@mui/material";
// import FaceIcon from "mui/icons-material/Face"; //Depreciated module
import { useState } from "react";

export const MuiChip = () => {
  // Array Creation
  const [chips, setChips] = useState(["Chip 1", "Chip 2", "Chip 3"]);
  const handleDelete = (chipToDelete: string) => {
    setChips((chips) => chips.filter((chip) => chip !== chipToDelete));
  };
  return (
    // Component Creation
    <Stack direction="row" spacing={1}>
      {/* 1. Color Prompt | 2. Size Prompt | 3. Variant Prompt | 4. Avatar */}

      <Chip
        label="Chip"
        color="primary"
        size="small"
        /* icon={<FaceIcon />} */
      />
      <Chip
        label="Chip Outlined"
        variant="outlined"
        color="secondary"
        avatar={<Avatar>V</Avatar>}
      />
      {/* Click Creation */}
      <Chip label="Click" color="success" onClick={() => alert("Clicked")} />
      {/* Delete chip */}
      <Chip
        label="Delete"
        color="error"
        onClick={() => alert("Clicked")}
        onDelete={() => alert("Delete")}
      />
      {chips.map((chip) => (
        <Chip key={chip} label={chip} onDelete={() => handleDelete(chip)} />
      ))}
    </Stack>
  );
};
