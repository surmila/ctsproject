$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/acer/eclipse-workspace/petstore/src/main/resources/feature/TestCase.feature");
formatter.feature({
  "line": 2,
  "name": "jpet website",
  "description": "",
  "id": "jpet-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@jpet_feature"
    }
  ]
});
formatter.scenario({
  "line": 4,
  "name": "To check the Application is seraching for product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is-seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 3,
      "name": "@tc01_search"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": ":Open the jpet website in browser",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": ":enter the item name",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": ":Click on search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": ":close the website",
  "keyword": "And "
});
formatter.match({
  "location": "validsearch_steps.open_the_jpet_website_in_browser()"
});
formatter.result({
  "duration": 7505125500,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.enter_the_item_name()"
});
formatter.result({
  "duration": 169136701,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.click_on_search_bar()"
});
formatter.result({
  "duration": 5081299001,
  "status": "passed"
});
formatter.match({
  "location": "validsearch_steps.close_the_website()"
});
formatter.result({
  "duration": 699168199,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To check the application is  Seraching for product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is--seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_invalidsearch"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": ":Open the jpet website in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": ":Enter the item name",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": ":click on search bar",
  "keyword": "Then "
});
formatter.step({
  "line": 15,
  "name": ":Close the website",
  "keyword": "And "
});
formatter.match({
  "location": "invalidsearch_steps.open_the_jpet_website_in_chrome_browser()"
});
formatter.result({
  "duration": 5111147199,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.enter_the_item_name()"
});
formatter.result({
  "duration": 139393100,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.click_on_search_bar()"
});
formatter.result({
  "duration": 359474900,
  "status": "passed"
});
formatter.match({
  "location": "invalidsearch_steps.close_the_website()"
});
formatter.result({
  "duration": 757681499,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "To Check that application is Seraching for product",
  "description": "",
  "id": "jpet-website;to-check-that-application-is-seraching-for-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 17,
      "name": "@tc03_searchbyhint"
    }
  ]
});
formatter.step({
  "line": 19,
  "name": ":Open the url in Browser",
  "keyword": "Given "
});
formatter.step({
  "line": 20,
  "name": ":Enter the Item name with hint",
  "keyword": "When "
});
formatter.step({
  "line": 21,
  "name": ":click on Searchbutton",
  "keyword": "Then "
});
formatter.step({
  "line": 22,
  "name": ":Close the jpetsite",
  "keyword": "And "
});
formatter.match({
  "location": "searchbyhint_steps.open_the_url_in_Browser()"
});
formatter.result({
  "duration": 5217893300,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.enter_the_Item_name_with_hint()"
});
formatter.result({
  "duration": 125740800,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.click_on_Searchbutton()"
});
formatter.result({
  "duration": 601627500,
  "status": "passed"
});
formatter.match({
  "location": "searchbyhint_steps.close_the_jpetsite()"
});
formatter.result({
  "duration": 732831200,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "to check the application is Seraching for the Product",
  "description": "",
  "id": "jpet-website;to-check-the-application-is-seraching-for-the-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 24,
      "name": "@tc04_searchbyproductid"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": ":Open the JPET Websitein browser",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": ":click on product",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": ":click on Searchbar",
  "keyword": "Then "
});
formatter.step({
  "line": 29,
  "name": ":Close The jpetWebsite",
  "keyword": "And "
});
formatter.match({
  "location": "searchproductId_steps.open_the_JPET_Websitein_browser()"
});
formatter.result({
  "duration": 5391547201,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.click_on_product()"
});
formatter.result({
  "duration": 160411100,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.click_on_Searchbar()"
});
formatter.result({
  "duration": 491311799,
  "status": "passed"
});
formatter.match({
  "location": "searchproductId_steps.close_The_jpetWebsite()"
});
formatter.result({
  "duration": 864272999,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "The product  are stored in excel",
  "description": "",
  "id": "jpet-website;the-product--are-stored-in-excel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 31,
      "name": "@TC05_storingProductDetails"
    }
  ]
});
formatter.step({
  "line": 33,
  "name": "url open in chrome browser",
  "keyword": "Given "
});
formatter.step({
  "line": 34,
  "name": "the user clicks on cart option",
  "keyword": "When "
});
formatter.step({
  "line": 35,
  "name": "clicks on the selected product",
  "keyword": "Then "
});
formatter.step({
  "line": 36,
  "name": "stored the detail",
  "keyword": "And "
});
formatter.match({
  "location": "storingdetails.url_open_in_chrome_browser()"
});
formatter.result({
  "duration": 5701998700,
  "status": "passed"
});
formatter.match({
  "location": "storingdetails.the_user_clicks_on_cart_option()"
});
formatter.result({
  "duration": 151473100,
  "status": "passed"
});
formatter.match({
  "location": "storingdetails.clicks_on_the_selected_product()"
});
formatter.result({
  "duration": 41624888600,
  "status": "passed"
});
formatter.match({
  "location": "storingdetails.stored_the_detail()"
});
formatter.result({
  "duration": 727219400,
  "status": "passed"
});
});