package org.commonaction;
		
import java.io.File;
import java.io.IOException;
import java.util.Set;
import java.util.concurrent.TimeUnit;

import org.apache.maven.shared.utils.io.FileUtils;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriver.Window;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.Select;

import io.github.bonigarcia.wdm.WebDriverManager;

public class CommonActions {
	public static WebDriver drive;
	public static int n=1;
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
	public void pic() throws IOException
	{
TakesScreenshot picture =(TakesScreenshot)drive;
File screenshotAs = picture.getScreenshotAs(OutputType.FILE);
FileUtils.copyFile(screenshotAs, new File(".//screenhit//image"+n+".png"));
n++;
		
	}
public void windowSwitch()
{
	String parent = drive.getWindowHandle();
	Set<String> newwindow = drive.getWindowHandles();
	for (String string : newwindow) {
		if(!parent.equals(string)) {
			drive.switchTo().window(string);
		}
	}
}
public void Scrollelement(WebElement ele)
{
	JavascriptExecutor jj=(JavascriptExecutor)drive;
	jj.executeScript("arguments[0].ScrollInToView(true);", ele);
}
public void scrolldown()
{
	JavascriptExecutor jj=(JavascriptExecutor)drive;
	jj.executeScript("window.scrollBy(0,1500)");
	
}
public void scrollup()
{
	JavascriptExecutor jj=(JavascriptExecutor)drive;
	jj.executeScript("window.scrollBy(0,-1500)");
	
}
}


