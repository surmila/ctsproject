@jpet_feature
Feature: jpet website
@tc01_search
Scenario: To check the Application is seraching for product
Given :Open the jpet website in browser
When :enter the item name
Then :Click on search bar
And :close the website

@tc02_invalidsearch
Scenario: To check the application is  Seraching for product
Given :Open the jpet website in chrome browser
When :Enter the item name
Then :click on search bar
And :Close the website

@tc03_searchbyhint
Scenario: To Check that application is Seraching for product
Given :Open the url in Browser
When :Enter the Item name with hint
Then :click on Searchbutton
And :Close the jpetsite

@tc04_searchbyproductid
Scenario: to check the application is Seraching for the Product
Given :Open the JPET Websitein browser 
When :click on product
Then :click on Searchbar
And :Close The jpetWebsite

@TC05_storingProductDetails
Scenario: The product  are stored in excel
Given url open in chrome browser
When the user clicks on cart option
Then clicks on the selected product
And stored the detail
