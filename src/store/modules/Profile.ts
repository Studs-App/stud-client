import { ProfileData } from "@/interfaces/ProfileData";
import { VuexModule, Module, Mutation, Action } from 'vuex-module-decorators'

@Module({ namespaced: true })
export default class Profile extends VuexModule {
    public profileData: ProfileData[] = [];
    public currentProfileData!: ProfileData;

    @Mutation
    setProfileData(profileData: ProfileData[]): void {
        this.profileData = profileData;
        console.log(this.profileData);
        console.log("Mutation Statement");
    }

    @Action({ rawError: true })
    updateProfileData(profileData: ProfileData[]) {
        this.context.commit('setProfileData', profileData);
    }

    @Mutation
    setCurrentProfileData(currentProfileData: ProfileData) {
        this.currentProfileData = currentProfileData;
        console.log("Current Profile Data");
    }

}