const skills = [
    { id: 125223, skill: 'JavaScript Coding', done: true },
    { id: 127904, skill: 'Learn Express', done: false },
    { id: 139608, skill: 'Fix computer', done: false }
];

module.exports = {
    getAll,
    getOne,
    create,
    deleteOne,
    update
};


function update(id, updatedSkill) {
    id = parseInt(id);
    const skill = skills.find(skill => skill.id === id);
    Object.assign(skill, updatedSkill);
}

function deleteOne(id) {
    id = parseInt(id);
    const idx = skills.findIndex(skill => skill.id === id);
    skills.splice(idx, 1);
}

function create(skill) {
    skill.id = Date.now() % 1000000;
    // new skills to be done
    skill.done = false;
    skills.push(skill);
}

function getAll() {
    return skills;
}

function getOne(id) {
    id = parseInt(id);
    return skills.find(skill => skill.id === id);
}