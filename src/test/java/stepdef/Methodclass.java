package stepdef;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.*;

public class Methodclass {
	ChromeDriver driver;
	
	
	@Given("Launch DemoQA page")
	public void launchDemoQAPage() {
	    System.setProperty("webdriver.chrome.driver", "C:\\Users\\rhcho\\eclipse-workspace\\LPhonetest\\driver\\chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.manage().window().maximize();
	    driver.get("https://demoqa.com/login");
	    driver.manage().timeouts().implicitlyWait(20, TimeUnit.SECONDS);
	}
	
	@Given("Enter user name as {string}")
	public void enter_user_name_as(String string) {
		
		driver.findElementById("userName").sendKeys("TEP");
	    
	}

	@Given("Enter password as {string}")
	public void enter_password_as(String string) {
		
		driver.findElementById("password").sendKeys("tep@2021@");
	    
	}
	
	
	
/*
	@Given("Enter user name as TEP")
	public void enterUserNameAsTEP() {
	    
		driver.findElementById("userName").sendKeys("TEP");
		
	}

	@Given("Enter password as Tep@{int}@")
	public void enterPasswordAsTep(Integer int1)  {
		
		  driver.findElementById("password").sendKeys("tep@2021@");
	 
	
	}
*/
	@When("Click login button")
	public void clickLoginButton() throws InterruptedException {
	 
		driver.findElementByXPath("//button[text()='Login']").click();
	//driver.findElementByXPath("(//button[@class='btn btn-primary'])[1]").click();
	Thread.sleep(3000);
		   
			
	}
  
	@Then("Navigate to Profile page")
	public void navigateToProfilePage() {
	  
		
		
	}

	@Given("Click Elements link")
	public void clickElementsLink() {
		
		
	}

	@Given("Click Text box")
	public void clickTextBox() {
	    
	}

	@Given("Enter full name")
	public void enterFullName() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("Enter email address")
	public void enterEmailAddress() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("Enter Current Address")
	public void enterCurrentAddress() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Given("Enter permanent address")
	public void enterPermanentAddress() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@When("Click submit button")
	public void clickSubmitButton() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	@Then("Display Data")
	public void displayData() {
	    // Write code here that turns the phrase above into concrete actions
	    throw new cucumber.api.PendingException();
	}

	
	
	
	

}
