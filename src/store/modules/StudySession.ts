import { StudySessionData } from "@/interfaces/StudySessionData";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class StudySession extends VuexModule {
  public studySessionData: StudySessionData[] = [];

  @Mutation
  setStudySessionData(studySessionData: StudySessionData[]): void {
    this.studySessionData = studySessionData;
  }

  @Action({ rawError: true })
  updateStudySessionData(studySessionData: StudySessionData[]) {
    this.context.commit("setStudySessionData", studySessionData);
  }
}
