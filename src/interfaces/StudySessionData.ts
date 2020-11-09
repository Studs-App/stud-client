export interface StudySessionData {
  title: string;
  location: string;
  status: string;
  buds: string[];
  duration: string;
  studyDate: string;
}

export interface NewStudySessionData {
  title: string;
  description: string;
  subject: string;
  status: string;
  lattitude: number;
  longitude: number;
  location: string;
  distance: string;
  buds: string[];
  scheduledDate: string;
  isPrivate: boolean;
  profileId: number;
}
