export type ControlBarItem = {
  name: string;
  icon: string;
  menu: ControlBarItemMenu[];
};

export type ControlBarItemMenu = {
  text: string;
  action: () => void;
};
