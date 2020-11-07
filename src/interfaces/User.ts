export interface UserData {
  userId: number;
  name: string;
}

export interface UserStudyData extends UserData {
  studyGroup: string;
}
