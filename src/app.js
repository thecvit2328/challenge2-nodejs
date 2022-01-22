// Problem 1: implement this function to check if the schedule of advertisements fits with the number of banner slots?
// reture true or false
export const isAdvertisementBannerScheduleFit = (
  numberOfBannerSlot,
  advertisementSchedule
) => {
  // TODO: implement this function
  let adOfTheDay = [];
  for (let i = 1; i <= 31; i++) {
    let countOfDay = 0;
    for (let [index, ad] of advertisementSchedule.entries()) {
      ad.startDate <= i && i <= ad.endDate && countOfDay++;
    }
    adOfTheDay.push(countOfDay);
  }
  const maxAdsofMonth = Math.max.apply(null, adOfTheDay);
  return maxAdsofMonth === numberOfBannerSlot;
};

// Problem 2: implement this function to calculate the max of banner slots for input ads schedule.
// reture number of max banner slots for the input ads schedule
export const maxOfBannerForAdsSchedule = (advertisements) => {
  // TODO: implement this function
  return undefined;
};

// soemsak_l@tripetch-it.co.th
