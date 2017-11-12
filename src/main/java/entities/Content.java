
package entities;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Content {

    private String category;
    private String heCategory;
    private List<Content_> contents = null;
//    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     *
     */
    public Content() {
    }

    /**
     *
     * @param heCategory
     * @param category
     * @param contents
     */
    public Content(String category, String heCategory, List<Content_> contents) {
        super();
        this.category = category;
        this.heCategory = heCategory;
        this.contents = contents;
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

    public List<Content_> getContents() {
        return contents;
    }

    public void setContents(List<Content_> contents) {
        this.contents = contents;
    }

//    public Map<String, Object> getAdditionalProperties() {
//        return this.additionalProperties;
//    }

//    public void setAdditionalProperty(String name, Object value) {
//        this.additionalProperties.put(name, value);
//    }

}
