export default interface DemoType {
  id: number;
  tittle: string;
  pc:string;
  mobile:string;
  isNew?:boolean;
  type: ("BUSINESS" | "BLOG" | "PORTFOLIO" | "ONE PAGE" | "SHOP")[];


}