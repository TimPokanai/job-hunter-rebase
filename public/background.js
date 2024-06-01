/*global chrome*/

console.log("background.js is working");


const linkedInListViewURL = "https://www.linkedin.com/jobs/collections";
const linkedInDetailedViewURL = "https://www.linkedin.com/jobs/view";

function getJobDescription(className) {
    console.log(`Attempting to get job description for class: ${className}`);
    const jobDetailsContainer = document.body.querySelector(`.${className}`);
    console.log("className", className);
    const jobDetails = jobDetailsContainer.textContent;
    console.log("jobDetails", jobDetails);
    const cleanedJobDetails = jobDetails.replace(/\s\s+/g, " ");
    console.log("cleanedJobDetails", cleanedJobDetails);
    return cleanedJobDetails;
}

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
    console.log("Event listener triggered");
    if (changeInfo.status === "complete" && tab.active) {
        if (
            tab.url?.startsWith(linkedInListViewURL) ||
            tab.url?.startsWith(linkedInDetailedViewURL)
        ) {
            chrome.scripting.executeScript({
                target: { tabId: tabId },
                func: getJobDescription,
                args: ["jobs-description-content__text"],
            })
            .then((queryResult) => {
                chrome.storage.local.set({ jobDescription: queryResult[0].result });
            });
        }
    }
});
