import { Box, Typography, Paper } from "@mui/material";
// import { tokens } from "../theme";

const StatBox = ({ title, icon, amount }) => {
  //   const theme = useTheme();
  //   const colors = tokens(theme.palette.mode);

  return (
    <Paper
      elevation={3}
      sx={{ p: 3, gridColumn: "span 2", backgroundColor: "skyblue" }}
    >
      <Typography variant="h4">{title}</Typography>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {icon}
        <Typography variant="h4">{amount}</Typography>
      </Box>
    </Paper>
  );
};

export default StatBox;
