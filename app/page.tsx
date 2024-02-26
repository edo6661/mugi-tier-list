import { getUsers } from "@/services/user";
import React from "react";

const page = async () => {
  const users = await getUsers();
  return (
    <div>
      {users?.map((user) => (
        <div key={user.id}>
          <h1>{user.username}</h1>
        </div>
      ))}
    </div>
  );
};

export default page;
