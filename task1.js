const xmlStr = `<list>
<student>
  <name lang="en">
    <first>Ivan</first>
    <second>Ivanov</second>
  </name>
  <age>35</age>
  <prof>teacher</prof>
</student>
<student>
  <name lang="ru">
    <first>Петр</first>
    <second>Петров</second>
  </name>
  <age>58</age>
  <prof>driver</prof>
</student>
</list>`;

const parser = new DOMParser();

const xmlDOM = parser.parseFromString(xmlStr, "text/xml");

const list = [];
const students = xmlDOM.querySelectorAll('student');
students.forEach((student) => {
    const name = student.querySelector('name');
    let objStudent = {
        name: name.querySelector('first').textContent + ' ' + name.querySelector('second').textContent,
        age: student.querySelector('age').textContent,
        prof: student.querySelector('prof').textContent,
        lang: name.getAttribute('lang')
    }
    list.push(objStudent);
});
const result = {
    list: list
}
console.log(result);
