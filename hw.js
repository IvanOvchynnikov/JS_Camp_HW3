//Task from lesson
const InsertionSort=arr=>{

    let l=arr.length;

    for (let i=0; i<l; i++){

        let current=arr[i];

        let j=i-1;

        while(j>=0 && arr[j]> current) {

           [arr[j],arr[j+1]]=[arr[j+1],arr[j]];
            j--;
        }

    }

    return arr;

}

console.log(InsertionSort([23,45,23,56,1,6,2,7,9,0]))

//Task 1
const DifferenceMaxMin=(arr)=>{
    arr=InsertionSort(arr);
    let l=arr.length;
    return arr[l-1]-arr[0];
}
console.log("Task 1");
console.log(DifferenceMaxMin([1,2,3,-4]));
console.log(DifferenceMaxMin([16]));

//Task 2
const FilterFunc=(str,num)=>{
    let arr=str.split(" ");
    let answer=[];
    for(let i=0; i<arr.length; i++){
        let cur="";
        let j=0;
        while(arr[i][j]!='.' && arr[i][j]!=',' && arr[i][j]!='!' && arr[i][j]!='?' && j<arr[i].length){
            cur+=arr[i][j];
            j++;
        }
        if(cur.length>num) {answer.push(cur);}
    }
    console.log(answer);
}
console.log("Task 2");
FilterFunc("Baby shark to do to do",3);
FilterFunc("I am not in danger, Skyler. I am the danger.", 6);


//Task 3
const CheckerOfEnding=(str1,str2)=>{
    let n=str1.length-str2.length;
    let m=str2.length;
    let flag=1;
    for(let i=0; i<m; i++){
        if(str1[i+n]!=str2[i]) flag=0;
    }
    if(flag) return true;
    else return false;
}
console.log("Task 3");
console.log(CheckerOfEnding("abc","bc"));
console.log(CheckerOfEnding("abc","d"));

//Task4

const GetAverages=(arr)=>{
    let averages=[];
    for(let i=0; i<arr.length-1; i++){
        averages.push((arr[i]+arr[i+1])/2);
    }
    return averages;
}
console.log("Task 4");
console.log(GetAverages([2, -2, 2, -2, 2]));
console.log(GetAverages([1, 3, 5, 1, -10]));

//Task5
const vowels=['a','e','i','o','u'];
const countVowels=(str)=>{
    let ans=0;
    for(let i=0; i<str.length; i++){
        //console.log(str[i]);
        if(vowels.includes(str[i])) ans++;
    }
    return ans;

}
console.log("Task 5");
console.log(countVowels("Celebration"));
console.log(countVowels("Palm"));

//Task 5.2
const removeABC=(str)=>{
    let s='';
    for(let i=0; i<str.length; i++){
        if(str[i]!='a' && str[i]!='b' && str[i]!='c') s+=str[i];
    }
    if(s!=str) return s;
    else return null;
}
console.log("Task 5.2");
console.log(removeABC("This might be a bit hard"));
console.log(removeABC("hello world!"));

//Task 6
const counter=new Map();

const difference=(arr1,arr2)=>{
    let ans=[];
    arr1.forEach((item)=>{
        if(!counter.has(item)){
            counter.set(item,1);
            ans.push(item);
        }
    })
    arr2.forEach((item)=>{
        if(!counter.has(item)){
            counter.set(item,1);
            ans.push(item);
        }
    })
    ans=InsertionSort(ans);
    return ans;
}
console.log("Task 6");
console.log(difference([1, 2, 3], [100, 2, 1, 10]));

//Task 7
const changeObject=(obj)=>{
    let newObj={};
    for(let i in obj){
        newObj[obj[i]]=i;
    }
    return newObj;
}
console.log("Task 7");
console.log(changeObject({red: "#FF0000", green: "#00FF00", white: "#FFFFFF"}));

//Task 8
const calculateDifference=(obj,ins)=>{
    let cur=0;
    for(let i in obj){
       cur+=obj[i];
    }
    return cur-ins;
}
console.log("Task 8");
console.log(calculateDifference({ "baseball bat": 20 }, 5));
console.log(calculateDifference({ skate: 10, painting: 20 }, 19));
console.log(calculateDifference({ skate: 200, painting: 200, shoes: 1 }, 400));

//Task 9
const doesBrickFit=(a,b,c,w,h)=>{
    if( (a<=w && b<=h) || (b<=w && a<=h) ) return true;
    if((a<=w && c<=h) || (c<=w && a<=h)) return true;
    if((b<=w && c<=h) || (c<=w && b<=h)) return true;
    return false;
}
console.log("Task 9");
console.log(doesBrickFit(1, 1, 1, 1, 1));
console.log(doesBrickFit(1, 2, 1, 1, 1));
console.log(doesBrickFit(1, 2, 2, 1, 1));

//Task 10
const getNameFile=(str)=>{
    const fileName = str.split('\\').pop().split('.')[0];
    return fileName;
}
console.log("Task 10");
console.log(getNameFile('c:\\WebServers\\home\\testsite\\www\\myfile.txt'));

//Task11

const checkShift=(str1,str2)=>{
    if(str1.length!=str2.length){
        return false;
    }
    let flag=0;
    let str3=str2+str2;
    for(let i=0; i<str1.length; i++) {
        if (str3.slice(i, i + str1.length) == str1) flag = 1;
    }
    if(flag) return true;
    else return false;
}
console.log("Task 11");
console.log(checkShift("abcd","cdab"));

//Task 12
const makeArray=(arr)=>{
    let b=[];
    let c=[];
    arr=InsertionSort(arr);
    while(arr.length>0){
        let mi=arr[1]-arr[0];
        for(let i=0; i<arr.length-1; i++){
            mi=Math.min(mi,arr[i+1]-arr[i]);
        }
        for(let i=0; i<arr.length-1; i++) {
            if (arr[i + 1] - arr[i] === mi) {
                b.push(arr[i]);
                c.push(arr[i + 1]);
                arr.splice(i, 2);
                break;
            }
        }
    }
    console.log(b);
    console.log(c);
}
console.log("Task 12");
makeArray([1, 2, 4, 5, 6, 8, 10, 11]);

//Task 13

const filterString=(str)=>{
   let str__copy=str.split(" ");
   str__copy.forEach((item,index)=>{
       //Check of Letters
       if(index!=0) str__copy[index]=item.toLowerCase();
       else str__copy[index]=item[0]+item.substring(1,item.length).toLowerCase();
       //Check of Email
       let flag=0;
       for(let i=0; i<item.length; i++){
           if(item[i]=='@') flag=1;
       }
       if(flag) str__copy[index]="[контакти заборонені]";
       //Check of Reference
       flag=0;
       if(item.match("http")) str__copy[index]="[посилання заборонено]";
       //Check of Numbers
       flag=0;
       for(let i=0; i<item.length; i++){
           if(item[i]<='9' && item[i]>='0') flag++;
       }
       if(flag===item.length && flag>3) str__copy[index]="";
   });
   let answer=str__copy.join(' ');
   if(answer.length>str.length) helpFunction=1;
   return answer;

}
function pollDOM () {
    setTimeout(pollDOM, 5000);
}

let helpFunction=0;
console.log("Task 13");
console.log(filterString("PiD goRoU Sydiv Ivan ivanovchi@gmail.com kotryy lubit https://sigmasoftware.com 233 2333"));
if(helpFunction){
    pollDOM();
}

//Task 15
const generatePassword=(passwordLength)=> {
    const numberChars = "0123456789";
    const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerChars = "abcdefghijklmnopqrstuvwxyz";
    const symbolChars = "_";
    const allChars = numberChars + upperChars + lowerChars + symbolChars;
    let password = '';
    let numberCount = 0;
    let upperLettersCount = 0;
    let underscoreCount = 0;
    for (let i = 0; i < passwordLength; i++) {
        let pos = Math.floor(Math.random() * allChars.length);
        if (allChars[pos] >= 'A' && allChars[pos] <= 'Z' && upperLettersCount < 2) {
            upperLettersCount++;
            password += allChars[pos];
        } else if (allChars[pos] = '_' && underscoreCount == 0) {
            underscoreCount++;
            password += '_';
        } else if (allChars[pos] >= '0' && allChars[pos] <= '9' && upperLettersCount < 5 &&
            (password[password.length - 1] > '9' || password[password.length - 1] < '0')) {
            numberCount++;
            password += allChars[pos];
        } else{
            while(!(allChars[pos]>='a' && allChars[pos]<='z')){
                pos = Math.floor(Math.random() * allChars.length);
            }
            password += allChars[pos];
        }
    }
    return password;
}
console.log("Task15");
console.log(generatePassword(Math.floor(6+Math.random()*15)));

//Task16

const cmpSort=(arr)=>{
    arr=InsertionSort(arr);
    let ans_arr=[];
    for(let i=0; i<arr.length; i+=2){
         ans_arr.push(arr[i]);
    }
    let start;
    if(arr.length%2) start=arr.length-2;
    else start=arr.length-1;
    for(let i=start; i>=0; i-=2){
        ans_arr.push(arr[i]);
    }
    return ans_arr;
}

console.log("Task16");
console.log(cmpSort([1,2,3,4,5]));
//Task 17

const solve17=(str)=>{
    str=str.split('');
    let mp=new Map();
    str.forEach((el,index)=>{
      if(mp.get(el)){
          mp.set(el,Number(mp.get(el)) + 1)
      }
      else mp.set(el,1)
    });
    mp=[...mp.entries()].sort((a,b)=>{
        return b[1]-a[1];
    });
    let fromMp = Object.fromEntries(mp);
    let ans="";
    for(let i in fromMp){
       for(let j=0; j<fromMp[i]; j++){
            ans+=i;
       }
    }
    return ans;
}
console.log("Task17");
console.log(solve17("abcjicjsoc"));
//Task 18
const solve18=(str1,str2)=>{
    if(str2.length>str1.length){
        [str1,str2]=[str2,str1];
    }
    let curLength=1;
    let start=0;
    let ans='';
    for(let i=0; i<str2.length; i++){
        for(let j=1; j<=str2.length; j++){
            let st=str2.substring(i,j);
            if(str1.indexOf(st) !== -1){
                if(st.length>ans.length) ans=st;
            }
            else break;
        }
    }
    return ans;
}
console.log("Task 18");
console.log(solve18("saaa" ,"baaa"));

//Task 19
const solve19=(str,num)=>{
    let alphabet="abcdefghijklmnopqrstuvwxyz";
    alphabet=alphabet.split('');
    let ans="";
    for(let i=0; i<str.length; i++){
        let pos=alphabet.findIndex((item)=>{
            return item===str[i];
        });
        ans+=alphabet[(pos+num)%26];
    }
    return ans;
}
console.log("Task19");
console.log(solve19("abcz",1));

//Task 20

const solve20=(str1,str2)=>{
    str1=str1.split('');
    str2=str2.split('');
    str1=str1.sort();
    str2=str2.sort();
    str1=str1.join();
    str2=str2.join();
    return str1===str2;
}

console.log("Task20");
console.log(solve20("abc", "bca"))
console.log(solve20("abram", "abral"))

//Task 21
class Student{
    constructor(firstName,lastName,faculty) {
        this.firstName=firstName;
        this.lastName=lastName;
        this.faculty=faculty.toLowerCase();
    }
}
class University{
    students=[];
    addStudent(student){
        this.students.push(student);
    }
    deleteStudent(id){
        this.students.splice(this.students.findIndex(student=>student.id===id),1);
    }
    getStudentInfo(id) {
     console.log(this.students[this.students.findIndex(student=>student.id===id)]);
    }
    getStudents(){
        console.log(this.students);
    }
    getStudentsFromFaculty(faculty){
        faculty=faculty.toLowerCase();
        console.log(this.students.filter((student)=>{
              return student.faculty===faculty;
        }))
    }
}
const UZHNU=new University();
console.log("Task 21");
UZHNU.addStudent(new Student("Ivan","Ovchynnikov", "IT"));
UZHNU.addStudent(new Student("Vasyl","Batoh", "It"));
UZHNU.addStudent(new Student("Misha","Perec", "Architecture"));
UZHNU.addStudent(new Student("Diana","Bandera", "Design"));
UZHNU.addStudent(new Student("Kolia","Pitrov", "Architecture"));
UZHNU.getStudents();
UZHNU.getStudentsFromFaculty("IT");

//Task 22
const countWords=(str)=>{
    return str.split(' ').length;
}

const countSentences=(str)=>{
    let answer=0,f=0;
    for(let i=0; i<str.length; i++){
        if(str[i]=='.' || str[i]=='!' || str[i]=='?'){
            if(f===0) {
                f = 1;
                answer++;
            }
        }
        else {
            f=0;
        }
    }
    return answer;
}

const countChars=(str)=>{
    str=str.replaceAll(' ','');
    return str.length;
}
const determinateWords=(str)=>{
    let words=new Map();
    str=str.replaceAll('!','');
    str=str.replaceAll('?','');
    str=str.replaceAll('.','');
    str=str.replaceAll(',','');
    str=str.split(' ');
    str.forEach((item)=>{
        if(words.get(item)){
            words.set(item,Number(words.get(item))+1);
        }
        else{
            words.set(item,1);
        }
    })
    words=[...words.entries()];
    words.sort((a,b)=>{
        return b[1]-a[1];
    })
    const answer = Object.fromEntries(words)
    return answer;

}
console.log("Task 22");
console.log(countWords("hi! baby, how are you? My name is Ivan!!! And i want to say, that you really beautiful..."));
console.log(countSentences("hi! baby, how are you? My name is Ivan!!! And i want to say, that you really beautiful..."));
console.log(countChars("hi! baby, how are you? My name is Ivan!!! And i want to say, that you really beautiful..."));
console.log(determinateWords("hi! baby, how are you? My name is Ivan!!! And i want to say, that you really beautiful..."));


