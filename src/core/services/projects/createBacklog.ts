// import { writeFileSync } from 'fs'
import { addDoc, collection } from 'firebase/firestore'
import { database } from '../../firebase/firebaseConfig'
import { Backlog } from './getProjects'

export const createBacklog = (idProject: string, backlog: Backlog) => {
  const dbInstance = collection(database, `projects/${idProject}/backlog`)
  return addDoc(dbInstance, backlog)
}
