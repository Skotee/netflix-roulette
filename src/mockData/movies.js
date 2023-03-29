import pulpFictionImage from "../../public/pulp-fiction.jpg";
import bohemianRhapsodyImage from "../../public/bohemian-rhapsody.png";
import killBillImage from "../../public/kill-bill.jpg";
import avengersImage from "../../public/marvel-avengers.jpg";
import inceptionImage from "../../public/inception.jpg";
import reservoirImage from "../../public/reservoir-dogs.jpg";

const data = [
  {
    title: "Pulp Fiction",
    genres: "Action & Adventure",
    year: 2004,
    cover: pulpFictionImage,
    id: 1,
    rate: 8.9,
    overview: "Jules Winnfield (Samuel L. Jackson) and Vincent Vega (John Travolta) are two hit men who are out to retrieve a suitcase stolen from their employer, mob boss Marsellus Wallace (Ving Rhames). Wallace has also asked Vincent to take his wife Mia (Uma Thurman) out a few days later when Wallace himself will be out of town. Butch Coolidge (Bruce Willis) is an aging boxer who is paid by Wallace to lose his fight. The lives of these seemingly unrelated people are woven together comprising of a series of funny, bizarre and uncalled-for incidents.—Soumitra",
    runtime: "2h 56min"
  },
  {
    title: "Bohemian Rhapsody",
    genres: "Drama, Biography, Music",
    year: 2003,
    cover: bohemianRhapsodyImage,
    id: 2,
    rate: 2.9,
    overview: "description is here",
    runtime: "1h 34min"
  },
  {
    title: "Kill Bill: Vol 2",
    genres: "Oscar winning Movie",
    year: 1994,
    cover: killBillImage,
    id: 3,
    rate: 1.5,
    overview: "description is here",
    runtime: "2h 12min"
  },
  {
    title: "Avengers: War of Infinity",
    genres: "Action & Adventure",
    year: 2004,
    cover: avengersImage,
    id: 4,
    rate: 4.6,
    overview: "description is here",
    runtime: "1h 16min"
  },
  {
    title: "Inception",
    genres: "Action & Adventure",
    year: 2003,
    cover: inceptionImage,
    id: 5,
    rate: 7.8,
    overview: "description is here",
    runtime: "5h 11min"
  },
  {
    title: "Reservoir dogs",
    genres: "Oscar winning Movie",
    year: 1994,
    cover: reservoirImage,
    id: 6,
    rate: 10.0,
    overview: "description is here",
    runtime: "1h 13min"
  }
]

export default data;