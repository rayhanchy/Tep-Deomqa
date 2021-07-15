Feature: Automate DemoQA

Scenario: TC1 Loading DemoQA login page
Given Launch DemoQA page
And Enter user name as "TEP"
And Enter password as "tep@2021@"
When Click login button
Then Navigate to Profile page

Scenario: Tc2 Chek Elements link
Given Launch DemoQA page
And Enter user name as "TEP"
And Enter password as "tep@2021@"
When Click login button
Then Navigate to Profile page
And Click Elements link
And Click Text box
And Enter full name
And Enter email address
And Enter Current Address
And Enter permanent address
When Click submit button
Then Display Data