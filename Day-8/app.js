const mongoose = require('mongoose');

mongoose.connect("mongodb://127.0.0.1:27017/booksname")
.then(()=> console.log("Connected to Mongodb"))
.catch((err) => console.log("Error in connecting Mongodb", err));

// schema
const booksSchema = mongoose.Schema({
    name: {type: String, required: true, minlength: 3, maxlength: 50},
    author: String,
    genre : {type : [String], enum: ['fantasy', 'horror', 'thriller', 'comedy', 'finance', 'sci-fi']},
    date : {type: Date, default: Date.now},
    ispublished: Boolean,
});

// model
const Book = mongoose.model("Book", booksSchema);

// reading books

async function getAllBooks(){
    const books = await Book.find();
    console.log("Books are --", books);
};

// getAllBooks();

// now updating the books

async function updateBooks(id){
    const book = await Book.findById(id);
    if(!book) return;

    book.set({
        author: "Babita Singh",
        name: "The Glory Hole"
    });

    const updatedBook = await book.save();
    console.log(`Updated Book is -- ${updatedBook}`);
};

// updateBooks("644b5daf4fbf06eb76260ca3");

// deleting any data
async function deleteBook(){
    // const deletebook = await Book.findByIdAndDelete(id);

    const deletebook = await Book.deleteOne({author: "Ali Murtaza"});
    console.log(`Deleted Book is -- ${deletebook}`);
};

deleteBook();
