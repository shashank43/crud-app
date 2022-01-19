import Member from "../model/member-schema.js";

export async function getMembers(req, res) {
    try {
        let allMembers = await Member.find();
        res.json(allMembers);
    } catch (error) {
        res.json({ message : error.message });
    }
}

export async function getMemberById(req, res) {
    const _id = req.params._id;
    try {
        let member = await Member.findById(_id);
        res.json(member);
    } catch (error) {
        res.json({ message : error.message });
    }
}

export async function addMember(req, res) {
    const receivedMember = req.body;
    const newMember = new Member(receivedMember);

    try {
        await newMember.save();
        res.json('Member added');
    } catch (error) {
        res.json({ message : error.message });
    }
}

export async function editMember(req, res) {
    const receivedMember = req.body;
    const editedMember = new Member(receivedMember);
    const receivedId = req.params._id;

    try {
        await Member.updateOne({ receivedId }, editedMember);
        res.json('Member Edited');
    } catch (error) {
        res.json({ message : error.message });
    }
}

export async function deleteMember(req, res) {
    const receivedId = req.params._id;
    try {
        await Member.deleteOne({ receivedId });
        res.json('Member deleted');
    } catch (error) {
        res.json({ message : error.message });
    }
}