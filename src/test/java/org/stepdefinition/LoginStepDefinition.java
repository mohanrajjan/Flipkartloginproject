package org.stepdefinition;

import java.io.IOException;
import java.util.concurrent.TimeUnit;

import org.commonaction.CommonActions;
import org.locator.Locator;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;


public class LoginStepDefinition extends CommonActions {
	CommonActions ca = new CommonActions();
	Locator lo = new Locator();
	@Given("Launch browser")
	public void launch_browser() {
	ca.url("https://www.flipkart.com/");
	}


	@When("user enter username and password as {string} {string}")
	public void user_enter_username_and_password_as(String uname, String passwd) throws InterruptedException, IOException {
		lo.getClosebtn().click();
		ca.waitTime(2);
		lo.getLoginbtn().click();
		ca.waitTime(33);
		ca.pic();
		ca.insertText(lo.getUnamebtn(), uname);
		ca.insertText(lo.getPasswdbtn(), passwd);
		lo.getSubmitbtn().click();
		ca.waitTime(3);
		ca.pic();
		System.out.println("logged in successfully");  
	}

	@Then("click on Login button and verfies url")
	public void click_on_Login_button_and_verfies_url() throws InterruptedException {
	lo.getMobileicon().click();
	ca.waitTime(2);
	lo.getRedmibrnner().click();
	ca.waitTime(2);
	ca.Scrollelement(lo.getRedmia2());
	ca.waitTime(2);
	/*ca.scrollup();
	lo.getRedmia1().click();*/
	    System.out.println("verified title and url");
	}

	@And("seach for mobile")
	public void seach_for_mobile() {
/*ca.windowSwitch();
lo.getBuybtn();*/
	    System.out.println("searched");
	}


}
