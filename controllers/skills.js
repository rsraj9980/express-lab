const Skill = require('../models/skill')

module.exports = {
    index,
    show,
    new: newSkill,
    create,
    delete: deleteSkill,
    edit,
    update
};

function update(req, res) {
    Skill.update(req.params.id, req.body);
    res.redirect(`/skills/${req.params.id}`);
}

function edit(req, res) {
    const skill = Skill.getOne(req.params.id);
    res.render('skills/edit', { skill })
}

function deleteSkill(req, res) {
    Skill.deleteOne(req.params.id);
    res.redirect('/skills');
}


function newSkill(req, res) {
    res.render('skills/new')
}

function index(req, res) {
    const skills = Skill.getAll();
    res.render('skills/index', { name: 'Raj', skills });
}

function show(req, res) {
    // route parameters are accessesd by req.params
    const skill = Skill.getOne(req.params.id);
    res.render('skills/show', { skill });
}

function create(req, res) {
    Skill.create(req.body);
    res.redirect('/skills');
}