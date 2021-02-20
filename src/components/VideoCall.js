import React from 'react'
import { reducer as voxeetReducer } from "@voxeet/react-components"
import { ConferenceRoom, VoxeetProvider } from "@voxeet/react-components"
import thunkMidleware from "redux-thunk"
import { combineReducers, createStore, applyMiddleware } from "redux"
import "@voxeet/react-components/dist/voxeet-react-components.css"

const reducers = combineReducers({
  voxeet: voxeetReducer,
})

const configureStore = () =>
  createStore(reducers, applyMiddleware(thunkMidleware))
const settings = {
  consumerKey: "",
  consumerSecret: "",
  conferenceAlias: "Sample",
}

function VideoCall() {
  return (
    <VoxeetProvider store={configureStore()}>
      <ConferenceRoom
        autoJoin
        consumerKey={settings.consumerKey}
        consumerSecret={settings.consumerSecret}
        conferenceAlias={settings.conferenceAlias}
      />
    </VoxeetProvider>
  )
}

export default VideoCall
