import * as React from "react";

export interface JsonTableProps {
  json:any;
  transformer?:(key:string,value:any) => string;
}

export class JsonTable extends React.Component<JsonTableProps> {}