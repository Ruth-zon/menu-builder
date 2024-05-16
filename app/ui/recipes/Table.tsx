"use client";

import { fetchFilteredRecipes } from "@/app/lib/recipesActions";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  getKeyValue,
} from "@nextui-org/react";

const columns = [
  {
    key: "name",
    label: "שם מתכון",
  },
  {
    key: "creator",
    label: "יוצר",
  },
  {
    key: "categories",
    label: "קטגוריות קשורות",
  },
];

export default async function RecipesTable({
  query,
  currentPage,
}: {
  query: string;
  currentPage: number;
}) {
  const rows = await fetchFilteredRecipes(query, currentPage);
  return (
    <Table aria-label="Recipe table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{getKeyValue(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
