import { Stack, Badge } from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

export const MuiBadge = () => {
  return (
    <Stack spacing={2} direction="row">
      <Badge badgeContent={5} color="secondary">
        <MailIcon />
      </Badge>
      <Badge badgeContent={0} color="secondary" showZero>
        <MailIcon />
      </Badge>
      {/* Setting the max value beyond 100 or set to desire "max" */}
      <Badge badgeContent={100} color="secondary" max={999}>
        <MailIcon />
      </Badge>
      {/* Variant Prompt */}
      {/* Use of Invisible Badge */}
      <Badge color="secondary" variant="dot" invisible={true}>
        <MailIcon />
      </Badge>
    </Stack>
  );
};
