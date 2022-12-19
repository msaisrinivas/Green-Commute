/* eslint-disable @typescript-eslint/no-unused-expressions */
/* eslint-disable array-callback-return */
import { Alert, Box, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Header } from "../../Organisms/Header";
import { SearchJob } from "../../Organisms/SearchJob";
import { Filter, arrayValue } from "../../Organisms/Filter/index";
import FindJobs from "../../Template/FindJobs";
import { theme } from "../../../Theme/index";
import Cards from "../../Organisms/Cards";
import {
  PageHeading1,
  PageHeading2,
  searchJobLocation,
  searchJobskills,
  distance,
} from "../../../Data/Cities";
import { DescCard } from "../../Organisms/Description";
import { TabContext, TabPanel } from "@mui/lab";
import { useParams } from "react-router";
import * as service from "../../../service/service";
import Sidepane from "../../Organisms/SidePane";

export interface CardsProps {
  id: number;
  icons: string;
  job: string;
  company: string;
  location: string;
  bike: boolean;
  bus: boolean;
  car: boolean;
  train: boolean;
  postedTime: string;
  state: boolean;
  isSaved: boolean;
  isApplied: boolean;
  filter: {
    distance: string;
    location: string;
  };
}

let heading1 = PageHeading1[0],
  heading2 = PageHeading2[0];

function FindPage() {
  const { location } = useParams();
  const [cards, setCards] = useState<CardsProps[]>([]);
  const [descCard, setDescCard] = useState<boolean>(false);
  const [id, setId] = useState<number>(0);
  const [tabNo, setTabNo] = useState<string>("2");
  const [dista, setDista] = useState<string[]>(distance);
  const [sloc, setSloc] = useState<string>("");
  const [srole, setSrole] = useState<string>("");

  const allCards = async () => {
    const getD = await service.getJobsFromDB();
    setCards(getD);
  };

  useEffect(() => {
    allCards();
  }, []);

  const handleSave = async (id: number) => {
    let card = cards.at(id);
    let isS: boolean = true;
    if (card?.isSaved) {
      card = { ...card, isSaved: false };
      isS = false;
    } else if (card?.isSaved === false) {
      card = { ...card, isSaved: true };
      isS = true;
    }
    let postUserJob = {
      userId: 2,
      jobId: id + 1,
      saved: isS,
      applied: card?.isApplied,
    };
    await service.postUserJobsToDB(postUserJob);
    if (document.getElementById("findId") === null) {
      setDescCard(false);
      setId(-1);
    }
    allCards();
  };

  const handleApply = async (id: number) => {
    let card = cards.at(id);
    let isA: boolean = true;
    if (card?.isApplied === false) {
      card = { ...card, isApplied: true };
      isA = true;
    }
    let postUserJob = {
      userId: 2,
      jobId: id + 1,
      saved: card?.isSaved,
      applied: isA,
    };
    await service.postUserJobsToDB(postUserJob);
    allCards();
  };

  const handleLocation = (loc: string) => {
    setSloc(loc);
  };
  const handleRole = (role: string) => {
    setSrole(role);
  };

  let style={
    transform: "translate(-25px,-37px)"
  }
  if(arrayValue.length===0)
    {
      style={transform: "translate(-25px,-100px)"}
    }

  let style1={
    transform: "translate(-28px,5px)"
  }
  if(arrayValue.length===0)
    {
      style1={transform: "translate(-25px,-70px)"}
    }

  let descStyle={
    transform: "translateY(-4%)"
  }
  if(arrayValue.length===0)
    {
      descStyle={transform: "translateY(-100px)"}
    }
    

  const Message = () => {
    setTimeout(() => {
      if(sloc === "Bangalore")
      {setSloc("")}
    }, 5000)
  
    return (
      sloc === "Bangalore" && <Alert severity="info" sx={{position:"absolute",left:"700px", top:"90px"}}>There are no jobs found in the selected area</Alert>
    )
  }
  return (
    <Box data-testid="findPage">
      <FindJobs
        header={<Header location={location} />}
        sidepane={
          <Sidepane
            setDesc={() => {
              setDescCard(false);
              if (document.getElementById("findId") === null) {
                setId(0);
              }
              else{
                setId(-1);
              }
              
            }}
            findPage={
              <Box>
                <Box>
                {Message()}
                </Box>
                <Box sx={{ display: "flex" }} data-testid="searchFilter">
                  <SearchJob
                    skills={searchJobskills}
                    locations={searchJobLocation}
                    getLoc={handleLocation}
                    getRole={handleRole}
                  />
                  <Box onClick={() => {setDista(distance.filter((ele) => arrayValue.includes(ele)))}}>
                    <Filter />
                  </Box>
                </Box>
                <Box sx={{ paddingTop: "36px" }}>
                  <Typography variant="h2"> {heading1} </Typography>
                  <Typography
                    variant="body2"
                    sx={{ color: theme.palette.black?.two }}
                  >
                    {heading2}
                  </Typography>
                </Box>
                <Box width="100%" height={"5px"} onClick={() => setDista(arrayValue)}></Box>
                <Box sx={{ transform:"translateY(5%)" }}>
                  <TabContext value={tabNo}>
                    <TabPanel
                      value={"1"}
                      sx={{
                        display: "grid",
                        gridGap: "2vh",
                        transform:'translate(-2.5%,-3% )',
                        boxShadow: "none",
                      }}
                      style={style1} >
                      <Box onClick={() => { setDescCard(true);}} sx={{border: "2px solid " + theme.palette.green?.four, maxWidth:"571px", borderRadius: "12px", }}>
                              <Cards
                                icons={cards.at(id)?.icons}
                                job={cards.at(id)?.job}
                                company={cards.at(id)?.company}
                                location={cards.at(id)?.location}
                                bike={cards.at(id)?.bike}
                                bus={cards.at(id)?.bike}
                                car={cards.at(id)?.car}
                                train={cards.at(id)?.train}
                                postedTime={cards.at(id)?.postedTime}
                                state={true}
                              />
                            </Box>
                      {cards
                        .filter((card) => {return (card.id !== id+1)})
                        .filter((card) => {if(dista.length===0){return true} return dista.includes(card.filter.distance)})
                        .filter((card) => { if (sloc === "" || sloc === undefined || sloc === "Bangalore") {return true} return card.filter.location === sloc})
                        .filter((card) => { if (srole === "" || srole === undefined) {return true}
                          let srolestr: string = srole;
                          return (
                            card.job.toLowerCase() === srolestr.toLowerCase()
                          )
                        })
                        .map((card, key) => { return ( <Box onClick={() => { setDescCard(true);setId(card.id - 1);}} key={key} >
                              <Cards
                                icons={card.icons}
                                job={card.job}
                                company={card.company}
                                location={card.location}
                                bike={card.bike}
                                bus={card.bike}
                                car={card.car}
                                train={card.train}
                                postedTime={card.postedTime}
                                state={true}
                              />
                            </Box>
                          );
                        })}
                    </TabPanel>
                    <TabPanel
                      value={"2"}
                      sx={{
                        display: "flex",
                        width: "1000px",
                        flexWrap: "wrap",
                      }}
                      style={style}
                    >
                      {cards
                        .filter((card) => {if(dista.length===0){return true} return dista.includes(card.filter.distance)})
                        .filter((card) => {
                          if (sloc === "" || sloc === undefined|| sloc === "Bangalore") {
                            return true;
                          }
                          return card.filter.location === sloc;
                        })
                        .filter((card) => {
                          if (srole === "" || srole === undefined) {
                            return true;
                          }
                          let srolestr: string = srole;
                          return (
                            card.job.toLowerCase() === srolestr.toLowerCase()
                          );
                        })
                        .map((card, key) => {
                          return (
                            <Box
                              sx={{ width: "33.33%", paddingTop: "15px" }}
                              onClick={() => {
                                setDescCard(true);
                                setId(card.id - 1);
                                setTabNo("1");
                                heading1 = PageHeading1[1];
                                heading2 = PageHeading2[1];
                              }}
                              key={key}
                            >
                              <Cards
                                icons={card.icons}
                                job={card.job}
                                company={card.company}
                                location={card.location}
                                bike={card.bike}
                                bus={card.bike}
                                car={card.car}
                                train={card.train}
                                postedTime={card.postedTime}
                                state={false}
                              />
                            </Box>
                          );
                        })}
                    </TabPanel>
                  </TabContext>

                  {descCard && (
                    <Box
                      sx={{ position: "absolute", left: "76vh", top: "53px" }}
                      style={descStyle}
                    >
                      <DescCard
                        icon={cards.at(id)?.icons}
                        title={cards.at(id)?.job}
                        company={cards.at(id)?.company}
                        address={cards.at(id)?.location}
                        postedTime={cards.at(id)?.postedTime}
                        handleSave={() => {
                          handleSave(id);
                        }}
                        isSaved={cards.at(id)?.isSaved ? "UnSave" : "Save"}
                        handleApply={() => handleApply(id)}
                        applystr={cards.at(id)?.isApplied ? "Applied" : "Apply"}
                      />
                    </Box>
                  )}
                </Box>
              </Box>
            }
            savedPage={
              <Box
                sx={{ display: "grid", gridGap: "18px", paddingLeft: "5px" }}
              >
                {id !== -1 && <Box onClick={() => { setDescCard(true);}} sx={{border: "2px solid " + theme.palette.green?.four, maxWidth:"571px", borderRadius: "12px", }}>
                  <Cards
                    icons={cards.at(id)?.icons}
                    job={cards.at(id)?.job}
                    company={cards.at(id)?.company}
                    location={cards.at(id)?.location}
                    bike={cards.at(id)?.bike}
                    bus={cards.at(id)?.bike}
                    car={cards.at(id)?.car}
                    train={cards.at(id)?.train}
                    postedTime={cards.at(id)?.postedTime}
                    state={true}
                  />
                </Box>}
                {cards
                  .filter((card) => {return (card.id !== id+1)})
                  .filter((card: any) => card.isSaved)
                  .map((card, key) => {
                    return (
                      <Box
                        onClick={() => {
                          setDescCard(true);
                          setId(card.id - 1);
                        }}
                        key={key}
                      >
                        <Cards
                          icons={card.icons}
                          job={card.job}
                          company={card.company}
                          location={card.location}
                          bike={card.bike}
                          bus={card.bike}
                          car={card.car}
                          train={card.train}
                          postedTime={card.postedTime}
                          state={true}
                        />
                      </Box>
                    );
                  })}
                {descCard && (
                  <Box
                    sx={{ position: "absolute", left: "965px", top: "170px" }}
                    // style={descStyle}
                  >
                    <DescCard
                      icon={cards.at(id)?.icons}
                      title={cards.at(id)?.job}
                      company={cards.at(id)?.company}
                      address={cards.at(id)?.location}
                      postedTime={cards.at(id)?.postedTime}
                      handleSave={() => {
                        handleSave(id);
                      }}
                      handleApply={() => handleApply(id)}
                      isSaved={cards.at(id)?.isSaved ? "UnSave" : "Save"}
                      applystr={cards.at(id)?.isApplied ? "Applied" : "Apply"}
                    />
                  </Box>
                )}
              </Box>
            }
          />
        }
      />
    </Box>
  );
}

export default FindPage;
