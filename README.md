# JiakNUS
JiakNUS is a campus food discovery web app for NUS students.
It helps users browse canteens, stalls, and food options around campus, with filters such as price, halal status, vegetarian options.
The long-term goal is to support community-updated menus, crowd information, and personalised recommendations.

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

## Milestone 1:
- Create Supabase tables for canteens and stalls and populate with test data
- Build FastAPI endpoints: /canteens, /stalls
- Create simple Next.js frontend
- Add login proof of concept using Authentication in Supabase
- Document ideas, features, stack, design, and plan