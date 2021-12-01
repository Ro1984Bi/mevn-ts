import axios from './axios';
import {Task} from '@/interfaces/Task';
import { AxiosResponse } from 'axios';




// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const getTasks = async (): Promise<AxiosResponse<Task[]>> => await axios.get('/tasks');

export const getTask = async (id: string): Promise<AxiosResponse<Task>> => 
await axios.get('/tasks/' + id)

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const updateTask = async (id: string, task: Task) => 
await axios.put('/tasks/' + id, task)


// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const createTask = async (task: Task) => 
await axios.post('/tasks', task)

export const deleteTask = async (id: string): Promise<AxiosResponse<Task>> =>
await axios.delete('/tasks/' + id)