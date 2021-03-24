export interface MPComponentsProps {
  hashCode: number;
  name: string;
  attributes: { [key: string]: any };
  constraints?: MPConstraints;
  children: MPComponentsProps[];
}

export interface MPConstraints {
  minWidth: string;
  minHeight: string;
  maxWidth: string;
  maxHeight: string;
  hasTightWidth: boolean;
  hasTightHeight: boolean;
  measuring: boolean;
}

export interface MPDocumentProps {
  routeId: number;
  mainTabBar: MPComponentsProps;
  scaffold: MPComponentsProps;
  overlays: MPComponentsProps[];
  diff: MPComponentsProps;
  diffIndex: number;
}
