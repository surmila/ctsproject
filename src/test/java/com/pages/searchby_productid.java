package com.pages;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;

public class searchby_productid {
	WebDriver driver;
	//* inspection of element by using Path *//
	By textbox=By.xpath("//*[@id=\"SearchContent\"]/form/input[1]");
	By Search=By.xpath("//*[@id=\"SearchContent\"]/form/input[2]");
	
	//* code for multiple browser launch*//
	public void url(String browser) {
		 if(browser.equalsIgnoreCase("chrome") )
		 {
			 
		 
			 System.setProperty("webdriver.chrome.driver","/petstore/src/test/resources/drivers/chromedriver.exe");
			 driver =new ChromeDriver();
		 }
		 else if(browser.equalsIgnoreCase("Explorer"))
		 {
			 System.setProperty("webdriver.ie.driver","/petstore/src/test/resources/drivers/IEDriverServer.exe");
			 driver =new InternetExplorerDriver(); 
		 }
			 driver.manage().window().maximize();//* To maximize the browser *//
			 driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);//* It will wait for 30 seconds  browser *//
			 driver.get("https://petstore.octoperf.com/actions/Catalog.action");//* Specifying the url *//
			 System.out.println(driver.getTitle());
		 }
	/* method for searching */
	 public void JpetSearch() {
		 driver.findElement(textbox).sendKeys("RP-LI-02");
		 
	 }
	 //* method for clicking the particular item*//
	  public void click() {
		 driver.findElement(Search).click();
	 }
	  //* method for closing the tab*//
	 public void close() {
		 driver.quit();
	 }
	}


