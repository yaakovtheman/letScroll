package entities;

import java.util.List;

/**
 * Created by yaako_000 on 11/12/2017.
 */
public class CategoryList {
  List<Book> list;

  public CategoryList() {
  }

  public List<Book> getList() {
    return list;
  }

  public void setList(List<Book> list) {
    this.list = list;
  }
}
