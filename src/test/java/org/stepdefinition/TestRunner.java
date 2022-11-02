package org.stepdefinition;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//resources/Feature", 
glue = "org.stepdefinition",
tags= {"@search"},
monochrome = true,
plugin={"html:target","json:target/reports.json"})
public class TestRunner {

}
