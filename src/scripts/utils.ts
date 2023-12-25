import { NUMBERS,ALPHABETS } from "./constants";

export function getRandomString(length:number): string{
  let output="";
  const character=NUMBERS+ALPHABETS;

  for(let i=0;i<length;i++){
    output+=character.charAt(Math.random()*character.length);
  }
  return output;
}
