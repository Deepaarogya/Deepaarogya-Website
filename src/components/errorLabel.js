import { red } from "../config/color";

export default function LabelError({message}){
    return(
        <span style={{color:red,fontFamily:'Arial, Helvetica, sans-serif',fontWeight:'1000'}}>{message}</span>
    );
}