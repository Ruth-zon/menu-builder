const categories = [
    { id: 'cb029e96-4386-4f6f-994a-ab012c9fb352', name: 'מנות ראשונות', place: 2 },
    { id: '99168b99-d2b6-4cbe-b7a6-1277b0ad6665', name: 'סלטים', place: 3 },
    { id: '2a03959e-a94e-40a4-9f0c-0a4ac8fc00ef', name: 'לחמים ומאפים', place: 7 },
];

const recipes = [
    { id: 'f3ec872f-a736-48da-96c9-033ecc18461a', name: 'סלט קישואים בטעם כבד', introduction: '["שמים בתבנית את הקישואים והבצל", "מרססים שמן", "אופים 45 דקות על 180 מעלות", "מרסקים בכל בבלנדר ידני"]' },
    { id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e', name: 'פיתות מחבת', introduction: '["מערבבים את הקמח, מלח, מים והשמרים", "מתפיחים כשעה להכפלת הנפח", "מחלקים ל-12 חלקים ומרדדים כל חלק לעלה דק", "שמים במחבת לחצי דקה כל צד"]' },
];

const categories_recipes = [
    { category_id: '99168b99-d2b6-4cbe-b7a6-1277b0ad6665', recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a' },
    { category_id: '2a03959e-a94e-40a4-9f0c-0a4ac8fc00ef', recipe_id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e' },
];

const products = [
    { id: '847d216c-7eba-4b60-82d6-7352a815ed5b', name: 'בצל' },
    { id: '3f0ae3dd-6283-40c4-ab67-5c21e7d7444b', name: 'קישוא' },
    { id: 'df1c478a-d57d-45c5-bd3f-4ae4c76327f6', name: 'קמח' },
    { id: '4d07cb31-1c4a-49ff-87e1-1266d5b0f232', name: 'מים', show_in_list: 0 },
    { id: 'ca1a0624-cae8-4af2-8d13-acc839363ebd', name: 'מלח', show_in_list: 0 },
    { id: '3e7d45a8-18cf-48a6-8d9e-d9bef6bca52d', name: 'שמרים' },
];

const recipes_products = [
    { recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a', product_id: '847d216c-7eba-4b60-82d6-7352a815ed5b', count: '3', description: 'קלופים וקצוצים' },
    { recipe_id: 'f3ec872f-a736-48da-96c9-033ecc18461a', product_id: '3f0ae3dd-6283-40c4-ab67-5c21e7d7444b', count: '3', description: 'קלופים וקצוצים' },
    { recipe_id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e', product_id: 'df1c478a-d57d-45c5-bd3f-4ae4c76327f6', count: '4 כוסות'},
    { recipe_id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e', product_id: '4d07cb31-1c4a-49ff-87e1-1266d5b0f232', count: '1.5 כוסות' },
    { recipe_id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e', product_id: 'ca1a0624-cae8-4af2-8d13-acc839363ebd', count: '1 כף' },
    { recipe_id: 'a0790654-9dc9-4886-8a4a-fc1e0bd16f3e', product_id: '3e7d45a8-18cf-48a6-8d9e-d9bef6bca52d', count: '1 כף' },
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