const categories = [
    { id: 'cb029e96-4386-4f6f-994a-ab012c9fb352', name: 'מנות ראשונות', place: 2 },
    { id: '99168b99-d2b6-4cbe-b7a6-1277b0ad6665', name: 'סלטים', place: 3 }
];

const recipes = [
    { id: 'f3ec872f-a736-48da-96c9-033ecc18461a', name: 'סלט קישואים בטעם כבד', introduction: '["שמים בתבנית את הקישואים והבצל", "מרססים שמן", "אופים 45 דקות על 180 מעלות", "מרסקים בכל בבלנדר ידני"]' },
];

const categories_recipes = [
    { category_id: '99168b99-d2b6-4cbe-b7a6-1277b0ad6665', recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a' },
];

const products = [
    { id: '847d216c-7eba-4b60-82d6-7352a815ed5b', name: 'בצל' },
    { id: '3f0ae3dd-6283-40c4-ab67-5c21e7d7444b', name: 'קישוא' },
];

const recipes_products = [
    { recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a', product_id: '847d216c-7eba-4b60-82d6-7352a815ed5b', count: '3', description: 'קלופים וקצוצים' },
    { recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a', product_id: '3f0ae3dd-6283-40c4-ab67-5c21e7d7444b', count: '3', description: 'קלופים וקצוצים' },
];

const users = [
    {
        id: '60a65558-fdf1-4afe-aded-e3efcbc18d73',
        name: 'Ruth',
        email: 'ruth@mail.com',
        password: '1',
    },
];

module.exports = {
    categories,
    recipes,
    categories_recipes,
    products,
    recipes_products,
    users,
}