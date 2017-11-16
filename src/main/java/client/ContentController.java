package client;

import consumer.SefariaConsumer;
import entities.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

/**
 * Created by yaako_000 on 11/12/2017.
 */
@RestController
public class ContentController {

  @Autowired
  SefariaConsumer consumer;

  @CrossOrigin()
  @RequestMapping("/api/list")
  public List<BookName> getBookList(){
    List<BookName> list = new ArrayList<>();
    for (Book b: consumer.getBookList("Tanakh")) {
      for (Content c: b.getContents()) {
        for (Content_ book: c.getContents()) {
          if (book.getTitle()!=null)
           list.add(new BookName(book.getTitle(),book.getHeTitle()));
        }
      }
    }
    return list;
  }
  @CrossOrigin()
  @RequestMapping("/api/book/content")
  public List<List<String>> getContent(@RequestParam(value="name") String name) {
    return consumer.getBookText(name);
  }
}
