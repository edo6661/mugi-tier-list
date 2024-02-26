import React from "react";
import ReusableModal from "../modal/ReusableModal";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import FormAddUser from "./FormAddUser";

const AddUser = () => {
  return (
    <>
      <ReusableModal
        title="Add User"
        trigger="Create User"
        close={<Button variant="outline">Close</Button>}
        description="Add a new user to the system."
      >
        <FormAddUser />
      </ReusableModal>
    </>
  );
};

export default AddUser;
