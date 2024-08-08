function addSubject() {
  const container = document.getElementById('subjectsContainer');
  const subjectDiv = document.createElement('div');
  subjectDiv.classList.add('subject');

  subjectDiv.innerHTML = `
        <input type="text" placeholder="Subject Name">
        <input class="credit" type="number" placeholder="Credits" required>
        <select required>
            <option value="">Grade</option>
            <option value="10">O</option>
            <option value="9">E</option>
            <option value="8">A</option>
            <option value="7">B</option>
            <option value="6">C</option>
            <option value="5">D</option>
            <option value="2">F</option>
        </select>
    `;

  container.appendChild(subjectDiv);
}

function calculateSGPA() {
  const subjects = document.querySelectorAll('.subject');
  let totalCredits = 0;
  let totalPoints = 0;

  subjects.forEach(subject => {
    const credits = parseFloat(subject.children[1].value);
    const grade = parseFloat(subject.children[2].value);

    if (!isNaN(credits) && !isNaN(grade)) {
      totalCredits += credits;
      totalPoints += credits * grade;
    }
  });

  const sgpa = totalPoints / totalCredits;
  document.getElementById('result').innerText = `SGPA: ${sgpa.toFixed(2)}`;
}
