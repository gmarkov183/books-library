
import { Book } from "./Book/Book";

export const Home = (books) => {

  return (
    <div>
    {books.length > 0
                    ? books.map(x => <Book key={x.title} book={x}/> )
                    : <p className="no-articles">No games yet</p>
                }

            
    </div>
  );
};


