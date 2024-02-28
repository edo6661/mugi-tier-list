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
  description?: string;
  close?: React.ReactNode;
  isOpen: boolean;
  falseIsOpen: () => void;
  trueIsOpen: () => void;
}

const ReusableModal = ({
  children,
  trigger,
  title,
  description,
  falseIsOpen,
  isOpen,
  trueIsOpen,
}: ModalType) => {
  return (
    <Dialog open={isOpen} onOpenChange={falseIsOpen}>
      <Button variant="outline" onClick={() => trueIsOpen()}>
        {trigger}
      </Button>
      <DialogContent
      // className="sm:max-w-[425px ]"
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
