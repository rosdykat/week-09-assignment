# Reflection

mood.com is a simple social media app that allows you to update a single status and add an emoji to share how you are feeling right now!

## What requirements did you achieve?

🎯 Set up user sign-up and user login using Clerk. ✅
🎯 Create and display an error/not found page if the user visits a page that doesn’t exist.
🎯 Use 1 or more Radix UI Primitive component, or something similar (e.g. use of a different component library to enhance UX, not just Tailwind). ✅
🎯 Enable users to create a user profile, and input profile information (such as a user biography) using a form. Users and user information should be stored in their own table in the database and handled with an appropriate route (e.g. /user/[userId]). ✅
🎯 Enable users to create posts associated with their Clerk userId. Posts should be displayed on the user’s profile page. ✅

## Were there any requirements or goals that you were unable to achieve?

The main requirement I did not achieve was an error page, I did learn this from our regular workshop, however as I was really tight on time this week I didn't have a chance to implement it.

Outside of the requirements, there are a few features that I intended to include for this project:

- Add an emoji

  - Every user has a status box and an 'avatar' box. Initially I intended this avatar box to be an emoji that the user would pick to reflect their current mood. I think I have a pretty good idea on how to do this, however as this could not be finished, I just made the avatar box contain the username by matching their clerk_id to the username on the database.

- Improved css:
  - I didn't do a whole lot on the CSS this time around, however I did take the approach to this differently. This time I did not use a grid to create the website and mapped it purely through flex box. As the website was very simple to make this was actually a lot easier to do and saved me a lot of time. It also made it scale to different screen sizes much easier. For the mobile version, all I had to do was change the font size of the menu!
  - I do need to add a media query to reduce the size of the boxes on the "all users" page though
- I added the accordion component library, this was initially intended to have a "friends" section and an "all users" section.

## Required

🎯 What requirements did you achieve?
🎯 Were there any requirements or goals that you were unable to achieve?
🎯 If so, what was it that you found difficult about these tasks?

## Optional

🏹 Feel free to add any other reflections you would like to share about your submission, for example:

Requesting feedback about a specific part of your submission.
What useful external sources helped you complete the assignment (e.g Youtube tutorials)?
What errors or bugs did you encounter while completing your assignment? How did you solve them?
What went really well and what could have gone better?

## Resouces

- I wasn't sure why my import wasn't working:
  https://www.npmjs.com/package/@types/pg
