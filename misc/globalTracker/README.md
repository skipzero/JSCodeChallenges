#Global Variable Tracker

list the names of every global variable created since the first call. 

add `globalTracker.start()` at the top of the page. 

Then run `globalTracker.change()` and it will return a list of the new global variables that have been created since calling `start`.

A good test would be to include jquery or something as a script tag on the page. If I call `start` before the jquery script tag, then call `change()` I should see all the global vars jquery created like `['$', 'jQuery']`

also, this is a good candidate for a repo or npm module