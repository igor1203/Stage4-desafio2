let students = [
  {
    name: 'Igor',
    firstGrade: 7.5,
    secondGrade: 6,
  },
  {
    name: 'Larissa',
    firstGrade: 4.7,
    secondGrade: 9,
  },
  {
    name: 'Alisson',
    firstGrade: 3.6,
    secondGrade: 5,
  },
  {
    name: 'Amanda',
    firstGrade: 9.5,
    secondGrade: 7.8,
  },
]

function printStudent (student) {
  let average = ((student.firstGrade + student.secondGrade) / 2).toFixed(1);

  if (average < 7) {
    return `
    A média do(a) aluno(a) ${student.name} é ${average}.
    Não foi dessa vez, ${student.name}. Tente novamente!`
  }else {
  return `
  A média do(a) aluno(a) ${student.name} é ${average}.
  Parabéns, ${student.name}! Você foi aprovado no concurso! `
  }
}

for (let student of students) {
  let toStudentMessage = printStudent(student)
  alert(toStudentMessage)
}


