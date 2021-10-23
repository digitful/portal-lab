import { Worker } from "../worker/worker";

export interface AppState {
  workers: ReadonlyArray<Worker>,
  collection: ReadonlyArray<string>
}
