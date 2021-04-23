import CreateBookDto from './dto/create-book.dto';
import { createQueryBuilder, getConnection } from 'typeorm';
import BookEntity from 'src/db/book.entity';
import UserEntity from 'src/db/user.entity';
import GenreEntity from 'src/db/genre.entity';
import UpdateBookDto from './dto/update-book.dto';

export class BookService {

  async insert(bookDetails: CreateBookDto): Promise<BookEntity> {
    const { name , userID , genreIDs } = bookDetails;
    const book = new BookEntity();
    book.name = name;
    book.user = await UserEntity.findOne(userID) ;
    book.genres=[];
    for ( let i = 0; i < genreIDs.length ; i++)
    {
             const genre = await GenreEntity.findOne(genreIDs[i]);
             book.genres.push(genre);
    }
    await book.save();
    return book;
  }
  async getAllBooks(): Promise<BookEntity[] > {
    // const user: UserEntity = await UserEntity.findOne({where: {id: 2}, relations: ['books']});
    return BookEntity.find();
  }

  async update(bookDetails: UpdateBookDto): Promise<BookEntity>
  {
    const { id, name , userID , genreIDs } = bookDetails;
    let entity = BookEntity.findOne(id);
    if (name != null){
      (await entity).name = name;
    }

    if (userID != null){
      (await entity).user = await UserEntity.findOne(userID) ;
    }

    if (genreIDs != null){
      for ( let i = 0; i < genreIDs.length ; i++)
      {
        const genre = await GenreEntity.findOne(genreIDs[i]);
        (await entity).genres.push(genre);
      }
    }

    return entity;
  }

  async delete(id: string): Promise<BookEntity>
  {
    const book = BookEntity.findOne(id);
    (await book).remove();

    return book;
  }
}