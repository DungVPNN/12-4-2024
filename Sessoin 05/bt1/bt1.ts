let Name1:string = "Dung";
let age:number = 19;
let job:string = "Develop";
function Information(name:string, age:number, job:string) {
  return `Name:${name}, Age:${age}, Job:${job}`;
}
console.log(Information(Name1, age, job));