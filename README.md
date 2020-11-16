# challenge2-nodejs - Advertisement Banner Schedule Check

This repository is code challenge for Truck2Hand. (P'Breeze version)

## Introduction

Here is a part of an application that calculates the advertisement banner schedule shows in Truck2Hand website.

Imagine that at the index page we have a limited space to show the banners of advertisements. 
We might have some space to show only 4-5 banners(slots) in our top page BUT sometime we have more advertisements to show at a day.
So we need to create monthly schedules to show daily advertisements and create a function to check if the schedule is fit with the number of banners(slots). 

Another developer was able to isolate the bug and wrote a test case that simulates the bug. See `src/app.spec.js` for test case details. You can build the project to see which tests are failing.

## Problem Statement

### Problem 1

Your job is to implement a fucntion `isAdvertisementBannerScheduleFit` which will receive the advertisement banner schedule JSON file from `src/dataset/*.json` and check with the number of banners if it fits and return TRUE or FALSE. 
The only file that should be changed is `src/app.js` and fuction `isAdvertisementBannerScheduleFit`. You can always build the project to see if your solution works.

### Problem 2 (Optional)

Your job is to implement a function `maxOfBannerForAdsSchedule`. `maxOfBannerForAdsSchedule` function returns maximum of banner slots that we will need to have for the input advertisement banner schedule (`src/dataset/*.json`).

Note: To do this optional Problem 2, you have to remove comments in `src/app.spec.js` and run the test to see if it passes.

## Dependences

- Node.js v12.18.2
- Jest v25.4.0

## Installation

```
npm install
```

## How to run test

```
npm run test
```
