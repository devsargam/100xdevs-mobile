import { atom } from "recoil";

export const userAtom = atom<boolean | null>({
  key: "user",
  default: null,
});
