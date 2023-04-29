const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/booksname").then(() => console.log("connected to Mongodb"))
.catch((err) => {
    console.log("something wrong happend-----", err);
})

// schema for books
const booksSchema = mongoose.Schema({
    // name: {type: String, required: true},
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    author: String,
    genre : {type : [String], enum: ['fantasy', 'horror', 'thriller', 'comedy', 'finance']},
    date : {type: Date, default: Date.now},
    ispublished: Boolean,
});

// book modal
const Book = mongoose.model("Book", booksSchema);

// function to create book object 
async function createBook(){
    const book = new Book({
        
        author: "James Carl",
        genre : ["fantasy", "sci-fi"],
        ispublished : false,
    })
    const result = await book.save();
    console.log(`Created book with db -- ${result}`);
};

// createBook();

async function createBookOne(){
    const bookOne = new Book({
        name: "Rich Dad Poor Dad",
        author: "Rober Kiyoski",
        genre: ['finance'],
        ispublished: true,
    });

    try {
        const results = await bookOne.save();
        console.log(`Created new book-- ${results}`);
    } catch(err) {
        console.log(`Error while creating new books, ${err}`);
    }
}

// createBookOne();

// 1. Reading all books - find
async function getAllBooks(){
    const books = await Book.find();
    console.log("Books is ", books);
}
// getAllBooks();

// 2. Reading specific books
// async function getBooks() {
//     const books = await Book.find({
//         ispublished: false,
//         author: "Ali Murtaza Babita"
//     });
//     console.log("not published books are, ", books);
// }

// getBooks();

// 3. Reading specific books with specific property
async function getBooks() {
    const books = await Book.find({
        ispublished: false,
        author: "Ali Murtaza"
    }).select({
        name: 1, author: 1,
    });
    console.log("published books are, ", books);
}

// getBooks();

// 4. sort by names, use sort = 1 for asecd and -1 for desc, count
// async function getAllBooks(){
//     const books = await Book.find().sort({
//         author: 1,
//     }).select({
//         name:1,
//         author: 1,
//     })
//     // .count()
//     .limit(3);
//     console.log("Books is ", books);
// }
// getAllBooks();


// 5. logical operation for find the data
async function getAllBooks(){
    // const books = await Book.find().and([{author: 'Ali Murtaza'},{ispublished: false}])

    // OR operation

    // const books = await Book.find().or([
    //     {author: " Ali Murtaza"},
    //     {ispublished: true}
    // ]);


    // regular expresssion
    // start -> /^pattern/ i is used for case insensitive
    // const books = await Book.find({
    //     author: /^J/i,
    // })

    // end -> /pattern$/
    // const books = await Book.find({
    //     author: /a$/,
    // })

    // in between searching -> /.*pattern.*/
    const books = await Book.find({
        author: /.* .*/i,
    })

    console.log("Books ", books);
}
getAllBooks();