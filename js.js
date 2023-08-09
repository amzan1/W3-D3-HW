/////////////Create array/////////////
const books = [
    {
        title: "Harry Potter",
        author: "J. K. Rowling",
        numberOfPages: 	340,
        available: true,
    },
    {
        title: "The Silent Patient",
        author: "Alex Michaelides",
        numberOfPages: 320,
        available: true,
    },
    {
        title: "And Then There Were None",
        author: "Agatha Christie",
        numberOfPages: 224,
        available: true,
    },
    {
        title: "We Were Liars",
        author: "Emily Lockhart",
        numberOfPages: 	240,
        available: false,
    },
    {
        title: "Sun is Also a Star",
        author: "Nicola Yoon",
        numberOfPages: 384,
        available: true,
    },
];

/////////////Create for loop/////////////
console.log(" ------------- print first loop ------------- ")


for (const element of books) {
    let Title = element.title
    console.log(Title);
    let Author = element.author
    console.log(Author);
    let NumOfPages = element.numberOfPages
    console.log(NumOfPages);
    console.log("\n")
}

/////////////Create function borrowBook/////////////

function borrowBook(title,nameBorrower){

    books.find(function(x,i){
        if(x.title === title && x.available===true){
            x.available=false;
            books[i].borrower=nameBorrower;
            return console.log (x)
        }
        if(x.title === title && x.available===false){
            x.available= false;
            let mess="the book ' "+title+" 'is not available"
            return console.log(mess)
        }
    });
}

// /////////////Create function returnBook/////////////
function returnBook(title){
    let get_title=books.find(function(x){
        let re=x.title==title
        return re
    })
let check = 'borrower' in get_title
// console.log(check); 
if(check==true){
    books.find(function(x,i){
        x.title==title
        x.available=true
        let d= delete books[i].borrower
    })
}if(check==false){
console.log(title+" this book was never borrowed")
}
}
console.log(" ------------- Test borrowBook and returnBook function ------------- ")
console.log("\n")
console.log(" ------------- Borrow the We Were Liars book ------------- ")

borrowBook("We Were Liars","amal")

console.log("\n")

console.log(" ------------- Borrow the Harry Potter book ------------- ")
borrowBook("Harry Potter","amzan")
console.log(" ------------- Return the Harry Potter book ------------- ")
returnBook("Harry Potter")
console.log("\n")
console.log(" ------------- Return the Sun is Also a Star book ------------- ")
returnBook("Sun is Also a Star")
console.log("\n")
console.log(" ------------- Borrow the The Silent Patient book ------------- ")
borrowBook("The Silent Patient","anas")

// /////////////Create for loop/////////////
console.log(" ------------- print second loop ------------- ")

for (const key of books) {
    let Title = key.title
    console.log(Title);
    let Author = key.author
    console.log(Author);
    let NumOfPages = key.numberOfPages
    console.log(NumOfPages);
    
    let get_title=books.find(function(x){
        let re=x.title==key.title
        return re
    })
let check = 'borrower' in get_title
    if(check==true){
    let bor=key.borrower 
    console.log(bor+"");
    }
    console.log("\n")
}

// /////////////Create function addBook/////////////

function addBook (title , author , numberOfPages){
    let NewObject = {}; 
    NewObject.title=title;
    NewObject.author=author;
    NewObject.numberOfPages=numberOfPages;
    NewObject.available=true;
    books.push(NewObject)
    // console.log(books)
}

addBook("Behave","Robert Sapolsky",800)


// /////////////Create function searchBook/////////////

function searchBook(search){
    books.find(function(x){
        if(x.title==search||x.author==search||x.borrower==search){
            console.log(x)
        }
    }) 
}
console.log(" ------------- Test searchBook function ------------- ")
console.log("\n")
console.log(" ------------- search with Title ------------- ")
searchBook("Sun is Also a Star")

console.log(" ------------- search with Author ------------- ")
searchBook("J. K. Rowling")

console.log(" ------------- search with borrower name ------------- ")
searchBook("anas")