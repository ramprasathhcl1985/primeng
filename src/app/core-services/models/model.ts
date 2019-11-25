export interface IAccordion{
    title: string;
    description: string;
    id?: number;
  
   }

   export interface ITabMenuItems{
    label: string;
    icon: string;
   }
   export interface ICars{
    brand: string;
    year: string;
    color: string;
    img: string;
   }
   export interface TreeNode {
    data?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
}