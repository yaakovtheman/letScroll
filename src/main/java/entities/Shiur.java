package entities;

import java.util.List;

public class Shiur {

  String subject;
  int id;
  List<List<String>> bookContent;
  String socketPath;
  int parentPos;
  int childPos;

  public Shiur(String subject, int id, List<List<String>> bookContent, String socketPath, int parentPos, int childPos) {
    this.subject = subject;
    this.id = id;
    this.bookContent = bookContent;
    this.socketPath = socketPath;
    this.parentPos = parentPos;
    this.childPos = parentPos;
  }

  public String getSubject() {
    return subject;
  }

  public void setSubject(String subject) {
    this.subject = subject;
  }

  public int getId() {
    return id;
  }

  public void setId(int id) {
    this.id = id;
  }

  public List<List<String>> getBookContent() {
    return bookContent;
  }

  public void setBookContent(List<List<String>> bookContent) {
    this.bookContent = bookContent;
  }

  public String getSocketPath() {
    return socketPath;
  }

  public void setSocketPath(String socketPath) {
    this.socketPath = socketPath;
  }

  public int getParentPos() {
    return parentPos;
  }

  public void setParentPos(int parentPos) {
    this.parentPos = parentPos;
  }

  public int getChildPos() {
    return childPos;
  }

  public void setChildPos(int childPos) {
    this.childPos = childPos;
  }
}
