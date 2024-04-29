type Button = {
  disabled: boolean;
  children: React.ReactNode;
  onPress: () => void;
};



type Selectors = {
  data: string[],
  selectedItem: string,
  onPress: (val: any) => void
}