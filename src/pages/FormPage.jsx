import { Box } from "@mui/material";
import Form from "../components/Form";
import Header from "../components/ui/Header";

const FormPage = () => {
  return (
    <Box m="20px">
      <Header title="CREATE USER" subtitle="Create a New User Profile" />
      <Form />
    </Box>
  );
};

export default FormPage;
