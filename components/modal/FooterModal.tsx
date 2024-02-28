import React from "react";
import { DialogClose, DialogFooter } from "../ui/dialog";
import { Button } from "../ui/button";
interface FooterModalProps {
  isPending: boolean;
}
const FooterModal = ({ isPending }: FooterModalProps) => {
  return (
    <DialogFooter>
      <Button disabled={isPending}>Submit</Button>
      <DialogClose asChild>
        <Button variant="outline">Close</Button>
      </DialogClose>
    </DialogFooter>
  );
};

export default FooterModal;
