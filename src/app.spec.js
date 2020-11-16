import { isAdvertisementBannerScheduleFit, maxOfBannerForAdsSchedule } from './app.js'
const fs = require('fs');

const readJSON = (path) => {
  const rawdata = fs.readFileSync(path);
  return JSON.parse(rawdata);
};

describe('Advertisement Banner Schedule', function () {

  const testAdvertisementBannerScheduleWithDataSet = (dataSet, numberOfBannerSlots, expectedResult) => {
    describe('check if advertisement banner schedule from ' + dataSet + ' dataSet is calculated correctly', () => {
      const inputData = readJSON('src/dataset/' + dataSet);

      it('should return result of ' + expectedResult + ' if banner slots are ' + numberOfBannerSlots + ' slots', () => {
        expect(isAdvertisementBannerScheduleFit(numberOfBannerSlots, inputData)).toBe(expectedResult);
      });
    });
  }

  const testGetMaxBannerInScheduleWithDataSet = (dataSet, expectedResult) => {
    describe('check if get max banner schedule from ' + dataSet + ' dataSet is calculated correctly', () => {
      const inputData = readJSON('src/dataset/' + dataSet);

      it('should return max of banner slots correctly', () => {
        expect(maxOfBannerForAdsSchedule(inputData)).toBe(expectedResult);
      });
    });
  }

  // Note: Problem 1, please complete is test, make them all pass

  testAdvertisementBannerScheduleWithDataSet('ads-schedule-Jan.json', 8, true);
  testAdvertisementBannerScheduleWithDataSet('ads-schedule-Jan.json', 7, false);
  // testAdvertisementBannerScheduleWithDataSet('ads-schedule-Feb.json', 5, true);
  // testAdvertisementBannerScheduleWithDataSet('ads-schedule-Feb.json', 4, false);
  // testAdvertisementBannerScheduleWithDataSet('ads-schedule-Mar.json', 3, true);
  // testAdvertisementBannerScheduleWithDataSet('ads-schedule-Mar.json', 2, false);

  // Note: This is the optional test for Problem 2
  // Please remove comments below if you want to solve this Problem 2

  // testGetMaxBannerInScheduleWithDataSet('ads-schedule-data-for-fail.json', 8);
  // testGetMaxBannerInScheduleWithDataSet('ads-schedule-data-for-pass.json', 5);
  // testGetMaxBannerInScheduleWithDataSet('ads-schedule-data-for-test.json', 3);
});
