// src/app/os/page.tsx
"use client"; // ต้องมีบรรทัดนี้!

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { PlusCircle } from "lucide-react";
import { AddNewTaskForm } from "@/components/os/AddNewTaskForm"; // 1. import เข้ามา

export default function OsPage() {
  // 2. สร้าง state เพื่อควบคุมการเปิด/ปิด Dialog
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  return (
    <> {/* 3. ครอบทุกอย่างด้วย Fragment (<>...</>) */}
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div className="flex items-center justify-between space-y-2">
          <h2 className="text-3xl font-bold tracking-tight">Intelligent Life OS</h2>
          <div className="flex items-center space-x-2">
            {/* 4. เพิ่ม onClick เพื่อสั่งเปิด Dialog */}
            <Button onClick={() => setIsDialogOpen(true)}>
              <PlusCircle className="mr-2 h-4 w-4" /> Add New Task
            </Button>
          </div>
        </div>

        {/* ส่วนของ Kanban board เหมือนเดิม... */}
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Column 1: To Do */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>To Do</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <Card><CardContent className="p-4"><p>สร้างเว็บ Portfolio ส่วนตัว</p></CardContent></Card>
              <Card><CardContent className="p-4"><p>เรียนภาษาญี่ปุ่น</p></CardContent></Card>
            </CardContent>
          </Card>
          {/* Column 2: In Progress */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>In Progress</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4">
              <Card><CardContent className="p-4"><p>สร้างโปรเจกต์ &quot;Intelligent Life OS&quot;</p></CardContent></Card>
            </CardContent>
          </Card>
          {/* Column 3: Done */}
          <Card className="flex flex-col">
            <CardHeader>
              <CardTitle>Done</CardTitle>
            </CardHeader>
            <CardContent className="flex-grow space-y-4"></CardContent>
          </Card>
        </div>
      </div>

      {/* 5. เรียกใช้ Component ของฟอร์ม */}
      <AddNewTaskForm isOpen={isDialogOpen} setIsOpen={setIsDialogOpen} />
    </>
  );
}