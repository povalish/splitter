//
//

export interface ITab {
  label: string;
  active?: boolean;
  onSelect?: () => void;
}

export interface IWebTab extends ITab {
  tabId: string;
  panelId: string;
}

export interface INativeTab extends ITab {}
