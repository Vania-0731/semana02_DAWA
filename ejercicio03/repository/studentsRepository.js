let students = [
    {
        id: 1,
        name: "Ana",
        grade: 18,
        age: 21,
        email: "ana@example.com",
        phone: "+51 999111222",
        enrollmentNumber: "2024001",
        course: "Software Design and Development C24",
        year: 3,
        subjects: ["Algorithms", "Databases"],
        gpa: 3.7,
        status: "Active",
        admissionDate: "2022-03-01"
    },
    {
        id: 2,
        name: "Luis",
        grade: 14,
        age: 22,
        email: "luis@example.com",
        phone: "+51 999333444",
        enrollmentNumber: "2024002",
        course: "Software Design and Development C24",
        year: 2,
        subjects: ["Math", "Networks"],
        gpa: 2.8,
        status: "Inactive",
        admissionDate: "2022-03-01"
    }
];

function getAll() {
    return students;
}

function getById(id) {
    return students.find(s => s.id === id);
}

function create(student) {
    student.id = students.length + 1;
    students.push(student);
    return student;
}

function update(id, updateData) {
    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
        students[index] = { ...students[index], ...updateData };
        return students[index];
    }

    return null;
}

function remove(id) {
    const index = students.findIndex(s => s.id === id);

    if (index !== -1) {
        return students.splice(index, 1)[0];
    }

    return null;
}

module.exports = { getAll, getById, create, update, remove };
