package org.commonaction;
		
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonActions {
	public static WebDriver drive;
	public void launchChrome()
	{
		WebDriverManager.chromedriver().setup();

	    drive = new ChromeDriver();
		drive.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
		drive.manage().window().maximize();
	}
	public void CloseChrome()
	{
	
	}
	public void url(String url)
	{
		drive.get(url);	
		
	}
	public void click()
	{

	}
	public void pressandHoldFunction()
	{

	}
	public void moveToElement (WebElement ele)
	{
Actions aa = new Actions(drive);
aa.moveToElement(ele).build().perform();

	}
	public void mouseOver()
	{

	}
	public void rightClick()
	{

	}
	public void dragAndDropFunction()
	{

	}
	public void selectByText(WebElement ele, String value)
	{
Select o = new Select(ele);
o.selectByVisibleText(value);
	}
	public void selectByValue(WebElement ele, String value)
	{
Select o = new Select(ele);
o.selectByVisibleText(value);
	}
public void waitTime(int y) throws InterruptedException
{
	int x=y*1000;
	Thread.sleep(x);
}
public void insertText(WebElement ele, String value)
{
	ele.sendKeys(value);
}
	public void pic()
	{

	}

}


