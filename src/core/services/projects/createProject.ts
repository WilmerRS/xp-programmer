import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../firebase/firebaseConfig'
import { Project } from './getProjects'

export const createProject = (project: Project) => {
  const dbInstance = collection(database, 'projects')
  return addDoc(dbInstance, project)
}
