import { Box } from "@mui/system";
import CircularProgress from "@mui/material/CircularProgress";

export default function CircularProgressWithLabel(props) {
  return (
    <Box sx={{ position: "relative", display: "inline-flex" }}>
      <CircularProgress variant="determinate" {...props} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: "absolute",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {`${Math.round(props.value)}%`}
      </Box>
    </Box>
  );
}
