export interface MediaType {
    media? : string,
    meidaVideo? : string
  }
  export interface PricingType{
    price : string,
    save : number,
    package : string,
    delivery : number,
    rivision : string,
    packageItem : itemType[],
    gigLink : string
  }
  
  type itemType = {
    name : string
  }

  export interface allServiceDataType{
    name : string,
    media : string,
    title : string
  }



  