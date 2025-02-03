# Incorrect usage of $inc operator in MongoDB update
This repository demonstrates a common error when using the `$inc` operator in MongoDB updates.  The issue arises when attempting to increment a field that doesn't exist.  The provided solution showcases a more robust approach to handle this scenario.
## Bug
The original code attempts to increment a field using `$inc` without checking for the field's existence.  If the field is missing, the `$inc` operator will not create it but will instead log an error.
## Solution
The solution uses the `$inc` operator within a conditional `$set` operation to only increment the field if it exists. If not, it can either be initialized to the value or not updated at all.