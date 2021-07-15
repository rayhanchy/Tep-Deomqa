package stepdef;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.testng.AbstractTestNGCucumberTests;

@CucumberOptions(features="src/test/java/Feature",
glue ="stepdef",

plugin = {"html:target"}, 
monochrome = true

//snippets =SnippetType.CAMELCASE
		
		
		
		)

public class Runnerclass extends AbstractTestNGCucumberTests{

}
