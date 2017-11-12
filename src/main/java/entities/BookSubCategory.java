package entities;

/**
 * Created by yaako_000 on 11/12/2017.
 */
public class BookSubCategory {
  String category;
  String heCategory;
  BookCategory[] contents;

  public BookSubCategory() {
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

  public BookCategory[] getContents() {
    return contents;
  }

  public void setContents(BookCategory[] contents) {
    this.contents = contents;
  }
}
