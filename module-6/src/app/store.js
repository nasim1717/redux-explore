import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/videosSlice";
import tagReducer from "../features/tags/tagsSlice";
import videoReducer from "../features/video/videoSlice";
import relatedVideosReducer from "../features/relatedVideos/relatedVideoSlice";
import filterReducer from "../features/filter/filterSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagReducer,
    video: videoReducer,
    relatedVideos: relatedVideosReducer,
    filter: filterReducer,
  },
});
