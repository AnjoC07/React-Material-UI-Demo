import { Stack, Rating } from "@mui/material";
import { useState } from "react";
// Importing icon (Heart Icon)
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";

// Declaration of useState Variable
export const MuiRating = () => {
  const [value, setValue] = useState<number | null>(3);
  console.log(value);
  const handleChange = (
    _event: React.ChangeEvent<{}>,
    newValue: number | null
  ) => {
    setValue(newValue);
  };
  return (
    <Stack spacing={2}>
      <Rating
        value={value}
        onChange={handleChange}
        precision={0.5} // precision can indicate % of selection in rating
        size="large"
        // Use of Heart Icon
        icon={<FavoriteIcon fontSize="inherit" color="error" />}
        emptyIcon={<FavoriteBorderIcon fontSize="inherit" />}
        //readOnly //Specify Display Only
        highlightSelectedOnly // Highlighted specific icon being selected // suitable for feedback that uses emojis
      />
    </Stack>
  );
};
