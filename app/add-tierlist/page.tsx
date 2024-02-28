import React from "react";
import FormAddTierList from "./_components/FormAddTierlist";
import { Heading } from "@/components/ui/heading";
import { getCurrentUser } from "@/services/user";

const AddTierListPage = async () => {
  const currentUser = await getCurrentUser();
  return (
    <section>
      <div className="container">
        <FormAddTierList {...currentUser} />
      </div>
    </section>
  );
};

export default AddTierListPage;
