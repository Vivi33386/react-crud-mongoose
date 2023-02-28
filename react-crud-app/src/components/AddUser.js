import React from "react";
import { useState } from "react";
import {
  FormControl,
  FormGroup,
  Input,
  InputLabel,
  Typography,
  styled,
  Button,
} from "@mui/material";
import { addUser } from "../service/api";
import { useNavigate } from "react-router-dom";


const Container = styled(FormGroup)`
  width: 50%;
  margin: 5% auto;
  & > div {
    margin-top: 20px;
  }
`;

const defaultvalues = {
  name: "",
  username: "",
  email: "",
  phone: "",
};

const AddUser = () => {
  const [user, setUser] = useState(defaultvalues);

  const navigate = useNavigate();

  const onValueChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const addUserDetails = async () => {
    await addUser(user);
    navigate("/all");
  };

  return (
    <Container>
      <Typography variant="h4">Add User</Typography>

      <FormControl>
        <InputLabel>Name</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="name"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Username</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="username"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Email</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="email"></Input>
      </FormControl>
      <FormControl>
        <InputLabel>Phone</InputLabel>
        <Input onChange={(e) => onValueChange(e)} name="phone"></Input>
      </FormControl>
      <FormControl>
        <Button variant="contained" onClick={() => addUserDetails()}>
          Add User
        </Button>
      </FormControl>
    </Container>
  );
};

export default AddUser;
