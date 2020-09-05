export interface IExperience {
  _id: string;
  title: string;
  company: string;
  location: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

export interface IEducation {
  _id: string;
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  to: string;
  current: boolean;
  description: string;
}

export interface IGithubRequestOptions {
  uri: string;
  method: string;
  headers: {
    [userAgent: string]: string;
  };
}
