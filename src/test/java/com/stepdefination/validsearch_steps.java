package com.stepdefination;

import java.io.IOException;

import com.pages.validsearch_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class validsearch_steps {
	validsearch_page jps=new validsearch_page();
	@Given("^:Open the jpet website in browser$")
	public void open_the_jpet_website_in_browser()  {
		jps.url("chrome");
	}
	   
	

	@When("^:enter the item name$")
	public void enter_the_item_name() {
		//* calling the method using object *//
	    jps.JpetSearch();
	}

	@Then("^:Click on search bar$")
	public void click_on_search_bar() throws IOException, InterruptedException  {
		//* calling the method using object *//
		jps.click();
		jps.Screenshot("/JPET/screenshot.png");
		
	   
	}

	@Then("^:close the website$")
	public void close_the_website() throws InterruptedException {
	    jps.close();
	}


}
