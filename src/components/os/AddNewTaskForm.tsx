// src/components/os/AddNewTaskForm.tsx
"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

// เราจะส่ง props สองอย่างเข้ามา: isOpen (บอกว่า Dialog เปิดอยู่ไหม)
// และ setIsOpen (ฟังก์ชันสำหรับสั่งปิด Dialog)
interface AddNewTaskFormProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
}

export function AddNewTaskForm({ isOpen, setIsOpen }: AddNewTaskFormProps) {
  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new task</DialogTitle>
          <DialogDescription>
            What&#39;s on your mind? Just dump it here. We&#39;ll organize it later.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="task-title" className="text-right">
              Task
            </Label>
            <Input
              id="task-title"
              placeholder="e.g., Learn to cook Pad Thai"
              className="col-span-3"
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Save Task</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}