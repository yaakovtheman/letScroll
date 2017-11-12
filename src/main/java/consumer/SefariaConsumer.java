package consumer;

import entities.*;
import org.springframework.stereotype.Component;
import org.springframework.web.client.RestTemplate;

import java.util.Arrays;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by yaako_000 on 11/12/2017.
 */
@Component
public class SefariaConsumer {


  private Book[] bookList;
  RestTemplate restTemplate = new RestTemplate();
  public SefariaConsumer(){

    bookList = restTemplate.getForObject("https://www.sefaria.org/api/index", Book[].class);
  }

  public List<Book> getBookList(String category){

    return Arrays.asList(bookList).stream().filter(book -> book.getCategory().equals(category)).collect(Collectors.toList());
  }

  public List<List<String>> getBookText(String title){
    BookText bookText = restTemplate.getForObject("https://www.sefaria.org/api/texts/"+title+"?pad=0", BookText.class);
    return bookText.getHe();
  }
}
