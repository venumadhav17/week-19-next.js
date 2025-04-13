// Data Fetching in Next.js

"use client";

import axios from "axios";
import { useEffect, useState } from "react";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState({});

  useEffect(() => {
    axios
      .get(
        "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
      )
      .then((response) => {
        setData(response.data);
        setLoading(false);
      });
  }, []); // after the backend responds back

  if (loading) {
    return <div>loading...</div>;
  }

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
