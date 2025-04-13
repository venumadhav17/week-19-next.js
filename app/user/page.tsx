// Data Fetching in Next.js

import axios from "axios";

export default async function User() {
  const response = await axios("http:localhost:3000/api/v1/user/details");

  const data = response.data;

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
