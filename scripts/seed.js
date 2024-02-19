const { db } = require('@vercel/postgres');
const bcrypt = require('bcrypt');
const { categories, products, recipes, categories_recipes, recipes_products, users } = require('./initial-data');

async function seedCategories(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "categories" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          place INT NOT NULL
        );
      `;

        console.log(`Created "categories" table`);

        // Insert data into the "categories" table
        const insertedCategories = await Promise.all(
            categories.map(async (cat) => {
                return client.sql`
          INSERT INTO categories (id, name, place)
          VALUES (${cat.id}, ${cat.name}, ${cat.place})
          ON CONFLICT (id) DO NOTHING;
        `;
            }),
        );

        console.log(`Seeded ${insertedCategories.length} categories`);

        return {
            createTable,
            users: insertedCategories,
        };
    } catch (error) {
        console.error('Error seeding categories:', error);
        throw error;
    }
}

async function seedRecipes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "recipes" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS recipes (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          introduction JSON,
          link VARCHAR(255)
        );
      `;

        console.log(`Created "recipes" table`);

        // Insert data into the "recipes" table
        const insertedRecipes = await Promise.all(
            recipes.map(async (recipe) => {
                return client.sql`
                    INSERT INTO recipes (id, name, introduction)
                    VALUES (${recipe.id}, ${recipe.name}, ${recipe.introduction})
                    ON CONFLICT (id) DO NOTHING;
                    `;
            }),
        );

        console.log(`Seeded ${insertedRecipes.length} recipes`);

        return {
            createTable,
            users: insertedRecipes,
        };
    } catch (error) {
        console.error('Error seeding recipes:', error);
        throw error;
    }
}

async function seedCategoriesRecipes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "categories_recipes" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS categories_recipes (
          category_id UUID,
          recipe_id UUID,
          PRIMARY KEY (category_id,recipe_id)
        );
      `;

        console.log(`Created "categories_recipes" table`);

        // Insert data into the "categories_recipes" table
        const inserted = await Promise.all(
            categories_recipes.map(async (cat) => {
                return client.sql`
                    INSERT INTO categories_recipes (category_id,recipe_id)
                    VALUES (${cat.category_id}, ${cat.recipe_id})
                    ON CONFLICT (category_id,recipe_id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${inserted.length} categories_recipes`);

        return {
            createTable,
            users: inserted,
        };
    } catch (error) {
        console.error('Error seeding categories_recipes:', error);
        throw error;
    }
}

async function seedProducts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "products" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS products (
            id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
            name VARCHAR(255) NOT NULL
        );
      `;

        console.log(`Created "products" table`);

        // Insert data into the "products" table
        const inserted = await Promise.all(
            products.map(async (cat) => {
                return client.sql`
                    INSERT INTO products (id, name)
                    VALUES (${cat.id}, ${cat.name})
                    ON CONFLICT (id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${inserted.length} products`);

        return {
            createTable,
            users: inserted,
        };
    } catch (error) {
        console.error('Error seeding products:', error);
        throw error;
    }
}

async function seedRecipesProducts(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "recipes_products" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS recipes_products (
          recipe_id UUID,
          product_id UUID,
          count VARCHAR(255),
          description VARCHAR(255),
          PRIMARY KEY (recipe_id, product_id)
        );
      `;

        console.log(`Created "recipes_products" table`);

        // Insert data into the "recipes_products" table
        const inserted = await Promise.all(
            recipes_products.map(async (re) => {
                return client.sql`
                    INSERT INTO recipes_products (recipe_id, product_id, count, description)
                    VALUES (${re.recipe_id}, ${re.product_id}, ${re.count}, ${re.description})
                    ON CONFLICT (recipe_id, product_id) DO NOTHING;
                `;
            }),
        );

        console.log(`Seeded ${inserted.length} recipes_products`);

        return {
            createTable,
            users: inserted,
        };
    } catch (error) {
        console.error('Error seeding recipes_products:', error);
        throw error;
    }
}

async function seedUsers(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "users" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS users (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          name VARCHAR(255) NOT NULL,
          email TEXT NOT NULL UNIQUE,
          password TEXT NOT NULL
        );
      `;

        console.log(`Created "users" table`);

        // Insert data into the "users" table
        const insertedUsers = await Promise.all(
            users.map(async (user) => {
                const hashedPassword = await bcrypt.hash(user.password, 10);
                return client.sql`
                    INSERT INTO users (id, name, email, password)
                    VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
                    ON CONFLICT (id) DO NOTHING;
                    `;
            }),
        );

        console.log(`Seeded ${insertedUsers.length} users`);

        return {
            createTable,
            users: insertedUsers,
        };
    } catch (error) {
        console.error('Error seeding users:', error);
        throw error;
    }
}

async function seedMenus(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "menus" table if it doesn't exist
        const createTable = await client.sql`
        CREATE TABLE IF NOT EXISTS menus (
          id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
          user_id UUID NOT NULL,
          created_at timestamp DEFAULT CURRENT_TIMESTAMP,
          name VARCHAR(255) NOT NULL
        );
      `;

        console.log(`Created "menus" table`);

        return {
            createTable,
        };
    } catch (error) {
        console.error('Error seeding menus:', error);
        throw error;
    }
}

async function seedMenusRecipes(client) {
    try {
        await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
        // Create the "menus_recipes" table if it doesn't exist
        const createTable = await client.sql`
            CREATE TABLE IF NOT EXISTS menus_recipes (
                menu_id UUID,
                recipe_id UUID,
                PRIMARY KEY (menu_id, recipe_id)      
            );
      `;

        console.log(`Created "menus_recipes" table`);

        return {
            createTable,
        };
    } catch (error) {
        console.error('Error seeding menus_recipes:', error);
        throw error;
    }
}

async function main() {
    const client = await db.connect();

    await seedCategories(client);
    await seedRecipes(client);
    await seedCategoriesRecipes(client);
    await seedProducts(client);
    await seedRecipesProducts(client);
    await seedUsers(client);
    await seedMenus(client);

    await client.end();
}

main().catch((err) => {
    console.error(
        'An error occurred while attempting to seed the database:',
        err,
    );
});
