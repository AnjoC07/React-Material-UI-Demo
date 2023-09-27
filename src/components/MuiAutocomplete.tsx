import { Stack, Autocomplete, TextField } from "@mui/material";
import { useState } from "react";

// Use for 2nd Autocomplete
type Skill = {
  id: number;
  label: string;
};

// Array of Skills used in options in 1st Autocomplete
const skills = ["HTML", "CSS", "JavaScript", "TypeScript", "React"];

// Use for 2nd Autocomplete
const skillsOptions = skills.map((skill, index) => ({
  id: index + 1,
  label: skill,
}));

// useState Variable Declaration
export const MuiAutocomplete = () => {
  const [value, setValue] = useState<string | null>(null);
  const [skill, setSkill] = useState<Skill | null>(null); //Skill in type is the "Skill" declared above
  //   logging to the console
  console.log(skill);
  return (
    <Stack spacing={2} width="250px">
      {/* 1st Autocomple Example */}
      <Autocomplete
        options={skills} //Check array of skills above
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={value}
        onChange={(event: any, newValue: string | null) => {
          setValue(newValue);
        }}
        freeSolo // allowing free text input // best ex: google search
      />
      {/* 2nd Autocomplet Example */}
      <Autocomplete
        options={skillsOptions}
        renderInput={(params) => <TextField {...params} label="Skills" />}
        value={skill}
        onChange={(_event: any, newValue: Skill | null) => {
          setSkill(newValue);
        }}
      />
    </Stack>
  );
};
