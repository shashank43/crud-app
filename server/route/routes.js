import express from 'express';
import { getMembers, addMember, getMemberById, editMember, deleteMember } from '../controller/member-controller.js';
const Route = express.Router();

Route.get('/', getMembers);
Route.get('/:_id', getMemberById);
Route.post('/', addMember);
Route.put('/:_id', editMember);
Route.delete('/:_id', deleteMember);

export default Route;