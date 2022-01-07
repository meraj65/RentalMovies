const movies = [
  {
    _id: 1,
    title: "The Shawshank Redemption ",
    genre: { _id: "aa12", name: "Drama" },
    numberInStock: 3,
    dailyRentalRate: 2.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 2,
    title: "Jhon wick",
    genre: { _id: "aa13", name: "Action,crime" },
    numberInStock: 1,
    dailyRentalRate: 5.5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 3,
    title: "Vikings",
    genre: { _id: "aa14", name: "Action,adventure" },
    numberInStock: 8,
    dailyRentalRate: 8,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 4,
    title: "Breaking Bad",
    genre: { _id: "aa15", name: "crime" },
    numberInStock: 6,
    dailyRentalRate: 4.4,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 5,
    title: "Peaky Blinders",
    genre: { _id: "aa16", name: "crime,drama" },
    numberInStock: 2,
    dailyRentalRate: 5,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 6,
    title: "Lucifer",
    genre: { _id: "aa17", name: "crime,drama,fantasy" },
    numberInStock: 9,
    dailyRentalRate: 9,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 7,
    title: "Stranger Things",
    genre: { _id: "aa18", name: "Drama, Fantasy, Horror" },
    numberInStock: 4,
    dailyRentalRate: 8,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 8,
    title: "KingsMan",
    genre: { _id: "aa18", name: "Drama, Fantasy" },
    numberInStock: 9,
    dailyRentalRate: 7.9,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: false
  },
  {
    _id: 9,
    title: "Expandable",
    genre: { _id: "aa18", name: "action" },
    numberInStock: 5,
    dailyRentalRate: 6.4,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
  {
    _id: 10,
    title: "Fast and furious",
    genre: { _id: "aa01", name: "action" },
    numberInStock: 5,
    dailyRentalRate: 6.4,
    publishDate: "2018-01-03T19:04:28.809Z",
    liked: true 
  },
];

export function getMovies() {
  return movies;
}

export function getMovie() {
  return movies.find((m) => m._id === m);
}
