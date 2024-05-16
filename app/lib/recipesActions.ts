"use server";

import { sql } from "@vercel/postgres";
import { unstable_noStore as noStore } from "next/cache";
import { Recipe } from "./definitions";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredRecipes(query: string, currentPage: number) {
  noStore();
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    const recipes = await sql<Recipe>`
    SELECT
    r.id,
    r.name,
    r.introduction,
    r.link,
    r.creator,
    string_agg(c.name, ', ') AS categories,
    case when 
      r.creator is null then substring(link from '.*://([^/]*)')
      else r.creator 
      end as creator
    FROM recipes r
    LEFT JOIN categories_recipes cr ON r.id = cr.recipe_id
    LEFT JOIN categories c ON cr.category_id = c.id
    WHERE
        r.name LIKE ('%')
    GROUP BY r.id
    `;

    return recipes.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch recipe.");
  }
}

export async function fetchCategoryNames() {
  noStore();
  try {
    const categories = await sql<{name: string, id: string}[]>`
      SELECT id, name from categories;
    `
    return categories.rows;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch recipe.");
  }
}

/*

To clean DB run:

DROP TABLE categories;
DROP TABLE recipes;
DROP TABLE categories_recipes;
DROP TABLE products;
DROP TABLE recipes_products;
DROP TABLE menus;
*/