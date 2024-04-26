type SessionResponse = {
  expires: string;
  user: {
    email: string;
    id: string;
    jwtToken: string;
    name: string;
    role: string;
  };
};

type CoursesResponse = {
  appxCourseId: number;
  description: string;
  discordRoleId: string;
  id: number;
  imageUrl: string;
  openToEveryone: boolean;
  slug: string;
  title: string;
};

type TrailerResponse = {
  title: string;
  subtitle: string;
  description: string;
  vedioUrl: string;
  syllabusdescription: string;
  foundation: string[];
  price: number;
};
