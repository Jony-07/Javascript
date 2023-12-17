let number = 6;
let texNumber = 'Unknown value';

switch (number) {
    case 1:
        texNumber = 'Number one';
        break;
    case 2:
        texNumber = 'Number two';
        break;
    case 3:
        texNumber = 'Number three';
        break;
    default:
        break;
}
console.log(texNumber);
console.log("Seasons");
let month = 10;
let season = 'Undefined season';

switch (month) {
    case 1: case 2: case 12:
        season = 'Winter';
        break;
    case 3: case 4: case 5:
        season = 'Spring';
        break;   
    case 6: case 7: case 8:
        season = 'Summer';
        break;
    case 9: case 10: case 11:
        season = 'Autumn';
        break;  
    default:
        break;
}
console.log(season);