export class Advertisement {
  constructor(id, title, detail, startDate, endDate) {
    this.id = id;
    this.title = title;
    this.detail = detail;
    this.startDate = startDate;
    this.endDate = endDate;t
    this.currentBanner = null;
  }

  showIn(banner) {
    this.currentBanner = banner;
  }
}

export class Banner {
  constructor() {
    this.ads = null;
  }

  setAds(ads) {
    this.ads = ads;
  }
}

// Problem 1: implement this function to check if the schedule of advertisements fits with the number of banner slots? 
// reture true or false
export const isAdvertisementBannerScheduleFit = (numberOfBannerSlot, advertisements) => {
  // TODO: implement this function
  return undefined;
};

// Problem 2: implement this function to calculate the max of banner slots for input ads schedule. 
// reture number of max banner slots for the input ads schedule
export const maxOfBannerForAdsSchedule = (advertisements) => {
  // TODO: implement this function
  return undefined;
};
