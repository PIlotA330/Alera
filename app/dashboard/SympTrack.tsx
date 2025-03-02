"use client";

import React, { useEffect, useState } from 'react';
import { Button } from '@mui/material';
import Card from '@mui/material/Card';

interface Symptom {
  id: number;
  name: string;
  // Add other properties that might be in the response
}

interface GroupedSymptoms {
  day: string;
  symptoms: Symptom[];
}

const SympTrack = () => {
  const [weekSymptoms, setWeekSymptoms] = useState<GroupedSymptoms[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());

  useEffect(() => {
    // Update time every second
    const intervalId = setInterval(() => {
      setCurrentTime(new Date().toLocaleTimeString());
    }, 1000);

    // Fetch data
    const fetchData = async () => {
      try {
        console.log("Fetching data...");
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        
        const data = await res.json();
        console.log("Received data:", data);
        
        // Ensure we got an array
        if (!Array.isArray(data)) {
          throw new Error("API did not return an array");
        }
        
        // Group data by days (mock grouping for demo)
        const days = ['Monday', 'Tuesday', 'Wednesday'];
        const grouped = days.map((day, index) => ({
          day,
          symptoms: data.slice(index * 3, (index + 1) * 3).map(user => ({
            id: user.id,
            name: user.name
          }))
        }));
        
        console.log("Grouped data:", grouped);
        setWeekSymptoms(grouped);
        setIsLoading(false);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(error instanceof Error ? error.message : 'Unknown error occurred');
        setIsLoading(false);
      }
    };

    fetchData();

    // Clean up interval
    return () => clearInterval(intervalId);
  }, []); // Empty dependency array means this runs once on mount

  // If there's an error, show it
  if (error) {
    return (
      <div className="flex justify-center p-8 text-red-500">
        Error loading data: {error}
      </div>
    );
  }

  // Show loading state
  if (isLoading) {
    return (
      <div className="flex justify-center p-8">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-12 w-12 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          <p className="mt-4">Loading symptoms data...</p>
        </div>
      </div>
    );
  }

  // If we're not loading and we have no data, show a message
  if (!isLoading && weekSymptoms.length === 0) {
    return (
      <div className="flex justify-center p-8">
        No symptoms data available.
      </div>
    );
  }

  // Display the actual component
  return (
    <main className="flex flex-col items-center justify-center p-4">
      <h1 className="text-xl font-bold mb-4">Current Time: {currentTime}</h1>
      
      <div className="flex flex-wrap justify-center">
        {weekSymptoms.map((daySymptoms, index) => (
          <Card key={index} className="w-80 h-80">
            <h2 className="text-lg font-semibold mb-2">{daySymptoms.day}</h2>
            <ul className="list-disc pl-5">
              {daySymptoms.symptoms.map(symptom => (
                <li key={symptom.id} className="mb-1">{symptom.name}</li>
              ))}
            </ul>
          </Card>
        ))}
      </div>
    </main>
  );
};

export default SympTrack;