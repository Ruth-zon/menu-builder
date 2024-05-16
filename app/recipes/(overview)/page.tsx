import { Suspense } from "react";
import Filters from "@/app/ui/recipes/Filters";
import { Recipe } from "@/app/lib/definitions";
import Table from "@/app/ui/recipes/Table";

export default function Home() {
  return (
    <div>
      <Suspense fallback={<div>loading</div>}>
        <Filters>
          <Table query="" currentPage={1} />
        </Filters>
      </Suspense>
    </div>
  );
}
