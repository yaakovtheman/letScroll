import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

/**
 * Created by yaako_000 on 11/12/2017.
 */
@EnableAutoConfiguration
@SpringBootApplication
@ComponentScan(basePackages ={"RunApp","client","consumer"})
public class RunApp {
  public static void main(String[] args){
    SpringApplication.run(RunApp.class,args);
  }
}
