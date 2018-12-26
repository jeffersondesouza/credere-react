import axios from 'axios';

const loadBooks = () => axios
  .get('books')
  .then(res => res.data.books);

const loadBook = (id) => axios
  .get(`books/${id}`  )
  .then(res => res.data.book);

const saveBook = (book) => axios.post('books', { ...book })
  .then(res => res)
  .catch(err => console.log(err));


const updateBook = (book) => axios.patch(`books/${book._id}`, { ...book })
  .then(res => {
    return res;
  })
  .catch(err => console.log(err));


const deleteBook = (id) => axios
  .delete(`books/${id}`)
  .then(res => {
    return res;
  })
  .catch(err => console.log(err));



export default {
  loadBooks,
  loadBook,
  saveBook,
  updateBook,
  deleteBook
}