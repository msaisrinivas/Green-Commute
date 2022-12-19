/* eslint-disable array-callback-return */
import axios from "axios";
import { CardsProps } from "../Components/Pages/FindPage";
import { baseURLForDb} from "../Data/Cities";
import { baseUrl } from "../mocks/handlers";

const userId  = localStorage.getItem("userId");

export const getCards = async() => {
  return  await fetch(baseUrl + "/cards");
};

export const patchCard = async (id: number, card?: CardsProps) => {
  return await fetch(baseUrl + "/card/" + id, {
    method: "PATCH",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(card),
  });
};

export const getCardsFromDB = async () => {
  return await axios.get(baseURLForDb+"/jobs/location", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
};

export const getSavedJobsFromDB = async () => {
  return await axios.get(baseURLForDb+"/userjobs/"+userId+"/saved", {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
};

export const getAppliedJobsFromDB = async () => {
  return await axios.get(baseURLForDb+"/userjobs/"+userId+"/applied", {
    headers: {
      // "Access-Control-Request-Method": "*",
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  });
};

export const getJobsFromDB = async () => {
  const jobResData = (await getCardsFromDB()).data;
  const userJobresData = (await getSavedJobsFromDB()).data;
  const appliedUserJobresData = (await getAppliedJobsFromDB()).data;
  let cardof: CardsProps;
  let cardsof: CardsProps[] = [];
  await jobResData.map(async (jobres: any) => {
    let isS: boolean = false;
    let isA: boolean = false;
    await userJobresData.map((ujres: any) => {
      if (ujres.jobId === jobres.job.jobId) {
        isS = ujres.saved;
        isA = ujres.applied;
      }
    })
    await appliedUserJobresData.map((ujres: any) => {
      if (ujres.jobId === jobres.job.jobId) {
        isS = ujres.saved;
        isA = ujres.applied;
      }
    });
    let logod: string = jobres.job.companyName;
    let ld: string =
      jobres.location.city + ", " + jobres.location.stateName + ", India";
    let dd: string = jobres.location.distance;
    cardof = {
      id: jobres.job.jobId,
      icons: "/images/icons/" + logod.toLowerCase() + ".svg",
      location: ld,
      job: jobres.job.jobName,
      company: jobres.job.companyName,
      postedTime: jobres.job.postedDate,
      bike: true,
      bus: true,
      train: true,
      car: true,
      state: true,
      isSaved: isS,
      isApplied: isA,
      filter: { distance: dd, location: jobres.location.city },
    }
    cardsof.push(cardof);
  })
  return cardsof;
}

console.log(getCardsFromDB)


export const postUserJobsToDB = async (postUserJob: any) => {
  await axios.post(baseURLForDb+"/userjobs", postUserJob, {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Content-Type": "application/json",
    },
  })
}
