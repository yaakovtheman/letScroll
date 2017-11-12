package entities;

/**
 * Created by yaako_000 on 11/12/2017.
 */
public class BookInfo {
    String heTitle;
    boolean heComplete;
    String firstSection;
    String primary_category;
    boolean enComplete;
    String title;
    int order;
    String[] categories;

  public BookInfo() {
  }

  public String[] getCategories() {
    return categories;
  }

  public void setCategories(String[] categories) {
    this.categories = categories;
  }

  public String getHeTitle() {
    return heTitle;
  }

  public void setHeTitle(String heTitle) {
    this.heTitle = heTitle;
  }

  public boolean isHeComplete() {
    return heComplete;
  }

  public void setHeComplete(boolean heComplete) {
    this.heComplete = heComplete;
  }

  public String getFirstSection() {
    return firstSection;
  }

  public void setFirstSection(String firstSection) {
    this.firstSection = firstSection;
  }

  public String getPrimary_category() {
    return primary_category;
  }

  public void setPrimary_category(String primary_category) {
    this.primary_category = primary_category;
  }

  public boolean isEnComplete() {
    return enComplete;
  }

  public void setEnComplete(boolean enComplete) {
    this.enComplete = enComplete;
  }

  public String getTitle() {
    return title;
  }

  public void setTitle(String title) {
    this.title = title;
  }

  public int getOrder() {
    return order;
  }

  public void setOrder(int order) {
    this.order = order;
  }
}
