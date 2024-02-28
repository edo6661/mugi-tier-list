import { Heading } from "@/components/ui/heading";
import { getTierLists } from "@/services/tierlists";
import { getUserById } from "@/services/user";
import Image from "next/image";
import Link from "next/link";

const PageTierList = async () => {
  const tierlists = await getTierLists();

  return (
    <section className="container">
      <article>
        <Heading>Tierlists</Heading>
        {tierlists?.map((tierlist) => {
          return (
            <div key={tierlist.id}>
              <Link href={`/tierlist/${tierlist.id}`}>
                <h1>{tierlist.title}</h1>
                <Image
                  src={tierlist.imageUrl!}
                  alt={tierlist.title}
                  width={240}
                  height={240}
                  className=" rounded-full object-contain"
                />
              </Link>
              <p className="text-mutd text-sm">{tierlist.description}</p>
              <span className=" text-muted-foreground">
                {tierlist.owner.username}
              </span>
            </div>
          );
        })}
      </article>
    </section>
  );
};

export default PageTierList;
