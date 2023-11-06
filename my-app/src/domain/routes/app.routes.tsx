import React from "react";
import { Route } from "react-router-dom";
import appRoutesConstants from "./constants/routes.constants";
import {PodcastsComponent} from "../pages/podcasts/Podcasts.component";
import {PodcastEpisodesComponent} from "../pages/podcastEpisodes/PodcastEpisodes.component";

const appRoutes = () => [
    <Route
      path={appRoutesConstants.HOME}
      key={appRoutesConstants.HOME}
      element={<PodcastsComponent />}
    />,
    <Route
      path={appRoutesConstants.PODCAST_DETAIL}
      key={appRoutesConstants.PODCAST_DETAIL}
      element={<PodcastEpisodesComponent />}
    />,

];

export default appRoutes;
