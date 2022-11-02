package org.stepdefinition;

import org.commonaction.CommonActions;

import cucumber.api.java.After;
import cucumber.api.java.Before;
public class Hooks extends CommonActions {
CommonActions ca = new CommonActions();
@Before
public void beforeAnnoations()
{
	ca.launchChrome();
}
@After
public void AfterAnnotations()
{
	ca.CloseChrome();
}
}
