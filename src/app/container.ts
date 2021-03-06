export interface ContainerElement{
  name: string;
  itemId: number; 
  amount:string; //amount of this itmes in stock in this container
  weight:string; //weight in metric tons
  recipient:string;
    //where does the content goes after (for waste)   
}
export interface ManifestElement  {
  status:string;
  id: number;
  containerID: string;
  content:ContainerElement[] //IN A SEPERAT STRINGS !!
  location: string;
  type:string;
  weight:string;
  size:string;
  DG:string;
  arrival:string;
  sender:string;
}
