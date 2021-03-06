import { doc, getDoc } from 'firebase/firestore'
import { database } from '../../firebase/firebaseConfig'

export const getProject = (id: string) => {
  const dbInstance = doc(database, `projects/${id}`)
  return getDoc(dbInstance)
  // return getProjects().filter((value) => value.id === id)[0] as Project
}
