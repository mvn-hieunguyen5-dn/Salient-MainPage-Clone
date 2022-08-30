interface Link {
  id:number;
  tittle:string;
  color?: "red" | "blue";
}

export default interface GroupLink {
  id?:number;
  tittle: string;
  childLinks: Link[];
}

