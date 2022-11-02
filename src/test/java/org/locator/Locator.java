package org.locator;

import java.util.List;

import org.commonaction.CommonActions;
import org.openqa.selenium.By;
import org.openqa.selenium.SearchContext;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

public class Locator extends CommonActions 
{
	//page factory
	//page object model
	//encapsulation
	/*private int x=0;
public int dsc()
{
return x;	
}
private int y;
public int getY() {
	return y;
}
public void setY(int y) {
	this.y = y;
}
public static void main(String[] args) {
	Locator l = new Locator();
	l.dsc();
	l.setY(500);
	System.out.println(l.getY());
}*/
public Locator()
{
PageFactory.initElements(drive,this);	//to give driver instance to webelement
}
//webelement -- page object model
@FindBy(xpath="//*[text()='Login']")
private WebElement loginbtn;
	
@FindBy(xpath="//*[text()='✕']")
private WebElement closebtn;

@FindBy(xpath="(//*[@type='text'])[21]")
private WebElement unamebtn;

@FindBy(xpath="//*[@type='password']")
private WebElement passwdbtn;

@FindBy(xpath="(//*[@type='submit'])[2]")
private WebElement submitbtn;

public WebElement getLoginbtn() {
	return loginbtn;
}

public WebElement getClosebtn() {
	return closebtn;
}

public WebElement getUnamebtn() {
	return unamebtn;
}

public WebElement getPasswdbtn() {
	return passwdbtn;
}

public WebElement getSubmitbtn() {
	return submitbtn;
}


	
	}

