// DEPENDENCIES
const express = require('express')
const router = express.Router();
const books = require ('../models/book.js')



// ROUTES
router.get('/', (req, res) => {
  // Logic to fetch all books from the database
  books.find()
      .then((books) => {
          res.status(200).json(books);
      })
      .catch((error) => {
          res.status(400).json({
              message: 'Error fetching books',
              error: error.message
          });
      });
});



router.post('/', (req, res) => {
  books.create(req.body)
  .then(() => {
      res.redirect('/books')
  })
  .catch(err => {
  if (err && err.name == 'ValidationError') {
  let message = 'Validation Error: '
  for (var field in err.errors) {
       message += `${field} was ${err.errors[field].value}. `
       message += `${err.errors[field].message}`
      }
      console.log('Validation error message', message)
      res.render('books/new', { message })
      }
  else  {
      res.render('error404')
      }
        })
      })

router.get('/:id', (req, res) => {
  const bookId = req.params.id;

  books.findById(bookId)
      .then(book => {
          if (!book) {
              return res.status(404).json({ message: 'Book not found' });
          }
          res.status(200).json(book);
      })
      .catch(error => {
          res.status(500).json({ message: 'Error fetching book', error: error.message });
      });
});

router.put('/:id', (req, res) => {
  const bookID = req.params.id;
  books.findByIdAndUpdate(bookID)
  .then(() => {
      res.redirect(`/books/${req.params.id}`)
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.delete('/:id', (req, res) => {
  books.findByIdAndDelete(req.params.id)
  .then(book => {
      res.redirect('/books')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})


module.exports = router;



