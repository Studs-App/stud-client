import { ProfileData } from "@/interfaces/ProfileData";
import { VuexModule, Module, Mutation, Action } from "vuex-module-decorators";

@Module({ namespaced: true })
export default class Profile extends VuexModule {
  public profileData: ProfileData[] = [];

  @Mutation
  setProfileData(profileData: ProfileData[]): void {
    this.profileData = profileData;
    console.log("Mutation Statement: ",this.profileData);
  }

  @Action({ rawError: true })
  updateProfileData(profileData: ProfileData[]) {
    this.context.commit("setProfileData", profileData);
  }
}
