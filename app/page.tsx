import { getUsers } from "@/services/user";
import Image from "next/image";
import React from "react";

const page = async () => {
  const users = await getUsers();
  return (
    <section>
      <article className="container">
        <div>
          {users?.map((user) => (
            <div key={user.id}>
              <h1>{user.username}</h1>
              {user.imageUrl && (
                <Image
                  src={user.imageUrl}
                  alt={user.username!}
                  width={240}
                  height={240}
                  className=" rounded-full object-contain"
                />
              )}
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default page;
