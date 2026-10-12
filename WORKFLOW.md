# AI Development Workflow Comparison

## Feature
Settings form with name, email, and email notification preferences.

## Round 1: Vague Prompt
I asked AI to create a simple settings form with a name field, email field, notification checkbox, and Save button. The prompt did not clearly specify validation, accessibility, responsive behavior, or error handling.

## Round 2: Precise Prompt
I gave AI more specific requirements, including input validation, clear error messages, accessible labels, keyboard navigation, responsive design, and success feedback. I reviewed the generated code, added JavaScript validation and saving behavior, and tested the form in the browser.

## Comparison

### Correctness
Round 1 provided the basic form and saving behavior. Round 2 added checks for empty names and invalid email addresses before saving settings.

### Accessibility
Round 2 improved accessibility with connected labels, visible keyboard focus indicators, and status messages for screen readers.

### Edge Cases
Round 2 handles empty fields, invalid email addresses, and errors when browser storage cannot save or load settings.

### Review Effort
Round 2 required checking that the HTML referenced the correct JavaScript file and testing valid and invalid form submissions. I found that `settings.js` was missing and created it before testing.

### AI Mistake Caught
The generated HTML referenced `settings.js`, but the file did not exist initially. I identified the missing file, created it, added the validation logic, and verified the form in the browser.

## Conclusion
A precise prompt helped produce a more accessible and robust form. However, AI-generated code still needed human review and browser testing before it could be considered ready.
