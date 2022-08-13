import { Typography } from "@mui/material";
const Comment = ({ children }) => <Typography variant="h5" component="div" className="grandhotel" textAlign={"center"} sx={{mb:2}} fontStyle="italic">{"<!--"} {children} {"-->"}</Typography>
export default Comment;