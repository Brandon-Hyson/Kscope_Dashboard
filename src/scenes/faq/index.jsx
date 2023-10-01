import { Box, Typography, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens} from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return <Box m="20px">
    <Header title="FAQ" subtitle="Frequently Asked Questions Page" />
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          An Important question
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the text of the first important question.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Two Important questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the text of the second important question.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Three Important questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the text of the third important question.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Four Important questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the text of the fourth important question.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion defaultExpanded>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography color={colors.greenAccent[500]} variant="h5">
          Five Important questions
        </Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          This is the text of the fifth important question.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </Box>
};

export default FAQ;