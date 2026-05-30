# JiakNUS
JiakNUS is a campus food discovery web app for NUS students.
It helps users browse canteens, stalls, and food options around campus, with filters such as price, halal status, vegetarian options.
The long-term goal is to support community-updated menus, crowd information, and personalised recommendations.

## Proposed level of achievement
Gemini

## Motivation 
Finding food in NUS can be a struggle for many, especially for those living on campus like the
both of us. With numerous food courts, restaurants, and even vending machines spread across
the NUS campus, NUH, and UTown, students and staff often walk to a stall only to find it
closed or missing out on hidden gems. Furthermore, finding options that fit specific dietary
needs, such as halal or vegetarian meals, requires checking unclear sources like Google Maps.
We want to empower students to make informed lifestyle choices, by integrating menu prices
and estimated macronutrient counts. This enables users to better budget their daily meals and
effortlessly manage their nutritional goals.

## Aim
We hope to build an easy to use application that consolidates all food options across the main
NUS campus, NUH and UTown. By acting as an all-in-one lifestyle tool, we also hope to help users with
their dining decisions with robust filtering and personalized recommendations, while equipping users with 
the data they need to budget their meals and track their daily calories.

## User Stories
1. As a hungry NUS student or staff member who wants to find what food to eat, I want to be able to see what are the available options.
2. As a student on a tight budget who wants to manage daily expenses, I want to view meal prices and filter by cost so I can choose affordable dining options.
3. As a freshman who wants to find a specific food stall, I want to be able to use the app to navigate to the chosen location.
4. As an individual with specific dietary restrictions, I want to be able to use the application to filter for these options.
5. As a health-conscious individual who wants to manage my daily caloric intake, I want to see estimated calorie counts for menu items so I can make nutritional choices.

## Features
- User login
- View list of canteens
- View stalls by canteen
- View basic stall information
- Filter stalls by key metrics (price, halal status, vegetarian options, etc)
- Backend API connected to Supabase

### Future Features
- Community-driven menu uploads
- Menu verification system
- Nutrition estimates with Edamam
- Crowd density proof of concept
- Gamification and avatar rewards
- Personalised food recommendations

## System Design
Next.js frontend
    -> Uses Supabase Auth for login
    -> calls FastAPI backend
        -> reads data from Supabase Postgres

## Development Plan
### Milestone 1:
- Create Supabase tables for canteens and stalls and populate with test data
- Build FastAPI endpoints: /canteens, /stalls
- Create simple Next.js frontend
- Add login proof of concept using Authentication in Supabase
- Document ideas, features, stack, design, and plan

### Milestone 2:
- Implement filtering system such as by dietary needs (Halal/Vegan)
- Add operating hours of stores
- Design complete frontend user interface 
- Add menu, prices and pictures where users can view

### Milestone 3:
- Develop the recommendation engine using metrics such as "Time of day" or "Most viewed".
- Integrate external API to display caloric estimates for dishes (Feature 5).
- Conduct testing for recommendation engine logic.
- Create proper documentation such as "User Guide" and complete "README" to be put on GitHub.
- Deploy app onto servers

