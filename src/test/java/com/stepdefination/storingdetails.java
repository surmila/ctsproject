package com.stepdefination;

import com.pages.stroingdetails_page;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class storingdetails {
	stroingdetails_page sd=new stroingdetails_page();
	@Given("^url open in chrome browser$")
	public void url_open_in_chrome_browser() throws Throwable {
		sd.url("chrome");
	    
	}

	@When("^the user clicks on cart option$")
	public void the_user_clicks_on_cart_option() throws Throwable {
		sd.JpetSearch();
	    
	}

	@Then("^clicks on the selected product$")
	public void clicks_on_the_selected_product() throws Throwable {
		sd.click();
		sd.storexecel();
	    
	}

	@Then("^stored the detail$")
	public void stored_the_detail() throws Throwable {
	    sd.close();
	}




}
