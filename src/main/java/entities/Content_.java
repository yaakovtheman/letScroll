
package entities;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

public class Content_ {

    private String heTitle;
    private boolean heComplete;
    private String firstSection;
    private String primaryCategory;
    private boolean enComplete;
    private String title;
    private String dependence;
    private List<String> categories = null;
    private int order;
//    private Map<String, Object> additionalProperties = new HashMap<String, Object>();

    /**
     * No args constructor for use in serialization
     *
     */
    public Content_() {
    }

    /**
     *
     * @param firstSection
     * @param title
     * @param order
     * @param primaryCategory
     * @param heComplete
     * @param heTitle
     * @param categories
     * @param dependence
     * @param enComplete
     */
    public Content_(String heTitle, boolean heComplete, String firstSection, String primaryCategory, boolean enComplete, String title, String dependence, List<String> categories, int order) {
        super();
        this.heTitle = heTitle;
        this.heComplete = heComplete;
        this.firstSection = firstSection;
        this.primaryCategory = primaryCategory;
        this.enComplete = enComplete;
        this.title = title;
        this.dependence = dependence;
        this.categories = categories;
        this.order = order;
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

    public String getPrimaryCategory() {
        return primaryCategory;
    }

    public void setPrimaryCategory(String primaryCategory) {
        this.primaryCategory = primaryCategory;
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

    public String isDependence() {
        return dependence;
    }

    public void setDependence(String dependence) {
        this.dependence = dependence;
    }

    public List<String> getCategories() {
        return categories;
    }

    public void setCategories(List<String> categories) {
        this.categories = categories;
    }

    public int getOrder() {
        return order;
    }

    public void setOrder(int order) {
        this.order = order;
    }

//    public Map<String, Object> getAdditionalProperties() {
//        return this.additionalProperties;
//    }

//    public void setAdditionalProperty(String name, Object value) {
//        this.additionalProperties.put(name, value);
//    }

}
