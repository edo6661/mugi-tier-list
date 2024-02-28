import ReusableModal from "@/components/modal/ReusableModal";
import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { getTierlist } from "@/services/tierlists";
import { formatDate } from "@/utils/formatDate";
import Image from "next/image";
import FormAddItem from "./_components/FormAddItem";
import AddItem from "./_components/AddItem";
import { getTierlistItems } from "@/services/item";
import Tierlist from "./_components/Tierlist";
import TierlistItems from "./_components/TierlistItems";

interface TierlistPageProps {
  params: {
    id: string;
  };
}
const TierlistPage = async ({ params }: TierlistPageProps) => {
  const tierlist = await getTierlist(params.id);
  const items = await getTierlistItems(params.id);

  return (
    <section className="container space-y-8">
      <article>
        <Heading>TierlistPage</Heading>
        <Tierlist {...tierlist!} />
      </article>
      <article>
        <AddItem id={params.id} />
      </article>
      <article>
        <TierlistItems items={items} />
      </article>
    </section>
  );
};

export default TierlistPage;
