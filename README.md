# TXDoT-show-ID
## Description
My very first Chrome extension. Nothing fancy. I decided to make this for one of my internships that required data collection from TXDoT's website. TXDoT decided to hide the 'local id' search box for some reason by setting the element's display to none. This extension changes the display to contents

## The old method prior to this extension
Previously, I'd have to go through a manual step process:
1. Go to https://txdot.public.ms2soft.com/tcds/tsearch.asp?loc=txdot
2. Inspect/F12
3. Select LeftFrame
4. Paste this code:
```
var box = document.getElementById('ddlLocalId');
box.value = "109D47A"
$('#btnSubmit').click()
```
[(Creds to Anurag Akella for the code snippet)](https://github.com/anuragakella)

5. Find and extract desired data
6. Click 'Home'
7. Paste the above code again
8. Copy and paste new desired station ID into box.value
9. Go to step 6

Although it's only 8 steps, all the copy pasting of the code, and the station ID amounted to a lot of waste of time and annoyance having to hit CTRL+C and CTRL+V a lot. It wasn't rare for me to mix up these steps, causing me to have to go back to the beginning. Not to mention, TXDoT's website has its own slowness. Based on their HTML source code, their website has not been updated since 2013 and is still using jQuery, so a new overhaul would be beneficial.

## The new method with this extension
With this extension installed simply:
1. Go to https://txdot.public.ms2soft.com/tcds/tsearch.asp?loc=txdot
2. Copy and paste new desired station ID into search box
3. Find and extract desired data
4. Refresh page (F5)
5. Go to step 2

### Notes
(TXDoT if you're seeing this, hire me please. But also don't be mad I am undoing your hiding of this search box)
