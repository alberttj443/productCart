import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
    name:'prodfilter', 
  })
  
export class ProdFilterPipe implements PipeTransform{

  
    transform(value:any,filterString:string):any{ 
        let filterlist=value.filter((ele: any)=>{

         return   ele.prodname.toLocaleLowerCase().includes(filterString.toLocaleLowerCase());
        })
        return filterlist;
    }
}