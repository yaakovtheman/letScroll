package entities;

/**
 * Created by yaako_000 on 11/12/2017.
 */
public class BookCategory {
  String category;
  String heCategory;
  BookInfo[] contents;

  public BookCategory() {
  }

  public String getCategory() {
    return category;
  }

  public void setCategory(String category) {
    this.category = category;
  }

  public String getHeCategory() {
    return heCategory;
  }

  public void setHeCategory(String heCategory) {
    this.heCategory = heCategory;
  }

  public BookInfo[] getContents() {
    return contents;
  }

  public void setContents(BookInfo[] contents) {
    this.contents = contents;
  }
}
