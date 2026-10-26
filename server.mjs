import express from "express"

const app = express();
const PORT = 3000;

const items = [
    {
        id: 1,
        item_name: "Pencil",
        category: "School Item",
        location_found: "Classroom",
        date_found: "October 14, 2026",
        claimed: false
    }, 
    {
        id: 2,
        item_name: "Ballpen",
        category: "School Item",
        location_found: "Classroom",
        date_found: "October 15, 2026",
        claimed: true
    }, 
    {
        id: 3,
        item_name: "Phone",
        category: "Hardware",
        location_found: "Gymansium",
        date_found: "October 15, 2026",
        claimed: false
    }
]

app.get('/api/item', (req, res) => {
    res.json(items);
})

app.get('/api/item/:id', (req, res) => {
    const itemId = parseInt(req.params.id);

    const item = items.find(i => i.id === itemId);

    if(!item) {
        return res.status(404).json({message: "Item not found"});
    }

    res.status(200).json(item);
});

// app.post('/api/item', (req, res) => {
//     const { name, category } = req.body;


//     if (!name || !category) {
//         return res.status(400).json({
//             error: "Missing fields are required"
//         });
//     }

//     const newItem = ()

//     if(!claimed) {

//     }

// })

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
