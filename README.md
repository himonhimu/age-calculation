
# age-calculation

This package is use to calculate age of a given date of birth. you can pass  to data first date is date of birth & second date is till date. if second date is not passed it will take the current date a till date.


## Installation
Install age-calculation with npm

```bash
npm install age-calculation
```
    
## Usage/Examples

```javascript
const {AgeCalculate, DayName, MonthName} = require('age-calculation')

const Age = AgeCalculate('1990/02/02')

console.log(Age);

Output >>>> it will Output an object like bellow data.
{
  years: 33,
  months: '09',
  days: 20,
  dName: 'Friday',
  mName: 'February',
  message: '',
  upcoming: [
    { date: '2 Feb 2024', day: 'Friday' },       
    { date: '2 Feb 2025', day: 'Sunday' },       
    { date: '2 Feb 2026', day: 'Monday' },       
    { date: '2 Feb 2027', day: 'Tuesday' },      
    { date: '2 Feb 2028', day: 'Wednesday' },    
    { date: '2 Feb 2029', day: 'Friday' },       
    { date: '2 Feb 2030', day: 'Saturday' },     
    { date: '2 Feb 2031', day: 'Sunday' },       
    { date: '2 Feb 2032', day: 'Monday' },       
    { date: '2 Feb 2033', day: 'Wednesday' }     
  ],
  nextBirthDate: {
    years: '00',
    months: '02',
    days: 11,
    dName: 'Friday',
    mName: 'February',
  }
}
```
```javascript
const Day = DayName(5)
> Friday
```
```javascript
const Month = MonthName(9)
> Sep
```
```javascript
const Month = MonthName(9, 'L')
> September
```



## Feedback

If you have any feedback, please reach out to me at kmhimu87@gmail.com


## 🚀 About Me
- 👋 Hi, I’m @himonhimu
- 👀 I’m interested in programming
- 🌱 I’m currently learning Node Js, React Native, Next JS
- 💞️ I’m looking to collaborate at any time
## 🔗 Links
[![portfolio](https://img.shields.io/badge/my_portfolio-000?style=for-the-badge&logo=ko-fi&logoColor=white)](https://github.com/himonhimu)
[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/himon/)


## License

[None]()

