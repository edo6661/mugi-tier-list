"use client";
import React, { useState } from "react";
import ReusableModal from "../modal/ReusableModal";
import { Button } from "../ui/button";
import FormAddUser from "./FormAddUser";

const AddUser = () => {
  const [isOpen, setIsOpen] = useState(false);
  const trueIsOpen = () => setIsOpen(true);
  const falseIsOpen = () => setIsOpen(false);
  return (
    <>
      <ReusableModal
        title="Add User"
        trigger="Create User"
        close={<Button variant="outline">Close</Button>}
        description="Add a new user to the system."
        isOpen={isOpen}
        trueIsOpen={trueIsOpen}
        falseIsOpen={falseIsOpen}
      >
        <FormAddUser falseIsOpen={falseIsOpen} />
      </ReusableModal>
    </>
  );
};

export default AddUser;
