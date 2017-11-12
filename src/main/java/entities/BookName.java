package entities;

/**
 * Created by yaako_000 on 11/12/2017.
 */
public class BookName {
  private String bookId;
  private String hebrewName;

  public BookName(String bookId, String hebrewName) {
    this.bookId = bookId;
    this.hebrewName = hebrewName;
  }

  public String getBookId() {
    return bookId;
  }

  public String getHebrewName() {
    return hebrewName;
  }
}
