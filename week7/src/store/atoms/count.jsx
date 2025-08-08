import {atom} from "recoil";

const countAtom=atom({
 key:"countAtom", //how do you uniquely identify this atom 
 default:0
});
export default countAtom;

export const evenSelector=selector({
  key:"evenSelector",
  get:({get})=>{
    const count=get(countAtom);
    return count%2;
  }
})



