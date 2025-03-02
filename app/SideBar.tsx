"use client"
import { Button } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const SideBar = () => {
  return (
    <div className="w-[25%] bg-blue-200 h-[100%] flex flex-col p-3 gap-[3rem]">
      <Link href="/dashboard">
        <Button variant="contained">Home</Button>
      </Link>
      <Link href="/community">
        <Button variant="contained">Community</Button>
      </Link>
      <Link href="/symptoms">
        <Button variant="contained">Symptoms</Button>
      </Link>
      <Link href="/medicine">
        <Button variant="contained">Medicine</Button>
      </Link>
      <Link href="/Map">
        <Button variant="contained">Map</Button>
      </Link>
    </div>
  )
}

export default SideBar