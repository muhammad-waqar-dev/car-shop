import React from 'react'
import { carsTypeslist } from "../../utility/modals/carList";
import {ListArea} from "./carList.styles";
import CarTypeItem from "../CarTypeItem";

const index = () => {
  
  return (
    <ListArea>
    {carsTypeslist.map((item) => (
        <CarTypeItem {...item}/>
    ))}
  </ListArea>
  )
}

export default index