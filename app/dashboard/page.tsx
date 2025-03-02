'use client';
import React, { useState } from 'react';
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemButton,
  ListItemAvatar,
  Avatar,
  ListItemText,
  Typography,
  Button
} from '@mui/material';

import SympTrack from './SympTrack';
import SympCharts from './SympCharts';
import SideBar from '../SideBar';

export default function Dashboard() {
  const [open, setOpen] = useState(false);
  const [selectedValue, setSelectedValue] = useState("hi");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value: string) => {
    setOpen(false);
    setSelectedValue(value);
  };

  return (
    <div className="flex flex-col h-screen">
      {/* Header */}
      <header className="w-full h-16 bg-blue-500"></header>

      <main className="flex flex-grow">
        <SideBar />
        <div className="flex flex-col w-full items-center">

          <SympTrack />
          <SympCharts />
        </div>
      </main>
    </div>
  );
}
