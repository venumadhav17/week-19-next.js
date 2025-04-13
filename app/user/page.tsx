// Data Fetching in Next.js

import axios from "axios";

export default async function User() {
  const response = await axios(
    "https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details"
  );

  await new Promise((r) => setTimeout(r, 5000));

  const data = response.data;

  return (
    <div>
      {data.name}
      {data.email}
    </div>
  );
}
