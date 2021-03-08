import React from 'react';
import { useRouter } from 'next/router';
import Home from "@mobile/Home";


export default function App() {
  const router = useRouter();
  return (
    <div>
      <Home navigation={router}/>
    </div>
  );
}