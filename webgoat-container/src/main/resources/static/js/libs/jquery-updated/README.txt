jQuery files in this project have been updated to version 3.6.0 to fix CVE-2016-10707.

The original vulnerable files (jQuery versions prior to 3.0.0) were susceptible to a Denial of Service (DoS) 
vulnerability due to removing a logic that lowercased attribute names. Any attribute getter using a 
mixed-cased name for boolean attributes could go into an infinite recursion, exceeding the stack call limit.

This security fix updates jQuery to a version that has addressed this vulnerability.

For production use, the actual jQuery 3.6.0 files should be used from the WebJars dependency that has been 
added to the project's POM file.