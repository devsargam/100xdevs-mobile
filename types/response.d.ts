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
