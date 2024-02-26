"use client";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Heading } from "../ui/heading";
import { useGlobalState } from "@/store/useGlobalState";

export interface ModalType {
  children: React.ReactNode;
  trigger: string;
  title: string;
  description?: React.ReactNode;
  submit?: React.ReactNode;
  close?: React.ReactNode;
}

const ReusableModal = ({
  children,
  trigger,
  title,
  description,
  submit,
  close,
}: ModalType) => {
  const { falseIsOpen, isOpen, trueIsOpen } = useGlobalState((state) => state);

  console.log(isOpen);

  return (
    <Dialog open={isOpen} onOpenChange={falseIsOpen}>
      <Button variant="outline" onClick={() => trueIsOpen()}>
        {trigger}
      </Button>
      <DialogContent
      // className="sm:max-w-[425px]"
      >
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>{description}</DialogDescription>
        </DialogHeader>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default ReusableModal;
