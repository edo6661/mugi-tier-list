"use client";
import ReusableModal from "@/components/modal/ReusableModal";
import React from "react";
import FormAddItem from "./FormAddItem";

interface AddItemProps {
  id: string;
}

const AddItem = ({ id }: AddItemProps) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const trueIsOpen = () => setIsOpen(true);
  const falseIsOpen = () => setIsOpen(false);
  return (
    <ReusableModal
      title="Add Item"
      trigger="Add Item"
      description="Add a new item to the tierlist"
      isOpen={isOpen}
      trueIsOpen={trueIsOpen}
      falseIsOpen={falseIsOpen}
    >
      <FormAddItem id={id} falseIsOpen={falseIsOpen} />
    </ReusableModal>
  );
};

export default AddItem;
